import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className=" bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">PusbanMuaraJawaIlir</h1>
          <p className=" text-sm">
            Puskesmas Bantuan (Pusban) merupakan salah satu jenis pusat
            kesehatan masyarakat di Indonesia yang berfungsi menyediakan layanan
            kesehatan dasar bagi masyarakat.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">
            Tentang Kami
          </h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Tentang Kami
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Layanan Kami
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Staff Kami
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">
            Layanan Kami
          </h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Berbagi Infromasi
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Konsultan
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Kolaborasi
            </Link>
          </nav>
        </div>
        <div className=" w-full md:w-1/4">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">
            Alamat Kami
          </h1>
          <nav className=" flex flex-col gap-2">
            <a
              href="https://maps.app.goo.gl/asifRwrTLEyGUUVU8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jl Pelita
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
          @copyright by
          <span className=" text-hoverColor"> KKN Muara Jawa Ilir </span> | All
          rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
