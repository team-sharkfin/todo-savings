export const LOGIN_PATH = "/login";

export const GITHUB_LOGIN_PATH = `${LOGIN_PATH}/github`;
export const GITHUB_CALLBACK_PATH = `${GITHUB_LOGIN_PATH}/callback`;

export const GITHUB_STRATEGY_CONFIG = {
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: GITHUB_CALLBACK_PATH,
};
