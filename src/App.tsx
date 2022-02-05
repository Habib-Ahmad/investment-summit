import { ThemeProvider } from '@mui/material/styles';
import Home from './components/Home/Home';
import { theme } from './themes/theme';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Home />
		</ThemeProvider>
	);
};

export default App;
