import { sql } from "@vercel/postgres";
import { migrationSQL } from "../db";

async function migrate() {
  console.log("Running migration...");
  await sql.query(migrationSQL);
  console.log("Migration complete.");
  process.exit(0);
}

migrate().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
