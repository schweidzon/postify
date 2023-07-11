import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { UsersService } from 'src/modules/users/users.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    const { authorization } = request.headers;

    try {
      const token = authorization?.split(' ')[1];
     
      const data = this.authService.checkToken(token);

   
      const user = await this.usersService.findUserById(Number(data.sub));
    
      request.user = user;
    } catch (error) {
      console.log(error);
      return false;
    }
    return true;
  }
}
