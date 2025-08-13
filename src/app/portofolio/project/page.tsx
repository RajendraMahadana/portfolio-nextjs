// app/projects/page.tsx
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "Sistem Lelang Online",
    description:
      "Platform lelang real-time dengan fitur bidding, pencarian barang, dan autentikasi pengguna.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Laravel"],
    image: "/images/lelang.png",
  },
  {
    title: "Portfolio Website",
    description:
      "Website pribadi untuk menampilkan skill, proyek, dan kontak dengan desain responsif.",
    tech: ["HTML", "CSS"],
    image: "/images/portfolio.png",
  },
  {
    title: "Dashboard Admin",
    description:
      "Dashboard interaktif untuk mengelola data pengguna dan transaksi secara efisien.",
    tech: ["Laravel", "Livewire", "Tailwind"],
    image: "/images/dashboard.png",
  },
];

export default function Project() {
  return (
    <section className="min-h-[100vh] flex justify-center flex-col px-4 md:px-12 py-10 bg-white">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-semibold mb-8 text-center md:text-left">
        My Projects
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-xl shadow-md transition hover:shadow-lg overflow-hidden bg-gray-50"
          >
            {/* Image */}
            <div className="relative w-full h-48 sm:h-56 md:h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw,
                       (max-width: 1024px) 50vw,
                       33vw"
                priority
              />
            </div>

            {/* Content */}
            <div className="p-5 md:p-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-2">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs sm:text-sm font-poppins bg-gray-800 px-3 py-1 rounded-md text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
