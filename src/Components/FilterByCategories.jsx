import { Button } from "./Button";
import cn from "classnames";

export const FilterByCategories = ({ handlerClickGroupBy, selectedCategories }) => {
  return (
    <div className="panel-block is-flex-wrap-wrap">
      <Button
        name="All"
        className={cn(
          "button mr-2 my-1",
          { "is-success": selectedCategories === "All" },
          { "is-light": selectedCategories !== "All" }
        )}
        onClick={(e) => {
          e.preventDefault();
          handlerClickGroupBy("All");
        }}
      />


      <Button
        name="Grocery"
        className={cn(
          "button mr-2 my-1",
          { "is-info": selectedCategories === "Grocery" },
          { "is-light": selectedCategories !== "Grocery" }
        )}
        onClick={() => handlerClickGroupBy("Grocery")}
      />
      <Button
        name="Drinks"
        className={cn(
          "button mr-2 my-1 is",
          { "is-info": selectedCategories === "Drinks" },
          { "is-light": selectedCategories !== "Drinks" }
        )}
        onClick={() => handlerClickGroupBy("Drinks")}
      />
      <Button
        name="Fruits"
        className={cn(
          "button mr-2 my-1",
          { "is-info": selectedCategories === "Fruits" },
          { "is-light": selectedCategories !== "Fruits" }
        )}
        onClick={() => handlerClickGroupBy("Fruits")}
      />
      <Button
        name="Electronics"
        className={cn(
          "button mr-2 my-1",
          { "is-info": selectedCategories === "Electronics" },
          { "is-light": selectedCategories !== "Electronics" }
        )}
        onClick={() => handlerClickGroupBy("Electronics")}
      />
      <Button
        name="Clothes"
        className={cn(
          "button mr-2 my-1",
          { "is-info": selectedCategories === "Clothes" },
          { "is-light": selectedCategories !== "Clothes" }
        )}
        onClick={() => handlerClickGroupBy("Clothes")}
      />
    </div>
  );
};
