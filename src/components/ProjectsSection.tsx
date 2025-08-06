import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Coffee, 
  FileText, 
  Video, 
  PartyPopper, 
  GraduationCap,
  Heart,
  Users,
  Megaphone,
  Globe
} from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      status: "Ongoing",
      title: "AED Awareness Pop-Up Events",
      description: "Interactive booths at community events, farmers markets, and festivals to educate the public about AED locations and basic usage.",
      icon: Calendar,
      color: "bg-rainbow-red",
    },
    {
      status: "Active", 
      title: "Coffee-Shop Style CPR Education Tables",
      description: "Casual, approachable CPR education sessions in local coffee shops and community spaces with hands-on practice.",
      icon: Coffee,
      color: "bg-rainbow-orange",
    },
    {
      status: "Ongoing",
      title: "Flyer Distribution at Local Events", 
      description: "Strategic distribution of educational materials at health fairs, school events, and community gatherings.",
      icon: FileText,
      color: "bg-rainbow-yellow",
    },
    {
      status: "Monthly",
      title: "Webinars & Nonprofit Collaborations",
      description: "Virtual education sessions partnering with other nonprofits and health organizations to expand our reach.",
      icon: Video,
      color: "bg-rainbow-green",
    },
    {
      status: "Regular",
      title: "Monthly Special Events",
      description: "Fundraising events including awareness walks, community health fairs, and educational workshops.",
      icon: PartyPopper,
      color: "bg-rainbow-blue",
    },
    {
      status: "Upcoming",
      title: "OSU Chapter Launch",
      description: "Establishing our first college chapter at Ohio State University to expand our youth-led model to higher education.",
      icon: GraduationCap,
      color: "bg-rainbow-purple",
    },
  ];

  const comingSoon = [
    { title: "Mobile AED Training Unit", icon: Heart },
    { title: "Multilingual Educational Materials", icon: Globe },
    { title: "Community CPR Challenge", icon: Users },
    { title: "High School Ambassador Program", icon: Megaphone },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="fancy-heading text-5xl font-bold mb-6">
            Making Impact Through Strategic Initiatives
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Our diverse portfolio of projects ensures we reach communities through multiple touchpoints, 
            making life-saving education accessible and engaging for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-rainbow" />
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge 
                      variant="secondary" 
                      className="font-semibold px-3 py-1 bg-primary/10 text-primary border-primary/20"
                    >
                      {project.status}
                    </Badge>
                    <div className={`p-2 rounded-full ${project.color} bg-opacity-20`}>
                      <IconComponent className={`w-5 h-5 rainbow-icon`} />
                    </div>
                  </div>
                  <CardTitle className="fancy-heading text-xl leading-tight">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-muted rounded-xl p-8">
          <h3 className="fancy-heading text-3xl font-bold text-center mb-8">
            Coming Soon
          </h3>
          <p className="text-center text-muted-foreground mb-8">
            Exciting new initiatives we're developing to expand our impact
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {comingSoon.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 rainbow-icon" />
                  </div>
                  <h4 className="font-semibold text-foreground leading-tight">
                    {item.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;