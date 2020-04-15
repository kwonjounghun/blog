import React from 'react';
import CMS from 'netlify-cms-app';
import moment from 'moment';
import sha1 from 'sha1';

class CustomWidgetControl extends React.PureComponent {
	state = {
		value: moment().format('YYYY-MM-DD HH:mm'),
	}
	render() {
		return (
			<input className="css-83wr9v" type="text" defaultValue={this.state.value} value={this.state.value} readOnly/>
		);
	}
}

class PostIdWidget extends React.PureComponent {
	render() {
		console.log(this.props);
		const { value } = this.props;
		const newValue = value || sha1(`postId-${moment().format('YYYY-MM-DD HH:mm')}`);
		state = {
			value: newValue
		}
		return (
			<input className="css-83wr9v" type="text" defaultValue={newValue} value={this.state.value}/>
		);
	}
}

CMS.registerWidget('updateTime', CustomWidgetControl);
CMS.registerWidget('postId', PostIdWidget);