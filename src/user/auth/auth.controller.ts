import { Body, Controller, Post, Put } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from '../dtos/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  signup(@Body() body: RegisterDto) {
    return this.authService.register(body);
  }
  @Post('/login')
  signin(@Body() body: LoginDto) {
    return this.authService.login(body);
  }
}
