import React from 'react';

export default function OurServices({ onOpenQuoteModal }) {
  const services = [
    {
      title: "ON-GRID SOLAR SYSTEMS",
      desc: "Connected to KSEB Net Metering. Export excess solar power and cut your electricity bills up to 90% with maximum Govt. Subsidy up to ₹78,000.",
      image: "/images/service-ongrid.jpg",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-teal-800 stroke-current fill-none stroke-2">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="3" x2="8" y2="17" />
          <line x1="16" y1="3" x2="16" y2="17" />
          <line x1="2" y1="10" x2="22" y2="10" />
          <path d="M12 17v4" />
          <path d="M8 21h8" />
        </svg>
      )
    },
    {
      title: "OFF-GRID SOLAR SYSTEMS",
      desc: "Independent power generation with solar battery storage. Enjoy 24/7 continuous electricity without fear of power outages or storms.",
      image: "/images/service-offgrid.jpg",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-teal-800 stroke-current fill-none stroke-2">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="M4.93 4.93l1.41 1.41" />
          <path d="M17.66 17.66l1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="M6.34 17.66l-1.41 1.41" />
          <path d="M19.07 4.93l-1.41 1.41" />
        </svg>
      )
    },
    {
      title: "HYBRID SOLAR SYSTEMS",
      desc: "The ultimate power solution combining KSEB net-metering benefits with battery backup for uninterrupted power security.",
      image: "/images/service-hybrid.jpg",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-teal-800 stroke-current fill-none stroke-2">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-[#181b1f] text-white overflow-hidden">
      
      {/* Background Solar Array Silhouette Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img
          src="/images/hero-solar.jpg"
          alt="Solar texture"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase">
            OUR SERVICES
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-400 max-w-xl mx-auto font-normal leading-relaxed">
            High efficiency solar energy engineering for residential, commercial, and rural needs across Kannur.
          </p>
        </div>

        {/* 3 Arched Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-b-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col justify-between"
            >
              
              {/* Arched Top Image */}
              <div className="relative pt-6 px-6 bg-transparent">
                <div className="relative h-64 sm:h-72 w-full rounded-t-full overflow-hidden shadow-inner bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/15 to-transparent" />
                </div>

                {/* Overlapping Circular Cutout Icon Badge */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center ring-4 ring-slate-100 z-10">
                  {service.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="pt-10 pb-8 px-6 text-center text-slate-800 space-y-3">
                <h3 className="text-sm sm:text-base font-black tracking-wider text-slate-950 uppercase">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                  {service.desc}
                </p>

                <div className="pt-2">
                  <button
                    onClick={onOpenQuoteModal}
                    className="inline-block text-xs font-black tracking-widest text-teal-800 hover:text-teal-900 uppercase border-b-2 border-teal-800 pb-0.5 transition-all cursor-pointer"
                  >
                    LEARN MORE
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
