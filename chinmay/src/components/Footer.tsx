import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gmu-dark-maroon text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Department Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-gmu-gold to-gmu-light-gold flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">AI</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">GMU AI & ML</h3>
                <p className="text-xs text-primary-foreground/80">Department</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Leading the future of artificial intelligence and machine learning education through 
              innovative research, comprehensive programs, and industry partnerships.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-gmu-gold hover:text-accent-foreground">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-gmu-gold hover:text-accent-foreground">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-gmu-gold hover:text-accent-foreground">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-gmu-gold hover:text-accent-foreground">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-primary-foreground/80 hover:text-gmu-gold transition-colors text-sm">About Department</a></li>
              <li><a href="#programs" className="text-primary-foreground/80 hover:text-gmu-gold transition-colors text-sm">Programs</a></li>
              <li><a href="#faculty" className="text-primary-foreground/80 hover:text-gmu-gold transition-colors text-sm">Faculty</a></li>
              <li><a href="#research" className="text-primary-foreground/80 hover:text-gmu-gold transition-colors text-sm">Research</a></li>
              <li><a href="#admissions" className="text-primary-foreground/80 hover:text-gmu-gold transition-colors text-sm">Admissions</a></li>
              <li><a href="#achievements" className="text-primary-foreground/80 hover:text-gmu-gold transition-colors text-sm">Achievements</a></li>
            </ul>
          </div>

          {/* Academic */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Academic</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-gmu-gold transition-colors text-sm">B.Tech AI & ML</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-gmu-gold transition-colors text-sm">M.Tech AI & ML</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-gmu-gold transition-colors text-sm">Ph.D Program</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-gmu-gold transition-colors text-sm">Research Areas</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-gmu-gold transition-colors text-sm">Publications</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-gmu-gold transition-colors text-sm">Student Projects</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gmu-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">
                    Department of AI & ML<br />
                    GM University<br />
                    Davangere, Karnataka 577006
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gmu-gold flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm">+91 8192 345678</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gmu-gold flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm">aiml@gmu.ac.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Department of AI & ML, GM University. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/60 hover:text-gmu-gold text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-primary-foreground/60 hover:text-gmu-gold text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-primary-foreground/60 hover:text-gmu-gold text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;