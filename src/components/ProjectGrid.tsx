import { ProjectCard } from './ProjectCard';

const projects = [
  {
    id: "1",
    title: "Игра Bunker",
    description: 'Цифровая адаптация настольной игры о выживании в бункере после апокалипсиса. Решай, кто останется, управляй ресурсами и адаптируйся к новым вызовам!',
    tags: ["C#", "Unity", "App"],
    isFrozen: true
  },
  {
    id: "2",
    title: "Скоро",
    description: "...",
    tags: ["", "", ""]
  },
  {
    id: "3",
    title: "Скоро",
    description: "...",
    tags: ["", "", ""],
  },
  {
    id: "4",
    title: "Скоро",
    description: "...",
    tags: ["", "", ""]
  },
  {
    id: "5",
    title: "Скоро",
    description: "...",
    tags: ["", "", ""],
  },
  {
    id: "6",
    title: "Скоро",
    description: "...",
    tags: ["", "", ""]
  },
  {
    id: "7",
    title: "Скоро",
    description: "...",
    tags: ["", "", ""]
  },
  {
    id: "8",
    title: "Скоро",
    description: "...",
    tags: ["", "", ""]
  },
  {
    id: "9",
    title: "Скоро",
    description: "...",
    tags: ["", "", ""]
  }
];

export const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};
