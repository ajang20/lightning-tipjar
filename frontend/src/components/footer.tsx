import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>Built with</span>
        <span className="lightning-icon" aria-hidden="true">⚡</span>
        <span>for Rwanda</span>
        <span className="separator" aria-hidden="true">•</span>
        <span>Powered by</span>
        <span className="bitcoin-text">Bitcoin Lightning</span>
        <span aria-hidden="true">+</span>
        <span className="mobile-money-text">MOBILE MONEY OR AIRTEL MONEY</span>
      </div>
    </footer>
  )
}

export default Footer
