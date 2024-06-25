import { TESTIMONIALS } from "@/constants";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="container mx-auto my-20 border-b pb-10">
      <h2 className="mb-20 text-center text-3xl tracking-tighter sm:text-4xl">
        What Our Clients Said
      </h2>
      <div className="flex flex-wrap">
        {TESTIMONIALS.map((testimonial, index) => (
          <div key={index} className="w-full p-2 md:w-1/2 lg:w-1/4">
            <div className="rounded-xl border p-4">
              <div className="flex items-center">
                <Image
                  className="mr-4 rounded-full border-4 border-neutral-400"
                  alt={testimonial.name}
                  src={testimonial.image}
                  width={80}
                  height={80}
                />
                <div>
                  <h4 className="w-full">{testimonial.name}</h4>
                  <span className="text-sm text-neutral-600">
                    {testimonial.instagram}
                  </span>
                </div>
              </div>
            </div>
            <p className="p-4">{testimonial.feedback}</p>
            <p className="text-sm text-neutral-400">
              {testimonial.city_country}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
