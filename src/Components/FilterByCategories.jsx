import cn from 'classnames';
import { Button } from './Button';

export const FilterByCategories = ({
  handlerClickGroupBy,
  selectedCategories,
}) => {
  return (
    <div className="panel-block is-flex-wrap-wrap">
      <Button
        name="All"
        className={cn(
          "button mr-2 my-1",
          { "is-success": selectedCategories.length === 0 },
          { "is-light": selectedCategories.length > 0 }
        )}
        onClick={(e) => {
          e.preventDefault();
          handlerClickGroupBy("All");
        }}
      />

      <Button
        name="Grocery"
        className={cn(
          'button mr-2 my-1',
          { 'is-info': selectedCategories.includes('Grocery') },
          { 'is-light': !selectedCategories.includes('Grocery') },
        )}
        onClick={() => handlerClickGroupBy('Grocery')}
      />

      <Button
        name="Drinks"
        className={cn(
          'button mr-2 my-1',
          { 'is-info': selectedCategories.includes('Drinks') },
          { 'is-light': !selectedCategories.includes('Drinks') },
        )}
        onClick={() => handlerClickGroupBy('Drinks')}
      />

      <Button
        name="Fruits"
        className={cn(
          'button mr-2 my-1',
          { 'is-info': selectedCategories.includes('Fruits') },
          { 'is-light': !selectedCategories.includes('Fruits') },
        )}
        onClick={() => handlerClickGroupBy('Fruits')}
      />

      <Button
        name="Electronics"
        className={cn(
          'button mr-2 my-1',
          { 'is-info': selectedCategories.includes('Electronics') },
          { 'is-light': !selectedCategories.includes('Electronics') },
        )}
        onClick={() => handlerClickGroupBy('Electronics')}
      />

      <Button
        name="Clothes"
        className={cn(
          'button mr-2 my-1',
          { 'is-info': selectedCategories.includes('Clothes') },
          { 'is-light': !selectedCategories.includes('Clothes') },
        )}
        onClick={() => handlerClickGroupBy('Clothes')}
      />
    </div>
  );
};
