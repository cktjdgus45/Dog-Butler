import { getServerSession } from 'next-auth';
import { handler } from './api/auth/[...nextauth]/route';

export default async function Home() {
  const session = await getServerSession(handler)
  console.log(session)
}
