import React from 'react';
import CMS from 'netlify-cms-app';
import moment from 'moment';
import sha1 from 'sha1';

class CustomWidgetControl extends React.PureComponent {
	state = {
		value: `${moment().format('YYYY-MM-DD HH:mm')}`,
	}
	render() {
		return (
			<input id={this.props.forID} className="css-83wr9v" type="text" defaultValue={this.state.value} value={this.state.value} onChange={this.props.onChange} readOnly/>
		);
	}
}

class PostIdWidget extends React.PureComponent {
	state = {
		value: this.props.value || sha1(`postId-${moment().format('YYYY-MM-DD HH:mm')}`),
	}
	render() {
		return (
			<input id={this.props.forID} className="css-83wr9v" type="text" defaultValue={this.state.value} value={this.state.value} onChange={this.props.onChange} readOnly/>
		);
	}
}

CMS.registerWidget('updateTime', CustomWidgetControl);
CMS.registerWidget('postId', PostIdWidget);