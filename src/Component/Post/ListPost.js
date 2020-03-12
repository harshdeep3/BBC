import React, { useState, useEffect } from 'react';

function ImagePost(props) {

  const [type, setType] = useState([]);
  const [items, setitems] = useState([]);

  useEffect(() => {
    setType(props.type);
    setitems(props.item);
  }, []);
  console.log(items);
  return (
    <div>
      {
        items.map((list, index)=>{
          if(type === "unordered"){
            return <ul><li>{list}</li></ul>
          }else{
            return <ol><li>{list}</li></ol>
          }
        })
      }
    </div>
    // <img src={info.url} alt={info.alttext} height={info.height} width={info.width}></img>
  );
}

export default ImagePost;
