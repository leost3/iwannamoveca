import { MigrationsController } from '../controllers/migrations.controllers';

const migrationsController = new MigrationsController();

export function migrationsRoutes(app: any) {
  app.get('/api/migrations', migrationsController.getMigrations);
}