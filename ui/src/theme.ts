import { createTheme } from '@mui/material';

const theme = createTheme({
	palette: {
		primary: {
			light: '#6981f8',
			main: '#3b64f6',
			dark: '#003de6',
			contrastText: '#ffffff',
		},
	},
	components: {
		MuiInputLabel: {
			styleOverrides: {
				root: {
					fontSize: '13px',
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				sizeSmall: {
					fontSize: 'small',
				},
				contained: {
					boxShadow: 'none',
					textTransform: 'none',
					padding: '10px 30px',
					border: '1px solid',
					lineHeight: 1.5,
					borderColor: '#0063cc',
					borderRadius: '8px',
				},
			},
		},
	},
});

export default theme;
