import { Module } from '@nestjs/common';
import { SmeHealthService } from './sme-health.service';
import { SmeHealthController } from './sme-health.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SmeHealth } from './entities/sme-health.entity';
import { SmeHealthResolver } from './sme-health.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([SmeHealth])],
  controllers: [SmeHealthController],
  providers: [SmeHealthService,SmeHealthResolver],
})
export class SmeHealthModule {}
