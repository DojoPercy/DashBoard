import connectToDb from '@/database/Db';
import User from '@/models/userSchema';
import GoogleProvider from 'next-auth/providers/google'
import { headers } from '../../../../../next.config';
import NextAuth from 'next-auth/next';


const authOptions = {
    providers:[
        GoogleProvider(
            {
                clientId: '145639050344-8rrbu35vmeofah0tsfrja3r2nar2d30n.apps.googleusercontent.com' ,
                clientSecret:'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' 
            }
        )
    ],
    callbacks:{
        async signIn({user, account}){
            if(account.provider === 'google'){
                const {name, email} = user;
                try {
                    await connectToDb();
                    const isUserExists = await User.findOne({email});

                    if(!isUserExists){
                        const res = await fetch("/src/app/api/user",{
                        method: POST,
                        headers: {
                            'content-Type': 'application/json'
                        },
                        body: JSON.stringify({name, email})}
                        )
                        if(res.success){
                            return user;
                        }
                    }

                } catch (error) {
                    console.log(error)
                }
            }
            return user;
        }
}
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};