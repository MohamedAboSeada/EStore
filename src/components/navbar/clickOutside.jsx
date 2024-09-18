import React, { useEffect } from 'react';
import useInnerWidth from '../MariamElagamii/Cart/useInnerWidth';

function useClickOutside(ref) {
	let innerWidth = useInnerWidth();
	useEffect(() => {
		let handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				if (ref.current.classList.contains('nav__menu')) {
					if (innerWidth <= 600) {
						ref.current.classList.add('hide');
					}
				} else {
					ref.current.classList.add('hide');
				}
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref]);
}

export default useClickOutside;
