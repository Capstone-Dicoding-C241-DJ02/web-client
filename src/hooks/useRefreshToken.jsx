import {AxiosError} from 'axios';
import api from '../utils/api';
import useToken from './useToken';

const useRefreshToken = () => {
  const setToken = useToken((state) => state.setToken);

  const refresh = async () => {
    try {
      const {data} = await api().get('/auth/tokens');
      setToken(data.data.accessToken);
      return data.data.accessToken;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error;
      }
    }
  };

  return refresh;
};

export default useRefreshToken;
