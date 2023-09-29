import bcrypt from 'bcrypt';
import prisma from '@/libs/prisma';
import { NextResponse } from 'next/server';

export async function POST(request: Request){
  const {username, email, password} = await request.json()

  const hashedPassword = await bcrypt.hash(password, 12)

  const user = await prisma.user.create({
    data: {username, email, hashedPassword}
  })

  return NextResponse.json(user)
}