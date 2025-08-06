import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { School, Users, Church, UserPlus } from "lucide-react";

const GetInvolvedSection = () => {
  const involvement = [
    {
      icon: School,
      title: "Start an Action4AED Chapter",
      subtitle: "For Schools",
      description: "Provide AED awareness in your school through club presentations, booths, and more. Get support from our national team and real-world outreach experience.",
      benefits: [
        "Dedicated support from our national team",
        "Access to educational materials and resources",
        "Opportunities for student leadership development",
        "Service hour opportunities for students",
        "Community impact through life-saving education"
      ],
      buttonText: "Register Your School",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSe4-LWUT3cuagyq-fOCK6OLQafkF4FlqATcIr7yiAG5-XSNlA/viewform"
    },
    {
      icon: Users,
      title: "Become an Instructor or Outreach Volunteer",
      subtitle: "For Volunteers",
      description: "Help deliver CPR/AED demos in schools, faith groups, and community events. Get trained, earn service hours, and make an impact.",
      benefits: [
        "Comprehensive training on CPR/AED education",
        "Flexible scheduling to fit your availability",
        "Meaningful service hour opportunities",
        "Direct community impact",
        "Skills development in public speaking and education"
      ],
      buttonText: "Apply to Volunteer",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSe4-LWUT3cuagyq-fOCK6OLQafkF4FlqATcIr7yiAG5-XSNlA/viewform"
    },
    {
      icon: Church,
      title: "Bring Action4AED to Your Space",
      subtitle: "For Faith Organizations & Community Centers",
      description: "Host our team to run hands-on events using mannequins, model AEDs, and community-specific education.",
      benefits: [
        "Free educational events for your community",
        "Professional, experienced instructors",
        "All equipment and materials provided",
        "Customized content for your audience",
        "Follow-up resources and materials"
      ],
      buttonText: "Host an Event",
      link: "https://docs.google.com/forms/d/1-_bYzdmoRcg44kCdhP2_FLkjoK9aIUAgZgq0TqSoFc8/edit"
    },
    {
      icon: UserPlus,
      title: "Get Involved as a Group",
      subtitle: "For Student Groups",
      description: "Whether you're a college club or high school organization, we'll support you in hosting awareness events and presentations.",
      benefits: [
        "Group volunteer opportunities",
        "Leadership development for group members",
        "Event planning and execution support",
        "Educational materials and resources",
        "Networking with other youth organizations"
      ],
      buttonText: "Partner With Us",
      link: "https://docs.google.com/forms/d/1-_bYzdmoRcg44kCdhP2_FLkjoK9aIUAgZgq0TqSoFc8/edit"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="fancy-heading text-5xl font-bold mb-6">
            Join Our Mission to Save Lives
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            There are many ways to get involved with Action4AED. Whether you're a student, educator, 
            community leader, or simply passionate about making a difference, we have opportunities for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {involvement.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="fancy-heading text-2xl">{item.title}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">
                    {item.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">What you'll get:</h4>
                    <ul className="space-y-2">
                      {item.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-semibold py-3"
                    onClick={() => window.open(item.link, '_blank')}
                  >
                    {item.buttonText}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;