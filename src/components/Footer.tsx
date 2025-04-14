"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[url('/images/white-brick.jpg')] bg-cover bg-center text-gray-700 text-sm px-2 sm:px-6 py-6 py-5 border-t border-gray-200">
      <div className="max-w-4xl mx-auto flex flex-col justify-start items-start gap-y-1 ps-1 text-sm text-[#5a5a5a]">
        <p className="text-sm text-[#5a5a5a]">© 2025 Mutsumi Hata</p>
        <p className="text-sm text-[#b0b0b0]">
          Background image by topntp26 on Freepik
        </p>
      </div>
    </footer>
  );
}

/*
<a
className="hover:underline"
href="https://www.freepik.com/free-photo/white-brick-background_1239960.htm#fromView=keyword&page=1&position=11&uuid=274c842a-8f7e-4ed1-95ad-a9b39c4134f8&new_detail=true&query=White+Brick"
target="_blank"
rel="noopener noreferrer">
Background image by topntp26 on Freepik
</a>
*/

{
  /* <a className="photo-att" href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Pixel perfect - Flaticon</a>
                <a className="photo-att" href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by Freepik - Flaticon</a>
                <a className="photo-att" href="https://www.vecteezy.com/free-vector/thunderstorm">Thunderstorm Vectors by Vecteezy</a><a href="https://www.flaticon.com/free-icons/wordpress" title="wordpress icons">Wordpress icons created by Freepik - Flaticon</a> */
}

{
  /* <div className="flex space-x-2 text-sm">
          <a
            href="https://www.linkedin.com/in/mutsumihata/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/nsLittle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
            <FaGithub />
          </a>
        </div> */
}
