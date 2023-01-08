import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { SwanlingService } from './swanling.service';
import { Swanling } from '@schemas/moment.schema';

const mockModel = {};

describe('SwanlingService', () => {
  let service: SwanlingService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SwanlingService,
        {
          provide: getModelToken(Swanling.name),
          useValue: mockModel,
        },
      ],
    }).compile();

    service = module.get<SwanlingService>(SwanlingService);
  });

  afterEach(async () => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createTestProfile', () => {
    // it('should be a callable', () => {
    //   expect(typeof service.createTestProfile).toBe('function');
    // });
    // describe('execution', () => {
    //   it('should return the right number of data corresponding for average users', async () => {});
    // });
  });
});
