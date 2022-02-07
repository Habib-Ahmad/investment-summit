import { useCallback, useEffect, useState } from 'react';
import { useStyles } from './useStyles';
import { Box, IconButton, SwipeableDrawer, useMediaQuery } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

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
	const [displayDrawer, setDisplayDrawer] = useState<boolean>(false);
	const classes = useStyles();
	const isDesktop = useMediaQuery('(min-width: 600px)');

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

	const toggleDrawer =
		(toggle: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event &&
				event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' ||
					(event as React.KeyboardEvent).key === 'Shift')
			) {
				return;
			}

			setDisplayDrawer(toggle);
		};

	if (!isDesktop)
		return (
			<Box id="navbar" className={classes.hamburger}>
				<IconButton onClick={toggleDrawer(true)}>
					<Menu sx={{ color: '#41ead4', fontSize: '30px' }} />
				</IconButton>
				<SwipeableDrawer
					anchor="right"
					open={displayDrawer}
					onClose={toggleDrawer(false)}
					onOpen={toggleDrawer(true)}
					// className={classes.drawer}
				>
					Hi
				</SwipeableDrawer>
			</Box>
		);

	return (
		<Box id="navbar" className={classes.navbar}>
			<Box className={classes.linkWrapper}>
				{links.map((link) => (
					<NavLink
						key={link.name}
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
