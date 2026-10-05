import Hero from '@/sections/Hero';
import SelectedWork from '@/sections/SelectedWork';
import About from '@/sections/About';
import Services from '@/sections/Services';
import Technologies from '@/sections/Technologies';
import CertificatesSection from '@/sections/CertificatesSection';
import CTA from '@/sections/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <About />
      <Services />
      <Technologies />
      <CertificatesSection />
      <CTA />
    </main>
  );
}

