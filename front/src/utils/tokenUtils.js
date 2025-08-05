import { jwtDecode } from "jwt-decode";

export function isTokenValid(token) {
    if (!token) return false;

    try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp > currentTime){
            return true;
        } else {
            deleteToken();
            return false;
        }
    } catch (error) {
        console.error("Error decoding token:", error);
        return false;
    }
}

export function getUsername(token) {
    if (!token) return null;

    try {
        const decodedToken = jwtDecode(token);
        return decodedToken.sub;
    } catch (error) {
        console.error("Error decoding token:", error);
        return null;
    }
}

export function deleteToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
}