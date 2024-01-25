"use client";
import Link from "next/link";
import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <div className="w-full h-16 border-b flex items-center justify-center">
      <div className="max-w-[1050px] px-4 md:px-8 lg:px-0 w-full flex items-center justify-between">
        <h6 className="font-bold bg-clip-text">
          Agencia Oss
        </h6>

        <ul className="flex gap-8">
          <li>
            <Link
              className="hover:text-fuchsia-500 transition-colors text-xs sm:text-base"
              href="#aplicar"
            >
              Web
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-fuchsia-500 transition-colors text-xs sm:text-base"
              href="#reviews"
            >
              Reviews
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-fuchsia-500 transition-colors text-xs sm:text-base"
              href="#hablemos"
            >
              Hablemos
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex h-fit flex-col items-center justify-center relative">
        <header
          id="home"
          className="mx-auto px-4 md:px-8 lg:px-0 lg:max-w-[1050px] flex flex-col-reverse lg:flex-row w-full lg:gap-0 h-screen justify-center items-center lg:justify-between relative overflow-x-hidden"
        >
          <div className="w-full h-2/4 md:h-full lg:w-fit flex flex-col justify-center items-center lg:items-start">
            <h1 className="font-extrabold leading-10 tracking-tight lg:text-start text-white text-center sm:leading-none md:text-6xl text-5xl lg:text-[5rem] mb-6">
              <span className="">Potenciamos <br/> tu negocio</span>
            </h1>
            <p className="mb-8 max-w-md text-base md:text-base text-center lg:text-start text-white">
              No somos solo una agencia web, somos tu aliado creativo, tu socio
              estratégico en el mundo digital. <span className="text-white underline">Aplica para obtener una web totalmente gratis</span>
            </p>
            <div className="w-full flex items-center justify-center lg:justify-start gap-4">
              <a
                  href="#web"
                  className=""
                >
                <button className="ml-2 relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 shadow-[0px_0px_15px_0px_#6b46c1]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-md font-medium text-white backdrop-blur-3xl">
                    Quiero aplicar
                  </span>
                </button>
              </a>{" "}
            </div>
          </div>

          <div className="w-[85%] md:w-[60%] lg:w-[40%] h-fit md:h-full mt-10 lg:mt-0 flex items-center justify-center relative -z-10">
            <video className="w-full h-full" autoPlay loop muted>
              <source src="/cubic.mp4" type="video/mp4" />
            </video>
          </div>
        </header>

        {/* Sección de páginas gratis  */}

        <section
          id="aplicar"
          className="w-full bg-gradient-to-t from-[#020202] to-[#070707] border border-t border-b border-white/5 py-24 lg:py-36"
        >
          <div className="flex flex-col items-center justify-center mx-auto px-4 md:px-8 lg:px-0 lg:max-w-[1050px]">
            <div>
              <p className="flex justify-center mb-4 text-xs font-semibold tracking-wider text-[#7f4cbd] uppercase">
                oportunidad
              </p>
            </div>
            <div id="web" className="relative items-center w-full mb-10 lg:mb-16">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                  Aplica para obtener tu web 100% gratis
                  <span className="md:block"></span>
                </p>
                <p className="mx-auto mt-8 text-base text-slate-300">
                  ¡Tenemos un programa gratuito en el cual podés aplicar y
                  recibir un sitio web gratis! <br />
                  <br />
                  Si nos gusta tu idea, nos pondremos en contacto lo antes
                  posible y asignaremos un desarrollador para que trabaje junto
                  a vos en la creación de tu sitio web.
                </p>
              </div>
              <div className="text-center mt-10">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScCl5aWwOh60GZyYKmoWaN82icT6jeHKUs2x6ymcaiat5cf_g/viewform?usp=sf_link"
                  target="_blank"
                  rel="noopener noreferer"
                  className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 shadow-[0px_0px_15px_0px_#6b46c1]"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-md font-medium text-white backdrop-blur-3xl">
                    Aplicar ahora
                  </span>
                </a>
              </div>
            </div>
            <div className="relative items-center w-full mx-auto mt-12 max-w-7xl">
              <img
                alt="Página web estilo dashboard"
                className="relative object-cover w-full rounded lg:rounded-2xl"
                src="https://res.cloudinary.com/dn6w1lstv/image/upload/v1705844044/onda-digital/screenshot_hxtloe.png"
              />
            </div>
          </div>
        </section>

        {/* Seccion nuestros clientes */}

        <section
          id="reviews"
          className="py-24 lg:py-36 mx-auto px-4 md:px-8 lg:px-0 lg:max-w-[1050px]"
        >
          <div>
            <p className="flex justify-center mb-4 text-xs font-semibold tracking-wider text-[#7f4cbd] uppercase">
              Reviews
            </p>
          </div>
          <div className="container mx-auto flex flex-col items-center mb-14 lg:mb-20">
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl text-center">
              Nuestros clientes
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-10">
            <div className="flex flex-col items-center gap-4 py-4 lg:w-1/2">
              <div className="relative text-center flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                <p className="text-lg italic px-10 py-2">
                  Landing hermosa y prolija, mucho mejor de lo que esperaba.{" "}
                  <br />
                  El equipo me acompañó desde el primer momento, y me entregaron
                  justo lo que yo quería. <br />
                  Recomiendo para todos sus proyectos web.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </div>
              <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
              <p className="text-xl">Clean & Garden</p>
            </div>

            <div className="flex flex-col items-center gap-4 py-4 lg:w-1/2">
              <div className="relative text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"
                >
                  <path
                    fill="currentColor"
                    d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
                  ></path>
                </svg>
                <p className="px-10 py-2 text-lg italic">
                  Quiero compartir mi experiencia, <br /> ¡y no
                  puedo estar más contento! <br /> La landing que crearon para
                  mi proyecto superó todas mis expectativas. Cada detalle, desde
                  la estética hasta la funcionalidad, demuestra un nivel de
                  profesionalismo excepcional.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"
                >
                  <path
                    fill="currentColor"
                    d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
                  ></path>
                </svg>
              </div>
              <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
              <p className="text-xl">Bastion Jiu Jitsu</p>
            </div>
          </div>
        </section>

        {/* Seccion de cards de nuestros servicios */}

        <section className="pb-24 lg:pb-36 mx-auto px-4 md:px-8 lg:px-0 lg:max-w-[1050px]">
          <div className="w-full">
            <div className="mt-14 mb-24 text-center">
              <div>
                <p className="inline-block mb-4 text-xs font-semibold tracking-wider text-[#7f4cbd] uppercase">
                  Servicios
                </p>
              </div>
              <h2 className="text-4xl text-center font-bold text-white leading-[3.25rem] mb-6">
                Diseño exclusivo para tus proyectos <br />
              </h2>
              <p className="text-base font-normal text-white mx-auto w-[80%] mb-8">
                En nuestro equipo, nos apasiona construir soluciones únicas que
                se adapten perfectamente a lo que necesitas. No utilizamos
                plantillas predefinidas; en cambio, creamos desde cero,
                diseñando cada aspecto de tu proyecto para satisfacer tus
                necesidades específicas.
              </p>
            </div>
            <div>
              <div className="flex flex-col lg:flex-row items-center gap-24 h-fit">
                <div className="card h-fit max-w-[90%]">
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="card-inner p-5 flex flex-col gap-4 h-fit">
                    <div className="flex items-center justify-between">
                      <h3 className="lg:text-lg text-base font-medium">
                        Desarrollo web
                      </h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                        />
                      </svg>
                    </div>
                    <p className="text-sm w-full border-white/40 text-center lg:text-start px-2 pt-6 border-t font-normal">
                      Creamos landing pages 3D, webs institucionales con estilo
                      y tiendas online que aceptan MercadoPago y Stripe.
                      Transformamos tu negocio en una experiencia digital
                      inigualable.
                    </p>
                  </div>
                </div>

                <div className="card h-fit max-w-[90%]">
                  <div className="especial-circle"></div>
                  <div className="especial-circle"></div>
                  <div className="card-inner p-5 flex flex-col gap-4 h-fit">
                    <div className="flex items-center justify-between">
                      <h3 className="lg:text-lg text-base uppercase font-medium">
                        tu web gratis
                      </h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm w-full border-white/40 text-center lg:text-start px-2 pt-6 border-t font-normal">
                      Te invitamos a compartir la propuesta de tu negocio o
                      emprendimiento completando nuestro formulario. Estamos
                      comprometidos a seleccionar dos de cada diez propuestas
                      para crear la web completamente gratis. Solo tendrás que
                      encargarte del dominio, ¡y listo!
                    </p>
                  </div>
                </div>

                <div className="card h-fit max-w-[90%]">
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="card-inner p-5 flex flex-col gap-4 h-fit">
                    <div className="flex items-center justify-between">
                      <h3 className="lg:text-lg text-base font-medium">
                        Edición de videos
                      </h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm w-full border-white/40 text-center lg:text-start px-2 pt-6 border-t font-normal">
                      Potenciamos tus videos para todos lados! Edición
                      especializada para TikTok, Instagram, Facebook, YouTube
                      Reels y más. Adaptamos tu contenido para brillar en todas
                      las redes sociales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como trabajar con nosotros */}

        <div className="py-24 lg:py-36 mx-auto px-4 md:px-8 lg:px-0 lg:max-w-[1050px]">
          <div className="text-center mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-24">
            <div>
              <p className="inline-block mb-4 text-xs font-semibold tracking-wider text-[#7f4cbd] uppercase">
                Pasos
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="#7f4cbd"
                  className="absolute -top-[1rem] left-9 -z-20 hidden w-28 -mt-8 -ml-20"
                >
                  <defs>
                    <pattern
                      id="b902cd03-49cc-4166-a0ae-4ca1c31cedba"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#b902cd03-49cc-4166-a0ae-4ca1c31cedba)"
                    width="36"
                    height="24"
                  />
                </svg>
              </span>
              Trabajemos juntos
            </h2>
            <p className="text-base text-white md:text-lg">
              Descubrí los siguientes pasos para colaborar con nosotros
            </p>
          </div>
          <div className="grid gap-14 lg:grid-cols-4 sm:grid-cols-2">
            <div>
              <div className="flex items-center justify-between mb-6">
                <p className="text-xl font-bold">Mentoria gratis</p>
                <svg
                  className="w-5 text-white transform rotate-90 sm:rotate-0"
                  stroke="#FFC759"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line
                    fill="none"
                    strokeMiterlimit="10"
                    x1="2"
                    y1="12"
                    x2="22"
                    y2="12"
                  />
                  <polyline
                    fill="none"
                    strokeMiterlimit="10"
                    points="15,5 22,12 15,19 "
                  />
                </svg>
              </div>
              <p className="text-white text-sm">
                Te ofrecemos una reunión de análisis gratuita. Revisaremos tu
                negocio o servicio en detalle y te proporcionaremos una
                devolución sin costo alguno. Queremos ser parte de tu éxito y
                aportar nuestro conocimiento para llevar tu proyecto al
                siguiente nivel.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <p className="text-xl font-bold">Proyecto</p>
                <svg
                  className="w-5 text-white transform rotate-90 sm:rotate-0"
                  stroke="#FFC759"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line
                    fill="none"
                    strokeMiterlimit="10"
                    x1="2"
                    y1="12"
                    x2="22"
                    y2="12"
                  />
                  <polyline
                    fill="none"
                    strokeMiterlimit="10"
                    points="15,5 22,12 15,19 "
                  />
                </svg>
              </div>
              <p className="text-white text-sm">
                Nos especializamos en crear proyectos a medida que se alinean
                perfectamente con las necesidades específicas de tu negocio.
                Establecemos objetivos y metas claras desde el principio para
                asegurarnos de que cada proyecto sea un éxito rotundo.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <p className="text-xl font-bold">Review</p>
                <svg
                  className="w-5 text-white transform rotate-90 sm:rotate-0"
                  stroke="#FFC759"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line
                    fill="none"
                    strokeMiterlimit="10"
                    x1="2"
                    y1="12"
                    x2="22"
                    y2="12"
                  />
                  <polyline
                    fill="none"
                    strokeMiterlimit="10"
                    points="15,5 22,12 15,19 "
                  />
                </svg>
              </div>
              <p className="text-white text-sm">
                Instancia de revisión del cliente, donde presentamos el producto
                y estamos totalmente abiertos a tus devoluciones. Queremos
                asegurarnos de que el resultado final alcance el 100% de tus
                expectativas.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <p className="text-xl font-bold">Éxito</p>
                <svg
                  className="w-7 text-white"
                  stroke="#7f4cbd"
                  viewBox="0 0 24 24"
                >
                  <polyline
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    points="6,12 10,16 18,8"
                  />
                </svg>
              </div>
              <p className="text-white text-sm">
                Ya tenes tu web brillando y tu contenido listo para arrasar en
                las redes sociales. Estás completamente online y preparado para
                despegar en el mundo digital. ¡Es hora de vender con todo!
              </p>
            </div>
          </div>
        </div>

        {/* Seccion contacto */}

        <section
          id="hablemos"
          className="bg-black py-8 lg:py-36 mx-auto px-4 md:px-8 lg:px-0 lg:max-w-[1050px]"
        >
          <div className="text-white w-full">
            <div className="flex lg:flex-row flex-col-reverse gap-8 sm:gap-20">
              {/* video */}

              <div className="flex justify-center lg:w-1/2">
                {/* Video con efecto hover */}
                <div className="w-[80%] lg:w-full">
                  <video
                    autoPlay
                    muted
                    loop
                    className="inline-block h-full w-full"
                  >
                    <source src="chips.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* texto */}

              <div className="flex flex-col lg:items-start lg:justify-center w-full lg:w-1/2 text-center lg:text-start">
                <div>
                  <p className="inline-block mb-4 text-xs font-semibold tracking-wider text-[#7f4cbd] uppercase">
                    Contacto
                  </p>
                </div>
                <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                  Hablemos sobre tu proyecto
                </h2>
                <p className="mb-6 md:mb-10">
                  {" "}
                  En Oss Web Studio, no solo creamos sitios web, construimos
                  experiencias digitales memorables. Desde el diseño hasta la
                  implementación, cada proyecto es una oportunidad para innovar.
                  ¿Listo para destacar en la era digital? Contanos sobre tu
                  proyecto y hagámoslo realidad juntos.
                </p>

                <div className="w-full flex flex-col items-center lg:items-start">
                  {/* Icono de correo electrónico */}
                  <a
                    href="mailto:tu@email.com"
                    className="flex items-center mb-4 text-white hover:text-fuchsia-500 transition-colors"
                  >
                    <FaEnvelope className="mr-2" />
                    holaondadigital@gmail.com
                  </a>

                  {/* Icono de WhatsApp */}
                  <a
                    href="https://wa.me/+543489311957"
                    className="flex items-center mb-4 text-white hover:text-fuchsia-500 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="mr-2" />
                    WhatsApp
                  </a>

                  {/* Icono de LinkedIn */}
                  {/* <a
                    href="https://www.linkedin.com/in/tu-linkedin"
                    className="flex items-center text-white hover:text-fuchsia-500 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="mr-2" />
                    LinkedIn
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto pb-20 px-4 md:px-8 lg:px-0 lg:max-w-[1050px]">
          <h1 className="flex flex-col lg:gap-1 font-extrabold tracking-tight text-center md:text-6xl text-4xl lg:text-7xl">
            <span className="">Somos </span> <br />
            <span className="lg:mt-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-green-500">
              Oss
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyon-400 to-purple-300">
                {" "}
                Web Studio
              </span>
            </span>
          </h1>
        </section>

        <footer className="bg-black py-10 mx-auto px-4 md:px-8 lg:px-0 lg:max-w-[1050px] w-full border-t border-white/10">
          <div className="w-full">
            <div className="flex lg:flex-row flex-col-reverse items-center justify-between gap-8 md:gap-0">

              <p className="text-sm text-center text-gray-400 lg:text-right lg:mt-0">
                &nbsp; 2024 &copy; - Creado con amor por Oss Web Studio &nbsp;
                &nbsp;
              </p>

              <span className="text-gray-400 text-sm flex gap-3">
                <a
                  href="#"
                  className="hover:text-fuchsia-500 transition-colors"
                >
                  Home
                </a>{" "}
                |
                <a
                  href="#hablemos"
                  className="hover:text-fuchsia-500 transition-colors"
                >
                  Contacto
                </a>{" "}
                |
                <a
                  href="#web"
                  className="hover:text-fuchsia-500 transition-colors"
                >
                  Web Gratis
                </a>
              </span>

            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
