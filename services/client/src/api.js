const EXPRESS_BASE_URL = process.env.EXPRESS_BASE_URL;

function request(path, options) {
  return fetch(`${EXPRESS_BASE_URL}${path}`, {
    credentials: "include",
    ...options,
  });
}

export async function checkSession() {
  const response = await request("/session");
  return response.json();
}

export async function getProfile() {
  const response = await request("/profile");
  return response.json();
}
