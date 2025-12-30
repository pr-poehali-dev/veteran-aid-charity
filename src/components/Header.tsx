import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Shield" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">Поддержим Вместе</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#mission" className="hover:text-primary transition-colors">О миссии</a>
            <a href="#stories" className="hover:text-primary transition-colors">Истории</a>
            <a href="#help" className="hover:text-primary transition-colors">Помочь</a>
            <a href="#volunteer" className="hover:text-primary transition-colors">Волонтёры</a>
            <a href="#news" className="hover:text-primary transition-colors">Новости</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Heart" size={18} className="mr-2" />
            Помочь сейчас
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
