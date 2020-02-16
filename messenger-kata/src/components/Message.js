import React from 'react';

export default class Message extends React.Component {

	messageTemplate = "{greeting} {firstName}, and welcome to {company}!";
	defaultText = '_____';

	getGreeting = () => 'hello';
	getFirstName = () => { return this.props.guest?.firstName ?? this.defaultText; }
	getCompany = () => this.props.company?.company ?? this.defaultText;

	substitutions = {
		greeting: this.getGreeting,
		firstName: this.getFirstName,
		company: this.getCompany
	};

	constructMessage() {
		let message = String(this.messageTemplate);
		for(const sub in this.substitutions) {
			message = message.replace(`{${sub}}`, this.substitutions[sub]());
		}
		return message;
	}

	render() {
		return (
			<span> {this.constructMessage()}</span>
		);
	}
	
};