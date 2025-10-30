import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import logo from './assets/logo.svg';
import { Home, CreatePost } from './pages';

const App = () => {
  return (
    <BrowserRouter>
  <header className="header">
  <a href="/">
    <img src={logo} alt="logo" className="logo" />
  </a>
  <a href="/create-post" className="create-btn">Create</a>
</header>

<style>
{`
  .header {
    width: 100%;
    background-color: #ffffff;
    padding: 12px 16px;
    border-bottom: 1px solid #e6ebf4;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    width: 100px;
    height: auto;
  }

  .create-btn {
    background-color: #6469ff;
    color: #ffffff;
    padding: 8px 16px;
    border-radius: 6px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .create-btn:hover {
    background-color: #4b50e0;
  }
`}
</style>

<main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/create-post' element={<CreatePost />} />
</Routes>
</main>
      
    </BrowserRouter>
    // <h1 className="text-3xl font-bold underline">Hello world?</h1>
  );
};

export default App;
