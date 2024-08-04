export default function About() {
  return (
    <div className="max-w-96 flex flex-col gap-4">
      <header className="relative w-full flex justify-center">
        <h2 className="text-xl z-10 font-bold ">Briefly about me</h2>
        <div className="absolute z-0 rotate-6 translate-y-2 w-24 h-4 bg-sky-200"></div>
      </header>
      <div className="flex flex-col gap-4 font-light">
        <p>
          Hello friend, welcome to my humble website. I am Markus Talka, a
          software developer and software industry professional, currently
          residing in Helsinki, Finland.
        </p>
        <p>
          On this page, you can find my resumé and contact information. Feel
          free to be in touch.
        </p>
      </div>
    </div>
  );
}
