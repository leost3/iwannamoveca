import { Express } from 'express';
import { migrationsRoutes } from './migration.routes';
import { statusRoutes } from './status.routes';

export function registerRoutes(app: Express) {
  statusRoutes(app)
  migrationsRoutes(app)
}