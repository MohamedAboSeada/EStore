import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MidNav extends Component {
	render() {
		return (
			<div className='mid__header'>
				<div className='container'>
					<Link to='/' className='mid__header-logo' href='#'>
						EStore
					</Link>
					<div className='search__field'>
						<input
							className='input__field'
							type='text'
							placeholder='Search for anything...'
						/>
						<div className='search__icon'>
							<i className='fas fa-search'></i>
						</div>
					</div>
					<div style={{marginRight:'10px'}} className='mid__btns'>
						<button className='mid__btn'>
							<Link to="/cart">
								<i className='fas fa-cart-shopping' />
							</Link>
						</button>
						<button className='mid__btn'>
							<i className='fas fa-heart'></i>
						</button>
						<Link to='/register' className='mid__btn'>
							<i className='fas fa-user'></i>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default MidNav;
