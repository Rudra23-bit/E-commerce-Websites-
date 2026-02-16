import React, { useContext } from "react";
import { ShopContext } from "@/Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "@/Components/Item/Item";

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="shopCategory-banner block my-[30px] mx-auto w-[82%]" src={props.banner} alt="" />
      <div className="shopCategory-indexSort flex justify-between items-center mx-[170px] px-5 py-2.5 rounded-[40px] border border-[#888]  ">
        <p className="font-semibold">
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>
        <div className="shopCategory-short">
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopCategory-products grid grid-cols-4 gap-y-[80px] mx-[170px] my-5">
        {all_product.map((item,i) => {
          if (props.category===item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopCategory-loadMore flex justify-center items-center w-[233px] h-[69px] mx-auto my-[150px] rounded-[75px] bg-[#7c7a7a] text-[#f7f2f2] text-lg font-medium">
        explore more
      </div>
    </div>
  );
};

export default ShopCategory;
