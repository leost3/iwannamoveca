import { Request, Response } from 'express';
import { StatusService } from '../services/status.service';

export class StatusController {
  private statusService: StatusService;

  constructor() {
    this.statusService = new StatusService();
  }

  checkStatus = async (req: Request, res: Response): Promise<void> => {
    try {
      const statusInfo = await this.statusService.getStatusInfo();
      res.status(200).json(statusInfo);
    } catch (error) {
      res.status(500).json({ status: 'error', message: 'Status check failed' });
    }
  };
}