import { Exclude } from 'class-transformer';

export class FeaturesResponseDto {
  id: number;
  name: string;
  features: string[];
  cost: number;

  @Exclude()
  created_at: Date;
  @Exclude()
  updated_at: Date;

  constructor(partial: Partial<FeaturesResponseDto>) {
    Object.assign(this, partial);
  }
}
