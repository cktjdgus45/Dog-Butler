import { handler } from '@/app/api/auth/[...nextauth]/route';
import SignIn from '@/components/SingIn';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Signin',
    description: 'Signup or Login to Instantgram',
};

type Props = {
    searchParams: {
        callbackUrl: string;
    };
};

export default async function SignPage({
    searchParams: { callbackUrl },
}: Props) {
    const session = await getServerSession(handler);
    if (session) {
        redirect('/');
    }

    const providers = (await getProviders()) ?? {};

    return (
        <section className='flex justify-center mt-24'>
            <SignIn providers={providers} callbackUrl={callbackUrl ?? '/'} />
        </section>
    );
}
