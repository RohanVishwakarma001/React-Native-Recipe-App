import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema.js";
import { ENV } from "./env.config.js";

const sql = neon(ENV.DB_URL);
export const db = drizzle(sql, { schema });
