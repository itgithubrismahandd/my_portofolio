import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <div>
      {/* Hero Welcome */}
      <div className="hero grid grid-cols-1 md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 ">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, I'm Risma Handayani
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            I'm passionate about and skilled in Frontend Development for
            websites and mobile applications, with expertise in HTML, CSS,
            JavaScript, as well as React for building interactive user
            interfaces. For backend and dynamic web applications, I am
            proficient in PHP with the Laravel framework and MySQL for database
            management.
          </p>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>
              Coding is not about being able to or not, but about wanting to
              learn or not..😊
            </q>
          </div>

          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="https://drive.google.com/file/d/12QRhNO8ggT2USHvymushY9CYG2UxSRtj/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center bg-pink-800 p-4 rounded-2xl hover:bg-pink-400"
            >
              Download CV <i class="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#project"
              className="flex gap-2 items-center bg-zinc-700 p-4 rounded-2xl hover:bg-pink-400"
            >
              See Project
              <i class="ri-arrow-down-circle-line ri-lg "></i>
            </a>
          </div>
        </div>

        <img
          src={DataImage.HeroImage}
          alt="Hero image"
          className="w-[500px] md:ml-auto items-center animate__animated animate__fadeInUp animate__delay-3s"
          loading="lazy"
        />
      </div>
      {/* About */}
      <div className="about mt-32 py-10 leading-loose" id="about">
        <div
          className="flex flex-col xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 gap-6 bg-zinc-800 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img
            src={DataImage.HeroImage}
            className="w-12 rounded-md sm:hidden block"
            loading="lazy"
          />
          <p className="text-base leading-loose mb-10">
            Hi, I’m Risma Handayani, experienced in UI/UX Design, Frontend
            Development, and mobile application development, with core skills in
            HTML, CSS, JavaScript, React Native, PHP (Laravel), and MySQL. I am
            proficient in using Figma, Adobe, and XAMPP/Laragon as supporting
            tools for digital product development.
            <br></br>
            <br></br>I also have experience assisting in practical courses such
            as Database Systems, Mobile Programming, and Graphic Design.
            Additionally, I am actively involved in organizational management
            and collaborative digital project development.
          </p>

          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              className="w-12 rounded-md sm:block hidden"
            />
            <div className="flex flex-row gap-10">
              <div className="items-center gap-6">
                <h1 className="text-4xl mb-1">
                  10<span className="text-pink-500">+</span>
                </h1>
                <p>project completed</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  1<span className="text-pink-500">+</span>
                </h1>
                <p>year experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools */}
      <div className="tools mt-32" id="tools">
        <div className="flex flex-col ">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Here are the tools I use{" "}
          </p>
        </div>

        <div className="toolsBox mt-14 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 ">
          {listTools.map((tool) => (
            <div
              className="group flex items-center gap-2 p-3 rounded-lg border border-zinc-600 hover:bg-zinc-800 group"
              key={tool.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={tool.dad}
              data-aos-once="true"
            >
              <img
                src={tool.gambar}
                alt="Risma Tools"
                className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
              />
              <div className="flex flex-col gap-1">
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* project */}
      <div className="proyek mt-32 py-10" id="project">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Project
        </h1>
        <p
          className="text-base text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Here are the projects I have created
        </p>

        <div className="proyekBox mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="bg-zinc-800 rounded-md p-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
              data-aos-once="true"
            >
              <img src={proyek.gambar} alt="Proyek Risma" loading="lazy" />
              <h2 className="text-2xl font-bold my-4">{proyek.nama}</h2>
              <p className="text-base leading-loose mb-4">{proyek.desk}</p>

              <div className="flex flex-wrap gap-2">
                {proyek.tools.map((tool, index) => (
                  <p
                    key={index}
                    className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                  >
                    {tool}
                  </p>
                ))}
              </div>

              <div className="mt-8 text-center">
                <a
                  href={proyek.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-700 rounded-lg p-3 block border border-zinc-600 hover:bg-pink-500"
                >
                  Lihat
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* contact */}
      <div className="kontak mt-32 p-10" id="contact">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Contact
        </h1>
        <p
          className="text-base leading-loose text-center mb-10 opacity-500 "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Let's connect with me.
        </p>
      </div>
      <form
        action="https://formsubmit.co/rismahandayani801@gmail.com"
        method="POST"
        className="bg-zinc-800 p-6 sm:p-8 md:p-10 lg:p-12 w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto rounded-md"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-once="true"
        autoComplete="off"
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Name</label>
            <input
              type="text"
              name="nama"
              placeholder="Input your name.."
              className="border border-zinc-500 p-2 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="Input your email.."
              className="border border-zinc-500 p-2 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pesan" className="font-semibold">
              Message
            </label>
            <textarea
              name="pesan"
              id="pesan"
              cols="45"
              rows="7"
              placeholder="Message..."
              className="border border-zinc-500 p-2 rounded-md"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-700 p-3 rounded-md border w-full border-zinc-600 hover:bg-pink-400"
            >
              Sent Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
