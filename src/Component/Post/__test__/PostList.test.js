import React from 'react';
import ReactDom from 'react-dom';
import PostData from '../../../Data/article-1.json';

import { render, cleanup, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-image-snapshot';
import PostList from '../PostList';

const { ParagraphPost } = require('../ParagraphPost');

afterEach(cleanup)

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<PostList></PostList>, div)
})

