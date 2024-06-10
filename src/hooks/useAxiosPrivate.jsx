import {useEffect} from 'react';
import api from '../utils/api';
import useRefreshToken from './useRefreshToken';
import useToken from './useToken';

const axios = api();
const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const token = useToken((state) => state.token);

  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        config.headers['Authorization'] = `Bearer ${token}`;

        return config;
      },
      (err) => Promise.reject(err)
    );
    const responseInterceptor = axios.interceptors.response.use(
      (response) => response,
      async (err) => {
        const prevRequest = err?.config;

        if (err?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axios(prevRequest);
        }

        return Promise.reject(err);
      }
    );
    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [token, refresh]);

  return axios;
};

export default useAxiosPrivate;
