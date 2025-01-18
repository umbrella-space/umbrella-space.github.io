import { Github, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export const ProfileCard = () => {
  return (
    <div className="card-gradient rounded-xl p-6 md:p-8 animate-fade-in">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="w-28 h-28 rounded-full overflow-hidden">
          <img 
            src="/uploads/123.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center md:text-left flex-1">
          <h1 className="font-heading text-3xl font-bold mb-2">Umbrellla777</h1>
          <p className="text-xl text-primary mb-3">Developer</p>
          <div className="text-muted-foreground text-left space-y-3">
            <h2 className="text-lg font-semibold text-primary">Навыки:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="md:max-w-[300px]">
                <h3 className="font-medium mb-1.5 text-primary/80 border-b border-primary/20 pb-1">Программирование:</h3>
                <p className="break-words">C#, JavaScript, Python, Java, Kotlin, TypeScript</p>
              </div>
              <div>
                <h3 className="font-medium mb-1.5 text-primary/80 border-b border-primary/20 pb-1">Фронтенд:</h3>
                <p>React, HTML, CSS</p>
              </div>
              <div>
                <h3 className="font-medium mb-1.5 text-primary/80 border-b border-primary/20 pb-1">Геймдев:</h3>
                <p>Unity, Unreal Engine</p>
              </div>
              <div>
                <h3 className="font-medium mb-1.5 text-primary/80 border-b border-primary/20 pb-1">Разработка ботов и автоматизация:</h3>
                <p>Telegram Userbots, Web Scripts</p>
              </div>
              <div>
                <h3 className="font-medium mb-1.5 text-primary/80 border-b border-primary/20 pb-1">Разработка сайтов:</h3>
                <p>Web Pages</p>
              </div>
              <div>
                <h3 className="font-medium mb-1.5 text-primary/80 border-b border-primary/20 pb-1">Встраиваемые системы:</h3>
                <p>Arduino</p>
              </div>
              <div>
                <h3 className="font-medium mb-1.5 text-primary/80 border-b border-primary/20 pb-1">Операционные системы:</h3>
                <p>Windows, Linux, Android</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-center md:justify-start mt-4">
            <a href="https://github.com/umbrellla777" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Github className="w-5 h-5" />
              </Button>
            </a>
            <a href="https://t.me/umbrella77_dev/1" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <MessageCircle className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
