import axios from 'axios'
import classnames from 'classnames'





const CategoryFilters = props => {
  const {
    categories,
    selectedCategories,
  } = props
  let {
    onClearFilters,
    onFilterClick,
  } = props

  if (!onClearFilters) {
    onClearFilters = () => {}
  }

  if (!onFilterClick) {
    onFilterClick = () => {}
  }

  return (
    <menu
      className="category-filters is-rounded nes-container"
      type="toolbar">
      <li>
        <button
          className={classnames({
            'nes-btn': true,
            'is-disabled': !selectedCategories.length,
            'is-error': !!selectedCategories.length,
          })}
          disabled={!selectedCategories.length}
          onClick={onClearFilters}
          type="button">
          <span>
            <i className="nes-icon times" /> Clear Filters
          </span>
        </button>
      </li>

      {categories.sort().map(category => (
        <li key={category}>
          <button
            className={classnames({
              'is-primary': selectedCategories.includes(category),
              'nes-btn': true,
            })}
            onClick={onFilterClick}
            title={category}
            type="button"
            value={category}>
            <span>{category}</span>
          </button>
        </li>
      ))}
    </menu>
  )
}





export default CategoryFilters
