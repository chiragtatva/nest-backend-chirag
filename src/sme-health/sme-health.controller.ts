import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { SmeHealthService } from './sme-health.service';
import { CreateSmeHealthDto } from './dto/create-sme-health.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('sme-health')
export class SmeHealthController {
  constructor(private readonly smeHealthService: SmeHealthService) {}

  @Post()
  @UseInterceptors(
    FilesInterceptor('files[]', 20, {
      storage: diskStorage({
        destination: (req, file, cb) => {
          cb(null, 'uploads');
        },
        filename: (req, file, cb) => {
          cb(null, Date.now() + '-' + file.originalname);
        },
      }),
    }),
  )
  create(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() createSmeHealthDto: CreateSmeHealthDto,
  ) {
    createSmeHealthDto.documents = files.map((file) => file.path);
    return this.smeHealthService.create(createSmeHealthDto);
  }

  @Get()
  findAll() {
    return this.smeHealthService.findAll();
  }

}
