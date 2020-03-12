import React, { useState, useEffect } from 'react';

import PostData from '../../Data/article-1.json';
import PostData2 from '../../Data/article-2.json';
import PostData3 from '../../Data/article-3.json';
import PostData4 from '../../Data/article-4.json';
import PostData5 from '../../Data/article-5.json';

import PostDetail from './PostDetail';
import Ranking from './Ranking';
import '../../css/PostListCSS.scss'

function PostList(props) {
  const [loading, setloading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [articles, setArticles] = useState([]);
  const [lastArticle, setLastArticles] = useState(false)

  useEffect(() => {
    setloading(true);
    articles.push(PostData);
    articles.push(PostData2);
    articles.push(PostData3);
    articles.push(PostData4);
    articles.push(PostData5);
  }, []);

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
              else{
                alert("No more pages!!!!!!!!!!!");
              }
            }} type="button" className="btn btn-primary" id="previousPage">Go Previous Page</button>
            <button onClick={(e) => {
              e.preventDefault();
              if (currentPage < articles.length - 1) {
                setCurrentPage(currentPage + 1);
              } else {
                setLastArticles(true);
              }
            }} type="button" className="btn btn-primary" id="nextPage">Next Page</button>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-2"> </div>
        </div>
      </div>
    );
  }
}

export default PostList;
