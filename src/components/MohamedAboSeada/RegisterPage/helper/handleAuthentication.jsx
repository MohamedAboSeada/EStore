import React, { createContext, useState } from 'react';
import { supabase } from './client.mjs';

let AuthContext = createContext();

function AuthProvider({ children }) {
	let [user, setUser] = useState(null);
	let [error, setError] = useState(null); // Initialize to null, not false
	let [loading, setLoading] = useState(false);

	let SignIn = async ({ email, password }) => {
		setLoading(true);
		let { user, error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});
		if (error) {
			setError(error.message);
		} else {
			setUser(user);
		}
		setLoading(false); // Always set loading to false
	};

	let SignUp = async ({ email, password }) => {
		setLoading(true);
		let { user, error } = await supabase.auth.signUp({
			email,
			password,
		});
		if (error) {
			setError(error.message);
		} else {
			setUser(user);
		}
		setLoading(false);
	};

	let SignInWithGoogle = async () => {
		setLoading(true);
		const { user, error } = await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: 'http://localhost:3000/',
			},
		});

		if (error) {
			setError(error.message);
		} else {
			setUser(user);
		}
		setLoading(false);
	};

	let SignOut = async () => {
		setLoading(true);
		let { error } = await supabase.auth.signOut();
		if (error) {
			setError(error.message);
		} else {
			setUser(null); // Reset user after sign out
		}
		setLoading(false);
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				error,
				loading,
				SignIn,
				SignUp,
				SignInWithGoogle,
				SignOut,
			}}
		>
			{loading && 'loading...'}
			{children}
		</AuthContext.Provider>
	);
}

export { AuthProvider, AuthContext };
