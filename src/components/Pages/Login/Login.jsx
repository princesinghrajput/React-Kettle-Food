import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import { Container } from 'postcss';
const preventRefresh = (e) => {
	e.preventDefault();
};

export default function Login() {
	return (
        <div className='image-container-full'>
            <div className="wrapper signIn">
			{/* <div className="illustration">
				<img src="https://source.unsplash.com/random" alt="illustration" />
			</div> */}
			<div className="form">
				<div className="heading">LOGIN</div>
				<form>
					
					<div>
						<label htmlFor="e-mail">E-Mail</label>
						<input type="email" id="e-mail" placeholder="Enter you mail" />
					</div>
                    <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter you password"
            />
          </div>
					<button type="submit" onClick={preventRefresh}>
						Submit
					</button>
				</form>
				<p>
					Don't have an account ? <Link to="/signup"> Sign In </Link>
				</p>
			</div>
		</div>
        </div>
		
	);
}
