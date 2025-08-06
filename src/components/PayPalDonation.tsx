import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useToast } from "@/hooks/use-toast";

interface PayPalDonationProps {
  amount?: string;
  className?: string;
}

const PayPalDonation = ({ amount = "25", className = "" }: PayPalDonationProps) => {
  const { toast } = useToast();

  const initialOptions = {
    clientId: "ARAXxdItr3b58qUoV7-WU9I0bsp34Z-o-nRXA1nfc_UMac1rZqFFuiOVU_Ik-R4yceWibxO_swtkr3wP",
    currency: "USD",
  };

  return (
    <div className={className}>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            layout: "vertical",
            color: "blue",
            shape: "rect",
            label: "donate"
          }}
          createOrder={(data, actions) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  amount: {
                    value: amount,
                    currency_code: "USD"
                  }
                }
              ]
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
  );
};

export default PayPalDonation;