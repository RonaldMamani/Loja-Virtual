import products from '@/data/database.json'
import { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query

    const product = products.find(p => p.id === Number(id))
    res.status(200).json(product)
}