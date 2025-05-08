import { Express } from 'express';
import { MigrationsController } from '../controllers/migrations.controllers';
const migrationsController = new MigrationsController();

export function migrationsRoutes(app: Express) {
  app.get('/api/migrations', migrationsController.getMigrations);
  app.post('/api/migrations', migrationsController.postMigrations);
}