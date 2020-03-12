import React, { useState, useEffect } from 'react';

function ImagePost(props) {

  const [info, setinfo] = useState([]);

  useEffect(() => {
    setinfo(props.info)
  }, []);

  return (
    // This displays the image, by getting the url, altext, height and width from the propss
    <div><img src={info.url} alt={info.alttext} height={info.height} width={info.width} data-testid="image"></img></div>

  );
}

export default ImagePost;
