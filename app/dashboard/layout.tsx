// route-group/layout.js or route-group/layout.tsx
import React from 'react';

export default function RouteGroupLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className='dash-main'>
        {children}
      </main>
    </>
  );
}

