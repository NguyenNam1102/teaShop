import React from "react";

import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <footer>
      <div className="w-full bg-primary py-5">
        <div className="max-w-[1170px] m-auto text-left text-white tablet:px-5 mobie:px-8 mobie:py-2">
          <h2 className="text-xl mb-3 font-medium">
            Thủy Anh • Chuyên Các Loại Trà Ngon Nhất Tại Việt Nam
          </h2>
          <p className="text-base lattop:w-[1110px] leading-8">
            Thủy Anh chuyên kinh doanh các loại trà Tân Cương Thái Nguyên ngon,
            cao cấp nhất như Trà Đinh, Trà Nõn Tôm, Trà Móc Câu. Ngoài ra, chúng
            tôi còn cung cấp các loại trà đặc sản của các vùng miền khác như trà
            ô long Lâm Đồng, trà sen, trà lài, trà shan tuyết cổ thụ Tà Xùa,
            Suối Giàng,...& các loại quà tặng, dụng cụ trà cao cấp. HOTLINE:
            0123.456.789
          </p>
        </div>
      </div>
      <div className="w-full bg-secondary py-5 ">
        {/* <div className="max-w-[1170px]  flex flex-wrap m-auto text-white tablet:px-5 mobie:px-8 mobie:py-2 medium:justify-between"> */}
        <div className="max-w-[1170px] tablet:px-5 mobie:px-8 mobie:py-2 m-auto grid gap-8 laptop:grid-cols-3 text-white tablet:grid-cols-2">
          {/* <div className="text-justify laptop:basis-1/2 medium:basis-2/3 medium:max-w-[60%]"> */}
          <div className="text-justify">
            <h2 className="text-xl font-medium uppercase mb-6">
              CƠ SỞ SẢN XUẤT TRÀ THỦY ANH
            </h2>
            <p className="">
              <span className="font-medium">Mã Số Thuế : </span>
              0123456789
            </p>
            <p className="">
              <span className="font-medium">Nhà Máy Sản Xuất : </span>
              Xóm Y Na, Xã Tân Cương, TP.Thái Nguyên
            </p>
            <p className="mb-6">Cửa hàng tại Hà Nội : </p>
            <p className="laptop:w-[360px] text-sm">
              ○ Số 189 Giáp Nhất, Thượng Đình, Thanh Xuân, Hà Nội (Đối diện Ga
              Láng)
              <span className="italic">
                (8h - 18h, từ T2 - CN, Lễ làm bình thường)
              </span>
            </p>
          </div>
          {/* <div className="flex items-start flex-col laptop:basis-1/4 medium:basis-1/3 medium:max-w-30%"> */}
          <div className="flex items-start flex-col">
            <h2 className="text-xl font-medium uppercase mb-6">Liên Hệ</h2>
            <p className="text-sm text-justify">
              Tại Hà Nội:{" "}
              <span className="text-[#f1c40f] font-bold hover:opacity-80 hover:cursor-pointer">
                (012)3456789
              </span>
            </p>
            <p className="text-sm text-justify">
              Tại TPHCM:{" "}
              <span className="text-[#f1c40f] font-bold hover:opacity-80 hover:cursor-pointer">
                (012)3456789
              </span>
            </p>
            <p className="text-sm text-justify mb-6">
              Hotline / Zalo:{" "}
              <span className="text-[#f1c40f] font-bold hover:opacity-80 hover:cursor-pointer">
                0901.345.678
              </span>
            </p>
            <p className="text-sm text-justify">Email: ThuyAnh@gmail.com</p>
            <p className="text-sm text-justify">Website: https://thuyanh.com</p>
            <div className="mt-2">
              <YouTubeIcon className="cursor-pointer mr-2" />
              <FacebookIcon className="cursor-pointer mr-2" />
              <InstagramIcon className="cursor-pointer mr-2" />
              <TwitterIcon className="cursor-pointer mr-2" />
            </div>
          </div>

          {/* <div className="flex items-start justify-start flex-col laptop:basis-1/4 laptop:mt-0 medium:basis-1/2 medium:mt-8"> */}
          <div className="flex items-start justify-start flex-col">
            <h2 className="text-xl font-medium uppercase mb-6">
              Cam Kết Tới khách hàng
            </h2>
            <p className="text-sm text-justify mb-1">
              Thanh Toán và nhận hàng nhanh gọn
            </p>
            <p className="text-sm text-justify mb-1">
              Đảm bảo chính sách bảo mật
            </p>
            <p className="text-sm text-justify mb-1">
              Hàng Đạt chuẩn về chất lượng
            </p>
            <p className="text-sm text-justify mb-1">Chính sách đổi hàng</p>
            <p className="text-sm text-justify mb-1">Chính sách hoàn tiền</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
