import { PartialType } from '@nestjs/mapped-types';
import { CreateSmeHealthDto } from './create-sme-health.dto';

export class UpdateSmeHealthDto extends PartialType(CreateSmeHealthDto) {}
