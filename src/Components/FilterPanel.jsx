import { FilterByCategories } from "./FilterByCategories"
import { FilterByUser } from "./FilterByUser"

export const FilterPanel = () => {
  return (
    <div className="block">
        <nav className="panel">
        <p className="panel-heading">Filters</p>

        <FilterByUser />

        <FilterByCategories />



          <div className="panel-block">
            <a
              data-cy="ResetAllButton"
              href="#/"
              className="button is-link is-outlined is-fullwidth"
            >
              Reset all filters
            </a>
          </div>
        </nav>
      </div>
  )
}
