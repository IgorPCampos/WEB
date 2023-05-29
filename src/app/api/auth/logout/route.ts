import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const redirectURL = new URL('/', request.url)
    
    return NextResponse.redirect(redirectURL, {
        headers: {
            'Set-Cookie': `token=; Path=/; max-age=0`//Não da pra deletar o cookie entao coloca zero no max-age e pode deixar vazio o token
        }
    })
}