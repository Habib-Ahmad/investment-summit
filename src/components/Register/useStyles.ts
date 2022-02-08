import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	register: {
		minHeight: '90vh',
		backgroundColor: '#011627',
		padding: '80px 15vw'
	},
	form: {
		paddingRight: theme.spacing(5),
		paddingTop: theme.spacing(8)
	},
	label: {
		marginTop: theme.spacing(-1.7),
		marginLeft: theme.spacing(-2),

		'&.MuiInputLabel-root': {
			color: '#fff',
			fontSize: '1.2rem',

			'&.Mui-focused': {
				color: theme.palette.primary.main
			}
		}
	},
	textField: {
		'&.MuiTextField-root': {
			marginBottom: theme.spacing(5)
		}
	},
	text1: {
		'&.MuiTypography-root': {
			fontSize: '2.5rem',
			color: '#fff',
			fontWeight: 600,
			marginBottom: theme.spacing(3)
		}
	},
	text2: {
		'&.MuiTypography-root': {
			color: '#fff'
		}
	}
}));
