'use client';
import React, { useState } from 'react'
import Image from "next/image";
import loginLogo from "../../public/login.png";
import { redirect } from 'next/navigation';

const handleSubmit = (formData: FormData) => {
    const rawUsername = String(formData.get('uname'));
    const password = formData.get('password');
    const username = rawUsername.charAt(0).toUpperCase() + rawUsername.slice(1);
    console.log(username, password);
    if (username === 'Revathi' && password === 'Password123') {
        console.log('Login successful');
        alert('Login successful');
        redirect('/Dashboard');  
    } else {
        alert('Invalid username or password');
        console.log('Invalid username or password');
    }
}

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [computedIsDisabled, setComputedIsDisabled] = useState(true);
    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
        setComputedIsDisabled(false);
    }
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setComputedIsDisabled(false);
    }
  return (
    <div>
        <h1 className="flex items-center text-3xl font-bold text-black dark:text-white">
          <Image src={loginLogo} alt="Login Logo" className="mr-2" width={75} height={75} />
          Login
        </h1>
        <form action={handleSubmit}>
          <div className='flex flex-row justify-center mt-2 gap-4'>
            <label htmlFor="username">Username</label>
            <input type="text" id="uname" name="uname" onChange={handleUsernameChange} placeholder="User name or Email" />
          </div>
          <div className='flex flex-row justify-center mt-2 gap-4'>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={handlePasswordChange} placeholder="Password" />
          </div>    
          <div className="flex flex-col mt-4 justify-center gap-2">
            <button type="submit" disabled={computedIsDisabled} className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'>Login</button>
          </div>
        </form>
    </div>
  )
}

export default Login