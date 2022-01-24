import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findall(): User {
        let user: User = { name: "Janitha", age: 31 };
        return user;
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
