import axios from 'axios'
import classnames from 'classnames'





const ActiveCategoryFilters = ({ selectedCategories }) => (
  <div className="active-category-filters">
    <header>Active Filters:</header>

    {!selectedCategories.length && (
      <div className="nes-badge">
        <span className="is-dark">None</span>
      </div>
    )}

    {!!selectedCategories.length && (
      <ul className="inline wrappable">
        {selectedCategories.map(category => (
          <li key={category}>
            <div className="nes-badge">
              <span className="is-primary">{category}</span>
            </div>
          </li>
        ))}
      </ul>
    )}
  </div>
)





export default ActiveCategoryFilters
