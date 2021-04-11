const EXPRESS_BASE_URL = process.env.EXPRESS_BASE_URL;

function request(path, options) {
  return fetch(`${EXPRESS_BASE_URL}${path}`, {
    credentials: "include",
    ...options,
<<<<<<< Updated upstream
=======
  });
}

export async function checkSession() {
  const response = await request("/session");
  return response.json();
}

export async function addReward(reward) {
  const response = await request("/rewards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reward),
>>>>>>> Stashed changes
  });
}

export async function checkSession() {
  const response = await request("/session");
  return response.json();
}

export async function addReward(reward) {
  const response = await request("/rewards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reward),
  });
  return response.json();
}

export async function getRewards() {
  const response = await request("/rewards");
  return response.json();
}

export async function getRewards() {
  const response = await request("/rewards");
  return response.json();
}

export async function getTasks() {
  const response = await request("/tasks");
  return response.json();
}
