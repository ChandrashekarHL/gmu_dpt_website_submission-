import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Users, Clock } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      title: "B.Tech in AI & ML",
      duration: "4 Years",
      seats: "120",
      description: "Comprehensive undergraduate program covering fundamentals of AI, ML, and their applications.",
      highlights: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Robotics"]
    },
    {
      title: "M.Tech in AI & ML",
      duration: "2 Years", 
      seats: "60",
      description: "Advanced postgraduate program focusing on research and specialized AI/ML applications.",
      highlights: ["Advanced ML", "Research Methods", "AI Ethics", "Industry Projects", "Thesis Work"]
    },
    {
      title: "Ph.D in AI & ML",
      duration: "3-5 Years",
      seats: "20",
      description: "Doctoral program for cutting-edge research in artificial intelligence and machine learning.",
      highlights: ["Original Research", "Publications", "Conference Presentations", "Teaching", "Innovation"]
    }
  ];

  const courses = [
    "Introduction to Artificial Intelligence",
    "Machine Learning Algorithms", 
    "Deep Learning and Neural Networks",
    "Computer Vision and Image Processing",
    "Natural Language Processing",
    "Reinforcement Learning",
    "AI Ethics and Responsible AI",
    "Robotics and Automation",
    "Big Data Analytics",
    "Cloud Computing for AI",
    "Statistical Methods for ML",
    "Optimization Techniques"
  ];

  return (
    <section id="programs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-gmu-maroon">Academic Programs</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Programs &
            <span className="text-gmu-maroon"> Courses Offered</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive academic programs designed to prepare students for successful careers 
            in the rapidly evolving field of artificial intelligence and machine learning.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card key={index} className="card-elegant group hover:scale-105 transition-transform duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gmu-maroon to-gmu-dark-maroon rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <Badge variant="outline" className="text-gmu-gold border-gmu-gold">
                    {program.seats} Seats
                  </Badge>
                </div>
                <CardTitle className="text-gmu-maroon text-xl">{program.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {program.duration}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {program.description}
                </p>
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-foreground text-sm">Key Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button variant="gmu" size="sm" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Courses Section */}
        <div className="bg-card rounded-3xl p-8 card-elegant">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Core Courses</h3>
            <p className="text-muted-foreground">
              Our curriculum includes a comprehensive range of courses covering all aspects of AI and ML
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-2 h-2 bg-gmu-gold rounded-full flex-shrink-0"></div>
                <span className="text-sm text-foreground">{course}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;