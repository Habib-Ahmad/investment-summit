import { Box, Grid } from '@mui/material';
import { useStyles } from './useStyles';

const Sponsor = () => {
	const classes = useStyles();

	return (
		<Grid container className={classes.sponsor}>
			<Grid item xs={6}>
				<Box>Item 1</Box>
				<Box>Item 2</Box>
				<Box>Item 3</Box>
			</Grid>
			<Grid item xs={6}>
				<Box>Hello World</Box>
			</Grid>
		</Grid>
	);
};

export default Sponsor;
