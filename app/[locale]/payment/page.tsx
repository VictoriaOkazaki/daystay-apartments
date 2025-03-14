"use client";

import { useState } from "react";
import { CreditCard, Apple, ShoppingCartIcon as Paypal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "next/navigation";
import { flats } from "../flats/flats-data";
import { calcDayCount, calcTotalPrice, isValidDate } from "../lib/booking";
import { Suspense } from "react";

export default function PaymentMethods() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  const searchParams = useSearchParams();
  const flatId = searchParams.get("flatId");
  const dateFrom = new Date(searchParams.get("dateFrom") || "");
  const dateTo = new Date(searchParams.get("dateTo") || "");

  if (!isValidDate(dateFrom) || !isValidDate(dateTo)) {
    return <div>Неверный диапазон дат</div>;
  }

  const flat = flats.find((el) => el.id === flatId);
  if (!flat) return <div>Квартира не найдена</div>;
  const flatPrice = flat.price;

  const dayCount = calcDayCount(dateFrom, dateTo);
  const totalPrice = calcTotalPrice(flat, +dayCount);

  console.log("price", flatPrice, "from", dateFrom, "to", dateTo);

  return (
    <Suspense>
      <section className="grid place-items-center h-screen">
        <h1 className="text-xl">К уплате: {totalPrice} AZN</h1>
        <Card className="w-full max-w-md m-auto">
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription>
              Select your preferred payment method
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup
              value={paymentMethod}
              onValueChange={setPaymentMethod}
              className="grid grid-cols-3 gap-4"
            >
              <div>
                <RadioGroupItem
                  value="credit-card"
                  id="credit-card"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="credit-card"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <CreditCard className="mb-3 h-6 w-6" />
                  Credit Card
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="apple-pay"
                  id="apple-pay"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="apple-pay"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <Apple className="mb-3 h-6 w-6" />
                  Apple Pay
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="paypal"
                  id="paypal"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="paypal"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <Paypal className="mb-3 h-6 w-6" />
                  PayPal
                </Label>
              </div>
            </RadioGroup>

            {paymentMethod === "credit-card" && (
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name on card</Label>
                  <Input id="name" placeholder="John Smith" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="card-number">Card number</Label>
                  <Input id="card-number" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="month">Expiry month</Label>
                    <Select>
                      <SelectTrigger id="month">
                        <SelectValue placeholder="Month" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 12 }, (_, i) => (
                          <SelectItem key={i + 1} value={(i + 1).toString()}>
                            {(i + 1).toString().padStart(2, "0")}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="year">Expiry year</Label>
                    <Select>
                      <SelectTrigger id="year">
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 10 }, (_, i) => {
                          const year = new Date().getFullYear() + i;
                          return (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === "apple-pay" && (
              <div className="flex justify-center py-6">
                <Button className="w-full max-w-xs bg-black hover:bg-gray-800 text-white">
                  <Apple className="mr-2 h-4 w-4" />
                  Pay with Apple Pay
                </Button>
              </div>
            )}

            {paymentMethod === "paypal" && (
              <div className="flex justify-center py-6">
                <Button className="w-full max-w-xs bg-[#0070ba] hover:bg-[#005ea6] text-white">
                  <Paypal className="mr-2 h-4 w-4" />
                  Pay with PayPal
                </Button>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button className="w-full">Complete Payment</Button>
          </CardFooter>
        </Card>
      </section>
    </Suspense>
  );
}
