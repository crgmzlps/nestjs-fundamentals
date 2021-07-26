import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This action returns all coffees';
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return `This action returns #${id} coffee`;
  }
  @Get('flavors')
  flavors() {
    return 'This action returns all coffees flavors';
  }
}
