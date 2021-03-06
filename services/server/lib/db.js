import knex from "knex";

const {
  MYSQL_HOSTNAME,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
} = process.env;

const db = knex({
  client: "mysql",
  connection: {
    host: MYSQL_HOSTNAME,
    user: MYSQL_USERNAME,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
  },
});

export async function findUserByGitHubId(githubId) {
  const rows = await db
    .select("user_id")
    .from("users")
    .where({ github_id: githubId });

  return rows.length ? rows[0]["user_id"] : null;
}

export async function addUserByGitHubId(githubId) {
  const [id] = await db.insert({ github_id: githubId }).into("users");
  return id;
}

export async function updateTaskToComplete(taskId) {
  const today = new Date().toISOString().slice(0, 10);
  const [id] = await db
    .knex("tasks")
    .update({ completed_at: today })
    .where({ task_id: taskId });
  return id;
}

export async function addReward({ name, goal, amountPerTask, userId }) {
  const [id] = await db
    .insert({
      name,
      goal,
      amount_per_task: amountPerTask,
      user_id: userId,
    })
    .into("rewards");

  return id;
}

export function findRewards(userId) {
  return db
    .select(
      "r.reward_id as rewardId",
      "r.name",
      "r.goal",
      "r.amount_per_task as amountPerTask",
      db.raw("COALESCE(SUM(t.task_id), 0) as taskCount"),
      db.raw("COALESCE(SUM(c.task_id), 0) as completedTaskCount"),
      db.raw("r.amount_per_task * COALESCE(SUM(c.task_id), 0) as amountEarned")
    )
    .from({ r: "rewards" })
    .leftJoin({ t: "tasks" }, "r.reward_id", "t.reward_id")
    .leftJoin({ c: "tasks" }, "r.reward_id", "c.reward_id")
    .where("r.user_id", userId)
    .andWhere((builder) =>
      builder.whereNull("c.task_id").orWhereNotNull("c.completed_at")
    )
    .groupBy("rewardId", "r.name", "r.goal", "amountPerTask");
}

export async function findRewardUserId(rewardId) {
  const rows = await db
    .select("user_id")
    .from("rewards")
    .where("reward_id", rewardId);

  return rows.length ? rows[0]["user_id"] : null;
}

export async function addTask({ name, rewardId }) {
  const [id] = await db
    .insert({
      name,
      reward_id: rewardId,
    })
    .into("tasks");

  return id;
}

export function findTasks(userId) {
  return db
    .select("t.task_id as taskId", "t.name", "t.is_complete as isComplete")
    .from({ t: "tasks" })
    .innerJoin({ r: "rewards" }, "t.reward_id", "r.reward_id")
    .where("r.user_id", userId);
}

export async function findTaskUserId(taskId) {
  const rows = await db
    .select("r.user_id")
    .from({ r: "rewards" })
    .innerJoin({ t: "tasks" }, "r.reward_id", "t.reward_id")
    .where("t.task_id", taskId);

  return rows.length ? rows[0]["user_id"] : null;
}

export async function setTaskComplete(taskId, isComplete) {
  await db("tasks")
    .where({ task_id: taskId })
    .update({ is_complete: isComplete });
}

export function findCompleteRewardsAll(userId) {
  return db
    .select(
      "t.task_id as taskId",
      "t.name",
      "r.name as reward",
      "r.amount_per_task as amountPerTask",
      "t.completed_at as completed"
    )
    .from({ t: "tasks" })
    .innerJoin({ r: "rewards" }, "t.reward_id", "r.reward_id")
    .whereNotNull("t.completed_at")
    .andWhere("r.user_id", userId);
}

export function countCompleteRewardsAll(userId) {
  return db
    .count("t.task_id")
    .from({ t: "tasks" })
    .innerJoin({ r: "rewards" }, "t.reward_id", "r.reward_id")
    .whereNotNull("t.completed_at")
    .andWhere("r.user_id", userId);
}

export function countCompleteRewardsTime(userId, time) {
  return db
    .count("t.task_id")
    .from({ t: "tasks" })
    .innerJoin({ r: "rewards" }, "t.reward_id", "r.reward_id")
    .whereRaw("? - t.completed_at < ?", [Date.now(), time])
    .andWhere("r.user_id", userId);
}

export function countDueTasksAll(userId) {
  return db
    .count("task_id")
    .from({ t: "tasks" })
    .innerJoin({ r: "rewards" }, "t.reward_id", "r.reward_id")
    .whereNull("t.completed_at")
    .andWhere("r.user_id", userId);
}

export function countDueTasksTime(userId, time) {
  return db
    .count("task_id")
    .from({ t: "tasks" })
    .innerJoin({ r: "rewards" }, "t.reward_id", "r.reward_id")
    .whereNull("t.completed_at")
    .andWhere((builder) =>
      builder.whereRaw("? - t.created_at < ?", [Date.now(), time])
    )
    .andWhere("r.user_id", userId);
}

export function findLastRewardMet(userId) {
  return db
    .select("r.name", "t.completed_at")
    .from({ r: "rewards" })
    .innerJoin({ t: "tasks" })
    .where("r.user_id", userId)
    .orderBy("t.completed_at", "desc")
    .limit(1);
}

export function findLastTaskSet(userId) {
  return db
    .select("t.name", "t.created_at")
    .from({ r: "rewards" })
    .innerJoin({ t: "tasks" })
    .where("r.user_id", userId)
    .orderBy("t.completed_at", "desc")
    .limit(1);
}
