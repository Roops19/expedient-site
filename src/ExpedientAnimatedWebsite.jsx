import React from 'react';
import { Logo } from './Logo';

const ExpedientAnimatedWebsite = () => {
  return (
    <div className="container mx-auto">
      <header className="flex items-center justify-center my-5">
        <Logo />
      </header>
      <section className="text-center my-5 p-5">
        <h1 className="text-3xl font-bold mb-4">3P Framework</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">People</h2>
            <p>Details about People pillar.</p>
          </div>
          <div className="p-4 bg-green-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Process</h2>
            <p>Details about Process pillar.</p>
          </div>
          <div className="p-4 bg-yellow-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Performance</h2>
            <p>Details about Performance pillar.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpedientAnimatedWebsite;