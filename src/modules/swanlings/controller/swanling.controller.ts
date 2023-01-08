import { SwanlingGuard } from '@modules/common/guards/swanling-microservice.guard';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { API } from '../dto/output/api.output.dto';
import { SwanlingService } from '../service/swanling.service';

@Controller('swanling')
export class SwanlingController {
  constructor(private readonly swanlingService: SwanlingService) {}

  @Get('/health-check')
  @UseGuards(SwanlingGuard)
  checkAPI(): API {
    return {
      message: 'Hello from Swanling Service!',
    };
  }
}
