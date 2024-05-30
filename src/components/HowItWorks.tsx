import { HOW_IT_WORKS } from "@/constants";
import { CircleCheckBig } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="container mx-auto my-10 border-b pb-10">
      <h2 className="text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
        {HOW_IT_WORKS.title}
      </h2>
      <p className="mx-auto my-10 max-w-4xl text-center text-neutral-800">
        {HOW_IT_WORKS.content}
      </p>
      <div className="works relative h-[640px] rounded-xl">
        <div className="absolute left-0 top-0 h-full overflow-y-hidden p-10 md:p-20">
          {HOW_IT_WORKS.steps.map((step, index) => (
            <div key={index}>
              <div className="flex items-center">
                <CircleCheckBig className="mr-4 text-green-400" />
                <h3 className="font-medium uppercase text-neutral-200">
                  {step.title}
                </h3>
              </div>
              <p className="text-neutral-300 my-2 p-2 max-w-80">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
