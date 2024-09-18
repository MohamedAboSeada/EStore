import React, { useContext } from 'react';
import { WhishListContext } from './WhishListContext';
import WhishlistItem from './WhishlistItem';
function Whishlist() {
	let { whishlist, removeProductfromWhishlist } =
		useContext(WhishListContext);
	return (
		<div className='tw-col-span-12 md:tw-col-span-9'>
			<div className='p-0 tw-overflow-hidden tw-flex tw-flex-col tw-border-[1px] tw-border-gray-300 tw-border-solid tw-rounded-md tw-shadow-sm'>
				<h1 className='tw-text-lg m-0 tw-uppercase tw-font-[500] tw-p-3 tw-border-b-[1px] tw-border-solid tw-border-transparent tw-border-b-stone-300'>
					Whishlist
				</h1>
				{whishlist.length > 0 ? (
					<>
						<div className='tw-flex tw-flex-col sp_div'>
							{whishlist.map((item) => (
								<WhishlistItem
									item={item}
									handleRemove={removeProductfromWhishlist}
								/>
							))}
						</div>
					</>
				) : (
					<h2 className='tw-text-center tw-p-10 tw-font-[600] tw-text-gray-600'>
						No Products In Whishlist
					</h2>
				)}
			</div>
		</div>
	);
}

export default Whishlist;
