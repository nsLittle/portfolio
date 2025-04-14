"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 text-sm px-6 py-6 mt-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto space-y-2 text-center">
        <p>© 2025 nsLittle</p>
        <div className="flex justify-center space-x-4 text-xl">
          <a
            href="https://www.linkedin.com/in/mutsumihata/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-700 transition-colors duration-200">
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/nsLittle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-700 transition-colors duration-200">
            <FaGithub />
          </a>
        </div>
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
