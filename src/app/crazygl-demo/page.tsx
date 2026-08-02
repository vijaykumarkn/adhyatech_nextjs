'use client';

import CrazyGLParticleSlider from '@/components/CrazyGLParticleSlider';

export default function CrazyGLDemo() {
  const slides = [
    {
      heading: 'CrazyGL',
      subheading: 'A cinematic particle slider experience',
      ctaLabel: 'Get Started',
      ctaHref: '#',
    },
    {
      heading: 'Particle Morph',
      subheading: 'Watch particles morph between beautiful formations',
      ctaLabel: 'Learn More',
      ctaHref: '#',
    },
    {
      heading: 'Interactive',
      subheading: 'Move your cursor to interact with the particles',
      ctaLabel: 'Try It',
      ctaHref: '#',
    },
  ];

  return (
    <CrazyGLParticleSlider
      slides={slides}
      autoplaySeconds={5}
      particleCount={8000}
      particleSize={1.8}
      accentColor="#D00000"
      baseColor="#ffffff"
      bgTop="#08080C"
      bgBottom="#0a0e1a"
    />
  );
}
