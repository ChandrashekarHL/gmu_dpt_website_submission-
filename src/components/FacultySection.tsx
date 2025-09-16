import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Award, BookOpen, Users } from "lucide-react";

const FacultySection = () => {
  const faculty = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Professor & Head of Department",
      qualification: "Ph.D. in AI, MIT",
      specialization: "Machine Learning, Computer Vision",
      experience: "15+ Years",
      publications: "85+",
      email: "rajesh.kumar@gmu.ac.in"
    },
    {
      name: "Dr. Priya Sharma",
      designation: "Professor",
      qualification: "Ph.D. in ML, Stanford",
      specialization: "Deep Learning, NLP",
      experience: "12+ Years",
      publications: "70+",
      email: "priya.sharma@gmu.ac.in"
    },
    {
      name: "Dr. Amit Patel",
      designation: "Associate Professor",
      qualification: "Ph.D. in CS, IIT Delhi",
      specialization: "Reinforcement Learning, Robotics",
      experience: "10+ Years",
      publications: "55+",
      email: "amit.patel@gmu.ac.in"
    },
    {
      name: "Dr. Neha Gupta",
      designation: "Associate Professor",
      qualification: "Ph.D. in AI, CMU",
      specialization: "Computer Vision, Medical AI",
      experience: "8+ Years",
      publications: "45+",
      email: "neha.gupta@gmu.ac.in"
    },
    {
      name: "Dr. Suresh Reddy",
      designation: "Assistant Professor",
      qualification: "Ph.D. in ML, Georgia Tech",
      specialization: "Big Data Analytics, Cloud AI",
      experience: "6+ Years",
      publications: "35+",
      email: "suresh.reddy@gmu.ac.in"
    },
    {
      name: "Dr. Kavya Singh",
      designation: "Assistant Professor",
      qualification: "Ph.D. in AI, UC Berkeley",
      specialization: "AI Ethics, Explainable AI",
      experience: "5+ Years",
      publications: "25+",
      email: "kavya.singh@gmu.ac.in"
    }
  ];

  const resources = [
    {
      title: "AI Research Lab",
      description: "State-of-the-art research facility with high-performance computing resources",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: "ML Innovation Center",
      description: "Collaborative space for industry partnerships and innovation projects",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Digital Library",
      description: "Comprehensive collection of AI/ML research papers and resources",
      icon: <Award className="h-6 w-6" />
    }
  ];

  return (
    <section id="faculty" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-gmu-maroon">Our Team</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Faculty
            <span className="text-gmu-maroon"> Profile</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet our distinguished faculty members who are leading experts in artificial intelligence 
            and machine learning, bringing world-class research and teaching expertise.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {faculty.map((member, index) => (
            <Card key={index} className="card-elegant group hover:scale-105 transition-transform duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gmu-maroon to-gmu-dark-maroon rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-primary-foreground font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <CardTitle className="text-center text-gmu-maroon text-lg">{member.name}</CardTitle>
                <p className="text-center text-sm text-muted-foreground">{member.designation}</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-foreground font-medium">{member.qualification}</p>
                  <p className="text-sm text-muted-foreground">{member.specialization}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-gmu-maroon">{member.experience}</div>
                    <div className="text-xs text-muted-foreground">Experience</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gmu-maroon">{member.publications}</div>
                    <div className="text-xs text-muted-foreground">Publications</div>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full text-gmu-maroon border-gmu-maroon hover:bg-gmu-maroon hover:text-primary-foreground">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Resources */}
        <div className="bg-muted/30 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Department Learning Resources</h3>
            <p className="text-muted-foreground">
              State-of-the-art facilities and resources to support cutting-edge research and learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gmu-gold to-gmu-light-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-accent-foreground">
                    {resource.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{resource.title}</h4>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;