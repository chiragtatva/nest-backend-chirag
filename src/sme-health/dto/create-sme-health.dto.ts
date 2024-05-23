import { Field, InputType } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateSmeHealthDto {
  @IsString()
  companyUEN: string;

  @IsString()
  companyName: string;

  @IsString()
  fullName: string;

  @IsString()
  position: string;

  @IsEmail()
  email: string;

  @IsEmail()
  reEmail: string;

  @IsNotEmpty()
  @IsString()
  contact: string;

  @IsArray()
  @IsOptional()
  documents: string[];

  @IsBoolean()
  @Transform(({ value }) => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return value;
  })
  isConditionsAccepted: boolean;
}

@InputType()
export class CreateSmeHealthDto1 {
  @Field()
  @IsString()
  companyUEN: string;

  @Field()
  @IsString()
  companyName: string;

  @Field()
  @IsString()
  fullName: string;

  @Field()
  @IsString()
  position: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsEmail()
  reEmail: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  contact: string;

  @Field((type) => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  documents: string[];

  @Field()
  @IsBoolean()
  isConditionsAccepted: boolean;
}
