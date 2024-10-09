"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

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
  })
})

export default function Quiz() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (data.question1 === "yes") {
      toast({
        title: `Congratulations ${data.name}`,
        description: "You are a drug dealer",
      })
    } else {
      toast({
        title: `Thank you ${data.name}`,
        description: "Unfortunately you are not a drug dealer",
      })
    }
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
              <FormLabel>Do you sell drugs?</FormLabel>
              <FormDescription></FormDescription>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
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

// import { Input } from "@/components/input/input";

// export default function Quiz() {
//   return (
//     <div className="p-3">
//       <div>
//         <p>
//           Username
//         </p>
//       </div>
//       <div className="py-1">
//         <Input type="user" placeholder="John" />
//       </div>
//       <div>
//         <p className="text-xs text-gray-400">
//           This is your public display name
//         </p>
//       </div>

//       <div className="py-3">
//         <div>
//           <p>
//             What is the maximum penalty for drug abuse in Singapore?
//           </p>
//         </div>
//         <div className="py-1">
//           <Input type="user" placeholder="Answer" />
//         </div>
//       </div>

//       <div className="py-3">
//         <div>
//           <p>
//             Question 2
//           </p>
//         </div>
//         <div className="py-1">
//           <Input type="user" placeholder="Answer" />
//         </div>
//       </div>

//       <div className="py-3">
//         <div>
//           <p>
//             Question 3
//           </p>
//         </div>
//         <div className="py-1">
//           <Input type="user" placeholder="Answer" />
//         </div>
//       </div>
//     </div>
//   );
// }