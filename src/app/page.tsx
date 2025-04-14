import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <section className="flex flex-col items-end justify-center min-h-[80vh] px-6 md:px-20">
      <div className="space-y-4 text-right">
        <div className="flex justify-end space-x-4 text-2xl text-gray-600">
          <a
            href="https://www.linkedin.com/in/mutsumihata/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-opacity duration-200 opacity-60 hover:opacity-100">
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/nsLittle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-opacity duration-200 opacity-60 hover:opacity-100">
            <FaGithub />
          </a>
        </div>
        <p className="text-xl text-gray-500">Fullstack Software Engineer</p>
        <h1 className="text-8xl font-bold text-gray-600">Mutsumi Hata</h1>
      </div>
    </section>
  );
}
