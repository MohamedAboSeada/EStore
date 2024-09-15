import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../MohamedAboSeada/RegisterPage/helper/handleAuthentication';

class MidNav extends Component {
	static contextType = AuthContext;
	render() {
		const { user } = this.context;
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
					<div style={{ marginRight: '10px' }} className='mid__btns'>
						<button className='mid__btn'>
							<i className='fas fa-cart-shopping'></i>
						</button>
						<button className='mid__btn'>
							<i className='fas fa-heart'></i>
						</button>
						<Link
							to={user ? '/dashboard/user-data' : '/register'}
							className='mid__btn'
						>
							<i
								className={
									user ? 'fas fa-user' : 'fas fa-user-plus'
								}
							></i>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default MidNav;
