import React from "react";
import "./home.css";
import { getAllProducts } from "./../../redux/selector";
import { useSelector } from "react-redux";
import Product from "../../components/product/Product";

const Home = () => {
  const products = useSelector(getAllProducts);

  const listTypes = [
    { name: "Trà Móc Câu Đặc Biệt", category: "TMCDB", id: "tea" },
    { name: "TRÀ NÕN TÔM", category: "TNT" },
    { name: "TRÀ ĐINH", category: "TD" },
    { name: "Trà Búp", category: "TB" },
    { name: "Trà Ô Long", category: "TOL" },
    { name: "Hộp Hồng Phúc", category: "HHP" },
    { name: "Dụng Cụ Thưởng Trà", category: "DCTT", id: "dungCu" },
  ];

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${require("./../../asset/image/banner.png")})`,
        }}
        className="w-[100%] mobie:h-[180px] bg-cover bg-center tablet:h-[250px] laptop:h-[350px]"
      ></div>
      <div className="max-w-[1170px] flex flex-wrap justify-between items-center m-auto my-3 tablet:px-5">
        <img
          className="lg:basis-full lg:max-w-[30%] tablet:max-w-[40%] object-contain tablet:basis-1/2 tablet:m-0 mobie:max-w-[80%] mobie:m-auto mobie:mt-4"
          src={require("./../../asset/image/banner-1.png")}
          alt="#banner1"
        />
        <img
          className="lg:basis-full lg:max-w-[30%] tablet:max-w-[40%] object-contain tablet:basis-1/2 tablet:m-0 mobie:max-w-[80%] mobie:m-auto mobie:mt-4"
          src={require("./../../asset/image/banner-2.png")}
          alt="#banner2"
        />
        <img
          className="lg:basis-full lg:max-w-[30%] tablet:max-w-[40%] object-contain tablet:basis-1/2 tablet:m-0 tablet:mt-5 mobie:max-w-[80%] mobie:m-auto mobie:mt-4 "
          src={require("./../../asset/image/banner-3.png")}
          alt="#banner3"
        />
      </div>

      <div className="max-w-[1170px] m-auto tablet:px-5 mobie:px-8 mobie:py-2">
        {listTypes.map((item, id) => (
          <div className="my-10" key={id}>
            <h1 className="title">{item.name}</h1>
            <div className="grid laptop:grid-cols-4 gap-8 medium:grid-cols-3 tablet:grid-cols-2">
              {products
                .filter((each) => each.category == item.category)
                .map((each, id) => {
                  return <Product product={each} key={id} />;
                })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
