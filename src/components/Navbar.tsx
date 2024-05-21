'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';
import ColorButton from './ui/ColorButton';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Navbar() {
    const pathName = usePathname();
    const { data: session } = useSession();
    console.log(session);
    const user = session?.user;
    return (
        <div className='flex justify-between items-center px-6'>
            <Link href='/' aria-label='Home'>
                <h1 className='text-3xl font-bold'>강아지 집사</h1>
            </Link>
            <nav>
                <ul className='flex gap-4 items-center p-4'>
                    <li>
                        {session ? (
                            <ColorButton text='Sign out' onClick={() => signOut()} />
                        ) : (
                            <ColorButton text='Sign in' onClick={() => signIn()} />
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );
}
