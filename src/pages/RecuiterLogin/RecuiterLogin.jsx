// RecruiterLogin.jsx
import {useState} from 'react';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';
import InputText from '../../components/InputText/InputText'; // Ensure path is correct
import logo from '../../assets/jobs.png'; // Ensure path is correct
import {login} from '../../utils/api.js'; // Import the login function
import useToken from '../../hooks/useToken.jsx';

const RecruiterLogin = ({setIsLoggedIn}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const setToken = useToken((state) => state.setToken);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login(email, password);
      const {accessToken} = response.data.data;
      setToken(accessToken);
      setIsLoggedIn(true);
      navigate('/jobs');
    } catch (error) {
      setError('Email or password is incorrect');
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
          className="w-full max-w-[861px] mt-4 bg-primary-blue text-white py-2 rounded"
        >
          Masuk
        </button>
      </form>
    </div>
  );
};

RecruiterLogin.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default RecruiterLogin;
