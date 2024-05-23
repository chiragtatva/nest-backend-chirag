import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { SmeHealthModel } from './models/sme-health.model';
import { SmeHealthService } from './sme-health.service';
import {
  CreateSmeHealthDto,
  CreateSmeHealthDto1,
} from './dto/create-sme-health.dto';
import GraphQLUpload = require('graphql-upload/GraphQLUpload.js');
import Upload = require('graphql-upload/Upload.js');

import { createWriteStream, mkdir } from 'fs';

@Resolver((of) => SmeHealthModel)
export class SmeHealthResolver {
  constructor(private smeHealthService: SmeHealthService) {}

  @Query((returns) => [SmeHealthModel])
  async smeApplications() {
    return this.smeHealthService.findAll();
  }

  @Mutation((returns) => SmeHealthModel)
  createSmeHealth(
    @Args('smeHealthInput') smeHealthInput: CreateSmeHealthDto1,
  ): Promise<SmeHealthModel> {
    return this.smeHealthService.create(smeHealthInput);
  }

  @Mutation((returns) => SmeHealthModel)
  async uploadFile(
    @Args({ name: 'files', type: () => [GraphQLUpload] })
    files: Upload.FileUpload[],
    @Args('smeHealthInput', { type: () => CreateSmeHealthDto1 })
    smeHealthInput: CreateSmeHealthDto1,
  ): Promise<SmeHealthModel> {
    const created = await this.smeHealthService.create({
      ...smeHealthInput,
      documents: [],
    });
    const docs: Array<string> = [];
    for await (const file of files) {
      const { createReadStream, filename } = file;
      await new Promise(async (resolve, reject) => {
        mkdir(`./uploads/${created.id}`, { recursive: true }, function (err) {
          if (err) {
            console.log('err', err);
            reject(false);
          }
        });
        createReadStream()
          .pipe(createWriteStream(`./uploads/${created.id}/${filename}`))
          .on('finish', () => {
            docs.push(`uploads/${created.id}/${filename}`);
            resolve(true);
          })
          .on('error', () => {
            reject(false);
          });
      });
    }

    created.documents = docs;
    await this.smeHealthService.updateExisted(created);
    // const updated = await this.smeHealthService.update(created.id, {
    //   documents: docs,
    // });

    return created;
  }
}
