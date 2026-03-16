import Marquee from "react-fast-marquee";

const AwardsMarquee = () => {
  const awards = [
    "award1.png",
    "award2.png",
    "award3.png",
    "award4.png",
    "award5.png",
    "award6.png",
    "award7.png",
  ];
  return (
    <section className="flex flex-col items-center justify-center m-4">
      <div className="w-[70%] flex flex-col items-center justify-center gap-8">
        <h2 className="text-6xl">Awards</h2>
        <Marquee direction="left" speed={20} gradient={false}>
          <div className="flex flex-row gap-4">
            {awards.map((award) => (
              <img
                src={`/assets/AWARDS/${award}`}
                alt={award}
                className="w-50 h-50 object-cover aspect-video"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default AwardsMarquee;
