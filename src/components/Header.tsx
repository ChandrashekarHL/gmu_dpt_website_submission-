import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-gmu-maroon to-gmu-dark-maroon flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">AI</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">GMU AI & ML</h1>
              <p className="text-xs text-muted-foreground">Department</p>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
          <a href="#programs" className="text-sm font-medium hover:text-primary transition-colors">Programs</a>
          <a href="#faculty" className="text-sm font-medium hover:text-primary transition-colors">Faculty</a>
          <a href="#research" className="text-sm font-medium hover:text-primary transition-colors">Research</a>
          <a href="#admissions" className="text-sm font-medium hover:text-primary transition-colors">Admissions</a>
          <a href="#achievements" className="text-sm font-medium hover:text-primary transition-colors">Achievements</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex">
          <Button variant="gmu" size="sm">
            Apply Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <nav className="container py-4 space-y-3">
            <a href="#about" className="block py-2 text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#programs" className="block py-2 text-sm font-medium hover:text-primary transition-colors">Programs</a>
            <a href="#faculty" className="block py-2 text-sm font-medium hover:text-primary transition-colors">Faculty</a>
            <a href="#research" className="block py-2 text-sm font-medium hover:text-primary transition-colors">Research</a>
            <a href="#admissions" className="block py-2 text-sm font-medium hover:text-primary transition-colors">Admissions</a>
            <a href="#achievements" className="block py-2 text-sm font-medium hover:text-primary transition-colors">Achievements</a>
            <Button variant="gmu" size="sm" className="w-full mt-4">
              Apply Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;