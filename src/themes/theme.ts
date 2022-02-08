import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
	typography: {
		fontFamily: "'Poppins', 'sans-serif'"
	},

	palette: {
		primary: { main: '#41ead4' }
	},

	components: {
		MuiButton: {
			styleOverrides: {
				contained: {
					borderRadius: 22,
					color: '#fff',
					fontSize: '1rem',
					fontWeight: 600,
					padding: 10,
					width: 150
				}
			}
		},

		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					backgroundColor: '#fff',
					border: '1px solid #00000026',
					height: 48
				},
				notchedOutline: {
					display: 'none'
				}
			}
		}
	}
});
