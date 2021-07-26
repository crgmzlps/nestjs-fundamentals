import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Res() response: Response) {
    response.status(200).send('This action returns all coffees');
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
  @HttpCode(HttpStatus.GONE) //410
  create(@Body() body) {
    return body;
  }
}
