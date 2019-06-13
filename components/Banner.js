// Module imports
import ApplicationNav from './ApplicationNav'
import Brand from './Brand'
import Link from './Link'
import SocialLinks from './SocialLinks'





const Banner = ({ path }) => (
  <div role="banner">
    <Link href="/">
      <a><Brand /></a>
    </Link>

    <ApplicationNav path={path} />

    <SocialLinks />
  </div>
)





export default Banner
