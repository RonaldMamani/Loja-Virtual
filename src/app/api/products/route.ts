import { NextApiRequest, NextApiResponse } from 'next';
import products from '@/data/database.json'
import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json(products)
}