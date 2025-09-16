import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-gmu-maroon">About Department</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Leading Excellence in 
            <span className="text-gmu-maroon"> AI & ML Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our department stands at the forefront of artificial intelligence and machine learning education, 
            fostering innovation and preparing the next generation of technology leaders.
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Welcome to Our Department</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The Department of Artificial Intelligence and Machine Learning at GM University represents 
              a pinnacle of academic excellence and technological innovation. Established with a vision to 
              bridge the gap between theoretical knowledge and practical application, our department has 
              consistently evolved to meet the demands of the rapidly advancing AI landscape.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We offer comprehensive programs designed to equip students with cutting-edge skills in 
              machine learning, deep learning, natural language processing, computer vision, and robotics. 
              Our curriculum is constantly updated to reflect the latest industry trends and research breakthroughs.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="text-gmu-maroon border-gmu-maroon">Machine Learning</Badge>
              <Badge variant="outline" className="text-gmu-maroon border-gmu-maroon">Deep Learning</Badge>
              <Badge variant="outline" className="text-gmu-maroon border-gmu-maroon">Computer Vision</Badge>
              <Badge variant="outline" className="text-gmu-maroon border-gmu-maroon">NLP</Badge>
              <Badge variant="outline" className="text-gmu-maroon border-gmu-maroon">Robotics</Badge>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gmu-maroon/10 to-gmu-gold/10 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-card rounded-3xl p-8 card-elegant">
              <h4 className="text-xl font-semibold text-foreground mb-4">HoD's Message</h4>
              <blockquote className="text-muted-foreground italic leading-relaxed">
                "Our mission is to nurture brilliant minds who will shape the future of artificial intelligence. 
                We believe in hands-on learning, cutting-edge research, and ethical AI development that benefits humanity."
              </blockquote>
              <div className="mt-4 pt-4 border-t">
                <p className="font-semibold text-foreground">Dr. Rajesh Kumar</p>
                <p className="text-sm text-muted-foreground">Head of Department</p>
                <p className="text-sm text-muted-foreground">Ph.D. in AI, MIT</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision, Mission, Objectives */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="card-elegant">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gmu-maroon to-gmu-dark-maroon rounded-lg flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-gmu-maroon">Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To be a globally recognized center of excellence in AI and ML education, 
                research, and innovation, producing ethical leaders who drive technological advancement.
              </p>
            </CardContent>
          </Card>

          <Card className="card-elegant">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gmu-gold to-gmu-light-gold rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-accent-foreground" />
              </div>
              <CardTitle className="text-gmu-maroon">Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To provide world-class education, conduct groundbreaking research, and foster innovation 
                in AI and ML while maintaining the highest standards of ethical practice.
              </p>
            </CardContent>
          </Card>

          <Card className="card-elegant">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gmu-maroon to-gmu-gold rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-gmu-maroon">Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2">
                <li>• Excellence in AI/ML education</li>
                <li>• Cutting-edge research</li>
                <li>• Industry collaboration</li>
                <li>• Ethical AI development</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;