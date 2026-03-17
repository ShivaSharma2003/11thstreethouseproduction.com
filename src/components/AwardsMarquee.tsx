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
      <div className="w-[70%] flex flex-col items-center justify-center gap-8">
        <h2 className="text-6xl">Awards</h2>
        <Marquee direction="left" speed={20} gradient={false}>
          <div className="flex flex-row p-4 gap-4">
            {awards.map((award) => (
              <img
                src={`/assets/AWARDS/${award}`}
                alt={award}
                className="w-50 h-50 object-contain"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default AwardsMarquee;
