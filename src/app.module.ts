import { Module } from '@nestjs/common';
import {UserController} from './user.controller';
import {AlbumController} from './album.controller';
import {UsersController} from './users.controller';

@Module({
  controllers: [UserController,AlbumController,UsersController],
})
export class AppModule {}
