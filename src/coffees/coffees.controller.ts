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
} from '@nestjs/common';
import { Public } from '../common/decorators/public.decorator';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}
  @Get()
  @Public()
  // @SetMetadata('isPublic', true)
  async findAll(@Query() paginationQuery: PaginationQueryDto) {
    // await new Promise((res) => setTimeout(res, 5000));
    return this.coffeesService.findAll(paginationQuery);
  }
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe /* own pipe */) id: number) {
    return this.coffeesService.findOne(id);
  }
  @Post()
  async create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
  }
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateCoffeeDto: UpdateCoffeeDto,
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
