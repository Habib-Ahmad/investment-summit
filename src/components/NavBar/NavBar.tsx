import { Box } from '@mui/material';
import { useCallback, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from './useStyles';

const links = [
	{
		name: 'Exhibition',
		to: '/'
	},
	{
		name: 'Sponsor',
		to: '/sponsor'
	},
	{
		name: 'Register',
		to: '/register'
	},
	{
		name: 'More',
		to: '/more'
	}
];

const NavBar = () => {
	const classes = useStyles();
	const indicator = document.querySelector<HTMLElement>('.navIndicator');
	const items = document.querySelectorAll('.navItem');

	const handleIndicator = useCallback(
		(el) => {
			items.forEach((item) => {
				item.classList.remove('is-active');
				item.removeAttribute('style');
			});

			if (indicator) {
				indicator.style.width = ''.concat(el.offsetWidth, 'px');
				indicator.style.left = ''.concat(el.offsetLeft, 'px');
				indicator.style.backgroundColor = el.getAttribute('active-color');
			}
			el.classList.add('isActive');
			el.style.color = el.getAttribute('active-color');
		},
		[indicator, items]
	);

	const navbarEffect = useCallback(() => {
		items.forEach((item) => {
			item.addEventListener('click', (e) => {
				handleIndicator(e.target);
			});
			item.classList.contains('isActive') && handleIndicator(item);
		});
	}, [handleIndicator, items]);

	useEffect(() => {
		navbarEffect();
	}, [navbarEffect]);

	return (
		<Box id="navbar" className={classes.navbar}>
			<Box>
				{links.map((link) => (
					<NavLink
						className={`${classes.link} navItem`}
						to={link.to}
						active-color="#41ead4"
					>
						{link.name}
					</NavLink>
				))}
			</Box>
			<Box className={`${classes.indicator} navIndicator`} />
		</Box>
	);
};

export default NavBar;
