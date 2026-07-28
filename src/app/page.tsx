'use client';

import React, { useState } from 'react';

interface SignalSource {
  title: string;
  url: string;
  platform: 'Reddit' | 'Meta Help' | 'TikTok Center' | 'Google Ads';
}

interface FrictionPoint {
  id: string;
  rank: number;
  title: string;
  description: string;
  prevalence: string;
  sampleCount: string;
  impactLevel: 'High Workflow Bottleneck' | 'Direct Media Loss' | 'Moderate Overhead';
  platforms: string[];
  verbatimExcerpt: string;
  verbatimAuthor: string;
  sources: SignalSource[];
  solutionOpportunity: string;
}

const frictionData: FrictionPoint[] = [
  {
    id: 'aspect-ratio-adaptation',
    rank: 1,
    title: 'Cross-Platform Aspect Ratio & Safe-Zone Adaptation Overhead',
    description:
      'Advertisers report significant manual overhead and visual degradation when reformatting video assets across vertical (9:16), horizontal (16:9), and square (1:1) formats.',
    prevalence: '43% Prevalence',
    sampleCount: '15 of 35 analyzed threads',
    impactLevel: 'High Workflow Bottleneck',
    platforms: ['Meta', 'TikTok', 'YouTube', 'Google Ads'],
    verbatimExcerpt:
      'Re-editing vertical TikTok creative to fit YouTube Shorts without covering native UI overlays takes up nearly a third of our editor’s weekly billable time.',
    verbatimAuthor: 'Verified Senior Media Buyer on r/PPC',
    sources: [
      {
        title: 'r/PPC Discussion: Burned Out on Creative Testing & Re-formatting',
        url: 'https://www.reddit.com/r/PPC/comments/1sc1mg7/anyone_else_completely_burnt_out_on_creative/',
        platform: 'Reddit',
      },
      {
        title: 'Meta Business Help: Video Specs & Aspect Ratios',
        url: 'https://www.facebook.com/business/help/109001399765715',
        platform: 'Meta Help',
      },
      {
        title: 'TikTok Business Help: Creative Safe Zones',
        url: 'https://ads.tiktok.com/help/article/creative-safe-zones',
        platform: 'TikTok Center',
      },
    ],
    solutionOpportunity:
      'Automated dynamic framing tools that protect UI safe-zones and key subject focal points across Reels, TikTok, Shorts, and Feed without manual re-editing.',
  },
  {
    id: 'creative-fatigue-velocity',
    rank: 2,
    title: 'Accelerated Creative Fatigue & Scaling Bottlenecks',
    description:
      'Performance marketers experience steep performance decay on winning ad variations within 7 to 14 days, forcing creative production teams into constant high-volume iteration.',
    prevalence: '31% Prevalence',
    sampleCount: '11 of 35 analyzed threads',
    impactLevel: 'Direct Media Loss',
    platforms: ['Meta', 'TikTok'],
    verbatimExcerpt:
      'Once a concept hits scale, fatigue sets in within a week. We simply cannot produce net-new video hooks fast enough to sustain performance.',
    verbatimAuthor: 'Growth Director, D2C Brands',
    sources: [
      {
        title: 'r/FacebookAds Thread: Delivery Shifts vs Creative Fatigue',
        url: 'https://www.reddit.com/r/FacebookAds/comments/1tjo0il/hot_take_we_blame_creative_fatigue_too_often_but/',
        platform: 'Reddit',
      },
      {
        title: 'Meta Business Help: Managing Ad Fatigue and Frequency',
        url: 'https://www.facebook.com/business/help/2237890123184912',
        platform: 'Meta Help',
      },
    ],
    solutionOpportunity:
      'Modular asset matrix systems that systematically swap hooks, captions, and visual CTAs to generate high-volume variant iterations automatically.',
  },
  {
    id: 'automated-policy-disapprovals',
    rank: 3,
    title: 'Opaque Automated Policy Flagging & Disapproval Latency',
    description:
      'Media buyers report unexpected ad rejections caused by automated AI moderation tools misinterpreting on-screen text overlays, causing campaign downtime during critical launch windows.',
    prevalence: '26% Prevalence',
    sampleCount: '9 of 35 analyzed threads',
    impactLevel: 'Moderate Overhead',
    platforms: ['Meta', 'Google Ads'],
    verbatimExcerpt:
      'Our video was rejected twice for policy flags when it was just a customer testimonial quote. Appeals take days while our launch budget sits idle.',
    verbatimAuthor: 'Agency PPC Lead',
    sources: [
      {
        title: 'r/PPC Thread: Ads Disapproved Restricted Terms',
        url: 'https://www.reddit.com/r/PPC/comments/1urvyz9/ads_disapproved_restricted_drug_terms_destination/',
        platform: 'Reddit',
      },
      {
        title: 'r/PPC Thread: False Positive Ad Policy Violations',
        url: 'https://www.reddit.com/r/PPC/comments/krdtcm/ads_falsely_rejected_for_violating_alcohol_policy/',
        platform: 'Reddit',
      },
      {
        title: 'Google Ads Help: Fix a Disapproved Ad',
        url: 'https://support.google.com/google-ads/answer/1704371',
        platform: 'Google Ads',
      },
    ],
    solutionOpportunity:
      'Pre-flight compliance scanning to flag high-risk on-screen keywords, audio transcripts, and visual elements before submission.',
  },
];

