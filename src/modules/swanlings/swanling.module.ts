import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SwanlingController } from './controller/swanling.controller';
import { SwanlingService } from './service/swanling.service';
import { SwanlingSchema, Swanling } from '@schemas/moment.schema';
import { SwanlingRepository } from './repository/swanling.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Swanling.name, schema: SwanlingSchema }])],
  providers: [SwanlingService, SwanlingRepository],
  controllers: [SwanlingController],
})
export class SwanlingModule {}
