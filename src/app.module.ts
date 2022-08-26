import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications/notifications.controller';
import { NotificationsModule } from './notifications/notifications.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [NotificationsModule, UsersModule],
  controllers: [NotificationsController],
})
export class AppModule {}
