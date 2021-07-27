import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeesRepository: Repository<Coffee>,
  ) {}

  async findAll() {
    return this.coffeesRepository.find({
      relations: ['flavors'],
    });
  }
  async findOne(id: number) {
    const coffee = await this.coffeesRepository.findOne(id, {
      relations: ['flavors'],
    });
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }
  async create(createCoffeeDto: CreateCoffeeDto) {
    const coffee = this.coffeesRepository.create(createCoffeeDto);
    return this.coffeesRepository.save(coffee);
  }
  async update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    const coffee = await this.coffeesRepository.preload({
      id: id,
      ...updateCoffeeDto,
    });
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return this.coffeesRepository.save(coffee);
  }
  async remove(id: number) {
    const coffee = await this.findOne(id);
    await this.coffeesRepository.remove(coffee);
  }
}
