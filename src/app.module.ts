import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats.controller';
import { DogController } from './dog/dog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { RecipesModule } from './recipes/recipes.module';
import { ThresholdsModule } from './thresholds/thresholds.module';
import { UserModule } from './user/user.module';
import { BooksModule } from './books/books.module';

// @Module({
//   imports: [
//     GraphQLModule.forRoot({
//       playground: true,
//       autoSchemaFile: 'schema.graphql',
//     }),
//     RecipesModule,
//     ThresholdsModule,
//   ],
// })
// export class AppModule {}

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: 'schema.graphql',
    }),
    BooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// @Module({
//   imports: [],
//   controllers: [AppController,CatsController, DogController],
//   providers: [AppService],
// })
// export class AppModule {}
