import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
  const heroData = [
    {
      title: "Elevate the performance of your software App with Arqaam",
      desc: "enhance the overall functionality, \n effectiveness, and efficiency of your \n website that deals with software products \n or services.",
    },
    {
      title: "Empower your  Mobile app with Arqaam",
      desc: "suggests facilitating or providing the \n means for your technology-oriented \n website to operate effectively or achieve \n its objectives",
    },
    {
      title: "Strengthen your startup's website presence with Arqaam",
      desc: "implies taking actions to make your \n startup's website more robust, influential, \n and noticeable within its online sphere.",
    },
    {
      title: "Strengthen Your SaaS with Arqaam",
      desc: "Ultimately, the goal is to make your SaaS \n offering more robust and attractive to \n potential customers, leading to increased \n adoption, satisfaction, and retention",
    },
  ];

  return (
    <div
      id="hero"
      style={{
        backgroundImage: "url(images/hero/main.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="relative w-full h-[100vh] flex flex-col justify-center items-center pt-16"
    >
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,  
          }),
        ]}
        className="relative z-10 w-full h-full overflow-hidden flex justify-start items-center"
      >
        <CarouselContent>
          {heroData.map((item, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center"
            >
              <div className="relative flex items-center p-8">
                <div className="flex items-center">
                  <img
                    src="images/hero/vector1.png"
                    className="w-[120px] sm:w-[150px] md:w-[220px] lg:w-[250px]"
                  />
                  <h3 className="absolute text-sm sm:text-xl md:text-3xl lg:text-4xl left-[90px] sm:left-[110px] md:left-[200px] w-[30vw] text-white font-bold sm:leading-[30px]">
                    {item.title}
                  </h3>
                </div>
                <p className="absolute -left-8 md:left-[270px] lg:left-[300px] top-[285px] sm:top-[340px] md:top-[350px] lg:top-[390px] w-[300px] md:w-[230px] lg:w-[350px] xl:w-[30vw] text-sm md:text-xl lg:text-2xl font-semibold">
                  {item.desc}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Hero;
