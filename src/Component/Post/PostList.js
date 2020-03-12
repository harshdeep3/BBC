import React, { useState, useEffect } from 'react';

import PostData from '../../Data/article-1.json';
import PostData2 from '../../Data/article-2.json';
import PostData3 from '../../Data/article-3.json';
import PostData4 from '../../Data/article-4.json';
import PostData5 from '../../Data/article-5.json';

import PostDetail from './PostDetail';
import PopUp from './PopUp';
import '../../css/PostListCSS.scss'

function PostList(props) {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [articles, setArticles] = useState([]);
  const [rating, setRating] = useState("");
  const [rated, setRated] = useState(false);

  useEffect(() => {
    setloading(true);
    articles.push(PostData);
    articles.push(PostData2);
    articles.push(PostData3);
    articles.push(PostData4);
    articles.push(PostData5);
  }, []);


  const submit = (title) => {
    // fetch();
    setRated(true);
    console.log(rating);
  }
  
  if (!loading) {
    return (
      <div>
        <h1>loading.....</h1>
      </div>
    );
  } else {
    return (

      <div className="articles container-fluid">
        <div className="row">
          <div className="col-lg-1 col-md-1 col-sm-2"></div>
          <div className="col-lg-10 col-md-10 col-sm-8">
            {articles.map((article, index) => {
              if (currentPage === index) {
                return (<PostDetail title={article.title} body={
                  article.body.map((info, index) => {
                    return info;
                  })} />
                )
              }
            })}

            <button onClick={(e) => {
              if (currentPage > 0) {
                setCurrentPage(currentPage - 1);
              } 
            }} type="button" className="btn btn-primary" id="previousPage">
              Go Previous Page</button>
            <button onClick={(e) => {
              e.preventDefault();
              if (currentPage < articles.length - 1) {
                setCurrentPage(currentPage + 1);
              } else {
                setCurrentPage(0);
              }
            }} type="button" className="btn btn-primary" id="nextPage">Next Page</button>

          </div>
          <div className="col-lg-1 col-md-1 col-sm-2"> help</div>
        </div>
      </div>
    );
  }
}

export default PostList;
