import "@/app/marquee.css";
import { logoIconsList } from "@/lib/data";

const Skills = () => {
  return (
    <section
      id="services"
      className="container mx-auto overflow-hidden px-4 py-20"
    >
      <h2 className="mb-4 text-4xl font-bold md:text-5xl">Skills</h2>
      <p className="text-muted-foreground mb-12">
        Transforming ideas into intuitive digital experiences
      </p>
      <div className="relative my-10 md:my-20">
        <div className="gradient-edge" />
        <div className="gradient-edge" />

        <div className="marquee h-52">
          <div className="marquee-box gap-5 md:gap-12">
            {logoIconsList.map((icon, index) => (
              <LogoIcon key={index} icon={icon} />
            ))}

            {logoIconsList.map((icon, index) => (
              <LogoIcon key={index} icon={icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

const LogoIcon = ({ icon }: any) => {
  return (
    <div className="flex-center marquee-item flex-none">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};
