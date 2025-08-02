import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-primary">Miami</h1>
            <p className="text-sm text-muted-foreground">مطعم المأكولات البحرية</p>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#menu" className="text-foreground hover:text-primary transition-colors">
              القائمة
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              حولنا
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              تواصل معنا
            </a>
          </nav>

          <Button variant="elegant" size="sm">
            احجز طاولة
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;