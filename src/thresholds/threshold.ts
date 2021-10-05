import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Threshold {
  @Field((type) => ID)
  id: string;
}
