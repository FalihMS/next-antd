// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  title: string
  key: string
  children?: []
}[]

const coa = [
  {
      title: 'parent 0',
      key: '0-0',
      children: [
          {
              title: 'parent 1',
              key: '0-1',
              children: [
                  { title: 'leaf 1-0', key: '0-1-0', isLeaf: true },
                  { title: 'leaf 1-1', key: '0-1-1', isLeaf: true },
              ],
          },
          { title: 'leaf 0-0', key: '0-0-0', isLeaf: true },
          { title: 'leaf 0-1', key: '0-0-1', isLeaf: true },
          { title: 'leaf 0-2', key: '0-0-2', isLeaf: true },
          { title: 'leaf 0-3', key: '0-0-3', isLeaf: true },
      ],
  },
  {
      title: 'parent 2',
      key: '0-2',
      children: [
          { title: 'leaf 2-0', key: '0-2-0', isLeaf: true },
          { title: 'leaf 2-1', key: '0-2-1', isLeaf: true },
      ],
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json(coa)
}
