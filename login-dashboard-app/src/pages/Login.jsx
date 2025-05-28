import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../store/authSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import loginBackground from '../images/login_backGround.png'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  async function handleLogin(e) {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username: 'michaelw',
        password: 'michaelwpass',
      });
      const { accessToken, refreshToken, ...user } = response.data;
      dispatch(loginSuccess({ user, accessToken, refreshToken }));
      navigate('/dashboard');
    } catch (err) {
      dispatch(loginFailure(err.response?.data?.message || 'Login failed'));
    }
  }

  return (
    <div className="min-h-screen w-full flex bg-gray-100">
      {/* Left: Login Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-3/4 min-h-screen">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700">E-mail</label>
              <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter E-mail"
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={e => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <label className="ml-2 text-sm text-gray-600">Remember me</label>
              </div>
              <a href="#" className="text-sm text-teal-600 hover:underline">
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition duration-200"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
            <p className="text-center text-sm text-teal-600">
              Create an account?{' '}
              <a href="#" className="hover:underline">
                Don't have account?
              </a>
            </p>
          </form>
        </div>
      </div>
      {/* Right: Image with Text at Bottom */}
      <div className="hidden  md:flex w-1/2   m-[42px] items-center justify-center ">
        <div className="relative border-2 border-gray-300 rounded-xl overflow-hidden" >
          <img
            src={loginBackground}
            alt="login background"
            className="object-cover w-full h-full"
            style={{borderRadius: '12px'}}
          />
          <div className="absolute bottom-0 left-0 w-full flex flex-col items-center pb-12 bg-gradient-to-t from-teal-700/60 via-transparent to-transparent">
          {/* here will be logoicon  */}
            <p className="text-white text-2xl font-bold drop-shadow-lg">Your way to success</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;