import React from 'react';
import { DefaultContentWrapper } from '../src/components/commons';
import PostMakerInfoBox from '../src/components/PostMakerInfoBox';
import '../src/styles/reset.scss';

export default {
    title: 'DefaultContentWrapper',
    component: DefaultContentWrapper,
};

export const defaultComponent = () => (
    <DefaultContentWrapper>
        <PostMakerInfoBox
            makerName="작성자"
            date="2020-02-16"
            collection="project"
            category="blog"
            isAbsolute 
        />
    </DefaultContentWrapper>
);


