import type { NextApiRequest, NextApiResponse } from 'next'

import { CreateUser, getUser } from '@/controllers/databases/crud'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    switch (req.method) {
      case 'GET': getUser(res);
      case 'POST': CreateUser(res, req);
    }

  } catch (err) {
    if (err) throw err
  }
}
