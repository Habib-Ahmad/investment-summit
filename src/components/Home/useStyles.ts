import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	home: {
		height: '100vh',
		padding: '0 5vw',
		position: 'relative',
		backgroundSize: 'cover',
		boxShadow: 'inset 0 0 0 500px #011627e8',
		backdropFilter: 'blur(4px)'
	},
	logo: {
		zIndex: 100
	},
	body: {
		display: 'flex',
		width: '60%',
		zIndex: 100,

		[theme.breakpoints.down('md')]: {
			width: '100%'
		}
	},
	stepper: {
		marginRight: 100,
		marginTop: 'auto',

		[theme.breakpoints.down('md')]: {
			display: 'none'
		}
	},
	textWrapper: {
		marginTop: theme.spacing(10),
		color: '#fff',
		marginBottom: theme.spacing(6),

		[theme.breakpoints.down('md')]: {
			marginTop: theme.spacing(7),

			'&:first-child': {
				display: 'none'
			}
		}
	},
	text1: {
		'&.MuiTypography-root': {
			fontSize: 'clamp(0.875rem, 5vw, 1.5rem)',
			fontWeight: 700
		}
	},
	line: {
		marginTop: 5,
		marginLeft: 20,
		width: 100
	},
	text2: {
		'&.MuiTypography-root': {
			fontSize: 'clamp(3.5rem,6vw,4rem)',
			fontWeight: 700,
			lineHeight: '70px',
			marginBottom: '20px',

			[theme.breakpoints.down('md')]: {
				marginBottom: theme.spacing(5),
				marginTop: theme.spacing(2)
			}
		}
	},
	text3: {
		'&.MuiTypography-root': {
			[theme.breakpoints.down('md')]: {
				textAlign: 'center'
			}
		}
	},
	btn: {
		'&.MuiButton-root': {
			color: '#fff',
			textTransform: 'none',
			marginLeft: '105px',
			width: '180px',
			height: '60px',
			fontSize: '1rem',
			borderRadius: 6,

			[theme.breakpoints.down('md')]: {
				display: 'block',
				margin: theme.spacing(0, 'auto')
			}
		}
	},
	scroll: {
		'&.MuiIconButton-root': {
			display: 'block',
			position: 'absolute',
			bottom: 0,
			left: 'calc(50% - 5vw)',
			color: '#fff',
			animation: `$appear 1s ${theme.transitions.easing.easeInOut}`,

			[theme.breakpoints.down('md')]: {
				left: '50%',
				transform: 'translateX(-50%)'
			}
		}
	},
	carett: {
		width: '20px',
		animation: `$bounce 1s 5s infinite alternate-reverse ${theme.transitions.easing.easeInOut}`
	},
	'@keyframes bounce': {
		'0%': {
			transform: 'translateY(40%)'
		},
		'100%': {
			transform: 'translateY(0)'
		}
	},
	'@keyframes appear': {
		'0%': {
			transform: 'translateY(40%)',
			opacity: 0
		},
		'100%': {
			transform: 'translateY(0)',
			opacity: 1
		}
	}
}));
