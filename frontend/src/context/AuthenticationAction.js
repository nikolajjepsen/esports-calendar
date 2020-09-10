import apiClient from "./../services/api";

export const login = async(dispatch, payload) => {
    dispatch({ type: 'LOGIN' });
    try {
        await apiClient.get('/sanctum/csrf-cookie');

        const loginResponse = await apiClient.post('/login', {
            email: payload.email,
            password: payload.password,
        });

        if (loginResponse && loginResponse.status === 204) {
            const authenticatedUser = await apiClient.get('/api/user');
            if (authenticatedUser) {
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: authenticatedUser.data,
                });
                localStorage.setItem(
                    "currentUser",
                    JSON.stringify(authenticatedUser.data)
                );
            }
        }
    } catch (err) {
        if (err.response && err.response.status === 422) {
            const error = {
                message: "The credentials are invalid.",
            };
            dispatch({ type: "LOGIN_ERROR", error: error });
            return false;
        } else {
            const error = {
                message: "Unable to process request.",
            };
            dispatch({ type: "LOGIN_ERROR", error: error });
            return false;
        }
    }
    
    return true;
}

export const logout = async (dispatch) => {
    try {
        const response = await apiClient.post('/api/logout');
        if (response.status === 204) {
            dispatch({ type: "LOGOUT" });
            localStorage.removeItem("currentUser");
        }
    } catch(err) {
        const error = {
            message: "Some error for failed connection.",
        };
        dispatch({ type: "LOGIN_ERROR", error: error });
    }
};