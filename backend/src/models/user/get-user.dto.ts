import { IsString, Length, Matches, IsOptional, IsEmail } from 'class-validator';

export class GetUserDTO {

  userName: string;

  email: string;

  isAdmin: boolean;
}
