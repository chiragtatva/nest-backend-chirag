import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SmeHealthModel {
  @Field((type) => Int)
  id?: number;

  @Field()
  companyUEN: string;

  @Field()
  companyName: string;

  @Field()
  fullName: string;

  @Field()
  position: string;

  @Field()
  email: string;

  @Field()
  reEmail: string;

  @Field({ nullable: false })
  contact: string;

  @Field((type) => [String], { nullable: true })
  documents: string[];

  @Field()
  isConditionsAccepted: boolean;
}
