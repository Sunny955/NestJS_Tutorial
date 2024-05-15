import { Module } from '@nestjs/common';
import {UserController} from './user.controller';
import {AlbumController} from './album.controller';

@Module({
  controllers: [UserController,AlbumController],
})
export class AppModule {}
