export const FilterByUser = () => {
  return (
    <>
      <p className="panel-tabs has-text-weight-bold">
        <a
          data-cy="FilterAllUsers"
          href="#/"
        >
          All
        </a>

        <a
          data-cy="FilterUser"
          href="#/"
        >
          User 1
        </a>

        <a
          data-cy="FilterUser"
          href="#/"
          className="is-active"
        >
          User 2
        </a>

        <a
          data-cy="FilterUser"
          href="#/"
        >
          User 3
        </a>
      </p>

      <div className="panel-block">
        <p className="control has-icons-left has-icons-right">
          <input
            data-cy="SearchField"
            type="text"
            className="input"
            placeholder="Search"
            value="qwe"
          />

          <span className="icon is-left">
            <i className="fas fa-search" aria-hidden="true" />
          </span>

          <span className="icon is-right">
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete"
            />
          </span>
        </p>
      </div>
    </>
  );
};
