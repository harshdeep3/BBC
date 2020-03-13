import React, { useState, useEffect } from 'react';

// JSON files
import PostData from '../../Data/article-1.json';
import PostData2 from '../../Data/article-2.json';
import PostData3 from '../../Data/article-3.json';
import PostData4 from '../../Data/article-4.json';
import PostData5 from '../../Data/article-5.json';

// sends the files to the component
import PostDetail from './PostDetail';
import Ranking from './Ranking';
// css
import '../../css/PostListCSS.scss'

function PostList(props) {
  // const
  const [loading, setloading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [articles, setArticles] = useState([]);
  const [lastArticle, setLastArticles] = useState(false)
  const [rating, setRating] = useState("");

  // adds the artciles to a dictionary
  useEffect(() => {
    setloading(true);
    // incase the articles dont display, the page will say Loading
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
        {/* using bootstrap to disign the page. Add margin to the side the articles are readable */}
        <div className="row">
          {/* boorstrap way of using row */}
          <div className="col-lg-1 col-md-1 col-sm-2"></div>
          {/* empty comlumn to make the articles more centrelised. */}
          <div className="col-lg-10 col-md-10 col-sm-8">
            {articles.map((article, index) => {
              // maps the articles to article to use 
              if (currentPage === index) {
                return (<PostDetail title={article.title} body={
                  article.body.map((info, index) => {
                    return info;
                  })} />
                )
                // send the title and body info to postDetail
              }
            })}

            <button onClick={(e) => {
              if (currentPage > 0) {
                setCurrentPage(currentPage - 1);
                // allows the user to go back to the pervious article
              }
              else{
                alert("No more pages! Go forward instead.");
                // if the user gets to the first page and try going further, the user will be informed that there arent any more pages
              }
            }} type="button" className="btn btn-primary" id="previousPage">Go Previous Page</button>
            {/* bootstrap is used to style the button */}
            <button onClick={(e) => {
              e.preventDefault();
              if (currentPage < articles.length - 1) {
                setCurrentPage(currentPage + 1);
                // This is the event to go to the next pages
                if(currentPage == articles.length - 1){
                  setLastArticles(true);
                }

              } 
            }} type="button" className="btn btn-primary" id="nextPage">Next Page</button>
          ``
          </div>
          <div className="col-lg-1 col-md-1 col-sm-2"> </div>
        </div>
      </div>
    );
  }
}

export default PostList;
