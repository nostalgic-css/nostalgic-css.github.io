import axios from 'axios'
import classnames from 'classnames'





const IconGrid = ({ icons }) => {
  if (!icons.length) {
    return (
      <div className="empty icon-grid">
        <span className="nes-text is-error">No icons match your current search.</span>
      </div>
    )
  }

  return (
    <ul className="icon-grid">
      {icons.map(iconName => (
        <li
          className="nes-container is-rounded"
          key={iconName}>
          <figure title={iconName}>
            <i className={`nes-icon size-3x ${iconName}`} />

            <figcaption className="nes-text">
              {iconName}
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  )
}





export default IconGrid
