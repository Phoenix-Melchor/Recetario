import { jwtDecode } from "jwt-decode";
import { refreshToken, verifyToken } from "../services/Auth";

function getToken() {
    return localStorage.getItem('token');
}

function getRefreshToken() {
    return localStorage.getItem('refresh_token');
}

export async function verify_Token() {
    const token = getToken()
    const refresh_Token = getRefreshToken()
    try {
        if (token) {
            if(await verifyToken({token})) {
                return true
            } else if (refresh_Token) {
                const newToken = await refreshToken({token: refresh_Token})
                console.log(newToken)
                if (newToken) {
                    saveToken(newToken.token)
                    return await verifyToken({newToken})
                } else {
                    deleteToken()
                    return false 
                }
            } else return false
        } else return false
    }
    catch (error) {
        console.error(error)
        return false
    }
}

export function getUsername() {
    const token = getToken()
    if (!token) return null;

    try {
        const decodedToken = jwtDecode(token);
        return decodedToken.sub;
    } catch (error) {
        console.error("Error decoding token:", error);
        return null;
    }
}

export function saveToken(newToken) {
    localStorage.setItem("token", newToken)
}

export function deleteToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
}