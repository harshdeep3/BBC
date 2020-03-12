import React, { useState, useEffect } from 'react';
import '../../css/ParagraphPostCSS.scss';

function ParagraphPost(props) {

  const [info, setinfo] = useState([]);

  useEffect(() => {
    // props get information from the previosu pages
    setinfo(props.text);
  }, []);

  return (
    <div><p>{info}</p></div>
    // get the information from postList and use it here
  );
}

export default ParagraphPost;
