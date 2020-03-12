import React, { useState, useEffect } from 'react';
import '../../css/PopUpCSS.scss';


function ParagraphPost(props) {

  return (
    // This form allows the user to rank the articles.
    <div>
      <form>
        <label>Rank the articles: </label>
        <select id="articles" name="Articles">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <input type="submit"></input>
      </form>

    </div>
  );
}

export default ParagraphPost;
