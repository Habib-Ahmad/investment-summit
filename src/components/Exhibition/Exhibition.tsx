import { Box, Grid } from '@mui/material';
import { useStyles } from './useStyles';
import photo from '../../assets/images/exhibition1.png';
// import dots from '../../assets/svgs/dots.svg';

const Exhibition = () => {
	const classes = useStyles();

	return (
		<Box className={classes.exhibition}>
			<Grid
				container
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between'
				}}
			>
				<Grid item xs={12} sm={6}>
					<img
						src={photo}
						alt=""
						style={{ width: '100%', objectFit: 'contain' }}
					/>
				</Grid>
				<Grid item xs={12} sm={6} sx={{ color: 'red' }}>
					Hellow world!!!!
				</Grid>
			</Grid>
		</Box>
	);
};

export default Exhibition;
