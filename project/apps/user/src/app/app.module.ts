import { Module } from '@nestjs/common';
import { BlogUserModule } from './blog-user/blog-user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ConfigUserModule } from '@project/config';

@Module({
  imports: [AuthenticationModule, BlogUserModule, ConfigUserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
