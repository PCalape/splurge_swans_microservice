import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Swan, SwanDocument } from '@schemas/swan.schema';
import { Model } from 'mongoose';

@Injectable()
export class SwanRepository {
  constructor(@InjectModel(Swan.name) private swanModel: Model<SwanDocument>) {}
}
