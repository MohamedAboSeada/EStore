import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../RegisterPage/helper/handleAuthentication';
import { Link } from 'react-router-dom';
import { GetUser } from '../RegisterPage/helper/Users';

/*
{
  "id": "ab7809a9-224f-4d74-93ca-4e84fb8b3e94",
  "phone": "",
  "email": "mohamedaboseada5678@gmail.com",
  "address": "",
  "image": "https://lh3.googleusercontent.com/a/ACg8ocIlLJ8sS050hQEis6W7ESRGiB_xttxc4g-s0i_GJ9r07JVT-A=s96-c",
  "name": "Mohamed Gha"
}

*/

function UserData() {
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

	useEffect(() => {
		let fetchUserData = async () => {
			let data = await GetUser(user.id);
			setUserData(data[0]);
			setLoading(false);
		};
		fetchUserData();
	}, []);

	return loading ? (
		<h1>loading...</h1>
	) : (
		<div className='tw-col-span-12 md:tw-col-span-9 tw-border-[1px] tw-border-stone-300 tw-border-solid tw-bg-white tw-rounded-lg tw-shadow-sm'>
			<h1 className='tw-text-lg m-0 tw-uppercase tw-font-[500] tw-p-3 tw-border-b-[1px] tw-border-solid tw-border-transparent tw-border-b-stone-300'>
				Account Info
			</h1>
			<div className='tw-p-3  tw-flex tw-flex-col tw-justify-between'>
				<div className='tw-flex tw-items-center tw-gap-3'>
					<div className='tw-w-[50px] tw-h-[50px] tw-overflow-hidden tw-bg-stone-600 tw-rounded-full'>
						<img
							src={userData.image}
							className='tw-w-full tw-h-full tw-object-cover'
						/>
					</div>
					<div>
						<p className='tw-font-[600] m-0 tw-text-black'>
							{userData.name}
						</p>
						<p className='tw-font-[600] m-0 tw-text-stone-600'>
							{userData.address
								? userData.address
								: 'No Address Provided'}
						</p>
					</div>
				</div>
				<p className='tw-font-[600] tw-pt-3 m-0'>
					Email : <span>{userData.email}</span>
				</p>
				<p className='tw-font-[600] tw-pt-2 m-0'>
					Phone :{' '}
					<span>
						{userData.phone ? userData.phone : 'No Phone Provided'}
					</span>
				</p>
				<Link
					to='/dashboard/settings'
					className='tw-bg-orange-500 tw-no-underline tw-text-center tw-mt-3 tw-uppercase tw-text-lg tw-font-[500] tw-text-white tw-py-2 tw-px-4 tw-rounded tw-transition-colors tw-border-none tw-outline-none'
				>
					Edit Account
				</Link>
			</div>
		</div>
	);
}

export default UserData;
