const EXPRESS_BASE_URL = process.env.EXPRESS_BASE_URL;

export async function checkSession() {
  const response = await fetch(`${EXPRESS_BASE_URL}/session`, {
    credentials: "include",
  });
  return response.json();
}
