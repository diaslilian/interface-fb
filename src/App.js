import React from 'react';

import './App.css';

import Header from './components/Header/index';
import PostList from './components/PostList';

import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <>
      <Header />
      <PostList />
      <GlobalStyle />
    </>
  );
}

export default App;
