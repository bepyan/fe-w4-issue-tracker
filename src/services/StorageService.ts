/**
 * LocalStorage에 저장할 데이터의 키들
 */
export type StorageFlags = {
  token: {
    access: string;
    refresh: string;
  };
};

export const StorageService = {
  setItem(key: keyof StorageFlags, value: unknown) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  getItem(
    key: keyof StorageFlags,
  ): undefined | StorageFlags[keyof StorageFlags] {
    const jsonString = localStorage.getItem(key);
    if (jsonString === null) return undefined;

    try {
      return JSON.parse(jsonString);
    } catch (_) {
      return undefined;
    }
  },

  removeItem(key: keyof StorageFlags) {
    localStorage.removeItem(key);
  },
};
