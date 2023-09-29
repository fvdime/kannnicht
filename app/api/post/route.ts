import prisma from '@/libs/prisma';
import serverAuth from '@/libs/serverAuth';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function POST(request: NextApiRequest, response: NextApiResponse){

  const { currentUser } = await serverAuth(request, response)
  const {title, body} = await request.body

  const post = await prisma.post.create({data: {title, body, userId: currentUser.id}})

  return NextResponse.json(post, {status: 201})
}

export async function GET(request: NextApiRequest, response: NextApiResponse){
  const {userId} = request.query

  console.log(userId)
}