import axios from "axios";

const BASE_URL = "/api/v1/"; // process.env.REACT_APP_API_BASE_URL; 추후

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache, no-store, must-revalidate",
  },
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  async (config) => {
    // 요청 보내기 전에 수행할 로직
    if (!config.headers) {
      return Promise.reject(new Error("헤더 정보가 없습니다."));
    }

    return config;
  },

  async (error) => {
    console.error(error); //  디버깅
    return Promise.reject(new Error(error));
  }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    // 응답 데이터
    return response;
  },
  async (error) => {
    // 응답 에러
    console.error(error); // 디버깅

    return Promise.reject(new Error(error));
  }
);

export default axiosInstance;
