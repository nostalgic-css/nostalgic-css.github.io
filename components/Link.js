// Module imports
import NextLink from 'next/link'





const Link = props => (
  <NextLink
    {...props}
    href={`${process.env.BACKEND_URL}${props.href}`} />
)





export default Link
