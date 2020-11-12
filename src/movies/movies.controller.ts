import {
  Controller,
  Get,
  Param,
  Delete,
  Post,
  Body,
  Patch,
  Redirect,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get()
  getAll() {
    return this.movieService.getAll();
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.movieService.create(movieData);
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.movieService.getOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.movieService.deleteOne(id);
  }

  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() movieData: UpdateMovieDto) {
    return this.movieService.update(movieId, movieData);
  }
}
