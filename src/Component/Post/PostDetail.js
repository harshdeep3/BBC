import React from 'react';
import ParagraphPost from './ParagraphPost';
import HeadingPost from './HeadingPost';
import ImagePost from './ImagePost';
import ListPost from './ListPost';
function PostDetail(props) {

  // console.log(props.body)
  return (
    <div >
      {
        props.body.map((section, index) => {
          if(section.type === "heading"){
            return <HeadingPost title={section.model.text}/>
          }else if (section.type ==="paragraph"){
            return <ParagraphPost text={section.model.text}/>
          }else if (section.type ==="image"){
            return <ImagePost info={section.model} />
          }else if (section.type ==="list"){
            return <ListPost type={section.model.type} item={section.model.items}/>
          }else{
            return <p>Nothing to display</p>
          }
        })
      }
    </div>
  );
}


export default PostDetail;
