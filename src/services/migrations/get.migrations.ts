import * as dotenv from 'dotenv';
import migrationRunner from 'node-pg-migrate';
import { join } from "node:path";
dotenv.config({ path: '.env.local' })

export class MigrationsService {
  async getMigrations() {
    const migration = await migrationRunner({
      databaseUrl: process.env.DATABASE_URL || '',
      dir: join('src', 'infra', 'migrations'),
      direction: 'up',
      migrationsTable: 'pgmigrations',
      dryRun: true
    })
    return migration
  }

  async postMigrations() {
    const migration = await migrationRunner({
      databaseUrl: process.env.DATABASE_URL || '',
      dir: join('src', 'infra', 'migrations'),
      direction: 'up',
      migrationsTable: 'pgmigrations',
    })

    return migration
  }
}