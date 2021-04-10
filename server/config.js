export const {
  EXPRESS_SESSION_SECRET,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
} = process.env;

export const BASE_LOGIN_PATH = "/login";
export const GITHUB_LOGIN_PATH = `${BASE_LOGIN_PATH}/github`;
export const GITHUB_CALLBACK_PATH = `${GITHUB_LOGIN_PATH}/callback`;

export const GITHUB_STRATEGY_CONFIG = {
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: GITHUB_CALLBACK_PATH,
};
