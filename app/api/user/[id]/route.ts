import { verifyJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import { error } from "console";


export async function GET(request:Request, {params}:{params:{id:number}}) {
    // step 3 protecting the route here we are protecting this route so we check token here
    
    const accessToken = request.headers.get("authorization")
    if(!accessToken || !verifyJwt(accessToken)){
        return new Response(
            JSON.stringify({
                error:"unauthorized",
            }),
            {
                status:401,

            }
        );

    }
    const userPosts = await prisma.post.findMany({
        where:{authorId: +params.id},
        include:{
            author: {
                select: {
                    email:true,
                    name:true,
                },
            },
        },
    });


    return new Response(JSON.stringify(userPosts));
}