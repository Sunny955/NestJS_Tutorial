import {Controller, Get, Req} from "@nestjs/common";
import { Request } from "express";

@Controller("/albums")
export class AlbumController {

    @Get()
    getAlbum(@Req() req : Request) {
        return 'Photo';
    }
}