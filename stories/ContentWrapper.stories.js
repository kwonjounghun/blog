import React from 'react';
import { ContentWrapper } from '../src/components/commons';
import PostMakerInfoBox from '../src/components/PostMakerInfoBox';
import '../src/styles/reset.scss';

export default {
    title: 'ContentWrapper',
    component: ContentWrapper,
};

export const defaultComponent = () => (
    <ContentWrapper>
        <PostMakerInfoBox
            makerName="작성자"
            date="2020-02-16"
            collection="project"
            category="blog"
            isAbsolute 
        />
    </ContentWrapper>
);


