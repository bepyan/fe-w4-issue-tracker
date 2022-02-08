import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import AuthService from './AuthService';

/**
 * axios 인스턴스 설정
 */

const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  timeout: 10000, // 10초
});

instance.interceptors.request.use(
  (config) => ({
    ...config,
    headers: {
      'Content-Type': 'application/json',
      ...AuthService.getAxiosHeader(),
      ...config.headers,
    },
  }),
  (error) => {
    alert(error.message);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (res) => {
    console.log(`[Fetch ${res.status}] ${res.config.url}`);
    return res;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        // TODO: refresh 작업

        AuthService.removeAuth();
        alert('인증이 만료되었습니다. 다시 로그인 해주세요.');
        location.reload();

        return Promise.reject('잘못된 인증입니다.');
      }
    }

    console.log(`[ Error ] ${error.message}`, error.config);
    return Promise.reject(error.response.data);
  },
);

/**
 * axios 통신 코드
 */

type APIResponse<T> = Promise<{
  data: T;
  message?: string;
}>;

export const _axios = <T>(props: AxiosRequestConfig): APIResponse<T> => {
  return instance(props);
};
