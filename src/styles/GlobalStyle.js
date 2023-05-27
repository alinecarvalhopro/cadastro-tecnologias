import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

:root {
--primaryColor: #FF577F;
--primaryColor-focus: #FF427F;
--primaryColor-negative: #59323F;

--greySacale-1: #121214;
--greySacale-2: #212529;
--greySacale-3: #343B41;
--greySacale-4: #868E96;
--greySacale-5: #F8F9FA;

--feedback-sucess: #3FE864;
--feedback-negative: #E83F5B;
}

body {
    background-color: var(--greySacale-1);

    font-family: 'Inter', sans-serif;
}

input {
    cursor: text;
}

button {
	cursor: pointer;
}

input:disabled, button:disabled {
cursor: not-allowed
}

p {
    margin-bottom: 2rem;

    font-weight: 400;
    font-size: 9.59437px;
    line-height: 18px;
    color: var(--greySacale-4);
}

.tempMessage {
	margin: 15px;

	font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: var(--greySacale-5);
}

span {
	color: var(--primaryColor);
}

@media(min-width: 769px) {

	.tempMessage {
		margin: 15px 0 0 115px;

		font-size: 20px;
	}
}

`