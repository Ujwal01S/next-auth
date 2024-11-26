import { NextApiRequest } from "next"



export const GET = (req:NextApiRequest) => {
    return new Response('hello')
}