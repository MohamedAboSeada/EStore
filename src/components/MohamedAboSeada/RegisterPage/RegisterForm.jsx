import React, { useContext, useState } from 'react';
import FormInput from './FormInput';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './helper/handleAuthentication';
import './Register.css';

function RegisterForm() {
	// Auth Context
	let { SignIn, SignUp, error, SignInWithGoogle } = useContext(AuthContext);

	// boolean state
	let [login, setLogin] = useState(false);
	let navigate = useNavigate();

	// controlled input states
	let [name, setName] = useState('');
	let [email, setEmail] = useState('');
	let [password, setPassword] = useState('');
	let [cpassword, setCpassword] = useState('');
	let [confirm, setConfirm] = useState(false);

	// form error state
	let [errors, setErrors] = useState({
		nameError: '',
		emailError: '',
		passwordError: '',
		confirmError: '',
	});

	// handle tab change
	let handleTapChange = () => {
		setName('');
		setEmail('');
		setPassword('');
		setCpassword('');
		setErrors({
			nameError: '',
			emailError: '',
			passwordError: '',
			confirmError: '',
		});
	};

	// validation function for email
	let validateEmail = (email) => {
		let re = /\S+@\S+\.\S+/; // simple regex for email validation
		return re.test(email);
	};

	let handleSubmit = () => {
		let hasErrors = false;

		// email validation
		if (email.length === 0) {
			setErrors((prevErrors) => ({
				...prevErrors,
				emailError: 'Please enter an email',
			}));
			hasErrors = true;
		} else if (!validateEmail(email)) {
			setErrors((prevErrors) => ({
				...prevErrors,
				emailError: 'Email is incorrect',
			}));
			hasErrors = true;
		} else {
			setErrors((prevErrors) => ({
				...prevErrors,
				emailError: '',
			}));
		}

		// password validation
		if (password.length === 0) {
			setErrors((prevErrors) => ({
				...prevErrors,
				passwordError: 'Please enter a password',
			}));
			hasErrors = true;
		} else if (!login && password.length < 8) {
			setErrors((prevErrors) => ({
				...prevErrors,
				passwordError: 'Password must be at least 8 characters',
			}));
			hasErrors = true;
		} else {
			setErrors((prevErrors) => ({
				...prevErrors,
				passwordError: '',
			}));
		}

		// additional validations for registration (not login)
		if (!login) {
			// name validation
			if (name.length === 0) {
				setErrors((prevErrors) => ({
					...prevErrors,
					nameError: 'Please enter your name',
				}));
				hasErrors = true;
			} else if (name.length <= 4) {
				setErrors((prevErrors) => ({
					...prevErrors,
					nameError: 'Username must be at least 5 characters',
				}));
				hasErrors = true;
			} else {
				setErrors((prevErrors) => ({
					...prevErrors,
					nameError: '',
				}));
			}

			// confirm password validation
			if (cpassword.length === 0) {
				setErrors((prevErrors) => ({
					...prevErrors,
					confirmError: 'Please confirm your password',
				}));
				hasErrors = true;
			} else if (password !== cpassword) {
				setErrors((prevErrors) => ({
					...prevErrors,
					confirmError: 'Passwords do not match',
				}));
				hasErrors = true;
			} else {
				setErrors((prevErrors) => ({
					...prevErrors,
					confirmError: '',
				}));
			}
		}

		// if no errors, navigate
		if (!hasErrors && !error) {
			if (login) {
				SignIn(email, password);
				navigate('/dashboard/profile');
			} else {
				SignUp(name, email, password);
				setConfirm(true);
			}
		}
	};

	return (
		<div className='container'>
			<div className='register__form tw-w-[55%] tw-shadow'>
				{/* header */}
				<div className='register__form-header'>
					<button
						onClick={() => {
							setLogin(true);
							handleTapChange();
						}}
						className={`register__form-header-btn ${
							login ? 'active' : ''
						}`}
					>
						Sign In
					</button>
					<button
						onClick={() => {
							setLogin(false);
							handleTapChange();
						}}
						className={`register__form-header-btn ${
							!login ? 'active' : ''
						}`}
					>
						Sign Up
					</button>
				</div>
				{/* header */}
				{/* start form */}
				<form onSubmit={(e) => e.preventDefault()}>
					<div>
						{!login && (
							<FormInput
								type='text'
								value={name}
								setValue={setName}
								label='Username'
							/>
						)}
						{errors.nameError && (
							<p className='text-danger m-0'>
								{errors.nameError}
							</p>
						)}
					</div>

					<div>
						<FormInput
							label='Email Address'
							value={email}
							setValue={setEmail}
							type='email'
						/>
						{errors.emailError && (
							<p className='text-danger m-0'>
								{errors.emailError}
							</p>
						)}
					</div>

					<div>
						<FormInput
							type='password'
							label='Password'
							value={password}
							setValue={setPassword}
						/>
						{errors.passwordError && (
							<p className='text-danger m-0'>
								{errors.passwordError}
							</p>
						)}
					</div>

					{!login && (
						<div>
							<FormInput
								type='password'
								value={cpassword}
								setValue={setCpassword}
								label='Confirm Password'
							/>
							{errors.confirmError && (
								<p className='text-danger m-0'>
									{errors.confirmError}
								</p>
							)}
						</div>
					)}

					<button
						onClick={handleSubmit}
						className='form__submit-btn'
						type='submit'
					>
						{login ? 'Sign In' : 'Sign Up'}
					</button>
					{error && (
						<p className='tw-text-red-50 tw-capitalize tw-text-center tw-text-lg tw-m-0 tw-bg-red-500 tw-p-2 tw-rounded-md tw-flex tw-items-center tw-gap-2 tw-justify-center'>
							<i className='fa-solid fa-circle-xmark'></i>
							{error}
						</p>
					)}
					{confirm && (
						<p className='tw-text-green-50 tw-capitalize tw-text-center tw-text-lg tw-m-0 tw-bg-green-500 tw-p-2 tw-rounded-md tw-flex tw-items-center tw-gap-2 tw-justify-center'>
							<i className='fa-solid fa-circle-check'></i>
							Please verify your email
						</p>
					)}
				</form>

				<div className='divider'>
					<p className='divider-text'>or</p>
				</div>

				<div className='providers'>
					<button onClick={SignInWithGoogle} className='provider_btn'>
						<img src='./images/google.svg' alt='Google' />
						<p>Continue with Google</p>
					</button>
				</div>
			</div>
		</div>
	);
}

export default RegisterForm;
