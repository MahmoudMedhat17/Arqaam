const Aboutus = () => {
  return (
    <div
      id="aboutus"
      className="flex flex-col md:flex-row justify-center items-center gap-8 py-20 px-4 space-y-10 md:space-y-0"
    >
      <img
        src="images/aboutus/aboutus.png"
        className="w-[300px] md:w-[400px] lg:w-[500px]"
      />
      <div className="max-w-[600px]">
        <h3 className="text-primary-primary text-2xl lg:text-4xl">About us</h3>
        <p className="text-[20px] md:text-[25px] lg:text-[30px]">
          We are a forward-thinking software company, founded to meet the
          increasing global need for dependable, state-of-the-art solutions.
          Arqaam specializes in delivering groundbreaking security solutions for
          both businesses and personal use.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
