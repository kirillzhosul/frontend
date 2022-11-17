/*
    `kirillzhosul-api`

    Kirill Zhosul API library.

    Used for working with Kirill Zhosul API.

    Current SDK version:
        unreleased-internal
    Expected API version: 
        v0.0.1

    API documentation:
        not yet released
    
    Homepages:
        https://kirillzhosul.site/ 
*/

// Settings.
const API_EXPECTED_VERSION = "0.0.1";
const API_ENDPOINT_URL = "https://api.kirillzhosul.site/v0/";
const API_HTTP_METHOD = "GET";
const API_DEFAULT_HEADERS = {
  "Content-Type": "application/json",
};

/*
   Public methods for end-user.
*/

// Methods wrapper.

function apiRequest(method, params = "", accessToken = "") {
  /// @description Makes request to API method.
  return new Promise((resolve, reject) => {
    _apiFetch(method, params, accessToken)
      .then((httpResponse) => {
        httpResponse
          .json()
          .then((jsonResponse) => {
            _apiShowVersionWarn(jsonResponse);
            if ("success" in jsonResponse) resolve(jsonResponse, httpResponse);
            reject(jsonResponse, httpResponse);
          })
          .catch(reject);
      })
      .catch(reject);
  });
}

/*
    Private methods, that should not be used by end-user.
*/

function _apiFetch(apiMethod, apiParams, accessToken) {
  /// @description Returns fetch for API.
  return fetch(_buildRequestURL(apiMethod, apiParams), {
    method: API_HTTP_METHOD,
    headers: _getHeaders((accessToken = accessToken)),
  });
}

function _apiShowVersionWarn(jsonResponse) {
  /// @description Makes API request with given handlers.
  if (jsonResponse && "v" in jsonResponse) {
    if (jsonResponse["v"] != API_EXPECTED_VERSION) {
      console.warn(
        "[API] Working with unexpected API version! Expected version: " +
          API_EXPECTED_VERSION +
          ", but got: " +
          jsonResponse["v"]
      );
    }
  }
}

function _buildRequestURL(apiMethod, apiParams) {
  /// @description Returns ready request URL for the API.
  return API_ENDPOINT_URL + apiMethod + "?" + apiParams;
}

function _getHeaders(accessToken) {
  /// @description Returns headers object for request.
  let headers = API_DEFAULT_HEADERS;

  if (accessToken !== undefined && accessToken) {
    // Send authorization headers.
    headers["Authorization"] = accessToken;
  }

  return headers;
}

module.exports = {
  apiRequest,
};
