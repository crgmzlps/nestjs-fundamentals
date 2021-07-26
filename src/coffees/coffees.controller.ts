import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}
  @Get()
  findAll(/* @Query() paginationQuery */) {
    // const { limit, offset } = paginationQuery;
    return this.coffeesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.coffeesService.findOne(id);
  }
  @Post()
  create(@Body() body) {
    return this.coffeesService.create(body);
  }
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body) {
    return this.coffeesService.update(id, body);
  }
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.coffeesService.remove(id);
  }
}
