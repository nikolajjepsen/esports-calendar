import apiClient from "./../services/api";

export const login = async(dispatch, payload) => {
    dispatch({ type: 'LOGIN' });
    apiClient.get("/sanctum/csrf-cookie").then(() => {
        apiClient
            .post(
                "/login",
                {
                    email: payload.email,
                    password: payload.password,
                },
                {
                    headers: {
                        "Accept": "application/json",
                    },
                }
            )
            .then((response) => {
                if (response.status === 204) {
                    apiClient
                        .get("/api/user", {
                            headers: {
                                Accept: "application/json",
                            },
                        })
                        .then((user) => {
                            console.log(user);
                            dispatch({
                                type: "LOGIN_SUCCESS",
                                payload: user.data,
                            });
                            localStorage.setItem(
                                "currentUser",
                                JSON.stringify(user.data)
                            );
                            return response;
                        });
                }
            })
            .catch((err) => {
                if (err.response && err.status === 422) {
                    const error = {
                        message: "Some error for failed credentials",
                    };
                    dispatch({ type: "LOGIN_ERROR", error: error });
                } else {
                    const error = {
                        message: "Some error for failed connection.",
                    };
                    dispatch({ type: "LOGIN_ERROR", error: error });
                }
            });
    });  
}

export const logout = async (dispatch) => {
    apiClient.get("/sanctum/csrf-cookie").then(() => {
        apiClient
            .post("/logout", {
                headers: {
                    Accept: 'application/json',
                }
            })
            .then((response) => {
                if (response.status === 204) {
                    // handleCorrectLogin
                    dispatch({ type: "LOGOUT" });
                    localStorage.removeItem("currentUser");
                }
            })
            .catch((err) => {
                const error = {
                    message: "Some error for failed connection.",
                };
                dispatch({ type: "LOGIN_ERROR", error: error });
            });
    });
};