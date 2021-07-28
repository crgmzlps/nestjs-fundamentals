import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
/* @UsePipes(ValidationPipe) */
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}
  @Get()
  async findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.coffeesService.findAll(paginationQuery);
  }
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.coffeesService.findOne(id);
  }
  @Post()
  /* @UsePipes(ValidationPipe) */
  async create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
  }
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body(/* ValidationPipe */) updateCoffeeDto: UpdateCoffeeDto,
  ) {
    return this.coffeesService.update(id, updateCoffeeDto);
  }
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number) {
    return this.coffeesService.remove(id);
  }
  @Post('recommend')
  async recommendCoffee(@Body('id') id: number) {
    const coffee = await this.coffeesService.findOne(id);
    await this.coffeesService.recommendCoffee(coffee);
    return { message: 'recommendation done' };
  }
}
