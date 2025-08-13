import { Code, Database, Palette } from "lucide-react";
import { JSX } from "react";

interface SkillCategory {
  title: string;
  description: string;
  icon: JSX.Element;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Membangun antarmuka yang interaktif dan responsif.",
    icon: <Code className="w-6 h-6 text-blue-600" />,
    skills: ["Next.js", "React.js", "TypeScript"],
  },
  {
    title: "Backend Development",
    description: "Membangun server, API, dan database yang andal.",
    icon: <Database className="w-6 h-6 text-blue-600" />,
    skills: ["Laravel", "MySQL"],
  },
  {
    title: "UI/UX Designer",
    description: "Mendesain tampilan yang estetik dan mudah digunakan.",
    icon: <Palette className="w-6 h-6 text-blue-600" />,
    skills: ["Figma"],
  },
];


export default function About() {
    return (
        <>
        <section className="min-h-[80vh] flex flex-col justify-end">
           <div className="w-[100vw] flex mb-10 flex-col items-center pt-28 px-4">
  <div className="w-full md:w-1/2 text-center">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-montserrat mb-4">
      About Me
    </h1>
    <p className="text-base sm:text-lg md:text-xl leading-relaxed">
      Saya adalah seorang 
      <span className="text-blue-600 font-semibold"> Web Developer </span> 
      yang memiliki passion dalam membangun 
      <span className="font-semibold text-blue-600"> website modern, responsif. </span>
      Mulai dari coding sederhana hingga proyek kompleks, saya selalu mengutamakan 
      user experience dan teknologi terbaru.
    </p>
  </div>
</div>


<div className="w-[100vm] flex flex-col items-center">


             <div className="grid grid-cols-1 w-3/4 md:grid-cols-3 gap-8">
      {skillsData.map((category, index) => (
        <div
          key={index}
          className="p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center gap-3 mb-4">
            {category.icon}
            <h1 className="text-xl font-montserrat font-semibold">
              {category.title}
            </h1>
          </div>
          <p className="mb-4 font-poppins">{category.description}</p>
          <ul className="space-y-2">
            {category.skills.map((skill, i) => (
              <li
                key={i}
                className=" flex items-center gap-2 font-montserrat"
              >
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    </div>
        </section>
        </>
    )
}