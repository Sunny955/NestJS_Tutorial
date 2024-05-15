import {Controller, Get, Req,HttpCode, Post,HttpStatus, Res,Header,Redirect} from "@nestjs/common";
import { Request, Response } from "express";

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
        return "Sab theek!";
    }
}