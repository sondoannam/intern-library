"use client";

import Image from 'next/image';

import { Button } from '../ui/button';

const BorrowBookButton = () => {
  return (
    <Button className='book-overview_btn'>
      <Image src='/icons/book.svg' alt='book' width={20} height={20} />

      <p className='font-bebas-neue text-xl text-dark-100'>Borrow Book</p>
    </Button>
  );
};

export default BorrowBookButton;
