import { AnsService } from './../../quiz/ans.service';
import { Question } from './../../data/entities/question.entity';
import { QuizService } from './../../quiz/quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { Module } from '@nestjs/common';
import { User } from './../../data/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User]), TypeOrmModule.forFeature([Question])],
  providers: [UsersService, QuizService, AnsService],
  exports: [UsersService, QuizService, AnsService],
})
export class CoreModule { }
