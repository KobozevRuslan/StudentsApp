import { createGlobalStyle } from 'styled-components';

import '../styles/font.css';
import { White, Nero, Whisper } from '@assets/colors/colors';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

	body {
		font-family: 'Neue Haas Grotesk';
		background: ${Whisper};
		color: ${White};
		font-size: 18px;
	}

	input:-webkit-autofill,
	input:-webkit-autofill:hover, 
	input:-webkit-autofill:focus, 
	input:-webkit-autofill:active
	{
		-webkit-box-shadow: 0 0 0 30px ${Nero} inset !important;
		-webkit-text-fill-color: white !important;
	}
`;

export default GlobalStyle;
