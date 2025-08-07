import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import PartnerCarousel from "@/components/PartnerCarousel";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import ProjectsSection from "@/components/ProjectsSection";
import FloatingDonateButton from "@/components/FloatingDonateButton";
import PayPalDonation from "@/components/PayPalDonation";
import heroImage from "@/assets/hero-image.jpg";

// Animated counter component
const Counter = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = Math.ceil(end / (duration / 10));

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(start);
    }, 10);

    return () => clearInterval(counter);
  }, [end]);

  return <span>{count.toLocaleString()}</span>;
};

const Index = () => {
  const stats = [
    { end: 350000, label: "Cardiac arrests occur outside hospitals annually in the U.S." },
    { end: 10, label: "Current survival rate for out-of-hospital cardiac arrest" },
    { end: 6, label: "Partner Organizations" },
  ];

  const challenges = [
    {
      title: "Limited AED Access",
      description: "Many communities lack readily available AEDs and knowledge of their locations."
    },
    {
      title: "Insufficient CPR Training", 
      description: "Underserved areas have limited access to quality CPR education and training programs."
    },
    {
      title: "Expensive Certification",
      description: "Traditional certification programs can be costly and inaccessible to many communities."
    },
    {
      title: "Awareness Gap",
      description: "Many people don't know how to recognize cardiac emergencies or respond appropriately."
    }
  ];

  const donationAmounts = [
    { amount: "25", description: "Funds CPR training materials for 10 students" },
    { amount: "50", description: "Supports one community outreach event" },
    { amount: "100", description: "Provides AED demonstration equipment" },
    { amount: "250", description: "Sponsors a full school chapter setup" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingDonateButton />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000 ease-in"
          onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
        />
        <div className="absolute inset-0 bg-primary/40" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <p className="text-xl mb-4 font-medium">Youth-Led Nonprofit</p>
          <h1 className="fancy-heading text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Join the Movement.
            <br />
            <span className="text-destructive">Save a Life.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Action4AED is dedicated to AED awareness, hands-on CPR education, and outreach to underserved communities. 
            Together, we can make life-saving knowledge accessible to everyone.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-white/90 text-primary hover:bg-white font-semibold px-8 py-4 text-lg"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe4-LWUT3cuagyq-fOCK6OLQafkF4FlqATcIr7yiAG5-XSNlA/viewform', '_blank')}
            >
              Register Your School Chapter
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 font-semibold px-8 py-4 text-lg"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe4-LWUT3cuagyq-fOCK6OLQafkF4FlqATcIr7yiAG5-XSNlA/viewform', '_blank')}
            >
              Become a Volunteer
            </Button>
            <Button 
              size="lg" 
              className="pulse-glow bg-primary/90 hover:bg-primary text-white font-semibold px-8 py-4 text-lg"
            >
              Donate to Support Us
            </Button>
          </div>

          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/10"
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore More ↓
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="fancy-heading text-5xl font-bold mb-6">Who We Are</h2>
            <h3 className="fancy-heading text-3xl font-semibold mb-8 text-primary">
              Empowering Communities Through Life-Saving Education
            </h3>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Action4AED is a youth-led nonprofit dedicated to AED awareness, hands-on CPR education, and outreach to underserved communities. 
              We host educational events, partner with health departments and schools, and distribute AED-related materials to make life-saving knowledge accessible to everyone.
            </p>
          </div>

          <div className="bg-muted rounded-xl p-8 mb-16">
            <blockquote className="text-2xl text-center font-medium text-foreground italic max-w-4xl mx-auto">
              "We're not here to replace certification—we're here to empower, educate, and increase access to life-saving skills in communities that need it most."
            </blockquote>
            <p className="text-center text-primary font-semibold mt-4">— Action4AED Mission Statement</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  <Counter end={stat.end} />
                </div>
                <div className="text-sm text-muted-foreground leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work & Impact Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="fancy-heading text-5xl font-bold mb-6">Our Work & Impact</h2>
            <h3 className="fancy-heading text-3xl font-semibold mb-8 text-primary">
              Addressing Critical Gaps in Emergency Preparedness
            </h3>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Every year, 350,000 cardiac arrests occur outside of hospitals in the U.S. We're working to bridge the gap between emergency situations and life-saving response.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {challenges.map((challenge, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="fancy-heading text-xl">{challenge.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {challenge.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <div id="get-involved">
        <GetInvolvedSection />
      </div>

      {/* Projects Section */}
      <div id="projects">
        <ProjectsSection />
      </div>

      {/* Partners Section */}
      <div id="partners">
        <PartnerCarousel />

        {/* Embed Updated Google Form */}
        <div className="mt-12">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe4-LWUT3cuagyq-fOCK6OLQafkF4FlqATcIr7yiAG5-XSNlA/viewform?embedded=true"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="w-full"
          >
            Loading…
          </iframe>
        </div>
      </div>

      {/* Donation Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="fancy-heading text-5xl font-bold mb-6">Support Our Mission</h2>
            <h3 className="fancy-heading text-3xl font-semibold mb-8 text-primary">
              Help Us Save Lives
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your donation helps us reach more communities with lifesaving information. Every dollar supports materials, AED models, travel, and expanding our impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {donationAmounts.map((option, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-primary">${option.amount}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-md mx-auto">
            <h4 className="fancy-heading text-2xl font-bold text-center mb-6">Make a Difference Today</h4>
            <PayPalDonation amount="25" />
            <p className="text-center text-sm text-muted-foreground mt-4">
              Action4AED is a 501(c)(3) nonprofit. Your donation is tax-deductible.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-primary-foreground text-primary px-3 py-2 rounded font-bold text-base">A4A</div>
              </div>
              <h3 className="fancy-heading text-2xl font-bold mb-4">Action4AED</h3>
              <p className="text-primary-foreground/80 text-base leading-relaxed">
                Youth-led nonprofit dedicated to AED awareness, hands-on CPR education, and outreach to underserved communities.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-base">
                <li><a href="#about" className="hover:text-white">About Us</a></li>
                <li><a href="#projects" className="hover:text-white">Our Work</a></li>
                <li><a href="#get-involved" className="hover:text-white">Volunteer</a></li>
                <li><a href="#projects" className="hover:text-white">Projects</a></li>
                <li><a href="#partners" className="hover:text-white">Partners</a></li>
                <li><button className="hover:text-white text-left">Donate</button></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-2">
              <h4 className="font-semibold mb-6 text-lg">Get in Touch</h4>
              <p className="text-primary-foreground/80 text-base mb-6">action4aed@gmail.com</p>
              <p className="text-primary-foreground/80 text-base mb-6">Want to get involved or learn more?</p>
              <button className="bg-primary-foreground text-primary px-6 py-3 rounded font-semibold text-base hover:bg-primary-foreground/90 transition-colors">
                Join our mission →
              </button>
            </div>
          </div>

          <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-base text-primary-foreground/60">
              © 2024 Action4AED. All rights reserved.
            </p>
            <p className="text-base text-primary-foreground/60">
              501(c)(3) Nonprofit Organization
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
