"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const FormSchema = z.object({
  name: z.string({
    required_error: "Please enter a name"
  }).min(2, {
    message: "Name must be more than 2 characters long"
  }).max(20, {
    message: "Name must not be longer than 20 characters"
  }),
  question1: z.string({
    required_error: "Please select an option"
  }),
  question2: z.string({
    required_error: "Please select an option"
  }),
  question3: z.string({
    required_error: "Please select an option"
  })
})

const defaultValues = {
  name: "",
  question1: "", question2: "", question3: ""
};


export default function Quiz() {
  const { toast } = useToast();
  const [score, setCalculateScore] = useState<number>(0);
  const [IsSubmitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (IsSubmitted) {
      toast({
        title: "You've already submitted your answers!",
        description: "Refresh the page to try again.",
      });
      return;
    }

    if (data.question1 === "2") {
      setCalculateScore((prevScore) => prevScore + 1)
    }
    if (data.question2 === "3") {
      setCalculateScore((prevScore) => prevScore + 1)
    }
    if (data.question3 === "4") {
      setCalculateScore((prevScore) => prevScore + 1)
    }

    setSubmitted(true);

    setCalculateScore((prevScore) => {
      const newScore = prevScore;
      toast({
        title: `Congratulations ${data.name}! Your score is ${newScore}`,
        description: "Refresh the page to try again",
      });
      return newScore;
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w2/3 space-y-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="p-3">
              <FormLabel>What is your name?</FormLabel>
              <FormDescription></FormDescription>
              <FormControl>
                <Input placeholder="Jin Kai" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="question1"
          render={({ field }) => (
            <FormItem className="p-3">
              <FormLabel>Which of the following are illegal substances in Singapore?</FormLabel>
              <FormDescription></FormDescription>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">Paracetamol</SelectItem>
                  <SelectItem value="2">Methamphetamine</SelectItem>
                  <SelectItem value="3">Ibuprofen</SelectItem>
                  <SelectItem value="4">Sertraline</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="question2"
          render={({ field }) => (
            <FormItem className="p-3">
              <FormLabel>What is the maximum jail time for abusing controlled drugs in Singapore?</FormLabel>
              <FormDescription></FormDescription>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">1 year</SelectItem>
                  <SelectItem value="2">5 years</SelectItem>
                  <SelectItem value="3">10 years</SelectItem>
                  <SelectItem value="4">20 years</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="question3"
          render={({ field }) => (
            <FormItem className="p-3">
              <FormLabel>What is the most common reason why people start abusing drugs?</FormLabel>
              <FormDescription></FormDescription>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">Curiosity</SelectItem>
                  <SelectItem value="2">Stress relief</SelectItem>
                  <SelectItem value="3">Peer pressure</SelectItem>
                  <SelectItem value="4">All of the above</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="p-3">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  )
}