import { ThemeProvider } from '@mui/material/styles';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import { theme } from './themes/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Exhibition from './components/Exhibition/Exhibition';
import Register from './components/Register/Register';
import Sponsor from './components/Sponsor/Sponsor';
import More from './components/More/More';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Home />
				<NavBar />
				<Routes>
					<Route path="/" element={<Exhibition />} />
					<Route path="/register" element={<Register />} />
					<Route path="/sponsor" element={<Sponsor />} />
					<Route path="/more" element={<More />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
