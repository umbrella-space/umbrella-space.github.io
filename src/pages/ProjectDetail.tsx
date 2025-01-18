import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Background3D from '@/components/Background3D';
import { useMemo } from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  longDescription: string;
  demoUrl: string;
  githubUrl: string;
  isFrozen: boolean;
}

const projects: Record<string, Project> = {
  "1": {
    title: "Игра Bunker",
    description: 'Цифровая адаптация настольной игры о выживании в бункере после апокалипсиса. Решай, кто останется, управляй ресурсами и адаптируйся к новым вызовам!',
    image: "/placeholder.svg",
    tags: ["C#", "Unity", "App"],
    longDescription: `
      После глобальной катастрофы группа выживших укрылась в бункере. Однако запасы ограничены, а место есть не для всех. 
      В "Bunker" тебе предстоит принимать сложные решения, анализировать навыки персонажей и выстраивать стратегию, чтобы обеспечить выживание. 
      Доверие, логика и немного удачи помогут сохранить контроль над убежищем.
      Цифровая версия настольной игры переносит ее механику в новый формат, добавляя интерактивность и неожиданные события. 
      Готов ли ты к борьбе за место в бункере?
    `,
    demoUrl: "",
    githubUrl: "",
    isFrozen: true
  },
  "2": {
    title: "Скоро",
    description: "...",
    image: "/placeholder.svg",
    tags: ["", "", ""],
    longDescription: `

    `,
    demoUrl: "",
    githubUrl: "",
    isFrozen: false
  },
  "3": {
    title: "Скоро",
    description: "...",
    image: "/placeholder.svg",
    tags: ["", "", ""],
    longDescription: `

    `,
    demoUrl: "",
    githubUrl: "",
    isFrozen: false
  },
  "4": {
    title: "Скоро",
    description: "...",
    image: "/placeholder.svg",
    tags: ["", "", ""],
    longDescription: `

    `,
    demoUrl: "",
    githubUrl: "",
    isFrozen: false
  },
  "5": {
    title: "Скоро",
    description: "...",
    image: "/placeholder.svg",
    tags: ["", "", ""],
    longDescription: `

    `,
    demoUrl: "",
    githubUrl: "",
    isFrozen: false
  },
  "6": {
    title: "Скоро",
    description: "...",
    image: "/placeholder.svg",
    tags: ["", "", ""],
    longDescription: `

    `,
    demoUrl: "",
    githubUrl: "",
    isFrozen: false
  },
  "7": {
    title: "Скоро",
    description: "...",
    image: "/placeholder.svg",
    tags: ["", "", ""],
    longDescription: `

    `,
    demoUrl: "",
    githubUrl: "",
    isFrozen: false
  },
  "8": {
    title: "Скоро",
    description: "...",
    image: "/placeholder.svg",
    tags: ["", "", ""],
    longDescription: `

    `,
    demoUrl: "",
    githubUrl: "",
    isFrozen: false
  },
  "9": {
    title: "Скоро",
    description: "...",
    image: "/placeholder.svg",
    tags: ["", "", ""],
    longDescription: `

    `,
    demoUrl: "",
    githubUrl: "",
    isFrozen: false
  },
};

