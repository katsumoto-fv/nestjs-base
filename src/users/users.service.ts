import { Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
	constructor(private prisma: PrismaService) {}

	async user(
	id: number,
	): Promise<User | null> {
		return this.prisma.user.findUnique({
			where: { id }
		});
	}

	async users(): Promise<User[]> {
		return this.prisma.user.findMany();
	}

	async createUser(data: Prisma.UserCreateInput): Promise<User> {
		return this.prisma.user.create({
			data,
		});
	}
}
