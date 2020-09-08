import { login, logout } from './AuthenticationAction';
import {
    useAuthenticationStateContext,
    useAuthenticationDispatchContext,
    AuthenticationProvider
} from './AuthenticationContext';

export {
    useAuthenticationStateContext,
    useAuthenticationDispatchContext,
    AuthenticationProvider,
    login,
    logout,
};