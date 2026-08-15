import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full max-w-3xl mx-auto px-6 md:px-10 pb-10 pt-6 border-t border-border text-muted text-xs flex justify-between">
      <span>© {year} Boluwatife David Adanla</span>
      <span>Lagos, Nigeria</span>
    </footer>
  )
}

export default Footer
