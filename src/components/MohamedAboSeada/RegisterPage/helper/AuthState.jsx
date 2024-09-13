import { useEffect, useState } from 'react';
import { supabase } from './client.mjs';

export const useAuthState = () => {
	const [session, setSession] = useState(null);

	useEffect(() => {
		const session = supabase.auth.getSession();
		setSession(session);

		const { data: authListener } = supabase.auth.onAuthStateChange(
			(event, session) => {
				setSession(session);
			}
		);

		return () => {
			authListener.subscription.unsubscribe();
		};
	}, []);

	return session;
};
