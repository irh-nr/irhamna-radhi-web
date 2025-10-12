"use client";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const formSchema = z.object({
  name: z.string().nonempty("Required"),
  email: z
    .string()
    .nonempty("Required")
    .pipe(z.email({ message: "Invalid format" })),
  message: z.string().nonempty("Required"),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="bg-background rounded-2xl p-8 border border-border shadow-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    type="text"
                    className="forminput"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="!mt-0" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="your.email@example.com"
                    type="email"
                    className="forminput"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="!mt-0" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="What would you like to discuss..."
                    className="resize-none w-full px-4 py-3 h-48 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="!mt-0" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 p-6 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-all"
          >
            <Send className="w-5 h-5" />
            Send Message
          </Button>
        </form>
      </Form>

      <div className="mt-8 pt-8 border-t border-border">
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <a
            href="mailto:irhamnanr@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm">irhamnanr@gmail.com</span>
          </a>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Phone className="w-5 h-5" />
            <span className="text-sm">+62 812 8242 0938</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="w-5 h-5" />
            <span className="text-sm">Jakarta, Indonesia</span>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-4">
          <a
            href="https://github.com/irh-nr/"
            rel="noopener noreferrer"
            target="_blank"
            className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/irhamna-radhi-88825b296/"
            rel="noopener noreferrer"
            target="_blank"
            className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
