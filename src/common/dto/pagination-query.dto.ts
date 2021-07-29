import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsPositive()
  @IsOptional()
  limit: number;

  @IsOptional()
  @IsPositive()
  offset: number;
}
