import prisma from '@/libs/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export const GET = async (response: NextApiResponse, request: NextApiRequest) => {
  try {
    const { userId } = request.query

    if (!userId || typeof userId !== 'string') {
      throw new Error('Invalid ID')
    }

    const existUser = await prisma.user.findUnique({ where: { id: userId } })

    const followers = await prisma.user.count({ where: { followingIds: { has: userId } } })

    return response.status(200).json({ ...existUser, followers })
  } catch (error) {
    console.log(error)
    return response.status(400)
  }
}