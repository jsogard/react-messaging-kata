import React from 'react';

export default function Message(props) {

	const messageTemplate = "{greeting} {firstName}, and welcome to {company}";

	const getGreeting = () => 'hello';
	const getFirstName = () => props.guest?.firstName;
	const getCompany = () => props.company?.company;

	const substitutions = {
		greeting: getGreeting,
		firstName: getFirstName,
		company: getCompany
	};

	function constructMessage() {
		let message = String(messageTemplate);
		for(const sub in substitutions) {
			message = message.replace(`{${sub}}`, substitutions[sub]());
		}
		return message;
	}

	return (
		<span> {constructMessage()} </span>
	);
};