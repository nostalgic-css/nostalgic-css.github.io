// Module imports
import React from 'react'





// Component imports
import Link from '../../components/Link'





const Home = () => (
  <>
    {Array(5).fill(null).map((item, index) => (
      <i
        className="nes-icon cloud"
        key={index} />
    ))}

    <div className="hero">
      <h2>Retro icons for everyone</h2>

      <p>Get 8-bit style vector icons and social logos on your website with NES.icons.</p>

      <nav>
        <Link href="/docs/start">
          <a className="nes-btn is-success">
            Get Started
          </a>
        </Link>

        <Link href="/icons">
          <a className="nes-btn is-primary">
            Explore Icons
          </a>
        </Link>
      </nav>
    </div>
  </>
)





export default Home
