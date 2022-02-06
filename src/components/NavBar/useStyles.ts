import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	navbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '15vh',
		backgroundColor: '#011627',
		position: 'relative',
		borderBottom: '1px solid #41ead4'
	},
	link: {
		color: '#fff',
		padding: '20px',
		textDecoration: 'none',
		transition: '0.3s',
		margin: '0 50px',
		zIndex: 1,
		fontWeight: 300,
		fontSize: '1.3rem',
		position: 'relative',
		width: '400px',
		textAlign: 'center',

		'&:before': {
			content: '',
			position: 'absolute',
			bottom: '-6px',
			left: 0,
			width: ' 100%',
			height: '5px',
			backgroundColor: '#dfe2ea',
			borderRadius: '8px 8px 0 0',
			opacity: 0,
			transition: '0.3s'
		},

		'&:not(.active):hover:before': {
			opacity: 1,
			bottom: 0
		},

		'&:not(.active):hover': {
			color: '#41ead4'
		},

		'&.active': {
			fontWeight: 700,
			color: '#41ead4'
		}
	},
	indicator: {
		position: 'absolute',
		left: 0,
		bottom: 0,
		transition: '0.2s',
		height: '4px',
		zIndex: 1,
		width: '10%',
		borderRadius: '8px 8px 0 0'
	}
}));
