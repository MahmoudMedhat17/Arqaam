import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  ip: z.string(),
  email: z.string().email(),
  message_body: z.string(),
  name: z.string(),
  phone: z.string(),
  message: z.string().max(200),
});

type schemaTypes = z.infer<typeof schema>;

const Contactus = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<schemaTypes>({
    resolver: zodResolver(schema),
    defaultValues: {
      ip: "",
      email: "",
      message_body: "",
      name: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<schemaTypes> = async (data) => {
    console.log("hello from onsubmitttttttttttttttttttt", data);
    try {
      await fetch("https://py.dws.teqneia.com/contacts/?tenant_id=1", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          message_body: data.message_body,
          name: "",
          phone: "",
          ip: 12,
          company_name: "",
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      id="contactus"
      className="flex flex-col justify-between items-center py-10"
    >
      <h3 className="text-primary-primary text-4xl py-8">Contact Us</h3>
      <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-baseline gap-16">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-[70%] md:w-[300px] pl-4"
        >
          {/* <input
            type="text"
            placeholder="IP:"
            className="border-2 border-secondary-secondary rounded-full pl-2 placeholder:text-black"
            {...register("ip", {
              required: true,
            })}
          />
          {errors.ip && <span>{errors.ip.message}</span>} */}
          <input
            type="text"
            placeholder="Email:"
            className="border-2 border-secondary-secondary rounded-full pl-2 placeholder:text-black"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
          {/* <input
            type="text"
            placeholder="Message__body:"
            className="border-2 border-secondary-secondary rounded-full pl-2 placeholder:text-black"
            {...register("message_body", {
              required: true,
            })}
          />
          {errors.message_body && <span>{errors.message_body.message}</span>} */}
          {/* <input
            type="text"
            placeholder="Name:"
            className="border-2 border-secondary-secondary rounded-full pl-2 placeholder:text-black"
            {...register("name", {
              required: true,
            })}
          />
          {errors.name && <span>{errors.name.message}</span>} */}
          <input
            type="text"
            placeholder="Phone:"
            className="border-2 border-secondary-secondary rounded-full pl-2 placeholder:text-black"
            {...register("phone", {
              required: true,
            })}
          />
          {errors.phone && <span>{errors.phone.message}</span>}
          <textarea
            placeholder="Message:"
            className="border-2 border-secondary-secondary rounded-lg pl-2 placeholder:text-black"
            {...register("message", {
              required: true,
            })}
          />
          {errors.message && <span>{errors.message.message}</span>}
          <button
            disabled={isSubmitting}
            type="submit"
            className="bg-primary-primary text-white w-[70%] mx-auto rounded-full py-1 px-4"
          >
            {isSubmitting ? "Loading" : "Send"}
          </button>
        </form>
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <FaLocationDot size={30} />
            <p>Dubai</p>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt size={30} />
            <p>+971 50 415 2051</p>
          </div>
          <div className="flex items-center gap-4">
            <MdEmail size={30} />
            <p>Info@Arqaam-it.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
