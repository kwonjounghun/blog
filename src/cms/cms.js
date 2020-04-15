import React from 'react';
import CMS from 'netlify-cms-app';
import moment from 'moment';
import sha1 from 'sha1';

class CustomWidgetControl extends React.PureComponent {
	state = {
		value: `${moment().format('YYYY-MM-DD HH:mm')}`,
	}
	componentDidMount() {
		this.props.onChange(this.state.value);
	}
	render() {
		return (
			<input id={this.props.forID} className="css-83wr9v" type="text" defaultValue={this.state.value} value={this.state.value} readOnly/>
		);
	}
}

class PostIdWidget extends React.PureComponent {
	state = {
		value: this.props.value || sha1(`postId-${moment().format('YYYY-MM-DD HH:mm')}`),
	}
	componentDidMount() {
		this.props.onChange(this.state.value);
	}
	
	render() {
		return (
			<input id={this.props.forID} className="css-83wr9v" type="text" defaultValue={this.state.value} value={this.state.value} readOnly/>
		);
	}
}

CMS.registerWidget('updateTime', CustomWidgetControl);
CMS.registerWidget('postId', PostIdWidget);