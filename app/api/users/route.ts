import prisma from '@/libs/prisma'
import { NextApiResponse } from 'next'

export const GET = async (response: NextApiResponse) => {
  try {
    const users = await prisma.user.findMany({ orderBy: { createdAt: 'desc' }})

    return response.status(200).json(users)
  } catch (error) {
    console.log(error)
    return response.status(400)
  }
}