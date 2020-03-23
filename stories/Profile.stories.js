import React from 'react';
import { ProfileImage } from '../src/components/commons';

export default {
	title: 'ProfileImage',
	component: ProfileImage,
};

export const defaultComponent = () => (
	<ProfileImage
		imageSrc="https://d33wubrfki0l68.cloudfront.net/20fe4d93d352a14581ab8f25e846463d9227132b/9b2a2/static/cover-large-725bfd3764ff6ef0aa9a83f28a45b71f.jpg"
	/>
);

export const square = () => (
	<ProfileImage
		imageSrc="https://d33wubrfki0l68.cloudfront.net/20fe4d93d352a14581ab8f25e846463d9227132b/9b2a2/static/cover-large-725bfd3764ff6ef0aa9a83f28a45b71f.jpg"
		square={true}
	/>
);

