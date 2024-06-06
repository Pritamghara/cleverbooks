import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
  };

  return (
    <section className='w-full h-screen bg-purple-50 p-64 flex flex-col items-center gap-4'>
      <div className='w-1/2 text-center flex flex-col gap-7'>
        <span className='text-5xl'>CleverBooks</span>
        <div className='p-14 bg-white flex flex-col gap-6'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-7'>
            <input
              className='border border-slate-500 h-11 rounded-3xl p-3 font-semibold '
              type="email"
              placeholder='Enter email'
              value={email}
              onChange={handleEmailChange}
            />
            <input
              className='border border-slate-500 h-11 rounded-3xl p-2'
              type="password"
              placeholder='Enter password'
              value={password}
              onChange={handlePasswordChange}
            />
            <div className='flex justify-between'>
              <span className='text-purple-600'>Forget password?</span>
              <button
                className={`bg-purple-400 px-6 py-2 mr-2 rounded-md text-white ${!email || !password ? 'opacity-50 cursor-not-allowed' : ''}`}
                type="submit"
                disabled={!email || !password}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <span className='text-purple-600'>Don't have an account-Sign Up</span>
    </section>
  );
};

export default Login;
