import { Express } from 'express';
import { statusRoutes } from './status.routes';

export function registerRoutes(app: Express) {
  statusRoutes(app)
}