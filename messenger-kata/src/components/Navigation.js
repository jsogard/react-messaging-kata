import React from 'react';
import {
	Navbar, Nav,
} from 'react-bootstrap';

export default function Navigation() {

	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">Hotel Messenger Kata</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/Messenger">Messenger</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}