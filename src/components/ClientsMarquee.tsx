import Marquee from "react-fast-marquee";

const ClientsMarquee = () => {
  const logos = [
    "c1.png",
    "c2.png",
    "c3.png",
    "c4.png",
    "c5.png",
    "c6.png",
    "c7.png",
    "c8.png",
    "c9.png",
    "c10.png",
    "c11.png",
    "c12.png",
    "c13.png",
    "c14.png",
  ];

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="w-[70%] flex flex-col items-center justify-center gap-8">
        <h2 className="text-6xl">Our Clients</h2>
        <Marquee direction="left" speed={80} gradient={false}>
          <div className="flex flex-row gap-4 bg-black">
            {logos.map((logo) => (
              <img
                src={`/assets/Clogos/${logo}`}
                alt={logo}
                className="w-80 h-80 object-contain aspect-video"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default ClientsMarquee;
