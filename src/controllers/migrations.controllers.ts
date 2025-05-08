import { Request, Response } from 'express';
import { MigrationsService } from '../services/migrations.service';

export class MigrationsController {
  private migrationsService: MigrationsService;

  constructor() {
    this.migrationsService = new MigrationsService();
  }

  getMigrations = async (req: Request, res: Response): Promise<void> => {
    try {
      const migrations = await this.migrationsService.getMigrations();
      res.status(200).json(migrations);
    } catch (error) {
      res.status(500).json({ status: 'error', message: 'Migrations  check failed' });
    }
  };

  postMigrations = async (req: Request, res: Response): Promise<void> => {
    try {
      const migrations = await this.migrationsService.postMigrations();
      res.status(200).json(migrations);
    } catch (error) {
      res.status(500).json({ status: 'error', message: 'Migrations  check failed' });
    }
  };
}