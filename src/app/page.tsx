export default function Home() {
  return (
    <section className="flex flex-col justify-center sm:justify-end items-center sm:items-end text-center sm:text-right min-h-[90vh] sm:min-h-[95vh] px-6 sm:px-20 pb-12 sm:pb-[20vh] mt-6">
      <p
        className="text-lg sm:text-[2rem] dark:text-gray-700 mb-2 tracking-wide"
        style={{ color: "rgb(90, 90, 90)" }}>
        Fullstack Software Engineer
      </p>
      <h1
        className="text-5xl sm:text-[7rem] font-bold leading-tight sm:leading-[1.1]"
        style={{ color: "rgb(90, 90, 90)" }}>
        Mutsumi Hata
      </h1>
    </section>
  );
}
