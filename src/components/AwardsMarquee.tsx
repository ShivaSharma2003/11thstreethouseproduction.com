import Marquee from "react-fast-marquee";

const AwardsMarquee = () => {
  const awards = [
    "a1.svg",
    "a2.svg",
    "a3.svg",
    "a4.svg",
    "a5.svg",
    "a6.svg",
    "a7.svg",
    "a8.svg",
  ];
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-8">
        <h2 className="text-6xl">Awards</h2>
        <Marquee direction="left" speed={80} gradient={false}>
          <div className="flex flex-row p-4 gap-4">
            {awards.map((award) => (
              <img
                src={`/assets/AWARDS/${award}`}
                alt={award}
                className="w-80 h-80 object-contain aspect-video"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default AwardsMarquee;
