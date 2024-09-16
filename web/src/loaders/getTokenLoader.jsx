export default function getTokenLoader() {
  const token = localStorage.getItem("token");

  if (isTokenExpired(token)) {
    localStorage.removeItem("token");
    return "";
  } else {
    return token;
  }
}

function isTokenExpired(token) {
  if (!token) return true;

  const tokenParts = token.split(".");
  if (tokenParts.length !== 3) {
    return true;
  }

  try {
    const payload = JSON.parse(atob(tokenParts[1]));
    const currentTime = Math.floor(Date.now() / 1000);

    return payload.exp < currentTime;
  } catch (error) {
    console.error("Error decoding token:", error);
    return true;
  }
}
