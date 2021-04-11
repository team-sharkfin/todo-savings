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
    .select("u_id")
    .from("Users")
    .where({ git_id: githubId });

  return rows?.length ? rows[0].u_id : null;
}

export async function addUserByGitHubId(githubId) {
  const [id] = await db.insert({ git_id: githubId }).into("Users");
  return id;
}
