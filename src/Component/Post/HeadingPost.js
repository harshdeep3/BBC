import React, {useState, useEffect } from 'react';

function HeadingPost(props) {

  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(props.title)
  }, []);

  return (
    <div><h1>{title}</h1></div>
  );
}

export default HeadingPost;
