import { DatabaseModule } from './../database/database.module';
import { SendNotification } from '../../application/use-cases/send-notification';
import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { CancelNotification } from 'src/application/use-cases/cancel-notification';
import { CountRecipientNotifications } from 'src/application/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from 'src/application/use-cases/get-recipient-notifications';
import { ReadNotification } from 'src/application/use-cases/read-notification';
import { UnreadNotification } from 'src/application/use-cases/unread-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
