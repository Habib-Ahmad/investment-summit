import {
	Button,
	CircularProgress,
	Grid,
	TextField,
	Typography
} from '@mui/material';
import { useStyles } from './useStyles';
import { Formik } from 'formik';
import * as Yup from 'yup';

const Register = (): JSX.Element => {
	const classes = useStyles();

	const handleSubmit = ({ name, email }: { name: string; email: string }) => {
		console.log('hi!');
	};

	return (
		<Grid container className={classes.register}>
			<Grid item xs={12} md={6} sx={{ paddingTop: 3 }}>
				<Formik
					initialValues={{
						email: '',
						name: ''
					}}
					validationSchema={Yup.object().shape({
						name: Yup.string()
							.required('Name is required')
							.max(40, 'Name is too long'),
						email: Yup.string()
							.required('Email is required')
							.email('Email is not valid')
					})}
					onSubmit={handleSubmit}
				>
					{({
						handleSubmit,
						handleChange,
						values,
						touched,
						errors,
						isSubmitting
					}) => (
						<form onSubmit={handleSubmit} className={classes.form} noValidate>
							<TextField
								name="name"
								label="Name"
								autoComplete="none"
								fullWidth
								InputLabelProps={{
									shrink: true,
									classes: { root: classes.label }
								}}
								className={classes.textField}
								helperText={touched.name ? errors.name : ''}
								error={touched.name && Boolean(errors.name)}
								value={values.name}
								onChange={handleChange}
							/>

							<TextField
								name="email"
								label="E-mail"
								autoComplete="none"
								fullWidth
								InputLabelProps={{
									shrink: true,
									classes: { root: classes.label }
								}}
								className={classes.textField}
								helperText={touched.email ? errors.email : ''}
								error={touched.email && Boolean(errors.email)}
								value={values.email}
								onChange={handleChange}
							/>

							<Button variant="contained" type="submit">
								{isSubmitting ? <CircularProgress /> : 'Register'}
							</Button>
						</form>
					)}
				</Formik>
			</Grid>

			<Grid item xs={12} md={6}>
				<Typography className={classes.text1}>
					Register early and get 50% off
				</Typography>
				<Typography className={classes.text2}>
					lorem ipseum Gutenberg's success is due to the hard work of thousands
					of volunteers over more than 45 years. Your donations make it possible
					to support these volunteers, and pay our few expenses to continue the
					creation of free electronic texts.
				</Typography>
				<br />
				<Typography className={classes.text2}>
					lorem ipseum Gutenberg's success is due to the hard work of thousands
					of volunteers over more than 45 years.
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Register;
