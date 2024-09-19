import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BreadChrumb = () => {
	const location = useLocation();

	// Split the pathname to get the individual path segments
	const pathnames = location.pathname.split('/').filter((x) => x);

	return (
		<nav className='tw-bg-slate-100'>
			<ol className='container tw-flex tw-flex-wrap tw-list-none tw-gap-2 tw-m-0 tw-p-0'>
				<li className=''>
					<Link
						to='/'
						className='tw-text-gray-600 tw-m-0 tw-no-underline tw-uppercase tw-font-[600]'
					>
						Homepage
					</Link>
				</li>

				{pathnames.map((value, index) => {
					const to = `/${pathnames.slice(0, index + 1).join('/')}`;
					const isLast = index === pathnames.length - 1;

					return (
						<>
							<p className='tw-m-0 tw-font-bold'>{'>'}</p>
							<li
								key={to}
								className={`-item ${isLast ? 'active' : ''}`}
								aria-current={isLast ? 'page' : undefined}
							>
								{isLast ? (
									<p className='tw-font-bold tw-uppercase tw-m-0 tw-text-orange-400'>
										{value.charAt(0).toUpperCase() +
											value.slice(1)}
									</p>
								) : (
									<Link
										to={to}
										href='#'
										className='tw-text-gray-600 tw-m-0 tw-no-underline tw-uppercase tw-font-[600]'
									>
										{value.charAt(0).toUpperCase() +
											value.slice(1)}
									</Link>
								)}
							</li>
						</>
					);
				})}
			</ol>
		</nav>
	);
};

export default BreadChrumb;
