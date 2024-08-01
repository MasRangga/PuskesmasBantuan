import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const icon1 = (
    <RiMicroscopeLine size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Layanan Kami
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Kami menyediakan berbagai layanan yang dirancang untuk memenuhi
            kebutuhan kesehatan Anda dengan profesionalisme dan dedikasi.
            Dapatkan perawatan terbaik bersama tim kami.
          </p>
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-14">
        {/* Service1 */}
        <div className=" group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
          <div className=" bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
            {icon1}
          </div>
          <h1 className=" font-semibold text-lg">Berbagi Informasi</h1>
          <p>
            Memperoleh informasi penting terkait bagaimana melakukan pola asuh
            sesuai tahapan usia anak.
          </p>
        </div>
        {/* Service2 */}
        <div className=" group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
          <div className=" bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
            {icon2}
          </div>
          <h1 className=" font-semibold text-lg">Menjadi Konsultan</h1>
          <p>
            Mendapat teman berdiskusi, tukar pendapat, tukar pengalaman akan
            pemenuhan pelayanan kesehatan, gizi dan stimulasi pertumbuhan dan
            perkembangan.
          </p>

        </div>
        {/* Service3 */}
        <div className=" group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
          <div className=" bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
            {icon3}
          </div>
          <h1 className=" font-semibold text-lg">
            Berkolaborasi dengan Tenaga Kesehatan
          </h1>
          <p>
            Memperoleh informasi penting tentang tumbuh kembang, imunisasi,
            gizi, perawatan bayi, dan anak balita serta penyakit yang sering
            ditemukan
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
