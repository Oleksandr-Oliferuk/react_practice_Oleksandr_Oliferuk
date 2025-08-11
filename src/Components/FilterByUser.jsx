import { Input } from './Input';
import { Button } from './Button';

export const FilterByUser = () => {
  return (
    <p className="panel-tabs has-text-weight-bold">
      <a data-cy="FilterAllUsers" href="#/">
        All
      </a>

      <a data-cy="FilterUser" href="#/">
        Roma
      </a>

      <a data-cy="FilterUser" href="#/" className="is-active">
        Anna
      </a>

      <a data-cy="FilterUser" href="#/">
        Max
      </a>

      <a data-cy="FilterUser" href="#/">
        John
      </a>
    </p>
  );
};
