import CredentialsProvider from "next-auth/providers/credentials";

export const NEXT_AUTH= {
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: "Username", type: "text", placeholder:"Email" },
                password: { label: "Password", type: "password" , placeholder:"Password"}
            },
            async authorize(credentials: any) {
                console.log(credentials);
                // validate credentials
            
                return {
                    id: "1",
                    name:"Mohit Singh",
                    email: "mohit123@gmail.com"
                };
            },
        })
    ],
    secret:process.env.NEXTAUTH_SECRET,
    callbacks:{
        session: async ({session,token, user}:any)=>{
            console.log(session)
            if(session && session.user){
                session.user.id= token.sub
            }
            return session;
        }
    }

}