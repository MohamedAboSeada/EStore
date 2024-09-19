import React, { createContext, useEffect, useState } from 'react';
import { supabase } from './client.mjs';
import { CreateUser } from './Users';

let AuthContext = createContext();

function AuthProvider({ children }) {
	const [session, setSession] = useState(null);
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	let handleUserCreate = async (uid, data) => {
		CreateUser(uid, {
			...data,
		});
	};

	// get session if there is one
	useEffect(() => {
		const fetchSession = async () => {
			try {
				const { data, error } = await supabase.auth.getSession();
				if (error) throw error;
				setSession(data.session);
				setUser(data.session?.user || null);

				if (data.session?.user) {
					handleUserCreate(data.session.user.id, {
						phone: '',
						email: data.session.user.email,
						address: '',
						image:
							data.session.user.user_metadata?.avatar_url ||
							'https://placehold.co/400',
						name: data.session.user.user_metadata.full_name,
					});
				}
			} catch (err) {
				console.log(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchSession();

		const { data: authListener } = supabase.auth.onAuthStateChange(
			async (event, session) => {
				setSession(session);
				setUser(session?.user || null);
				setLoading(false);
			}
		);

		return () => {
			authListener.subscription.unsubscribe();
		};
	}, []);

	// sign in an existing user
	const SignIn = async (email, password) => {
		setLoading(true);
		try {
			const { data, error } = await supabase.auth.signInWithPassword({
				email,
				password,
			});
			if (error) {
				setError(error.message);
			} else {
				setError('');
				setUser(data.user);
				setSession(data.session);
			}
		} catch (err) {
			console.error('Error signing in:', err);
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	// sign up a new user
	const SignUp = async (name, email, password) => {
		setLoading(true);
		try {
			const { data, error } = await supabase.auth.signUp({
				email,
				password,
				options: {
					data: {
						full_name: name,
					},
				},
			});

			if (error) {
				setError(error.message);
			} else {
				setError('');
			}
		} catch (err) {
			console.error('Error signing up:', err);
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	// sign in with google
	const SignInWithGoogle = async () => {
		setLoading(true);
		try {
			const { data, error } = await supabase.auth.signInWithOAuth({
				provider: 'google',
				options: {
					redirectTo: 'http://localhost:3000/dashboard/user-data',
				},
			});
		} catch (err) {
			console.error('Error signing in with Google:', err);
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	const SignOut = async () => {
		setLoading(true);
		try {
			const { error } = await supabase.auth.signOut();
			if (error) throw error;
			setUser(null);
			setSession(null);
		} catch (err) {
			console.error('Error signing out:', err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<AuthContext.Provider
			value={{
				session,
				user,
				error,
				loading,
				SignIn,
				SignUp,
				SignInWithGoogle,
				SignOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export { AuthProvider, AuthContext };
