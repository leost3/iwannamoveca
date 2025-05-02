import { StatusController } from '../controllers/status.controller';

const statusController = new StatusController();

export function statusRoutes(app: any) {
  app.get('/api/status', statusController.checkStatus);
}