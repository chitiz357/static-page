import React from "react";

export function Info() {
	return (
		<article className='info'>
			<picture>
				<img src='src/assects/bryan-face.jpg' alt='' />
			</picture>
			<p>
				Tecnologias que manejo: html, css, js y react. Estoy estudiando
				ingenieria en sistemas, en <a href='https://udoym.edu.do/'>OyM</a>.
				Sigueme en twetter a{" "}
				<a href='https://twitter.com/manchitiz333'>@manchitiz333</a>.
			</p>
		</article>
	);
}

export function Footer() {
	return (
		<footer className='footer'>
			<a href='https://twitter.com/manchitiz333'>twitter</a>
			<br />
			<a href='https://github.com/chitiz357'>github</a>
		</footer>
	);
}

export function NavBar() {
	return (
		<header>
			<nav className='nav-bar'>bryan</nav>
		</header>
	);
}
