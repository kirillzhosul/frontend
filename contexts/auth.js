import React, { createContext, useState, useContext, useEffect } from "react";
import { useCookies } from "react-cookie";

import { apiRequest } from "../shared/kirillzhosul-api";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [accessToken, setAccessToken] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(
    process.env.NEXT_PUBLIC_ACCESS_TOKEN_COOKIE_NAME
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function loadAccessTokenFromCookies() {
      const accessToken =
        cookies[process.env.NEXT_PUBLIC_ACCESS_TOKEN_COOKIE_NAME];
      if (accessToken) {
        apiRequest("users/me", "show_courses=true", accessToken)
          .then((response) => {
            setUser(response["success"]["user"]);
            setPurchasedCourses(response["success"]["purchased_courses"]);
            setAccessToken(accessToken);
            setIsLoading(false);
          })
          .catch(() => {
            setIsLoading(false);
          });
        return;
      }
      setIsLoading(false);
    }
    setIsLoading(true);
    loadAccessTokenFromCookies();
  }, []);

  const requestOauthAuthorization = () => {
    if (typeof window === "undefined") return;
    const clientId = process.env.NEXT_PUBLIC_FLORGON_OAUTH_CLIENT_ID;
    const redirectUri = `${process.env.NEXT_PUBLIC_FLORGON_OAUTH_REDIRECT_URI_DOMAIN}/sso/oauth/callback`;
    window.location.href = `https://florgon.space/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=email`;
  };

  const loginUserWithAccessToken = (accessToken) => {
    setCookie(process.env.NEXT_PUBLIC_ACCESS_TOKEN_COOKIE_NAME, accessToken, {
      domain: process.env.NEXT_PUBLIC_ACCESS_TOKEN_COOKIE_DOMAIN,
      maxAge: parseInt(process.env.NEXT_PUBLIC_ACCESS_TOKEN_COOKIE_MAX_AGE),
      path: "/",
    });
  };

  const authContext = {
    isAuthenticated: !!user,
    isLoading,

    user,
    purchasedCourses,

    accessToken,

    requestOauthAuthorization,
    loginUserWithAccessToken,
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider };
