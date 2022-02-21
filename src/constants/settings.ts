const ENVIRONMENT = process.env;

export const API_BASE_URL = ENVIRONMENT.REACT_APP_API_BASE_URL || "";

export const ERROR_401_WHITE_LIST = [];

//@ local storage Keys
export const ACCESS_TOKEN_KEY = "@MY_APP:ACCESS_TOKEN_KEY";
export const REFRESH_TOKEN_KEY = "@MY_APP:REFRESH_TOKEN_KEY";
