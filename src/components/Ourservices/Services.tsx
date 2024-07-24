const Services = () => {
  const servicesData = [
    {
      img: "images/ourservices/development.png",
      title: "SOFTWARE DEVELOPMENT",
      desc: "Web Design - Web Apps - Mobile Apps - Cloud Based Solutions -  SaaS",
    },
    {
      img: "images/ourservices/security.png",
      title: "CYBER SECURITY",
      desc: "SECaaS - Compliance/ Regulations - Risk Management - Security Testing",
    },
  ];

  return (
    <div
      id="services"
      className="flex flex-col justify-center items-center py-10"
    >
      <h3 className="text-[40px] text-primary-primary py-4">Services</h3>
      <div className="flex flex-col md:flex-row justify-between items-center gap-24">
        {servicesData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center space-y-2"
          >
            <img src={item.img} className="w-[150px]" />
            <h3 className="text-primary-primary font-semibold text-lg">
              {item.title}
            </h3>
            <p className="text-primary-primary w-[300px] text-center">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
