import { auth } from '../firebase/firebase-app';
// import { database, auth } from '../firebase/firebase-app';

export const listenToAuth = () => {
	return (dispatch, getState) => {
		auth.onAuthStateChanged(
			authData => {
				// console.log('auth data', authData);
				dispatch({
					type: 'AUTH_LOGIN',
					username: '',
					uid: authData.uid,
					email: authData.email
				});
			}
		);
	};
};

export const openAuthAnonimously = ( ) => {
	return dispatch => {
		dispatch({ type: 'AUTH_OPEN' });
			auth.signInAnonymously()
				.catch(function(error) {
	    		dispatch({
						type: 'AUTH_ERROR',
						error: error.message
					});
					dispatch({ type: 'AUTH_LOGOUT' });
				});
	};
};

export const logoutUser = () => {
	return dispatch => {
		dispatch({ type: 'AUTH_LOGOUT' });
		auth.signOut();
	};
};

