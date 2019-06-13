const links = [
  {
    href: 'https://twitter.com/share?text=NES.icons%EF%BD%9CNES-style%20Icon%20Library&url=https://nostalgic-css.github.io/NES.icons/',
    icon: 'twitter-square',
    title: 'Twitter',
  },
  {
    href: 'https://www.facebook.com/sharer.php?u=https://nostalgic-css.github.io/NES.icons/&t=NES.icons%EF%BD%9CNES-style%20Icon%20Library',
    icon: 'facebook-square',
    title: 'Facebook',
  },
  {
    href: 'https://www.linkedin.com/shareArticle?url=https%3A//nostalgic-css.github.io/NES.icons/&title=NES.icons%EF%BD%9CNES-style%20Icon%20Library',
    icon: 'linkedin',
    title: 'LinkedIn',
  },
  {
    href: 'https://github.com/nostalgic-css/NES.icons',
    icon: 'github-square',
    title: 'Github',
  },
]





const SocialLinks = () => (
  <nav className="social-links">
    <header>Let's get social!</header>

    <ul className="inline">
      {links.map(link => (
        <li key={link.title}>
          <a
            href={link.href}
            target="_blank">
            <i
              aria-label={link.title}
              className={`nes-icon size-3x ${link.icon}`} />
          </a>
        </li>
      ))}
    </ul>
  </nav>
)





export default SocialLinks
