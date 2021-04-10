const API_BASE_URL = "http://localhost:3000/api";

export async function checkSession() {
  const response = await fetch(`${API_BASE_URL}/session`);
  return response.json();
}
