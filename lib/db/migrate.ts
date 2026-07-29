import { neon } from "@neondatabase/serverless";
import { migrationSQL } from "../db";

async function migrate(): Promise<void> {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL is not set. Run `vercel env pull .env.local --yes` first."
    );
  }

  console.log("Running migration...");
  const sql = neon(url);
  // The migration is several statements, which the HTTP driver only accepts
  // through the transaction helper rather than a single tagged template.
  const statements = migrationSQL
    .split(";")
    .map((s) => s.trim())
    .filter(Boolean);
  await sql.transaction((tx) => statements.map((s) => tx.query(s)));
  console.log(`Migration complete. ${statements.length} statements applied.`);
}

migrate()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Migration failed:", err);
    process.exit(1);
  });
