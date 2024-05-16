import { Controller, Post, Body, Get, Param, Put, Delete } from "@nestjs/common";
import { CreateUserDto,UpdateUserDto } from "./dto";

let USERS = [];

// CRUD functionality
@Controller("/user")
export class UsersController {

    @Post("/create-user")
    addUser(@Body() createUserDto: CreateUserDto) {
        USERS.push(createUserDto);
        return {
            message:"User Added",
            data: createUserDto
        }
    }

    @Get("/all-users")
    getUsers() {
        return {
            message:"Success",
            data:USERS
        }
    }

    @Get("/:id")
    getUser(@Param('id') params: string) {

        const user = USERS.find((user) => user.id === params)
        return {
            message:"Success",
            data:user
        }
    }

    @Put("/:id")
    updateUser(@Param('id') param: string, @Body() updateUserDto: UpdateUserDto) {
        const user = USERS.find((user) => user.id === param)
        if(updateUserDto.name) {
            user.name = updateUserDto.name;
        }

        if(updateUserDto.age) {
            user.age = updateUserDto.age;
        }

        return {
            message:"Success",
            data: user
        }
    }

    @Delete("/:id")
    deleteUser(@Param('id') param) {
        USERS = USERS.filter((user) => user.id !== param);
        return {
            message:"Success",
            data:USERS
        }
    }

}