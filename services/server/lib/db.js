import knex from "knex";

const { MYSQL_DATABASE, MYSQL_ROOT_PASSWORD } = process.env;

const db = knex({
  client: "mysql",
  connection: {
    host: "db",
    user: "root",
    password: MYSQL_ROOT_PASSWORD,
    database: MYSQL_DATABASE,
  },
});

export async function findUserByGitHubId(githubId) {
  const rows = await db
    .select("u_id")
    .from("Users")
    .where({ git_id: githubId });

  return rows?.[0].u_id;
}

export async function addUserByGitHubId(githubId) {
  const [id] = await db.insert({ git_id: githubId }, ["u_id"]).into("Users");
  return id;
}