const generateRandomCracks = () => {
  const cracks = [];
  const numCracks = Math.floor(Math.random() * 6) + 3;

  const getCornerPosition = () => {
    const corners = [
      { x: 0, y: 0 },
      { x: 100, y: 0 },
      { x: 0, y: 100 },
      { x: 100, y: 100 }
    ];
    return corners[Math.floor(Math.random() * corners.length)];
  };

  const getRandomPosition = () => ({
    x: Math.random() * 100,
    y: Math.random() * 100
  });

  const getEdgePosition = (side: 'top' | 'right' | 'bottom' | 'left') => {
    const variation = Math.random() * 10 - 5;
    switch(side) {
      case 'top':
      case 'bottom':
        return Math.random() * 100;
      case 'left':
      case 'right':
        return Math.max(0, Math.min(100, 50 + variation));
    }
  };

  for (let i = 0; i < numCracks; i++) {
    const crackType = Math.random();
    let position, side;

    if (crackType < 0.4) {
      const corner = getCornerPosition();
      position = corner.x;
      side = corner.y === 0 ? 'top' : 'bottom';
    } else if (crackType < 0.7) {
      side = ['top', 'right', 'bottom', 'left'][Math.floor(Math.random() * 4)];
      position = getEdgePosition(side);
    } else {
      const randomPos = getRandomPosition();
      position = randomPos.x;
      side = randomPos.y < 50 ? 'top' : 'bottom';
    }

    const baseLength = crackType < 0.4 ? 35 : (crackType < 0.7 ? 25 : 20);
    const length = Math.floor(Math.random() * baseLength) + 10;
    const rotation = Math.floor(Math.random() * 360) - 180;
    const opacity = (Math.random() * 30 + 20) / 100;
    const width = Math.random() < 0.3 ? 2 : 1;

    if (Math.random() < (crackType >= 0.7 ? 0.5 : 0.3)) {
      const branchLength = length * (Math.random() * 0.6 + 0.2);
      const branchRotation = rotation + (Math.random() * 60 - 30);
      cracks.push({
        position: position + (Math.random() * 10 - 5),
        length: branchLength,
        rotation: branchRotation,
        side,
        opacity: opacity * 0.8,
        width: 1
      });
    }

    cracks.push({ position, length, rotation, side, opacity, width });
  }

  return cracks;
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects[id as keyof typeof projects];
  const cracks = useMemo(() => generateRandomCracks(), []);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <Background3D />
      <div className="min-h-screen container py-12 animate-fade-in">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Назад
        </Link>

        <div className={`card-gradient rounded-xl p-8 mb-8 relative
          ${project.isFrozen ? 'before:absolute before:inset-0 before:bg-[#B3E5FC]/20 before:backdrop-blur-[1px] before:rounded-xl before:pointer-events-none' : ''}`}>
          
          {project.isFrozen && (
            <>
              <div className="absolute inset-0 rounded-xl pointer-events-none">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/5 via-[#D3E4FD]/10 to-white/5" />
                <div className="absolute inset-0 rounded-xl opacity-20 mix-blend-overlay bg-[radial-gradient(circle_at_50%_50%,_#ffffff_0%,_transparent_100%)]" />
                
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className="absolute top-0 left-0 w-16 h-16 rounded-br-3xl bg-[radial-gradient(circle_at_0%_0%,_#ffffff_0%,_transparent_70%)] opacity-40" />
                  <div className="absolute top-0 left-0 w-12 h-12 rounded-br-2xl bg-[radial-gradient(circle_at_0%_0%,_#B3E5FC_0%,_transparent_80%)] opacity-30" />
                  
                  <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-3xl bg-[radial-gradient(circle_at_100%_0%,_#ffffff_0%,_transparent_70%)] opacity-40" />
                  <div className="absolute top-0 right-0 w-12 h-12 rounded-bl-2xl bg-[radial-gradient(circle_at_100%_0%,_#B3E5FC_0%,_transparent_80%)] opacity-30" />
                  
                  <div className="absolute bottom-0 left-0 w-16 h-16 rounded-tr-3xl bg-[radial-gradient(circle_at_0%_100%,_#ffffff_0%,_transparent_70%)] opacity-40" />
                  <div className="absolute bottom-0 left-0 w-12 h-12 rounded-tr-2xl bg-[radial-gradient(circle_at_0%_100%,_#B3E5FC_0%,_transparent_80%)] opacity-30" />
                  
                  <div className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-3xl bg-[radial-gradient(circle_at_100%_100%,_#ffffff_0%,_transparent_70%)] opacity-40" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 rounded-tl-2xl bg-[radial-gradient(circle_at_100%_100%,_#B3E5FC_0%,_transparent_80%)] opacity-30" />
                </div>
                
                <div className="absolute inset-0 rounded-xl">
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-white/30 to-transparent" />
                  <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-white/30 to-transparent" />
                </div>
              </div>

              <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                {cracks.map((crack, index) => {
                  const style: React.CSSProperties = {
                    position: 'absolute',
                    width: `${crack.width}px`,
                    height: `${crack.length}%`,
                    background: `rgba(179, 229, 252, ${crack.opacity})`,
                    transform: `rotate(${crack.rotation}deg)`,
                  };

                  switch (crack.side) {
                    case 'top':
                      style.top = '0';
                      style.left = `${crack.position}%`;
                      break;
                    case 'right':
                      style.right = '0';
                      style.top = `${crack.position}%`;
                      break;
                    case 'bottom':
                      style.bottom = '0';
                      style.left = `${crack.position}%`;
                      break;
                    case 'left':
                      style.left = '0';
                      style.top = `${crack.position}%`;
                      break;
                  }

                  return <div key={index} style={style} />;
                })}
              </div>

              <div className="absolute top-6 -right-1 transform rotate-45 bg-[#B3E5FC] px-4 py-1 shadow-lg z-20">
                <span className="text-primary-foreground text-xs font-semibold whitespace-nowrap">заморожен</span>
              </div>
            </>
          )}

          <div className="aspect-video rounded-lg overflow-hidden mb-8 relative z-10">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className={`font-heading text-3xl font-bold mb-4 relative z-10 
            ${project.isFrozen ? 'text-[#B3E5FC]/70' : ''}`}>
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-6 relative z-10">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className={`bg-secondary px-3 py-1 rounded-full text-sm
                  ${project.isFrozen ? 'bg-[#B3E5FC]/10 text-[#B3E5FC]/70' : ''}`}
              >
                {tag}
              </span>
            ))}
          </div>

          <p className={`text-lg text-muted-foreground mb-8 relative z-10
            ${project.isFrozen ? 'text-[#B3E5FC]/50' : ''}`}>
            {project.description}
          </p>

          <div className="flex gap-4 mb-8 relative z-10">
            <Button asChild disabled={!project.demoUrl}>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Telegram channel
              </a>
            </Button>
            <Button variant="outline" asChild disabled={!project.githubUrl}>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download
              </a>
            </Button>
          </div>

          <div className={`prose prose-invert max-w-none relative z-10
            ${project.isFrozen ? 'text-[#B3E5FC]/70' : ''}`}>
            <h2 className="font-heading text-2xl font-semibold mb-4">О проекте</h2>
            <p className="whitespace-pre-line">{project.longDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
