import React, { useState, useEffect } from 'react';

function ImagePost(props) {

  const [info, setinfo] = useState([]);

  useEffect(() => {
    setinfo(props.info)
  }, []);

  return (
    <div><img src={info.url} alt={info.alttext} height={info.height} width={info.width}></img></div>

  );
}

export default ImagePost;
