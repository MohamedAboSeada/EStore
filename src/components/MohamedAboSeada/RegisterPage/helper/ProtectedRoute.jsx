import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './handleAuthentication';

const ProtectedRoute = ({ children }) => {
	const { session, loading } = useContext(AuthContext);

	if (loading) {
		return <div>Loading...</div>; // Or any loading indicator
	}

	if (!session) {
		return <Navigate to='/register' replace />;
	}

	return children;
};

export default ProtectedRoute;
