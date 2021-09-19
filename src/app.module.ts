import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats.controller';
import { DogController } from './dog/dog.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: 'schema.graphql'
    }),
    RecipesModule,
  ],
})
export class AppModule {}

// @Module({
//   imports: [],
//   controllers: [AppController,CatsController, DogController],
//   providers: [AppService],
// })
// export class AppModule {}
