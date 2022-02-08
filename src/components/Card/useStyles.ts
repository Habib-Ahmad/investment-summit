import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	photo: {
		width: 'clamp(200px, 90%, 450px)',
		height: '250px',
		objectFit: 'cover',

		[theme.breakpoints.down('md')]: {
			height: '120px'
		}
	},
	heading: {
		'&.MuiTypography-root': {
			fontSize: 'clamp(1.5rem, 6vw, 2.5rem)',
			fontWeight: 700,
			marginBottom: theme.spacing(3)
		}
	},
	body: {
		'&.MuiTypography-root': {
			fontSize: 'clamp(0.875rem, 3vw, 1rem)',
			marginBottom: theme.spacing(3)
		}
	},
	btn: {
		'&.MuiButton-root': {
			borderRadius: 22,
			color: '#fff',
			fontSize: '1rem',
			fontWeight: 600,
			padding: 10,
			width: 150,

			[theme.breakpoints.down('md')]: {
				fontSize: '0.875rem',
				width: 120
			}
		}
	}
}));
