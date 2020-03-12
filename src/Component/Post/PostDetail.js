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
        // Depending on the type the component is choosen
        props.body.map((section, index) => {
          // props are the infromation sent from Postlist
          if(section.type === "heading"){
            return <HeadingPost heading={section.model.text} title={props.title}/>
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
