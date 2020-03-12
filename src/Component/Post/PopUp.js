import React, { useState, useEffect } from 'react';
import '../../css/PopUpCSS.scss';


function ParagraphPost(props) {

  const [info, setinfo] = useState([]);

  useEffect(() => {
    setinfo(props.text);
  }, []);

  return (
    {window.alert("No More articles")}
    
  );
}

export default ParagraphPost;
