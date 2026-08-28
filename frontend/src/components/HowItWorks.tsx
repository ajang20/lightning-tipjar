import './HowItWorks.css'

const steps = [
  {
    number: '01',
    icon: '⚡',
    title: 'Choose an amount',
    description:
      'Pick from preset sat amounts or enter a custom amount. See the RWF equivalent in real-time.',
  },
  {
    number: '02',
    icon: '📱',
    title: 'Scan & Pay',
    description:
      'Scan the Lightning invoice QR with your Bitcoin wallet and confirm the payment.',
  },
  {
    number: '03',
    icon: '💰',
    title: 'Creator gets RWF',
    description:
      "Your sats are instantly converted to RWF and sent to the creator's MTN or Airtel MoMo.",
  },
]

function HowItWorks() {
  return (
    <section className="how-it-works" aria-labelledby="how-it-works-title">
      <h2 className="how-title" id="how-it-works-title">How It Works</h2>

      <div className="steps-container">
        {steps.map((step) => (
          <div className="step-card" key={step.number}>
            <span className="step-number">{step.number}</span>
            <div className="step-icon" aria-hidden="true">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
