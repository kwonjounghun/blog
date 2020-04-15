import React from 'react';
import CMS from 'netlify-cms-app';
import moment from 'moment';
import sha1 from 'sha1';

class CustomWidgetControl extends React.PureComponent {
	render() {
		return (
			<input className="css-83wr9v" type="text" defaultValue={moment().format('YYYY-MM-DD HH:mm')} readOnly/>
		);
	}
}

class PostIdWidget extends React.PureComponent {
	render() {
		console.log(this.props);
		const { value } = this.props;
		const newValue = value || sha1(`postId-${moment().format('YYYY-MM-DD HH:mm')}`);
		return (
			<input className="css-83wr9v" type="text" defaultValue={newValue} />
		);
	}
}

CMS.registerWidget('updateTime', CustomWidgetControl);
CMS.registerWidget('postId', PostIdWidget);