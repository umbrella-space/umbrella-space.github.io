import { Link } from 'react-router-dom';
import { useMemo } from 'react';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  isFrozen?: boolean;
}

const generateRandomCracks = () => {
  const cracks = [];
  // Minimum 3 cracks, maximum 8
  const numCracks = Math.floor(Math.random() * 6) + 3;

  // Helper function to generate corner positions
  const getCornerPosition = () => {
    const corners = [
      { x: 0, y: 0 },    // top-left
      { x: 100, y: 0 },  // top-right
      { x: 0, y: 100 },  // bottom-left
      { x: 100, y: 100 } // bottom-right
    ];
    return corners[Math.floor(Math.random() * corners.length)];
  };

  // Helper function to generate random positions within the block
  const getRandomPosition = () => ({
    x: Math.random() * 100,
    y: Math.random() * 100
  });

  // Helper function to generate edge positions
  const getEdgePosition = (side: 'top' | 'right' | 'bottom' | 'left') => {
    const variation = Math.random() * 10 - 5; // -5 to +5
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
    const crackType = Math.random(); // Random number between 0 and 1
    let position, side;

    if (crackType < 0.4) { // 40% chance for corner cracks
      const corner = getCornerPosition();
      position = corner.x;
      side = corner.y === 0 ? 'top' : 'bottom';
    } else if (crackType < 0.7) { // 30% chance for edge cracks
      side = ['top', 'right', 'bottom', 'left'][Math.floor(Math.random() * 4)];
      position = getEdgePosition(side);
    } else { // 30% chance for random position within the block
      const randomPos = getRandomPosition();
      position = randomPos.x;
      side = randomPos.y < 50 ? 'top' : 'bottom';
    }

    const baseLength = crackType < 0.4 ? 35 : (crackType < 0.7 ? 25 : 20);
    const length = Math.floor(Math.random() * baseLength) + 10;
    const rotation = Math.floor(Math.random() * 360) - 180; // Full 360-degree rotation for inner cracks
    const opacity = (Math.random() * 30 + 20) / 100;
    const width = Math.random() < 0.3 ? 2 : 1;

    // Add branching cracks with higher probability for inner cracks
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

export const ProjectCard = ({ id, title, description, tags, isFrozen = false }: ProjectCardProps) => {
  const cracks = useMemo(() => generateRandomCracks(), []);

  return (
    <Link to={`/project/${id}`} className="block">
      <div className={`relative card-gradient hover-gradient rounded-xl p-6 transition-all duration-300 h-full flex flex-col
        ${isFrozen ? 'before:absolute before:inset-0 before:bg-[#B3E5FC]/20 before:backdrop-blur-[1px] before:rounded-xl before:pointer-events-none' : ''}`}>
        {isFrozen && (
          <>
            {/* Enhanced frost effect with multiple layers */}
            <div className="absolute inset-0 rounded-xl pointer-events-none">
              {/* Frost border glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/5 via-[#D3E4FD]/10 to-white/5" />
              
              {/* Frost texture overlay */}
              <div className="absolute inset-0 rounded-xl opacity-20 mix-blend-overlay bg-[radial-gradient(circle_at_50%_50%,_#ffffff_0%,_transparent_100%)]" />
              
              {/* Corner frost patterns */}
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                {/* Top-left corner */}
                <div className="absolute top-0 left-0 w-16 h-16 rounded-br-3xl bg-[radial-gradient(circle_at_0%_0%,_#ffffff_0%,_transparent_70%)] opacity-40" />
                <div className="absolute top-0 left-0 w-12 h-12 rounded-br-2xl bg-[radial-gradient(circle_at_0%_0%,_#B3E5FC_0%,_transparent_80%)] opacity-30" />
                
                {/* Top-right corner */}
                <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-3xl bg-[radial-gradient(circle_at_100%_0%,_#ffffff_0%,_transparent_70%)] opacity-40" />
                <div className="absolute top-0 right-0 w-12 h-12 rounded-bl-2xl bg-[radial-gradient(circle_at_100%_0%,_#B3E5FC_0%,_transparent_80%)] opacity-30" />
                
                {/* Bottom-left corner */}
                <div className="absolute bottom-0 left-0 w-16 h-16 rounded-tr-3xl bg-[radial-gradient(circle_at_0%_100%,_#ffffff_0%,_transparent_70%)] opacity-40" />
                <div className="absolute bottom-0 left-0 w-12 h-12 rounded-tr-2xl bg-[radial-gradient(circle_at_0%_100%,_#B3E5FC_0%,_transparent_80%)] opacity-30" />
                
                {/* Bottom-right corner */}
                <div className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-3xl bg-[radial-gradient(circle_at_100%_100%,_#ffffff_0%,_transparent_70%)] opacity-40" />
                <div className="absolute bottom-0 right-0 w-12 h-12 rounded-tl-2xl bg-[radial-gradient(circle_at_100%_100%,_#B3E5FC_0%,_transparent_80%)] opacity-30" />
              </div>
              
              {/* Edge frost accumulation */}
              <div className="absolute inset-0 rounded-xl">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-white/30 to-transparent" />
                <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-white/30 to-transparent" />
              </div>
            </div>
            
            {/* Updated "frozen" label position */}
            <div className="absolute top-6 -right-1 transform rotate-45 bg-[#B3E5FC] px-4 py-1 shadow-lg z-20">
              <span className="text-primary-foreground text-xs font-semibold whitespace-nowrap">заморожен</span>
            </div>
            
            {/* Dynamic ice cracks */}
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
          </>
        )}
        <h3 className={`font-heading text-xl font-semibold mb-3 relative z-10 
          ${isFrozen ? 'text-[#B3E5FC]/70' : ''}`}>
          {title}
        </h3>
        <p className={`text-muted-foreground mb-4 flex-grow relative z-10
          ${isFrozen ? 'text-[#B3E5FC]/50' : ''}`}>
          {description}
        </p>
        <div className="flex flex-wrap gap-2 relative z-10">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className={`bg-secondary px-3 py-1 rounded-full text-sm
                ${isFrozen ? 'bg-[#B3E5FC]/10 text-[#B3E5FC]/70' : ''}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};