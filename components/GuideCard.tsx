
import React from 'react';
import type { DeploymentOption } from '../types';

export const GuideCard: React.FC<DeploymentOption> = ({ icon, title, description, steps }) => {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700 hover:border-sky-500/50 hover:bg-slate-800/80 transition-all duration-300 flex flex-col transform hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 ml-4">{icon}</div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-slate-400 mb-6 flex-grow">{description}</p>
      <div>
        <h4 className="font-semibold mb-3 text-slate-200">الخطوات الأساسية:</h4>
        <ul className="space-y-3">
          {steps.map((step, index) => (
            <li key={index} className="flex items-start">
              <div className="w-5 h-5 bg-sky-500/20 text-sky-400 rounded-full flex items-center justify-center mr-0 ml-3 flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <span className="text-slate-300">{step}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
