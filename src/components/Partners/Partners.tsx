import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Partners = () => {
  const partnersData = [
    {
      image: "images/partners/teqneia.png",
    },
    {
      image: "images/partners/as.png",
    },
  ];

  return (
    <div
      id="partners"
      className="flex flex-col justify-center items-center w-full py-10 bg-[#EEEEEE]"
    >
      <Carousel>
        <h3 className="text-center text-primary-primary text-[40px] py-8">
          Partners
        </h3>
        <CarouselContent>
          <CarouselItem className="flex justify-center items-center gap-8 md:gap-24">
            {partnersData.map((item, index) => (
              <img
                key={index}
                src={item.image}
                className="w-[100px] md:w-[150px]"
              />
            ))}
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Partners;
