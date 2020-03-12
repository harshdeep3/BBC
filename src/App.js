import React from 'react';

//Components
import Header from './Component/Post/Header';
import Footer from './Component/Post/Footer';
import PostList from './Component/Post/PostList';

import './App.scss';

function App() {
  return (

    <div className="App">
      <Header />

      <PostList />
    </div>
  );
}

export default App;
