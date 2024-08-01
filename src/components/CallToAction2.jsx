import React from "react";
import Konten2 from "../assets/img/Konten2.png";

const CallToAction2 = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className="w-full lg:w-3/4 h-auto">
        <img className="rounded-lg" src={Konten2} alt="Konten2" />
      </div>
      <div className="w-full lg:w-3/4 space-y-4">
        <h1 className="text-4xl font-semibold text-center lg:text-start">
          Pendaftaran Untuk Ibu yang Sudah Memiliki Bayi
        </h1>
        <p className="text-justify lg:text-start">
          Kami menawarkan layanan pendaftaran khusus bagi ibu yang sudah
          memiliki bayi. Layanan ini dirancang untuk memberikan dukungan dan
          perawatan berkelanjutan setelah kelahiran, termasuk pemeriksaan
          kesehatan rutin, konsultasi dengan ahli kesehatan anak, dan informasi
          penting tentang perawatan bayi. Dengan mendaftar, Anda akan
          mendapatkan akses ke berbagai sumber daya yang akan membantu Anda
          dalam merawat dan mendukung tumbuh kembang bayi Anda.
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc8a8Khju_eKzp074Z8MQZUxOm-pNoksda85u-iabdpQdrTPQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out inline-block"
        >
          Daftar Sekarang
        </a>
      </div>
    </div>
  );
};

export default CallToAction2;
