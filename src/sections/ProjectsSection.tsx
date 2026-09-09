import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import { useLang } from '../components/LangContext';
import { projects, Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  totalCards: number;
}

function ProjectCard({ project, index, totalCards }: ProjectCardProps) {
  const { t } = useLang();
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky top-24 md:top-32 h-[85vh]"
      style={{ top: `${96 + index * 28}px` }}
    >
      <motion.div
        style={{ scale, top: `${index * 28}px` }}
        className="relative rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 h-full flex flex-col gap-6"
      >
        {/* Top row */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="text-[#D7E2EA] font-black"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 text-xs sm:text-sm uppercase tracking-widest">
                {t(`projects.${project.key}.category`)}
              </span>
              <span className="text-[#D7E2EA] font-medium uppercase text-lg sm:text-2xl md:text-3xl">
                {project.name}
              </span>
            </div>
          </div>
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            <LiveProjectButton label={t('projects.viewBtn')} />
          </a>
        </div>

        {/* Bottom row - description + image */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 flex-1 min-h-0">
          <div className="w-full md:w-2/5 flex items-center">
            <p
              className="text-[#D7E2EA]/70 font-light leading-relaxed"
              style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
            >
              {t(`projects.${project.key}.desc`)}
            </p>
          </div>
          <div className="w-full md:w-3/5 flex-1 min-h-[180px]">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const { t } = useLang();

  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          {t('projects.title')}
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            totalCards={projects.length}
          />
        ))}
      </div>
    </section>
  );
}
