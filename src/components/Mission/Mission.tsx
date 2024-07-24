const Mission = () => {
  const sectionData = [
    {
      img: "images/missionSec/target.png",
      title: "Mission",
      desc: "We provide products and security solutions characterized by agility, flexibility, integration, and innovation.",
    },
    {
      img: "images/missionSec/vision.png",
      title: "Vision",
      desc: "Striving to stand among the foremost global influencers in bringing technological advancements to life.",
    },
  ];

  return (
    <div id="mission" className="bg-primary-primary flex flex-col md:flex-row justify-around items-center h-[100vh]">
      {sectionData.map((item, index) => (
        <div
          key={index}
          className="w-[300px] py-10 bg-white flex flex-col justify-center items-center rounded-lg"
        >
          <div className="flex flex-col justify-center items-center space-y-4 px-4">
            <img src={item.img} className="w-[70px]" />
            <h3 className="text-primary-primary font-semibold text-2xl">
              {item.title}
            </h3>
            <p className="text-center text-xl font-semibold">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mission;
