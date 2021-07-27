import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity('coffees')
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column({ default: 0 })
  recommendations: number;

  @ManyToMany((type) => Flavor, (favor) => favor.coffees, {
    cascade: ['insert', 'update'],
  })
  @JoinTable()
  flavors: Flavor[];
}
