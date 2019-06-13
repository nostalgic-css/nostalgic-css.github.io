// Component imports
import Link from './Link'





const DocsToC = () => (
  <nav className="table-of-contents">
    <ul className="nes-list is-disc">
      <li>
        <Link href="/docs/introduction">
          <a>Introduction</a>
        </Link>
      </li>

      <li>
        <Link href="/docs/start">
          <a>Getting Started</a>
        </Link>

        <ul className="nes-list is-disc">
          <li>
            <Link href="/docs/start#installation">
              <a>Installation</a>
            </Link>
          </li>

          <li>
            <Link href="/docs/start#usage">
              <a>Basic Usage</a>
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <Link href="/docs/examples">
          <a>Examples</a>
        </Link>

        <ul className="nes-list is-disc">
          <li>
            <Link href="/docs/examples#basic-icons">
              <a>Basic Icons</a>
            </Link>
          </li>

          <li>
            <Link href="/docs/examples#larger-icons">
              <a>Larger Icons</a>
            </Link>
          </li>

          <li>
            <Link href="/docs/examples#rotated-flipped">
              <a>Rotated &amp; Flipped</a>
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
)





export default DocsToC
