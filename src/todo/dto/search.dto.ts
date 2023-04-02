import { TodoStatusEnum } from "../entities/TodoStatusEnum";
import { IsIn, IsOptional } from "class-validator";

export class SearchDTO {
  @IsOptional()
  critere: string;
  @IsOptional()
  @IsIn(['actif', 'waiting', 'done'])
  status: TodoStatusEnum;
}