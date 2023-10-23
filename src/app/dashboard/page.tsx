import Dashboard from '@/components/Dashboard'
import { db } from '@/db'
import {getKindeServerSession} from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'
async function page() {
    const {getUser} = getKindeServerSession()
    const User = getUser()

    if (!User || !User.id) redirect('auth-callback?origin=dashboard')

    const dbUser = await db.user.findFirst({where:{
      id : User.id
    }})

    if(!dbUser) redirect('auth-callback?origin=dashboard')
    return <Dashboard/>

}

export default page