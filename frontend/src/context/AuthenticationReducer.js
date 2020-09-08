let currentUser = localStorage.getItem('currentUser') 
    ? JSON.parse(localStorage.getItem('currentUser'))
    : null;

export const initialState = {
    user: currentUser,
    loading: false,
    errorMessage: null,
}

export const AuthenticationReducer = (initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...initialState,
                loading: true,
            };
        case 'LOGIN_ERROR':
            return {
                ...initialState,
                loading: false,
                errorMessage: action.error,
            };
        case 'LOGIN_SUCCESS':
            return {
                ...initialState,
                user: action.payload,
                loading: false,
            };
        case 'LOGOUT':
            return {
                ...initialState,
                user: null,
            };
        default:
            throw new Error(`Unhandled AuthenticationReducer action type: ${action.type}`);
    }
}