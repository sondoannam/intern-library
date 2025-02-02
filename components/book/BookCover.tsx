// import { IKImage } from 'imagekitio-next';
import Image from 'next/image';

import { cn } from '@/lib/utils';
// import config from '@/lib/config';

import BookCoverSvg from './BookCoverSvg';

type BookCoverVariant = 'extraSmall' | 'small' | 'medium' | 'regular' | 'wide';

const variantStyles: Record<BookCoverVariant, string> = {
  extraSmall: 'book-cover_extra_small',
  small: 'book-cover_small',
  medium: 'book-cover_medium',
  regular: 'book-cover_regular',
  wide: 'book-cover_wide',
};

interface BookCoverProps {
  className?: string;
  variant?: BookCoverVariant;
  coverColor: string;
  coverImage: string;
}

const BookCover = ({
  className,
  variant = 'regular',
  coverColor = '#012B48',
  coverImage = 'https://placehold.co/400x600.png',
}: BookCoverProps) => {
  return (
    <div className={cn('relative transition-all duration-300', variantStyles[variant], className)}>
      <BookCoverSvg coverColor={coverColor} />

      <div className='absolute z-10' style={{ left: '12%', width: '87.5%', height: '87.2%' }}>
        <Image src={coverImage} alt='Book cover' fill className='rounded-sm object-fill' />

        {/* <IKImage
          path={coverImage}
          urlEndpoint={config.env.imagekit.urlEndpoint}
          alt='Book cover'
          fill
          className='rounded-sm object-fill'
          loading='lazy'
          lqip={{ active: true }}
        /> */}
      </div>
    </div>
  );
};

export default BookCover;
