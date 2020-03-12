import React, { useState, useEffect } from 'react';
import '../../css/ParagraphPostCSS.scss';


function ParagraphPost(props) {

  const [info, setinfo] = useState([]);

  useEffect(() => {
    setinfo(props.text);
  }, []);

  return (
    <div><p>{info}</p></div>
    
  );
}

export default ParagraphPost;
