import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { ErrorMsg } from "../ErrorMsg";

export class AddTodoDto{
  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: ErrorMsg.MinLengthError })
  @MaxLength(10, { message: ErrorMsg.MaxLengthError })
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10, { message: ErrorMsg.MaxLengthError })
  description: string;
}