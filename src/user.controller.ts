import {Controller, Get, Req,HttpCode, Post,HttpStatus, Res,Header,Redirect, Param, Query, Body} from "@nestjs/common";
import { Request, Response } from "express";

interface VideoParams {
    id: number;
    name: string;
}

interface VideoQuery {
    name:string;
    type:string;
    color:string;
}

interface VideoDTO {
    name:string;
    tag:string;
}

@Controller("/users")
export class UserController {

    @Get("/profile")
    @HttpCode(HttpStatus.NOT_ACCEPTABLE)
    @Header("Cache-Control","none")
    @Redirect("/albums")
    // after adding @Res() it's your duty to give the response back and not the Nest
    // In general and good cases it's adivceable not to use Res object 
    // Adding passthrough:true, it means the handling of response will be seen by Nest
    getProfile(@Req() req : Request, @Res({passthrough:true}) res: Response) {
        // return {
        //     hello:"Aur be!"
        // }
        // console.log(req);
        res.status(200);
        const rn = ~(Math.random()*10 +1);
        if(rn < 5) {
            return {
                url:"/albums",
                statusCoode: 302
            }
        } else {
            return {
                url:"/users/create-profile",
                statusCoode: 302
            }
        }

    }

    @Post("/create-profile")
    @HttpCode(201)
    createProfile(@Req() req: Request) {
        console.log(req.body);
        return "Sab theek!";
    }


    @Get("/videos/:id/:name")
    getVideos(@Param() params: VideoParams) {
        console.log(params);
        return `Success!`;
    }

    @Get("/videos/query")
    getVideosQuery(@Query() query:Record<string,any>) {
        console.log(query);
        return `Getting videos for queries`
    }

    @Post("/video")
    getUserVideo(@Body() requestData:VideoDTO) {
        console.log(requestData);
        return {
            success:"true"
        }
    }
}