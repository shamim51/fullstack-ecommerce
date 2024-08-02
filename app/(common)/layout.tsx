import React from 'react';
import NavBar from '../../components/NavBar';
import NavBarV2 from '@/components/NavBarV2';
import { showUser } from '@/actions/auth';

export default async function RouteGroupLayout({ children }: { children: React.ReactNode }) {
  const user = await showUser();
  return (
    <>
      {/* <NavBar /> */}
      <NavBarV2 user={user} />
      <main className='font-jost'>
        {children}
      </main>
    </>
  );
}

