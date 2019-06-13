// Module imports
import classnames from 'classnames'





// Component imports
import Link from './Link'





const links = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/docs/start',
    title: 'Start',
  },
  {
    href: '/icons',
    title: 'Icons',
  },
  {
    href: '/docs',
    title: 'Docs',
  },
]





const ApplicationNav = ({ path }) => (
  <nav className="application-nav">
    <ul className="inline">
      {links.map(link => {
        const isActive = link.href === path

        return (
          <li key={link.href}>
            <Link href={link.href}>
              <a
                className={classnames({ active: isActive })}>
                <i
                  className="nes-icon caret-right"
                  data-animate={isActive}
                  data-animation="full-pulse"
                  data-animation-duration="1s" />
                {link.title}
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  </nav>
)





export default ApplicationNav
