import products from '@/data/database.json'
import { NextResponse } from 'next/server';

//Versão 13 do Next feita utilizando para mostrar informações json na tela

export async function GET() {
    return NextResponse.json(products)
}
