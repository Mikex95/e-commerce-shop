import FilterHeader from "../../components/FilterHeader/FilterHeader";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import "./Filter.css";

const Filter = (props) => {
  const { getCategoriesArray } = useContext(AppContext);

  const displayCategoryFilter = () => {
    const tmp = getCategoriesArray();
    console.log(tmp);
    if (tmp.length > 0) {
       <div className="filter-grid-container">
       {return tmp.map((element) => {
          return (
            <button className="filter-grid-item">{element[0].category}</button>
          );
        })}
      </div>;
    }
  };
  const displayCategoryHeader = () => {
    return (
      <section>
        <h4 className="filter-header-style">Categories</h4>
      </section>
    );
  };

  const displayPriceFilter = () => {
    return (
      <section>
        <h4 className="filter-header-style">Price</h4>
        <div className="filter-grid-container">
          <button className="filter-grid-item ">0-20€</button>
          <button className="filter-grid-item ">20-50€</button>
          <button className="filter-grid-item ">50-100€</button>
          <button className="filter-grid-item ">über 100€</button>
        </div>
      </section>
    );
  };

  const displayBrandHeader = () => {
    return (
      <section>
        <h4 className="filter-header-style">Brands</h4>
      </section>
    );
  };

  const displayBrandFilter = () => {
    const tmp = getCategoriesArray();
    console.log(tmp);
    if (tmp.length > 0) {
      return tmp.map((element) => {
        return (
          <div className="filter-grid-container">
            <button className="filter-grid-item ">{element[0].brand}</button>
          </div>
        );
      });
    }
  };

  return (
    <div className="filter">
      <FilterHeader name="Filters" />
      {displayCategoryHeader()}
      {displayCategoryFilter()}
      {displayPriceFilter()}
      {displayBrandHeader()}
      {displayBrandFilter()}
      <CustomButton
        children="Apply Filter"
        pr_class="filter-custom-button filter-header-style"
      />
    </div>
  );
};

export default Filter;
