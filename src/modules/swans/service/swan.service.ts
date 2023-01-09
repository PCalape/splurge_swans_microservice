import { Injectable, Logger } from '@nestjs/common';
import { SwanRepository } from '../repository/swan.repository';

@Injectable()
export class SwanService {
  constructor(private readonly swanRepository: SwanRepository) {}
  private logger: Logger = new Logger(this.constructor.name);
}
