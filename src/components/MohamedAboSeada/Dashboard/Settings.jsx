import React, { useState, useEffect, useRef } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../RegisterPage/helper/handleAuthentication';
import { GetUser, UpdateUser } from '../RegisterPage/helper/Users';
function Settings() {
	let { user } = useContext(AuthContext);

	let [userData, setUserData] = useState({
		id: '',
		phone: '',
		email: '',
		address: '',
		image: '',
		name: '',
	});

	let [loading, setLoading] = useState(true);
	let updateSuccess = useRef(null);

	useEffect(() => {
		let fetchUserData = async () => {
			let data = await GetUser(user.id);
			setUserData(data[0]);
			setLoading(false);
		};
		fetchUserData();
	}, []);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUserData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handlePhotoChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setUserData((prevState) => ({
					...prevState,
					profilePhoto: reader.result,
				}));
			};
			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let error = UpdateUser(user.id, {
			phone: userData.phone,
			email: userData.email,
			address: userData.address,
			image: userData.image,
			name: userData.name,
		});

		error.then((data) => {
			if (!data) {
				updateSuccess.current.classList.add('show');
				setTimeout(() => {
					updateSuccess.current.classList.remove('show');
				}, 2000);
			}
		});
	};

	return loading ? (
		<h1>Loading...</h1>
	) : (
		<div className='tw-col-span-12 md:tw-col-span-9 tw-border-[1px] tw-border-stone-300 tw-border-solid tw-bg-white tw-rounded-lg tw-shadow-sm'>
			<h1 className='tw-text-lg m-0 tw-uppercase tw-font-[500] tw-p-3 tw-border-b-[1px] tw-border-solid tw-border-transparent tw-border-b-stone-300'>
				Account Settings
			</h1>
			<form onSubmit={handleSubmit}>
				<div className='tw-flex tw-flex-col tw-items-center tw-space-y-[-40px]'>
					<div className='tw-h-[150px] tw-w-[150px]'>
						<img
							src={userData.image}
							alt='Profile'
							className='tw-w-full tw-h-full  tw-rounded-full tw-object-cover tw-border-4 tw-border-solid tw-border-blue-500'
						/>
					</div>
					<label className='tw-cursor-pointer tw-bg-blue-500 tw-w-[200px] tw-text-center tw-uppercase tw-text-white tw-py-2 tw-px-4 tw-rounded'>
						Change Photo
						<input
							type='file'
							className='tw-hidden'
							onChange={handlePhotoChange}
							accept='image/*'
						/>
					</label>
				</div>
				<div className='tw-flex tw-gap-5'>
					<div className='tw-flex-1'>
						<label className='tw-block tw-mb-2 tw-font-bold tw-uppercase'>
							Name
						</label>
						<input
							type='text'
							name='name'
							value={userData.name}
							onChange={handleInputChange}
							className='tw-border-[1px] tw-border-solid tw-border-stone-400 tw-outline-none tw-w-full tw-p-2 tw-rounded-md'
						/>
					</div>

					<div className='tw-flex-1'>
						<label className='tw-block tw-mb-2 tw-font-bold tw-uppercase'>
							Email
						</label>
						<input
							type='email'
							name='email'
							value={userData.email}
							onChange={handleInputChange}
							className='tw-border-[1px] tw-border-solid tw-border-stone-400 tw-outline-none tw-w-full tw-p-2 tw-rounded-md'
						/>
					</div>
				</div>

				<div className='tw-flex-1'>
					<label className='tw-block tw-mb-2 tw-font-bold tw-uppercase'>
						Phone Number
					</label>
					<input
						type='tel'
						name='phone'
						value={userData.phone}
						onChange={handleInputChange}
						className='tw-border-[1px] tw-border-solid tw-border-stone-400 tw-outline-none tw-w-full tw-p-2 tw-rounded-md'
					/>
				</div>

				<div>
					<label className='tw-block tw-mb-2 tw-font-bold tw-uppercase'>
						Address
					</label>
					<input
						type='text'
						name='address'
						value={userData.address}
						onChange={handleInputChange}
						className='tw-border-[1px] tw-border-solid tw-border-stone-400 tw-outline-none tw-w-full tw-p-2 tw-rounded-md'
					/>
				</div>

				<button
					type='submit'
					className='tw-bg-orange-500 tw-uppercase tw-text-lg tw-font-[500] tw-text-white tw-py-2 tw-px-4 tw-rounded tw-transition-colors tw-border-none tw-outline-none'
				>
					Save Changes
				</button>
			</form>
			<div
				ref={updateSuccess}
				className='success_msg alert alert-success'
			>
				<i className='fas fa-check'></i>
				user data updated Successfully !
			</div>
		</div>
	);
}

export default Settings;
