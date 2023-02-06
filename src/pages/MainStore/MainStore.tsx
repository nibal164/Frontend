import "./MainStore.css";
import data from "../../ProductsCat.json";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../../components/Header/Header";
import ProductBox from "../../components/ProductBox/ProductBox";
import Categories from "../../components/Categories/Categories";

import SubCategories from "../../components/Categories/SubCategories/SubCategories";
import ProductPopup from "../../components/ProductPopup/ProductPopup";

function MainStore() {
  const { categoryId } = useParams();
  const { subCategoryId } = useParams();
  const { productId } = useParams();

  //to open on top of the page
  const scrollOnTop = () => {
    window.scroll(0, 0);
  };
  useEffect(() => {
    scrollOnTop();
  }, []);

  const items = data["products"];
  const categories = data["categories"];
  const chosenCategory = categories.find(
    (category) => category.id === categoryId
  );

  const categoryItems = items.filter((item) => item.categoryId === categoryId);
  let subCategoryItems = [] as any;
  subCategoryItems = categoryItems.filter(
    (sItem) => sItem.subCategoryId === subCategoryId
  );

  const [isProductPopup, setProductPopup] = useState(false);
  const closePopup = () => {
    setProductPopup(false);
  };
  const product = items.find((product: any) => product.id === productId);

  return (
    <>
      {isProductPopup ? (
        <ProductPopup
          image={product?.image}
          secondaryImage={product?.secondaryImage}
          name={product?.name}
          description={product?.description}
          ingredients={product?.ingredients}
          price={product?.price}
          closePopup={closePopup}
        />
      ) : null}
      <div className="main-store">
        <Header />
        <Categories />
        <h1 className="title-store">{chosenCategory?.name}</h1>
        {chosenCategory?.subCategories ? <SubCategories /> : null}
        {subCategoryItems.length ? (
          <div className="products-list">
            {subCategoryItems.map((item: any) => {
              return (
                <div
                  key={item.id}
                  onClick={
                    item.categoryId === "6" || item.categoryId === "4"
                      ? () => {}
                      : () => setProductPopup(true)
                  }
                >
                  <ProductBox
                    id={item.id}
                    img={item.image}
                    name={item.name}
                    description={item.description}
                    ingredients={item.ingredients}
                    price={item.price}
                    categoryId={item.categoryId}
                    subCategoryId={item.subCategoryId}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="products-list">
            {categoryItems.map((item: any) => {
              return (
                <div
                  key={item.id}
                  onClick={
                    item.categoryId === "6" || item.categoryId === "4"
                      ? () => {}
                      : () => setProductPopup(true)
                  }
                >
                  <ProductBox
                    id={item.id}
                    img={item.image}
                    name={item.name}
                    description={item.description}
                    ingredients={item.ingredients}
                    price={item.price}
                    categoryId={item.categoryId}
                    subCategoryId={item.subCategoryId}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default MainStore;
