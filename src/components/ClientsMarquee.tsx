import Marquee from "react-fast-marquee";

const ClientsMarquee = () => {
  const logos = [
    "c1.svg",
    "c2.svg",
    "c3.svg",
    "c4.svg",
    "c5.svg",
    "c6.svg",
    "c7.svg",
    "c8.svg",
    "c9.svg",
    "c10.svg",
    "c11.svg",
    "c12.svg",
  ];

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="w-[70%] flex flex-col items-center justify-center gap-8">
        <h2 className="text-6xl">Our Clients</h2>
        <Marquee direction="left" speed={80} gradient={false}>
          <div className="flex flex-row">
            {logos.map((logo) => (
              <img
                src={`/assets/Clogos/${logo}`}
                alt={logo}
                className="w-50 h-50 object-contain aspect-video"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default ClientsMarquee;
