import { getServerSession } from "next-auth";


export async function POST(req) {
    try {
        
        const body =  await req.json();
        console.log(body);
        const session = await getServerSession(authOptions)


    } catch (error) {
        
    }
    
}