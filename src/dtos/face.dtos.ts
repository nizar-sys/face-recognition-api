import { IsNotEmpty, IsString } from 'class-validator';

export class AddFaceDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public image: string;
}

export class DetectFaceDto {
  @IsString()
  @IsNotEmpty()
  public image: string;
}
