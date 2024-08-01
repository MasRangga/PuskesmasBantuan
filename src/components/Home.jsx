import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/pusban1.jpg')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 lg:mt-10 mt-20 mb-5">
        <h1 className="text-5xl font-bold leading-tight">Selamat Datang</h1>
        <h1 className="text-5xl font-bold leading-tight">
          Di Puskesmas Bantuan Muara Jawa Ilir
        </h1>
        <p>
          Pusban menyediakan layanan kesehatan progresif dan terjangkau bagi ibu
          hamil, yang dapat diakses secara online kapan saja dan di mana saja.
          Dengan dukungan tenaga medis profesional, Pusban berkomitmen menjadi
          mitra terpercaya dalam menjaga kesehatan ibu dan calon bayi.
        </p>
      </div>
    </div>
  );
};

export default Home;
