import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, TrendingUp, Users, Calendar, Award, GraduationCap, Building, Star } from "lucide-react";

const QuickSections = () => {
  const sections = [
    {
      id: "research",
      title: "Research & Publications",
      icon: <FileText className="h-6 w-6" />,
      description: "Cutting-edge research in AI/ML with 200+ published papers",
      coordinator: "Dr. Priya Sharma",
      stats: "150+ Research Papers | 25+ Patents",
      color: "from-gmu-maroon to-gmu-dark-maroon"
    },
    {
      id: "projects", 
      title: "Student Projects",
      icon: <TrendingUp className="h-6 w-6" />,
      description: "Innovative student projects and product models",
      coordinator: "Dr. Amit Patel",
      stats: "80+ Active Projects | 15+ Products",
      color: "from-gmu-gold to-gmu-light-gold"
    },
    {
      id: "admissions",
      title: "Admission Activities", 
      icon: <Users className="h-6 w-6" />,
      description: "Comprehensive admission process and guidelines",
      coordinator: "Prof. Neha Gupta",
      stats: "500+ Students Enrolled",
      color: "from-gmu-maroon to-gmu-gold"
    },
    {
      id: "iqac",
      title: "IQAC Documents",
      icon: <FileText className="h-6 w-6" />,
      description: "Quality assurance and accreditation documents",
      coordinator: "Dr. Suresh Reddy", 
      stats: "NAAC A+ Accredited",
      color: "from-gmu-dark-maroon to-gmu-maroon"
    },
    {
      id: "placement",
      title: "Placement Activities",
      icon: <Building className="h-6 w-6" />,
      description: "Industry partnerships and placement programs",
      coordinator: "Dr. Kavya Singh",
      stats: "95% Placement Rate | ₹12L Avg Package",
      color: "from-gmu-gold to-amber-400"
    },
    {
      id: "achievements",
      title: "Faculty Achievements",
      icon: <Award className="h-6 w-6" />,
      description: "Recognition and awards received by faculty",
      coordinator: "Dr. Rajesh Kumar",
      stats: "50+ Awards | 10+ Best Paper Awards",
      color: "from-amber-500 to-gmu-gold"
    },
    {
      id: "student-achievements",
      title: "Student Achievements", 
      icon: <Star className="h-6 w-6" />,
      description: "Outstanding achievements by our students",
      coordinator: "Prof. Priya Sharma",
      stats: "100+ Competition Wins | 25+ Internships",
      color: "from-gmu-maroon to-red-700"
    },
    {
      id: "alumni",
      title: "Department Alumni",
      icon: <GraduationCap className="h-6 w-6" />,
      description: "Our alumni network across the globe",
      coordinator: "Dr. Amit Patel", 
      stats: "2000+ Alumni | Global Network",
      color: "from-gmu-dark-maroon to-slate-800"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-gmu-maroon">Department Overview</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Department 
            <span className="text-gmu-maroon"> Information</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive information about all department activities, achievements, and resources
          </p>
        </div>

        {/* Sections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section, index) => (
            <Card key={index} className="card-elegant group hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-lg flex items-center justify-center mb-4`}>
                  <div className="text-white">
                    {section.icon}
                  </div>
                </div>
                <CardTitle className="text-gmu-maroon text-lg">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  {section.description}
                </p>
                
                <div className="mb-4">
                  <div className="text-xs text-muted-foreground mb-1">Coordinator:</div>
                  <div className="text-sm font-medium text-foreground">{section.coordinator}</div>
                </div>

                <div className="mb-4">
                  <Badge variant="outline" className="text-xs text-gmu-gold border-gmu-gold">
                    {section.stats}
                  </Badge>
                </div>

                <Button variant="outline" size="sm" className="w-full text-gmu-maroon border-gmu-maroon hover:bg-gmu-maroon hover:text-primary-foreground">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-3xl p-8 card-elegant">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Join Our AI & ML Journey?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Discover cutting-edge programs, world-class research opportunities, and a vibrant academic community 
              dedicated to advancing artificial intelligence and machine learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gmu" size="lg">
                Apply for Admission
              </Button>
              <Button variant="gold" size="lg">
                Explore Research
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickSections;