import { Box } from '@mui/material';
import Card from '../Card/Card';
import { useStyles } from './useStyles';

const Exhibition = () => {
	const classes = useStyles();

	return (
		<Box className={classes.exhibition}>
			{dummyData.map((item) => (
				<Card
					key={item.title}
					photo={item.photo}
					title={item.title}
					body={item.body}
				/>
			))}
		</Box>
	);
};

export default Exhibition;

const dummyData = [
	{
		photo:
			'https://static4.depositphotos.com/1000975/288/i/950/depositphotos_2881082-stock-photo-tomato-field-on-bright-summer.jpg',
		title: 'Agriculture',
		body: 'Aliquet dictum aliquet faucibus cursus turpis. Suspendisse cum rutrum sit ut sociis. Pellentesque neque orci adipiscing pharetra lacus, dignissim pharetra ipsum blandit. Feugiat quis quam consectetur lectus id quis tortor vel, mattis.'
	},
	{
		photo:
			'https://www-file.huawei.com/-/media/corp2020/publications/communicate/86/cn/06-425.jpg',
		title: 'Energy',
		body: 'Aliquet dictum aliquet faucibus cursus turpis. Suspendisse cum rutrum sit ut sociis. Pellentesque neque orci adipiscing pharetra lacus, dignissim pharetra ipsum blandit. Feugiat quis quam consectetur lectus id quis tortor vel, mattis.'
	}
];
