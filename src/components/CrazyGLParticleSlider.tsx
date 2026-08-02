'use client';

import { useState, useEffect } from 'react';
import SphereParticles from './SphereParticles';

interface Slide {
  heading: string;
  subheading: string;
  ctaLabel?: string;
  ctaHref?: string;
}

interface CrazyGLParticleSliderProps {
  slides?: Slide[];
  autoplaySeconds?: number;
  particleCount?: number;
  particleSize?: number;
  baseColor?: string;
  accentColor?: string;
  bgTop?: string;
  bgBottom?: string;
  headingFontFamily?: string;
}

const defaultSlides: Slide[] = [
  {
    heading: 'CrazyGL',
    subheading: 'A cinematic particle experience',
    ctaLabel: 'Get Started',
    ctaHref: '#',
  },
  {
    heading: 'Particles',
    subheading: 'Thousands of particles forming beautiful shapes',
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

export default function CrazyGLParticleSlider({
  slides = defaultSlides,
  autoplaySeconds = 5,
  particleCount = 8000,
  particleSize = 1.8,
  baseColor = '#ffffff',
  accentColor = '#D00000',
  bgTop = '#08080C',
  bgBottom = '#0a0e1a',
  headingFontFamily = 'Inter, system-ui, sans-serif',
}: CrazyGLParticleSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setIsExiting(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsExiting(false);
      }, 500);
    }, autoplaySeconds * 1000);

    return () => clearInterval(interval);
  }, [slides.length, autoplaySeconds]);

  const slide = slides[currentSlide];

  const goToSlide = (index: number) => {
    if (index !== currentSlide) {
      setIsExiting(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsExiting(false);
      }, 500);
    }
  };

  return (
    <div
      className="crazygl-slider"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '600px',
        overflow: 'hidden',
        background: `radial-gradient(120% 120% at 50% 0%, ${bgTop}, ${bgBottom})`,
      }}
    >
      {/* Particle Canvas */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        <SphereParticles
          particleCount={particleCount}
          particleSize={particleSize}
          accentColor={accentColor}
          baseColor={baseColor}
          pointerMode="repel"
          pointerRadius={0.6}
          pointerStrength={1}
        />
      </div>

      {/* Content Layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        <div
          style={{
            maxWidth: '600px',
            textAlign: 'center',
            opacity: isExiting ? 0 : 1,
            transform: isExiting ? 'translateY(20px)' : 'translateY(0)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
          <h1
            style={{
              fontFamily: headingFontFamily,
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#fff',
              margin: '0 0 1.5rem 0',
              textShadow: '0 2px 40px rgba(0, 0, 0, 0.55)',
            }}
          >
            {slide.heading}
          </h1>
          <p
            style={{
              fontFamily: headingFontFamily,
              fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.8)',
              margin: '0 0 2rem 0',
              textShadow: '0 2px 28px rgba(0, 0, 0, 0.5)',
            }}
          >
            {slide.subheading}
          </p>
          {slide.ctaLabel && (
            <a
              href={slide.ctaHref}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                fontFamily: headingFontFamily,
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#06080f',
                background: '#fff',
                borderRadius: '999px',
                textDecoration: 'none',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                boxShadow: '0 8px 30px -8px rgba(150, 190, 255, 0.6)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 36px -8px rgba(150, 190, 255, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px -8px rgba(150, 190, 255, 0.6)';
              }}
            >
              {slide.ctaLabel}
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Slide Indicators */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '0.75rem',
          zIndex: 2,
        }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: index === currentSlide ? '40px' : '8px',
              height: '8px',
              padding: 0,
              border: 'none',
              borderRadius: '999px',
              background: index === currentSlide
                ? '#fff'
                : 'rgba(255, 255, 255, 0.25)',
              cursor: 'pointer',
              transition: 'width 0.3s ease, background 0.3s ease',
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
