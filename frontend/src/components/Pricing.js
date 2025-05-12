// File: src/components/Pricing.js
import React from 'react';

const plans = [
  {
    name: 'Free Trial',
    price: '₹0',
    features: [
      '14-day unlimited access',
      'All core features',
      'No credit card required',
      'Community support',
    ],
    button: 'Start Free',
    action: null,                 // no redirect
    highlight: true,
  },
  {
    name: 'Subscription',
    price: '₹999/mo',
    features: [
      'Unlimited projects',
      'Premium support',
      'Advanced analytics',
      'Team collaboration',
    ],
    button: 'Subscribe',
    action: 'https://rzp.io/rzp/j1fBJ4d',
    highlight: false,
  },
  {
    name: 'Demo',
    price: 'Free',
    features: [
      'Personalized walkthrough',
      'Q&A with our team',
      'No commitment',
      'Best for evaluation',
    ],
    button: 'Book Demo',
    action: 'https://rzp.io/rzp/j1fBJ4d',
    highlight: false,
  },
];

export default function Pricing() {
  const handleClick = (url) => {
    if (url) window.location.href = url;
  };

  return (
    <section id="pricing" className="section section-pricing">
      <h2>Pricing</h2>
      <div className="pricing-flex">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`pricing-card${plan.highlight ? ' highlight' : ''}`}
          >
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((f, i) => (
                <li key={i}>✓ {f}</li>
              ))}
            </ul>
            <button
              className="pricing-button"
              onClick={() => handleClick(plan.action)}
              disabled={!plan.action}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
