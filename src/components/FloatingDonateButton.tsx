import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Heart } from "lucide-react";
import PayPalDonation from "./PayPalDonation";

const FloatingDonateButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState("25");

  const donationAmounts = [
    { amount: "25", description: "Funds CPR training materials for 10 students" },
    { amount: "50", description: "Supports one community outreach event" },
    { amount: "100", description: "Provides AED demonstration equipment" },
    { amount: "250", description: "Sponsors a full school chapter setup" },
  ];

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            className="floating-donate pulse-glow bg-primary hover:bg-primary-dark text-primary-foreground shadow-lg rounded-full p-4"
            size="lg"
          >
            <Heart className="h-6 w-6 mr-2" />
            Donate
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="fancy-heading text-2xl text-center">
              Support Our Mission
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-center text-muted-foreground">
              Your donation helps us reach more communities with lifesaving information.
            </p>
            
            <div className="grid grid-cols-2 gap-2">
              {donationAmounts.map((option) => (
                <Button
                  key={option.amount}
                  variant={selectedAmount === option.amount ? "default" : "outline"}
                  onClick={() => setSelectedAmount(option.amount)}
                  className="h-auto p-3 flex-col"
                >
                  <span className="text-lg font-bold">${option.amount}</span>
                  <span className="text-[8px] text-center mt-1 leading-tight">
                    {option.description}
                  </span>
                </Button>
              ))}
            </div>

            <PayPalDonation amount={selectedAmount} />
            
            <p className="text-xs text-center text-muted-foreground">
              Action4AED is a 501(c)(3) nonprofit. Your donation is tax-deductible.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingDonateButton;