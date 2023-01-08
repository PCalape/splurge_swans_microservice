import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Swanling, SwanlingDocument } from '@schemas/moment.schema';
import { Model } from 'mongoose';

@Injectable()
export class SwanlingRepository {
  constructor(@InjectModel(Swanling.name) private swanlingModel: Model<SwanlingDocument>) {}
}
