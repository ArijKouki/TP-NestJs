import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";

@Controller('premier')
export class PremierController {
  @Get()
  get(){
    return 'get';
  }

  @Post()
  post(){
    return 'post';
  }

  @Delete()
  delete(){
    return 'delete';
  }

  @Put()
  put(){
    return 'put';
  }

  @Patch()
  patch(){
    return 'patch';
  }
}
