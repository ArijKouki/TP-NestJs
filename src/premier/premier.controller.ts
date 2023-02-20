import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";

@Controller('premier')
export class PremierController {
  @Get()
  get(){
    console.log('get');
    return 'get';
  }

  @Post()
  post(){
    console.log('post');
    return 'post';
  }

  @Delete()
  delete(){
    console.log('delete');
    return 'delete';
  }

  @Put()
  put(){
    console.log('put');
    return 'put';
  }

  @Patch()
  patch(){
    console.log('patch');
    return 'patch';
  }
}
