// RecruiterLogin.jsx
import {useState} from 'react';

import {useLocation, useNavigate} from 'react-router-dom';
import InputText from '../../components/InputText/InputText'; // Ensure path is correct
import logo from '../../assets/jobs.png'; // Ensure path is correct
import useToken from '../../hooks/useToken.jsx';
import useAuth from '../../hooks/useAuth.jsx';
import api from '../../utils/api.js';

const RecruiterLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/jobs';
  const setIsLoggedIn = useAuth((state) => state.setIsLoggedIn);
  const setToken = useToken((state) => state.setToken);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const response = await api().post('/auth/login', {email, password});
      const {accessToken} = response.data.data;
      setToken(accessToken);
      setIsLoggedIn(true);
      navigate(from, {replace: true});
    } catch (error) {
      setError('Email or password is incorrect');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full bg-white relative">
      <img
        src={logo}
        alt="Company Logo"
        className="absolute top-4 left-4 w-[180px] h-[100px]"
      />
      <h1 className="text-[40px] leading-[50px] font-bold mb-2 mt-12">
        Dicoding Jobs
      </h1>
      <p className="text-black text-[30px] leading-[40px] font-medium mb-16">
        Masuk sebagai Recruiter
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full max-w-md"
      >
        <div className="w-full mb-[46px]">
          <InputText
            id="email"
            type="email"
            label="Email"
            placeholder="Masukkan email Anda"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className=" mb-6 w-full">
          <InputText
            id="password"
            type="password"
            label="Password"
            placeholder="Masukkan password Anda"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full max-w-[861px] mt-4 bg-primary-blue text-white py-2 rounded disabled:opacity-[.7] disabled:cursor-not-allowed"
        >
          Masuk
        </button>
      </form>
    </div>
  );
};

export default RecruiterLogin;
