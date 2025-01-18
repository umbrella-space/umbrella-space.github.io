import { ProfileCard } from '@/components/ProfileCard';
import { ProjectGrid } from '@/components/ProjectGrid';
import Background3D from '@/components/Background3D';

const Index = () => {
  return (
    <>
      <Background3D />
      <div className="min-h-screen container py-12 space-y-12 animate-fade-in relative z-10">
        <ProfileCard />
        
        <div>
          <h2 className="font-heading text-2xl font-semibold mb-6">Мои проекты</h2>
          <ProjectGrid />
        </div>
      </div>
    </>
  );
};

export default Index;
