import React from 'react';
import { action } from '@storybook/addon-actions';
import PostMakerInfoBox from '../src/components/PostMakerInfoBox';
import '../src/styles/reset.scss';

export default {
  title: 'PostMakerInfoBox',
  component: PostMakerInfoBox,
};

export const defaultComponent = () => (
  <PostMakerInfoBox
    makerName="작성자"
    date="2020-02-16"
    collection="project"
    category="blog"
    isAbsolute
  />
);


