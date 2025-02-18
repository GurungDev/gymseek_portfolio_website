import { PricingCard } from "./pricingCard"

 
const plans = [
  {
    name: "Starter",
    price: 15,
    period: "month",
    features: ["Up to 10,000 data points per month", "Email support", "Community forum access", "Cancel anytime"],
  },
  {
    name: "Pro",
    price: 40,
    period: "quarter",
    featured: true,
    features: [
      "Advanced analytics dashboard",
      "Customizable reports and charts",
      "Real-time data tracking",
      "Integration with third-party tools",
      "Everything in Hobby Plan",
    ],
  },
  {
    name: "Premium",
    price: 120,
    period: "year",
    features: [
      "Unlimited data storage",
      "Customizable dashboards",
      "Advanced data segmentation",
      "Real-time data processing",
      "AI-powered insights and recommendations",
      "Everything in Hobby Plan",
      "Everything in Pro Plan",
    ],
  },
]

export default function PricingPage() {
  return (
    <div id="pricing" className="min-h-screen    py-40 px-4">
      <div className=" app-layout mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-light font-bold">Simple pricing for <span className="text-highlight">advanced gym</span></h1>
          <p className="text-secondary  max-w-2xl mx-auto">
            Our pricing is designed for advanced people who need more features and more flexibility.
          </p>
        </div>

        <div className="app-layout grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </div>
  )
}

