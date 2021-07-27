import { IsOptional, IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsString()
  @IsOptional()
  readonly description: string;

  @IsString({ each: true })
  readonly flavors: string[];
}
