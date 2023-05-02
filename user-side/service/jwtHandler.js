function getJWTToken() {
  return sessionStorage.getItem("jwt");
}

/**
 * Attaches jwt authorization header to the http request
 *
 * @param {object} httpRequest
 */
export function attachAuthorizationHeader(httpRequest) {
  const jwtToken = getJWTToken();
  if (jwtToken) {
    httpRequest.setRequestHeader("Authorization", `Bearer ${jwtToken}`);
    return true;
  }
  return false;
}
