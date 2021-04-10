import { EXPRESS_BASE_URL } from "./config";

export async function checkSession() {
  const response = await fetch(`${EXPRESS_BASE_URL}/session`, {
    credentials: "include",
  });
  return response.json();
}
