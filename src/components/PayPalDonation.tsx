import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface PayPalDonationProps {
  className?: string;
}

const PayPalDonation = ({ className = "" }: PayPalDonationProps) => {
  const { toast } = useToast();
  const [amount, setAmount] = useState("25");

  const initialOptions = {
    clientId: "ARAXxdItr3b58qUoV7-WU9I0bsp34Z-o-nRXA1nfc_UMac1rZqFFuiOVU_Ik-R4yceWibxO_swtkr3wP",
    currency: "USD",
  };

  const predefinedAmounts = ["25", "50", "100", "250"];

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <div className="flex flex-wrap gap-2">
        {predefinedAmounts.map((amt) => (
          <Button
            key={amt}
            variant={amt === amount ? "default" : "outline"}
            onClick={() => setAmount(amt)}
          >
            ${amt}
          </Button>
        ))}
      </div>

      <div className="w-full max-w-sm">
        <label htmlFor="customAmount" className="block mb-1 text-sm font-medium">
          Or enter a custom amount
        </label>
        <Input
          id="customAmount"
          type="number"
          min="1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="text-center"
        />
      </div>

      <div className="w-full max-w-sm">
        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons
            style={{
              layout: "vertical",
              color: "blue",
              shape: "rect",
              label: "donate",
            }}
            createOrder={(data, actions) => {
              return actions.order.create({
                intent: "CAPTURE",
                purchase_units: [
                  {
                    amount: {
                      value: amount,
                      currency_code: "USD",
                    },
                  },
                ],
              });
            }}
            onApprove={async (data, actions) => {
              if (actions.order) {
                const details = await actions.order.capture();
                toast({
                  title: "Thank you for your donation!",
                  description: `Your donation of $${amount} helps us save lives. Transaction ID: ${details.id}`,
                });
              }
            }}
            onError={(err) => {
              console.error("PayPal Error:", err);
              toast({
                title: "Payment Error",
                description: "There was an error processing your donation. Please try again.",
                variant: "destructive",
              });
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

export default PayPalDonation;
