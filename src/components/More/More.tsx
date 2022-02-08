import { Box } from '@mui/material';
import { useStyles } from './useStyles';

const More = () => {
	const classes = useStyles();

	return (
		<Box className={classes.more}>
			<Box>Hello World</Box>
		</Box>
	);
};

export default More;
