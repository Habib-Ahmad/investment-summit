import { Box, Button, IconButton, Typography } from '@mui/material';
import { useStyles } from './useStyles';
import logo from '../../assets/images/logo.png';
import stepper from '../../assets/svgs/stepper.svg';
import line from '../../assets/svgs/line.svg';
import doubleCarett from '../../assets/svgs/doubleCarett.svg';
import background from '../../assets/images/background.png';

const Home = () => {
	const classes = useStyles();

	return (
		<Box
			sx={{ backgroundImage: `url(${background})` }}
			className={classes.home}
		>
			<Box className={classes.logo}>
				<img src={logo} alt="logo" />
			</Box>

			<Box className={classes.body}>
				<img src={stepper} alt="stepper" className={classes.stepper} />

				<Box className={classes.textWrapper}>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Typography className={classes.text1}>Gombe State</Typography>
						<img src={line} alt="line" className={classes.line} />
					</Box>
					<Typography className={classes.text2}>
						Investors <br className={classes.br} />
						<span style={{ color: '#41ead4' }}>Summit</span>
					</Typography>
					<Typography className={classes.text3}>
						Neque, eros commodo, nascetur ullamcorper vitae. Tincidunt ut
						venenatis, volutpat lorem ut faucibus mauris, quisque. Integer
						gravida sed quis congue. Vel risus, arcu a viverra leo id pulvinar.
					</Typography>
				</Box>
			</Box>

			<Button className={classes.btn} variant="outlined" disableRipple>
				Register
			</Button>

			<IconButton className={classes.scroll} disableRipple href="#/">
				<img src={doubleCarett} alt="" className={classes.carett} />
				<Typography sx={{ fontSize: '.7rem' }}>Scroll down</Typography>
			</IconButton>
		</Box>
	);
};

export default Home;
