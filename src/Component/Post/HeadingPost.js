import React, {useState, useEffect } from 'react';

function HeadingPost(props) {

  const [title, setTitle] = useState("");
  const [heading, setHeading] = useState("");

  useEffect(() => {
    setTitle(props.title)
    setHeading(props.heading)
  }, []);

  return (
    // This displayed the heading and the title of the Article
    
    <div>
      <h1>{title}</h1>
      <h3>{heading}</h3>
    </div>
  );
}

export default HeadingPost;
