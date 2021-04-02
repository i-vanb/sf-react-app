import jwtDecode from "jwt-decode";

const ACCESS_TOKEN_STORAGE_KEY = "accessToken";
const REFRESH_TOKEN_STORAGE_KEY = "refreshToken";
const MILLISECONDS_IN_SECONDS = 1000;
const MINIMAL_SECONDS_LEFT = 60;

const decodeToken = token => {
    let tokenData;
    try {
        tokenData = jwtDecode(token);
    } catch (e) {
        console.warn(e);
    }
    return tokenData;
}

const isTokenValid = expireAt => {
    const currentTime = Math.round(Date.now() / MILLISECONDS_IN_SECONDS);
    const diff = expireAt - currentTime;

    return diff < MINIMAL_SECONDS_LEFT;
}

const updateToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_STORAGE_KEY);

    const response = await fetch('/auth/refresh', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "ContentType": "application/json"
        },
        body: JSON.stringify({refreshToken})
    })
    const data = await response.json();

    if(response.ok) {
        localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, data.accessToken);
        localStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, data.refreshToken);
        return data.accessToken;
    } else if(data.error) throw new Error(data.error);
}

const getAccessToken = async () => {
    let accessToken = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
    const tokenData = decodeToken(accessToken);
    const isAccessTokenValid = isTokenValid(tokenData.exp);
    if(!isAccessTokenValid) return await updateToken();
    return accessToken;
}

export async function callApi(url, method, body) {
    const accessToken = getAccessToken();

    return fetch(url, {
        method,
        headers: {
            "Accept": "application/json",
            "ContentType": "application/json",
            "Authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify(body)
    })
}
