"use client";

import Cta from '@/components/interface/cta';
import Form from '@/components/interface/form';
import Hero from '@/components/interface/hero';
import Projects from '@/components/interface/proyects';
import Quote from '@/components/interface/quote';

export default function Home() {
  return (
    <section className='overflow-hidden'>
      <Hero />
      <Quote />
      <Cta />
      <Projects />
      <Form />
    </section>
  );
}
