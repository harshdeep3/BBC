import React from 'react';

//Components
import Header from './Component/Post/Header';
import PostList from './Component/Post/PostList';
// css
import './App.scss';

function App() {
  return (

    <div className="App">
       {/* calls the  Header file which displays the navbar*/}
      <Header />
      {/* this calls the file, which gets the data and breaks down the data.*/}
      <PostList />
    </div>
  );
}

export default App;
