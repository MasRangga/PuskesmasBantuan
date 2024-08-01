import React from "react";
import Section3 from "../assets/img/Section3.png"

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">
          Tentang Kami
        </h1>
        <p className=" text-justify lg:text-start">
          Puskesmas Pembantu (Pusban) merupakan salah satu jenis pusat kesehatan
          masyarakat di Indonesia yang berfungsi menyediakan layanan kesehatan
          dasar bagi masyarakat, terutama di wilayah-wilayah dengan akses
          terbatas terhadap fasilitas kesehatan utama, seperti daerah terpencil
          atau kawasan sulit dijangkau.
        </p>
        <p className="text-justify lg:text-start">
          Pendirian Pusban didorong oleh beberapa faktor penting, seperti
          keterbatasan akses kesehatan di banyak daerah pedesaan dan terpencil
          yang menghadapi tantangan besar dalam memperoleh perawatan medis
          akibat jarak yang jauh dan minimnya transportasi.
        </p>
        <p className="text-justify lg:text-start">
          Selain itu, Pusban sering berfungsi sebagai fasilitas kesehatan
          darurat yang dapat segera didirikan di wilayah yang terkena bencana
          atau keadaan darurat lainnya, sehingga layanan kesehatan tetap
          tersedia dalam situasi krisis. Dengan adanya Pusban, diharapkan
          tercipta pemerataan layanan kesehatan, peningkatan kesehatan
          masyarakat, serta penurunan angka kematian dan morbiditas di
          daerah-daerah yang sebelumnya sulit dijangkau oleh fasilitas kesehatan
          konvensional.
        </p>
      </div>
      <div className=" w-full lg:w-3/4 h-auto">
        <img className=" rounded-lg" src={Section3} alt="Section3" />
      </div>
    </div>
  );
};

export default About;
