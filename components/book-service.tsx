"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { myServices } from "@/lib/data";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  CreditCard,
} from "lucide-react";
import { useState } from "react";

type BookingStep = "service" | "details" | "payment" | "confirmation";

const BookService = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<BookingStep>("service");

  //   const bookableServices =  myServices
  //       .map((category) => ({
  //         ...category,
  //         items: category.items.filter((item) => item.bookable === true),
  //       }))
  //       .filter((category) => category.items.length > 0);
  //   };

  const [formData, setFormData] = useState({
    category: "",
    service: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    cardName: "",
  });

  const handleNext = () => {
    if (currentStep === "service") setCurrentStep("details");
    else if (currentStep === "details") setCurrentStep("payment");
    else if (currentStep === "payment") setCurrentStep("confirmation");
  };

  const handleBack = () => {
    if (currentStep === "details") setCurrentStep("service");
    else if (currentStep === "payment") setCurrentStep("details");
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setCurrentStep("service");
      setFormData({
        category: "",
        service: "",
        name: "",
        email: "",
        phone: "",
        message: "",
        cardNumber: "",
        cardExpiry: "",
        cardCvc: "",
        cardName: "",
      });
    }, 300);
  };

  const selectedCategory = myServices.find(
    (cat) => cat.category === formData.category,
  );

  return (
    <div className="lg:sticky lg:top-30 lg:self-start">
      <>
        {/* Floating Sidebar Button */}
        <div className="fixed top-1/2 right-6 z-50 -translate-y-1/2">
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            variant={"outline"}
            className="flex h-auto flex-col items-center gap-2 rounded-full border border-emerald-500 bg-emerald-100/80 px-6 py-4 shadow-lg shadow-emerald-500/50 transition-all duration-300 hover:shadow-xl dark:bg-emerald-900/50"
          >
            <Calendar className="h-6 w-6" />
            <span className="text-sm font-semibold">Book </span>
            <span className="text-sm font-semibold">a</span>
            <span className="text-sm font-semibold"> Service</span>
          </Button>
        </div>

        {/* Multi-step Modal */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-2xl">
                {currentStep === "service" && "Select a Service"}
                {currentStep === "details" && "Your Details"}
                {currentStep === "payment" && "Payment Information"}
                {currentStep === "confirmation" && "Booking Confirmed!"}
              </DialogTitle>
              <DialogDescription>
                {currentStep === "service" &&
                  "Choose the service you're interested in"}
                {currentStep === "details" &&
                  "Tell us about yourself and your requirements"}
                {currentStep === "payment" &&
                  "Enter your payment details to complete booking"}
                {currentStep === "confirmation" &&
                  "We'll be in touch shortly to confirm your booking"}
              </DialogDescription>
            </DialogHeader>

            {/* Step Indicator */}
            <div className="flex items-center justify-center gap-2 py-4">
              {["service", "details", "payment", "confirmation"].map(
                (step, index) => (
                  <div key={step} className="flex items-center">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                        currentStep === step
                          ? "bg-primary text-primary-foreground"
                          : index <
                              [
                                "service",
                                "details",
                                "payment",
                                "confirmation",
                              ].indexOf(currentStep)
                            ? "bg-accent text-accent-foreground"
                            : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {index + 1}
                    </div>
                    {index < 3 && <div className="bg-muted mx-1 h-0.5 w-8" />}
                  </div>
                ),
              )}
            </div>

            {/* Step 1: Service Selection */}
            {currentStep === "service" && (
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Service Category</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) =>
                      setFormData({ ...formData, category: value, service: "" })
                    }
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {myServices.map((cat) => (
                        <SelectItem key={cat.category} value={cat.category}>
                          {cat.category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {formData.category && (
                  <div className="space-y-2">
                    <Label htmlFor="service">Specific Service</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData({ ...formData, service: value })
                      }
                    >
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {selectedCategory?.items.map((item) => (
                          <SelectItem key={item.item} value={item.item}>
                            {item.item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <Button
                  onClick={handleNext}
                  disabled={!formData.service}
                  className="mt-6 w-full"
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}

            {/* Step 2: User Details */}
            {currentStep === "details" && (
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+44 7700 900000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your requirements..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={3}
                  />
                </div>

                <div className="mt-6 flex gap-3">
                  <Button
                    onClick={handleBack}
                    variant="outline"
                    className="flex-1 bg-transparent"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={!formData.name || !formData.email}
                    className="flex-1"
                  >
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Payment Information */}
            {currentStep === "payment" && (
              <div className="space-y-4 py-4">
                <div className="bg-muted space-y-1 rounded-lg p-4">
                  <p className="text-muted-foreground text-sm">
                    Payment destination (demo)
                  </p>
                  <p className="font-mono text-sm">Account: ****1234</p>
                  <p className="font-mono text-sm">Sort Code: 12-34-56</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cardName">Cardholder Name</Label>
                  <Input
                    id="cardName"
                    placeholder="John Doe"
                    value={formData.cardName}
                    onChange={(e) =>
                      setFormData({ ...formData, cardName: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, cardNumber: e.target.value })
                    }
                    maxLength={19}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardExpiry">Expiry Date</Label>
                    <Input
                      id="cardExpiry"
                      placeholder="MM/YY"
                      value={formData.cardExpiry}
                      onChange={(e) =>
                        setFormData({ ...formData, cardExpiry: e.target.value })
                      }
                      maxLength={5}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardCvc">CVC</Label>
                    <Input
                      id="cardCvc"
                      placeholder="123"
                      value={formData.cardCvc}
                      onChange={(e) =>
                        setFormData({ ...formData, cardCvc: e.target.value })
                      }
                      maxLength={3}
                    />
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Button
                    onClick={handleBack}
                    variant="outline"
                    className="flex-1 bg-transparent"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={
                      !formData.cardName ||
                      !formData.cardNumber ||
                      !formData.cardExpiry ||
                      !formData.cardCvc
                    }
                    className="flex-1"
                  >
                    Complete Booking
                    <CreditCard className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === "confirmation" && (
              <div className="space-y-6 py-8 text-center">
                <div className="flex justify-center">
                  <div className="bg-accent/20 flex h-16 w-16 items-center justify-center rounded-full">
                    <CheckCircle2 className="text-accent h-10 w-10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Booking Confirmed!</h3>
                  <p className="text-muted-foreground">
                    Thank you for booking{" "}
                    <span className="text-foreground font-semibold">
                      {formData.service}
                    </span>
                  </p>
                </div>

                <div className="bg-muted space-y-2 rounded-lg p-4 text-left text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Name:</span>
                    <span className="font-medium">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email:</span>
                    <span className="font-medium">{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Service:</span>
                    <span className="font-medium">{formData.service}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm">
                  We've sent a confirmation email to{" "}
                  <span className="text-foreground font-medium">
                    {formData.email}
                  </span>
                </p>

                <Button onClick={handleClose} className="w-full">
                  Close
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </>
    </div>
  );
};

export default BookService;
