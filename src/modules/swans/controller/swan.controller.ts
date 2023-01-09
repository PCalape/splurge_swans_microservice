import { SwanGuard } from '@modules/common/guards/swan-microservice.guard';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { API } from '../dto/output/api.output.dto';
import { SwanService as SwanService } from '../service/swan.service';

@Controller('swanling')
export class SwanController {
  constructor(private readonly swanService: SwanService) {}

  @Get('/health-check')
  @UseGuards(SwanGuard)
  checkAPI(): API {
    return {
      message: 'Hello from Swan Service!',
    };
  }
}
