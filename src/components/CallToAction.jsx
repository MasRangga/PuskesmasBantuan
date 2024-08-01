import React from 'react'
import Konten1 from "../assets/img/Konten1.png";


const CallToAction = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className="w-full lg:w-3/4 space-y-4">
        <h1 className="text-4xl font-semibold text-center lg:text-start">
          Pendaftaran Untuk Ibu Hamil
        </h1>
        <p className="text-justify lg:text-start">
          Kami menyediakan layanan pendaftaran khusus untuk ibu hamil yang ingin
          mendapatkan perawatan dan dukungan terbaik selama masa kehamilan.
          Dengan mendaftar, Anda akan mendapatkan akses ke berbagai layanan
          kesehatan, konsultasi dengan tenaga medis profesional, serta informasi
          penting untuk memastikan kehamilan yang sehat dan nyaman. Segera
          daftarkan diri Anda untuk memanfaatkan layanan kami dan dapatkan
          perhatian serta perawatan yang Anda butuhkan.
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeJlSaA-hHxsLDkubp2D9ZEARr5GSJhtzLOYDe-zEB0EFH0WQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out inline-block"
        >
          Daftar Sekarang
        </a>
      </div>
      <div className="w-full lg:w-3/4 h-auto">
        <img className="rounded-lg" src={Konten1} alt="Konten1" />
      </div>
    </div>
  );
}

export default CallToAction
