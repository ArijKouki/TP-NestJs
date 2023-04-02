import { IsIn, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { ErrorMsg } from '../ErrorMsg';
import { TodoStatusEnum } from "../entities/TodoStatusEnum";

export class UpdateTodoDto{
  @IsOptional()
  @IsString()
  @MinLength(3, { message: ErrorMsg.MinLengthError })
  @MaxLength(10, { message: ErrorMsg.MaxLengthError })
  name: string;

  @IsOptional()
  @IsString()
  @MinLength(10, { message: ErrorMsg.MaxLengthError})
  description: string;
  @IsOptional()
  @IsIn(['actif', 'waiting', 'done'])
  status: TodoStatusEnum;
}