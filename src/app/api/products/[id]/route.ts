import products from '@/data/database.json'
import { NextResponse } from "next/server"

//versão atualizada do codigo em rota dinamica de cada produto 
export async function GET(request : Request ,{params} : {params: {id: string}}) {
    const {id} = params

    return NextResponse.json(products.filter((p) => p.id === Number(id) ))
}