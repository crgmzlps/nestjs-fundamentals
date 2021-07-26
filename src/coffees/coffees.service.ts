import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['Chocolate', 'Vanilla'],
    },
  ];
  findAll() {
    return this.coffees;
  }
  findOne(id: number) {
    const coffee = this.coffees.find((coffee) => coffee.id === id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }
  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
    return createCoffeeDto;
  }
  update(id: number, updateCoffeeDto: any) {
    const coffeeIdx = this.coffees.findIndex((coffee) => coffee.id === id);
    if (coffeeIdx < 0) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    const coffee = { ...this.coffees[coffeeIdx], ...updateCoffeeDto };
    this.coffees[coffeeIdx] = coffee;
    return coffee;
  }
  remove(id: number) {
    const coffeeIdx = this.coffees.findIndex((coffee) => coffee.id === id);
    if (coffeeIdx < 0) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    this.coffees.splice(coffeeIdx, 1);
  }
}
