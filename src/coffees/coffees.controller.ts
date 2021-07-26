import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `This action returns all coffees. Limit: ${limit}, Offset: ${offset}`;
  }
  @Get('flavors')
  flavors() {
    return 'This action returns all coffees flavors';
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return `This action returns #${id} coffee`;
  }
  @Post()
  create(@Body() body) {
    return body;
  }
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body) {
    return `This action updates #${id} coffee`;
  }
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return `This action removes #${id} coffee`;
  }
}
