import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { StorageService } from './StorageService';

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
      Authorization: StorageService.getItem('token'),
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
      // 잘못된 토큰
      if (error.response.status === 401) {
        StorageService.removeItem('token');

        return Promise.reject('잘못된 인증입니다.');
        // refresh 작업 필요
      }
    }

    console.log(error.response.data);
    console.log(`[ Error ] ${error.message}`, error.config); // 디버깅용 콘솔
    return Promise.reject(error.response.data);
  },
);

/**
 * axios 통신 코드
 */

interface APIResponse<T> {
  data: T;
  message?: string;
}

export const _axios = <T>(
  props: AxiosRequestConfig,
): Promise<APIResponse<T>> => {
  return instance(props);
};
