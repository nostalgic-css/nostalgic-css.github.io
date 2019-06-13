import axios from 'axios'
import classnames from 'classnames'





import ActiveCategoryFilters from '../components/ActiveCategoryFilters'
import CategoryFilters from '../components/CategoryFilters'
import IconGrid from '../components/IconGrid'





class Icons extends React.Component {
  /***************************************************************************\
    Class Properties
  \***************************************************************************/

  state = {
    search: '',
    selectedCategories: [],
  }





  /***************************************************************************\
    Private Methods
  \***************************************************************************/

  _clearFilters = () => {
    this.setState({ selectedCategories: [] })
  }

  _handleFilterClick = ({ target }) => {
    const { selectedCategories } = this.state
    const category = target.value

    if (selectedCategories.includes(category)) {
      selectedCategories.splice(selectedCategories.indexOf(category), 1)

      this.setState({ selectedCategories: [...selectedCategories] })
    } else {
      this.setState({ selectedCategories: selectedCategories.concat(category).sort() })
    }
  }

  _handleSearch = ({ target }) => {
    console.log('Blep!')
    this.setState({ search: target.value })
  }





  /***************************************************************************\
    Public Methods
  \***************************************************************************/

  static async getInitialProps () {
    const { data } = await axios.get('https://unpkg.com/nes.icons@latest/icons.json')

    return { iconData: data }
  }

  render () {
    const { iconData } = this.props
    const { selectedCategories } = this.state

    return (
      <>
        <CategoryFilters
          categories={this.categories}
          onClearFilters={this._clearFilters}
          onFilterClick={this._handleFilterClick}
          selectedCategories={selectedCategories} />

        <div className="is-rounded nes-container icon-search">
          <div className="nes-field">
            <label htmlFor="icon-search">
              Search
            </label>

            <input
              className="nes-input"
              id="icon-search"
              onChange={this._handleSearch}
              type="search" />
          </div>

          <ActiveCategoryFilters selectedCategories={selectedCategories} />
        </div>

        {!!iconData && (
          <IconGrid icons={this.icons} />
        )}
      </>
    )
  }





  /***************************************************************************\
    Getters
  \***************************************************************************/

  get categories () {
    return Object.keys(this.props.iconData.iconsByCategory)
  }

  get icons () {
    const {
      search,
      selectedCategories,
    } = this.state
    const { iconData } = this.props
    let icons = null

    if (selectedCategories.length) {
      icons = selectedCategories.reduce((accumulator, category) => {
        if (selectedCategories.includes(category)) {
          return accumulator.concat(iconData.iconsByCategory[category])
        }

        return accumulator
      }, [])
    } else {
      icons = Object.values(iconData.iconsByCategory).flat()
    }

    if (search) {
      const searchRegex = new RegExp(search.split('').join('.*'), 'gi')

      icons = icons.filter(icon => searchRegex.test(icon))
    }

    return Array.from(new Set(icons))
  }
}





export default Icons
