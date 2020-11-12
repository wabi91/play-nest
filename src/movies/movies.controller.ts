import { Controller, Get, Param, Delete, Post, Body, Patch } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get()
  getAll() {
    return this.movieService.getAll();
  }

  @Post()
  create(@Body() movieData: any) {
    return this.movieService.create(movieData);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.movieService.getOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    console.log('id', id);
    return this.movieService.deleteOne(id);
  }

  @Patch(':id')
  patch(@Param('id') movieId: string, @Body() movieData) {
    return this.movieService.update(movieId, movieData);
  }
}
