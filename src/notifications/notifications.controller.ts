import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notificate.dto';

@Controller('notifications')
export class NotificationsController {
	@Get()
	findAll(): string {
		return 'This action returns all cats';
	}

	@Get(':id')
	findOne(@Param() params): string {
		console.log(params.id);
		return `This action returns a #${params.id} cat`;
	}

	@Post()
	async create(@Body() createNotificationDto: CreateNotificationDto) {
		return 'This action adds a new cat';
	}

}
