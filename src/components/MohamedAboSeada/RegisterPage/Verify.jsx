import React, { Component } from 'react';

class Verify extends Component {
	render() {
		return (
			<div className='container'>
				<div className='register__form forget shadow'>
					<div className='checkMessage alert alert-success'>
						<p className='text-center'>
							<i className='fas fa-envelope'></i>
							please Check your email address to verify your
							account!
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Verify;
