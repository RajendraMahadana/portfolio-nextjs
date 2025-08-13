import React, { useState } from 'react';
import { Code, Palette, Database, Globe, Brain, Star, ChevronRight } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

interface Highlight {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

type CategoryKeys = 'frontend' | 'backend' | 'mobile' | 'design';

const SkillsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKeys>('frontend');

  const skillCategories: Record<CategoryKeys, SkillCategory> = {
    frontend: {
      title: 'Frontend Development',
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: 'React.js', level: 40, color: 'bg-blue-500' },
        { name: 'Next.js', level: 60, color: 'bg-gray-800' },
        { name: 'TypeScript', level: 60, color: 'bg-blue-600' },
        { name: 'Tailwind CSS', level: 92, color: 'bg-teal-500' },
        { name: 'Livewire', level: 60, color: 'bg-purple-500' },
        
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'Laravel', level: 85, color: 'bg-red-600' },
        { name: 'MySQL', level: 78, color: 'bg-blue-700' },
      ]
    },
    mobile: {
      title: 'Programming Language',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'PHP', level: 20, color: 'bg-purple-400' },
        { name: 'JavaScript', level: 20, color: 'bg-yellow-400' },
        
      ]
    },
    design: {
      title: 'Design & UI/UX',
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: 'Figma', level: 90, color: 'bg-pink-500' },        
        { name: 'Adobe Ilustrator', level: 40, color: 'bg-orange-800' }
      ]
    }
  };

  const highlights: Highlight[] = [
    { icon: <Code className="w-8 h-8" />, title: '2+ Years', subtitle: 'Experience' },
    { icon: <Star className="w-8 h-8" />, title: '5+', subtitle: 'Projects Completed' },
    { icon: <Brain className="w-8 h-8" />, title: '7+', subtitle: 'Technologies' }
  ];

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text- mb-16">
          <h2 className="text-5xl font-semibold font-montserrat md:text-6xl mb-2 tracking-tight">
            My <span className="">Skills</span>
          </h2>
          <p className="text-x mx-auto font-montserrat leading-relaxed">
            Berkomitmen untuk menciptakan  pengalaman <br /> digital yang luar biasa 
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item: Highlight, index: number) => (
            <div key={index} className="rounded-xl p-8 border shadow-md border-white/10 transition-all duration-300 group">
              <div className=" mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
              <p className="">{item.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Navigation */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Categories</h3>
            {(Object.entries(skillCategories) as [CategoryKeys, SkillCategory][]).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`w-full flex items-center justify-between p-4 rounded-lg transition-all duration-300 group ${
                  activeCategory === key
                    ? 'shadow-lg bg-gray-800 text-white'
                    : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={activeCategory === key ? '' : ''}>
                    {category.icon}
                  </div>
                  <span className="font-medium text-sm">{category.title}</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                  activeCategory === key ? 'rotate-90' : 'group-hover:translate-x-1'
                }`} />
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="flex items-center space-x-3 mb-8">
                <div className="">
                  {skillCategories[activeCategory].icon}
                </div>
                <h3 className="text-2xl font-bold">
                  {skillCategories[activeCategory].title}
                </h3>
              </div>

              <div className="space-y-6">
                {skillCategories[activeCategory].skills.map((skill: Skill, index: number) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className=" text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-slate-700/50 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                        style={{
                          width: `${skill.level}%`,
                          boxShadow: `0 0 20px ${skill.color.replace('bg-', '').replace('-500', '').replace('-600', '').replace('-700', '').replace('-800', '').replace('-400', '')}40`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default SkillsPage;