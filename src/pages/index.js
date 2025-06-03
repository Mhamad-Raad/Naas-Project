import Hero from '@/Components/Sections/Hero';
import Partners from '@/Components/Sections/Partners';

export default function Home() {
  return (
    <main className='flex flex-col gap-[110px] text-white'>
      <Hero />
      <Partners />
    </main>
  );
}

