import { useCallback, useEffect } from "react";
import useAuth from "../../../contexts/auth";
import { apiRequest } from "../../../shared/kirillzhosul-api";
import { useState } from "react";
import { useRouter } from "next/router";

export default function OAuthCallback() {
  const router = useRouter();
  const { loginUserWithAccessToken } = useAuth();

  const [isError, setIsError] = useState(false);

  const loginUserFromCallbackData = useCallback(() => {
    const ssoOAuthCode = new URLSearchParams(router.query).get("code");
    if (ssoOAuthCode) {
      apiRequest("auth/sso", `code=${ssoOAuthCode}`)
        .then((response) => {
          const accessToken = response?.success?.access_token;
          if (accessToken) {
            loginUserWithAccessToken(accessToken);
            router.replace("/profile");
          }
        })
        .catch(() => {
          setIsError(true);
        });
    } else {
      router.replace("/profile");
    }
  }, [loginUserWithAccessToken, router]);

  useEffect(() => {
    loginUserFromCallbackData();
  });

  return (
    <div>
      {isError && (
        <b>
          Some unexpected error occured when authorizing you with SSO OAuth!
        </b>
      )}
      {!isError && <b>...</b>}
    </div>
  );
}
