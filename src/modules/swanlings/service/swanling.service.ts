import { Injectable, Logger } from '@nestjs/common';
import { SwanlingRepository } from '../repository/swanling.repository';

@Injectable()
export class SwanlingService {
  constructor(private readonly swanlingRepository: SwanlingRepository) {}
  private logger: Logger = new Logger(this.constructor.name);
}
