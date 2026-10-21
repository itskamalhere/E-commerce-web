import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid electronic mail address.');
      return;
    }

    setStatus('success');
    setErrorMessage('');
  };

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto">
      <div className="rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-b from-[#0d2218] to-[#07140e] border border-white/[0.08] text-center relative overflow-hidden shadow-2xl">
        
        {/* Soft Ambient Lime Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-[#b8e938]/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-[#12251c] border border-[#b8e938]/30 flex items-center justify-center mx-auto mb-6 text-[#b8e938] shadow-md">
            <Mail className="w-5 h-5" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Stay Ahead of What's Next.
          </h2>

          <p className="text-base text-[#9cb3a5] leading-relaxed mb-8">
            "Discover new releases, product stories, and technology worth knowing." Direct release notifications, exclusive prototype drops, and invitations to private showroom events.
          </p>

          {status === 'success' ? (
            <div className="p-5 rounded-2xl bg-[#12251c] border border-[#4ade80]/40 flex items-center justify-center gap-3 text-white animate-fadeIn">
              <CheckCircle2 className="w-5 h-5 text-[#4ade80] shrink-0" />
              <div className="text-sm font-semibold text-left">
                <span>Welcome to the ODDA Circle.</span>
                <p className="text-xs text-[#9cb3a5] font-normal mt-0.5">
                  Demo confirmed: We've staged a VIP welcome key for <strong className="text-white">{email}</strong>.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
              <div className="relative w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Enter your email address"
                  className="w-full px-5 py-3.5 rounded-full bg-[#07140e] text-white text-sm placeholder-[#728579] border border-white/10 focus:border-[#b8e938] focus:outline-none focus:ring-2 focus:ring-[#b8e938]/30 transition-all"
                  aria-label="Newsletter email address"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#b8e938] hover:bg-[#ccff00] text-[#07140e] text-sm font-extrabold uppercase tracking-wider transition-all duration-200 transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(184,233,56,0.3)] active:scale-95"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="text-xs text-rose-400 mt-3 font-medium animate-fadeIn">
              {errorMessage}
            </p>
          )}

          <div className="mt-6 text-[11px] text-[#728579]">
            We respect your privacy. Unsubscribe at any moment. Zero spam guarantee.
          </div>
        </div>
      </div>
    </section>
  );
};
