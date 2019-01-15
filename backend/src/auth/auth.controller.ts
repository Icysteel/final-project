import { UserLoginDTO } from '../models/user/user-login.dto';
import { AdminGuard } from './../common';
import { UserRegisterDTO } from '../models/user/user-register.dto';
import { UsersService } from '../common/core/users.service';
import { AuthService } from './auth.service';
import { Get, Controller, UseGuards, Post, Body, BadRequestException, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AuthController {

  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) { }

  @Get()
  @UseGuards(AuthGuard(), AdminGuard)
  root(): string {
    return 'root';
  }

  @Post('login')
  async sign(@Body(new ValidationPipe({
    transform: true,
    whitelist: true,
  })) user: UserLoginDTO): Promise<string> {
    const token = await this.authService.signIn(user);
    if (!token) {
      throw new BadRequestException('Wrong credentials!');
    }

    return token;
  }

  @Post('register')
  async register(
    @Body(new ValidationPipe({
      transform: true,
      whitelist: true,
    }))
    user: UserRegisterDTO): Promise<string> {

    try {
      await this.usersService.registerUser(user);
      return 'saved';
    } catch (error) {
      await new Promise((resolve, reject) => {
        resolve();
      });

      return (error.message);
    }
  }

}
