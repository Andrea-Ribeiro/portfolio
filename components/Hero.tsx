const skills = [
  "Accessibility",
  "Design Systems",
  "React",
  "Django",
  "UX Engineering",
];

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col pt-16 md:pt-34 px-6 mx-auto max-w-6xl">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 ">
        Andrêa Ribeiro Ferreira
      </h1>

      <h2
        className="text-[#F09D51] mt-12
       max-w-xl text-lg md:text-2xl font-semibold"
      >
        Building solutions where engineering and user experience coexist.
      </h2>

      <p className="mt-12 max-w-2xl text-md md:text-lg leading-8 text-white/70">
        Software engineer developing accesible and user-centered digital web
        products.
      </p>
      <div className="mt-16 flex gap-4 flex-wrap">
        {skills.map((skill) => (
          <p
            key={skill}
            className=" max-w-2xl text-sm md:text-md rounded-full text-white/80 border-white/20 border-1 px-4 py-2"
          >
            {skill}
          </p>
        ))}
      </div>

      <div className="mt-16 flex flex-col md:flex-row justify-center gap-4 md:gap-8 md:justify-start">
        <a
          href="mailto:andreavm.ribeiro@gmail.com"
          className="bg-[#EC8627] text-black px-5 py-3 rounded-full md:rounded-md font-semibold transition-colors text-center

          hover:bg-[#F3B377] 

          focus:outline
          focus:outline-2 
          focus:outline-offset-2 
          focus:outline-[#EC8627]"
        >
          Contact me
        </a>

        <a
          href="#work"
          className="border-[#EC8627] border-2 text-[#F3B377] px-5 py-3 rounded-full md:rounded-md font-semibold transition-colors text-center
          
          hover:bg-[#211103] 
          
          focus:outline
          focus:outline-2 
          focus:outline-offset-2
          focus:outline-[#EC8627]"
        >
          See selected work
        </a>
      </div>
    </section>
  );
}
