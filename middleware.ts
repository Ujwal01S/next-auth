
//middleware.ts should be outside of app at base level for it to work


export {default} from 'next-auth/middleware'

export const config = {
    matcher: ["/UserPost/:path*"]
}