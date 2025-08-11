import { Input } from "./Input";
import { Button } from "./Button";

export const FilterByUser = () => {
  return (
    <>
      <p className="panel-tabs has-text-weight-bold">
        <a data-cy="FilterAllUsers" href="#/">
          All
        </a>

        <a data-cy="FilterUser" href="#/">
          User 1
        </a>

        <a data-cy="FilterUser" href="#/" className="is-active">
          User 2
        </a>

        <a data-cy="FilterUser" href="#/">
          User 3
        </a>
      </p>


    </>
  );
};
