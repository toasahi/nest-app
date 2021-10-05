import { NotFoundException } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './book';
import { BooksService } from './books.service';
// import { newBookInput } from './dto/newBook.input';

@Resolver((of)=>Book)
export class BooksResolver {

}
