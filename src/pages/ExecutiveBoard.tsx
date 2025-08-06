import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";

import Divya from "../assets/Divya.jpg";
import Deepthi from "../assets/Deepthi.jpg";
import Adya from "../assets/Adya.jpg";
import Hasit from "../assets/Hasit.jpg";
import Meghana from "../assets/Meghana.jpg";
import Manasvi from "../assets/Manasvi.jpg";
import Gayathri from "../assets/Gayathri.jpg";
import Mukunda from "../assets/Mukunda.jpg";
import Riddhi from "../assets/Riddhi.jpg";
import Prahalya from "../assets/Prahalya.jpg";
import Sri from "../assets/Sri.jpg";
import Kavya from "../assets/Kavya.jpg";

const teamMembers = [
  {
    name: "Divya Paruchuri and Deepthisri Paruchuri",
    role: "Founders",
    bio: "We created Action4AED because we've seen firsthand how access to life-saving tools like AEDs and education about CPR can mean the difference between life and death. However, millions around the world still live without them and we felt a deep responsibility to take action. Our passion for global health equity and preventative care inspired us to help launch Action4AED, with the mission of raising cardiac awareness and providing AEDs to underserved communities.",
    image: Divya,
  },
  {
    name: "Adya Mishra",
    role: "Committee Chairwoman",
    bio: "I joined Action4AED because I'm passionate about making life-saving tools like AEDs more accessible to everyone. Knowing that one device can mean the difference between life and death pushed me to take action. I'm excited to be part of a mission that turns awareness into real change!",
    image: Adya,
  },
  {
    name: "Hasit Babu Anamdesi",
    role: "Committee Chairman",
    bio: "I joined Action4AED because I wanted to help others out by educating others with the education I didn't have before. I want to lead this nonprofit to support many communities to come.",
    image: Hasit,
  },
  {
    name: "Meghana Myneni",
    role: "Social Media Manager",
    bio: "I joined Action4AED because I want to make a real impact by raising awareness about cardiac arrest and increasing access to AEDs. I believe every life counts and so does every moment.",
    image: Meghana,
  },
  {
    name: "Manasvi Udani",
    role: "Social Media Manager",
    bio: "I joined Action4AED because I loved the fact that I could participate in my passion by spreading awareness on AEDs in impoverished areas while simultaneously saving the lives of individuals.",
    image: Manasvi,
  },
  {
    name: "Gayathri Ganduri",
    role: "Secretary",
    bio: "I chose to join Action4AED because there is great value in saving lives by providing community AEDs. By spreading awareness for this cause, many emergencies with disastrous endings could be avoided. I'm glad to take part in this effort!",
    image: Gayathri,
  },
  {
    name: "Mukunda Vanaparthi",
    role: "Secretary",
    bio: "I joined Action for AED because I would love to help our future generations learn a very important device that can save many lives. I look forward to participating with Action for AED to change many lives!",
    image: Mukunda,
  },
  {
    name: "Riddhi Kambam",
    role: "Treasurer",
    bio: "I joined Action4AED because I'm driven to help save lives by improving access to AEDs in third-world countries, where every moment counts. I look forward to making a real impact and seeing more lives saved as access to these devices grows!",
    image: Riddhi,
  },
  {
    name: "Prahalya Sitaram",
    role: "Networking Manager",
    bio: "I joined Action4AED because I have always been passionate about cardiovascular health and I look forward to growing the nonprofit through meaningful partnerships.",
    image: Prahalya,
  },
  {
    name: "Sri Krishnamoorthy",
    role: "Networking Manager",
    bio: "I became involved in Action4AED because I believe in the power of life-saving technology and education. In a world where cardiac arrests can happen anytime, having access to AEDS is extremely crucial for saving lives. My goal is to expand access to AEDs in underserved communities to ensure safety for everyone. I'm excited to contribute to this mission!",
    image: Sri,
  },
  {
    name: "Kavya Sharma",
    role: "Networking Manager",
    bio: "I joined action for AED because the world needs change and this nonprofit not only advocates for that change but we take action and I am willing to put any and all my skills at use for this change.",
    image: Kavya,
  },
];

const ExecutiveBoard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <Button
              variant="ghost"
              className="mb-8"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>

            <h1 className="fancy-heading text-5xl font-bold mb-6">
              Executive Board
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the passionate team leading Action4AED's mission to save lives
              through AED awareness and education.
            </p>
          </div>

          {/* Team Members */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-primary/50"
              >
                <CardHeader className="text-center pb-2">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 mx-auto rounded-full object-cover shadow-md mb-4 transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <CardTitle className="fancy-heading text-xl leading-tight mb-2">
                    {member.name}
                  </CardTitle>
                  <div className="text-primary font-semibold">{member.role}</div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveBoard;
