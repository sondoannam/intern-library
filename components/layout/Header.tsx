import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { APP_ROUTES } from '@/constants/routes';

const Header = () => {
  return (
    <header className='my-10 flex justify-between gap-5'>
      <Link href={APP_ROUTES.HOME}>
        <Image src='/icons/logo.svg' alt='logo' width={40} height={40} />
      </Link>
      
      <ul className='flex flex-row items-center gap-8'>
        <li></li>
      </ul>
    </header>
  );
};

export default Header;
