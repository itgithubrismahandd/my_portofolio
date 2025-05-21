const Footer = () => {
  return (
    <div className="mt-32 mb-8 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold">Portofolio Risma</h1>
      <div className="flex gap-7">
        <a href="#home" className="">
          Home
        </a>
        <a href="#about" className="">
          About
        </a>
        <a href="#project" className="">
          Project
        </a>
      </div>
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/itgithubrismahandd?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <i className="ri-github-fill ri-2x" />
        </a>
        <a
          href="https://www.instagram.com/rismahandd?igsh=d2IwZzdyanVpamlq&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <i className="ri-instagram-fill ri-2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/risma-handayani-700b05311/"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <i className="ri-linkedin-fill ri-2x" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
