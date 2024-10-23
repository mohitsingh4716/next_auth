import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

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
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
          }),
          GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || "",
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
    },
    //  this wil allow you create a separate page for sign in

    // pages:{
    //     signIn: "/signin"
    // }

}