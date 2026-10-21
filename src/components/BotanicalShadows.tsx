import React from 'react';

export const BotanicalShadows: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`} aria-hidden="true">
      {/* Soft ambient green radial glow */}
      <div 
        className="absolute -top-[10%] -right-[5%] w-[650px] h-[650px] rounded-full opacity-30 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(74, 222, 128, 0.28) 0%, rgba(13, 34, 24, 0.4) 60%, transparent 80%)'
        }}
      />
      
      <div 
        className="absolute top-[40%] -left-[10%] w-[550px] h-[550px] rounded-full opacity-20 blur-[140px]"
        style={{
          background: 'radial-gradient(circle, rgba(184, 233, 56, 0.2) 0%, rgba(7, 20, 14, 0.8) 70%, transparent 90%)'
        }}
      />

      {/* Cinematic botanical leaf shadows (curated SVG shapes with Gaussian blur and subtle dark tint) */}
      <svg
        className="absolute top-0 right-0 w-[55vw] max-w-[850px] h-auto opacity-[0.065] mix-blend-multiply transform rotate-6 translate-x-12 -translate-y-8"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="leaf-blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
        <g filter="url(#leaf-blur)" fill="#000000">
          {/* Stylized tropical palm / monstera branch shadow */}
          <path d="M720 40C640 180 500 280 340 330C220 370 120 450 60 560C140 510 230 460 330 430C460 390 600 300 700 160L720 40Z" />
          <path d="M680 120C580 220 450 300 320 340C240 360 160 380 90 410C170 380 250 350 330 320C440 280 560 210 650 110L680 120Z" />
          <path d="M750 200C670 280 560 340 430 380C340 410 250 450 180 510C260 460 350 420 450 380C560 340 670 270 730 190L750 200Z" />
          <path d="M610 260C510 350 400 420 280 460C200 490 130 540 80 610C160 550 240 500 330 460C430 420 530 340 600 250L610 260Z" />
          <path d="M500 350C420 420 320 470 210 500C140 520 80 560 30 630C100 570 170 530 250 490C340 450 420 390 490 330L500 350Z" />
        </g>
      </svg>

      {/* Subtle organic texture grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #b8e938 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}
      />
    </div>
  );
};
