import Image from "next/image";

export default function Home() {
  return (
    <div className="grid md:grid-rows-[20px_1fr_20px] md:items-center md:justify-items-center min-h-screen px-4 md:p-8 md:pb-20 md:gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 sm:items-start w-full">
        <h1 className='text-6xl md:text-8xl font-semibold text-primary'>Welcome.</h1>
        <h2 className='text-4xl md:text-6xl font-semibold text-secondary'>Type your query below</h2>
        <input
            id="inputBox"
            name="inputBox"
            required
            className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
        />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-black">
        <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/AGirlNamedCaro"
            target="_blank"
            rel="noopener noreferrer"
        >
          <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
            height={16}
          />
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/carolinacontrerasissa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Linkedin →
        </a>
      </footer>
    </div>
  );
}