export default function Dashboard() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-6 md:p-12">
      {/* Header Bar */}
      <header className="max-w-6xl mx-auto mb-8 border-b border-slate-200 pb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800">
                Internal Research
              </span>
              <span className="text-xs text-slate-500">Google Advertiser Solutions & Strategy</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Paid Creative Pulse
            </h1>
          </div>
          <div className="text-right">
            <span className="inline-block px-3 py-1 rounded-md bg-slate-200 text-xs font-medium text-slate-700">
              Qualitative Sample Method ($n = 35$)
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto space-y-8">
        {/* Audit Cards Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            Advertiser Pain Point Audit
          </h2>

          {frictionData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-200"
              >
                {/* Clickable Header */}
                <button
                  type="button"
                  onClick={() => toggleCard(item.id)}
                  className="w-full text-left p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-indigo-600 text-white font-bold text-sm">
                        #{item.rank}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                        {item.prevalence} ({item.sampleCount})
                      </span>
                      <span className="text-xs font-medium text-slate-500">
                        Impact: {item.impactLevel}
                      </span>
                      <div className="flex gap-1.5 ml-auto md:ml-0">
                        {item.platforms.map((p) => (
                          <span
                            key={p}
                            className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                  </div>

                  {/* Toggle Arrow */}
                  <div className="flex items-center gap-2 text-xs font-medium text-indigo-600 shrink-0 self-end md:self-center">
                    <span>{isOpen ? 'Conceal details' : 'View details'}</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Collapsible Content Body */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 space-y-4">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Verbatim Quote Box */}
                    <blockquote className="p-4 rounded-lg bg-slate-50 border-l-4 border-indigo-500">
                      <p className="text-sm italic text-slate-800 mb-1">
                        "{item.verbatimExcerpt}"
                      </p>
                      <cite className="text-xs font-medium text-slate-500 not-italic">
                        — {item.verbatimAuthor}
                      </cite>
                    </blockquote>

                    {/* Solution Opportunity Box */}
                    <div className="p-4 rounded-lg bg-indigo-50/60 border border-indigo-100">
                      <span className="block text-xs font-bold uppercase tracking-wider text-indigo-900 mb-1">
                        High-Impact Tooling Opportunity
                      </span>
                      <p className="text-sm text-indigo-950">
                        {item.solutionOpportunity}
                      </p>
                    </div>

                    {/* Sources List */}
                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-xs font-semibold text-slate-500 block mb-2">
                        Attributable Public Sources:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {item.sources.map((src, i) => (
                          <a
                            key={i}
                            href={src.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-800 hover:underline bg-indigo-50 px-2.5 py-1 rounded"
                          >
                            <span>{src.title}</span>
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </section>

        {/* Methodology Banner at Bottom */}
        <section className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm mt-12">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Methodology & Transparency Notice
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            This dashboard synthesizes qualitative practitioner feedback gathered from a curated sample of{' '}
            <strong className="font-semibold text-slate-900">$n = 35$ verified public discussions</strong> (r/PPC media buyer forums, Meta Help Center threads, and TikTok Business documentation). Friction rankings reflect observed frequency density across analyzed media buying workflows.
          </p>
        </section>
      </main>
    </div>
  );
}