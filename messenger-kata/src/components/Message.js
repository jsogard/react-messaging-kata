import React from 'react';

export default class Message extends React.Component {

	messageTemplate = "{greeting} {firstName}, and welcome to {company}! Room {roomNumber} is now ready for you. Enjoy your stay and let us know if you need anything.";
	defaultText = '_____';

	getGreeting = () => {
		const hours = new Date().getHours();
		if(hours < 12) {
			return 'Good morning';
		} else if(hours < 18) {
			return 'Good afternoon';
		} else {
			return 'Good evening';
		}
	}
	getFirstName = () => this.props.guest?.firstName;
	getCompany = () => this.props.company?.company;
	getRoomNumber = () => this.props.guest?.reservation.roomNumber;

	substitutions = {
		greeting: this.getGreeting,
		firstName: this.getFirstName,
		company: this.getCompany,
		roomNumber: this.getRoomNumber
	};

	constructMessage() {
		let message = String(this.messageTemplate);
		for(const sub in this.substitutions) {
			message = message.replace(`{${sub}}`, this.substitutions[sub]() ?? this.defaultText);
		}
		return message;
	}

	render() {
		return (
			<span> {this.constructMessage()}</span>
		);
	}
	
};