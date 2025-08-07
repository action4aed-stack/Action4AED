import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Heart,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Get Involved", href: "#get-involved" },
    { label: "Projects", href: "#projects" },
    { label: "Partners", href: "#partners" },
    { label: "Executive Board", href: "/executive-board" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      if (window.location.pathname !== "/") {
        window.location.href = "/" + href;
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      window.location.href = href;
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="fancy-heading text-xl font-bold">Action4AED</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="fancy-heading text-sm font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}

            {/* Social Links */}
            <div className="flex items-center space-x-4 ml-8 pl-8 border-l border-border">
              <a
                href="https://www.instagram.com/action4aed/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/action4aed/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@Action4AED"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/Action4AED"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@action4aed4?_t=ZP-8ygVCBjoJEE&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.3 2H16c.3 2.2 1.8 3.7 4 4v3.3c-1.5-.1-2.8-.5-4-1.3V14c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-4.1 3.1-7.5 7-8v3.3c-2.2.4-4 2.4-4 4.7 0 2.6 2.1 4.7 4.7 4.7 2.6 0 4.7-2.1 4.7-4.7V2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="fancy-heading text-left text-lg font-medium hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                ))}

                <div className="pt-8 border-t border-border space-y-4">
                  <a
                    href="https://www.instagram.com/action4aed/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/action4aed/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://www.youtube.com/@Action4AED"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Youtube className="h-5 w-5" />
                    <span>YouTube</span>
                  </a>
                  <a
                    href="https://x.com/Action4AED"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                    <span>Twitter</span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@action4aed4?_t=ZP-8ygVCBjoJEE&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.3 2H16c.3 2.2 1.8 3.7 4 4v3.3c-1.5-.1-2.8-.5-4-1.3V14c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-4.1 3.1-7.5 7-8v3.3c-2.2.4-4 2.4-4 4.7 0 2.6 2.1 4.7 4.7 4.7 2.6 0 4.7-2.1 4.7-4.7V2z" />
                    </svg>
                    <span>TikTok</span>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
