import { FilterByCategories } from './FilterByCategories';
import { FilterByUser } from './FilterByUser';
import { Input } from './Input';

export const FilterPanel = ({
  handlerClickGroupBy,
  query,
  handlerQuery,
  sortFilterdName,
  handlerClickName,
  selectedCategories,
}) => {
  return (
    <div className="block">
      <nav className="panel">
        <p className="panel-heading">Filters</p>

        <FilterByUser
          handlerClickName={handlerClickName}
          sortFilterdName={sortFilterdName}
        />

        <Input query={query} handlerQuery={handlerQuery} />

        <FilterByCategories
          handlerClickGroupBy={handlerClickGroupBy}
          selectedCategories={selectedCategories}
        />

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
  );
};
