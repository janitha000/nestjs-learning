import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @Get()
    findall(): User[] {
        return this.userService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string): User {
        let user: User = { name: "Vindya", age: 31, id };
        return user;
    }

    @Get('status')
    findStatus(): string {
        return 'All Users Status';
    }

    @Post()
    create(@Body() createUser: User) {
        return createUser;
    }
}

export interface User {
    id?: string
    name: string,
    age: number;
}
