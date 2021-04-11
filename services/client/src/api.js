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

export async function addTask(task) {
  const response = await request("/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return response.json();
}

export async function setTaskComplete(taskId, isComplete) {
  const response = await request("/tasks", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      taskId: parseInt(taskId),
      isComplete: isComplete ? 1 : 0,
    }),
  });
  return response.json();
}

export async function getTasks() {
  const response = await request("/tasks");
  return response.json();
}

export async function getProfile() {
  const response = await request("/profile");
  return response.json();
}
