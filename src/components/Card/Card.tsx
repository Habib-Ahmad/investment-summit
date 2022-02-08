import { Button, Grid, Typography } from '@mui/material';
import { useStyles } from './useStyles';

interface Props {
	photo: string;
	title: string;
	body: string;
}

const Card = ({ photo, title, body }: Props) => {
	const classes = useStyles();

	return (
		<Grid
			container
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				marginBottom: 10
			}}
		>
			<Grid item xs={12} md={6}>
				<img src={photo} alt="" className={classes.photo} />
			</Grid>
			<Grid item xs={12} md={6} sx={{ color: '#fff' }}>
				<Typography className={classes.heading}>{title}</Typography>
				<Typography className={classes.body}>{body}</Typography>
				<Button variant="contained" className={classes.btn}>
					Read more
				</Button>
			</Grid>
		</Grid>
	);
};

export default Card;
