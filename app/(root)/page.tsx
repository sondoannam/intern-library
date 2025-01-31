import BookList from '@/components/book/BookList';
import BookOverview from '@/components/book/BookOverview';

export default function Home() {
  return (
    <>
      <BookOverview />

      <BookList />
    </>
  );
}
