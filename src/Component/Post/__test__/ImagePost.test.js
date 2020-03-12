import React from 'react';
import ReactDom from 'react-dom';
import ImagePost from '../ImagePost';

import { render, cleanup, getByTestId } from '@testing-library/react';
import  '@testing-library/jest-dom/extend-expect';
import 'jest-image-snapshot';

afterEach(cleanup)

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<ImagePost></ImagePost>, div)
})




