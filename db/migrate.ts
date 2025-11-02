import { db } from "@/db/db";
import { migrate } from "drizzle-orm/neon-http/migrator";

const main = async () => {
  try {
    console.log("======= Applying Migration =======");
    await migrate(db, {
      migrationsFolder: "/db/migrations",
    });
    console.log("======= Migration Done =======");
  } catch (error: unknown) {
    console.error("Error during Migration:", error);
    process.exit(1);
  }
};

main();
