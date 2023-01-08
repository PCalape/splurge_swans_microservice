import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from '@modules/common/common.module';
import { SwanlingModule } from './swanlings/swanling.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_CONNECTION_URL'),
      }),
      inject: [ConfigService],
    }),
    CommonModule,
    SwanlingModule,
  ],
})
export class AppModule {}
