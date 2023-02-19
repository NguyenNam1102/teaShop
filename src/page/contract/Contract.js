import React from "react";

function Contract() {
  return (
    <div className="flex max-w-[1170px] justify-between m-auto py-5 my-5 tablet:px-5 mobie:px-8 mobie:py-2 mobie:flex-col-reverse">
      <div className="flex flex-col items-start justify-center gap-5 ">
        <h1 className="text-2xl font-bold">Contract Us</h1>
        <p className="text-sm text-[#c3c3c3] font-medium">
          For any query/help, please call: 0123.456.789 (Everyday, 24/7)
        </p>
        <p className="text-sm text-[#c3c3c3] font-medium">
          Or send us an email: dinhcuongnd2001@gmail.com
        </p>
        <h2 className="font-bold text-lg">Office Location</h2>
        <p className="text-sm text-[#c3c3c3] font-medium">Láng Hạ - Hà Nội</p>
      </div>
      <img
        className="mobie:mb-5"
        src={require("./../../asset/image/session-bg.jpg")}
        alt=""
      />
    </div>
  );
}

export default Contract;
