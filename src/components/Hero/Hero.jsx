function Hero() {
  return (
    <section
      className="h-screen grid place-items-center 
      bg-hero-pattern bg-fixed bg-mid bg-cover bg-no-repeat
      text-white"
    >
      <figure className="w-5/6 md:w-auto">
        <h1 className="text-lg text-right ">Juan Sebastián González</h1>
        <figcaption className="text-md text-right font-bold">
          Web Engineer.
        </figcaption>
        <footer>
          <ul className="flex justify-end">
            <li className="mx-2">
              <a
                className="text-md"
                aria-label="github profile"
                rel="noopener noreferrer"
                href="https://github.com/juancho11gm"
                target="_blank"
              >
                <i className="fa fa-github "></i>
              </a>
            </li>
            <li className="mx-2">
              <a
                className="text-md"
                aria-label="linkedin profile"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/juansebastiangonzalezm/"
                target="_blank"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li className="mx-2">
              <a
                className="text-md"
                aria-label="twitter profile"
                rel="noopener noreferrer"
                href="https://twitter.com/juancho_11gm"
                target="_blank"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </li>
          </ul>
        </footer>
      </figure>
    </section>
  );
}

export default Hero;
