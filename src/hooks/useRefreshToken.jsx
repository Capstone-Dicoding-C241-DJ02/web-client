import api from '../utils/api';
import useToken from './useToken';

const useRefreshToken = () => {
  const setToken = useToken((state) => state.setToken);

  const refresh = async () => {
    const {data} = await api().get('/auth/tokens');
    setToken(data.data.accessToken);

    return data.data.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
