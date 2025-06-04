import Hero from '@/Components/Sections/Hero';
import Partners from '@/Components/Sections/Partners';
import AboutUs from '@/Components/Sections/About';
import Services from '@/Components/Sections/Services';
import Philosophy from '@/Components/Sections/Philosophy';
import News from '@/Components/Sections/News';
import Pricing from '@/Components/Sections/Prices';
import Clients from '@/Components/Sections/Clients';

export default function Home() {
  return (
    <main className='flex flex-col gap-[110px] text-white'>
      <Hero />
      <Partners />
      <AboutUs />
      <Services />
      {/* <Philosophy /> */}
      {/* <News /> */}
      {/* <Pricing /> */}
      <Clients />
    </main>
  );
}

