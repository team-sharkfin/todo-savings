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
