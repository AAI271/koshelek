"use client";

import React from "react";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

// form data validation using zod
const profileFormSchema = z.object({
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  message: z.string().max(160).min(4),

  urls: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      })
    )
    .optional(),
});

// types for form values
type ProfileFormValues = z.infer<typeof profileFormSchema>;

// This can come from your database or API. Default values for the form fields.
const defaultValues: Partial<ProfileFormValues> = {
  email: "",
  message: ""
};

// handle file upload


// ---------------------------------------------------------

const ContactForm = () => {
  // Function for when to check if the form is valid
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  // testing use state
  const [loading, setLoading] = useState(false);

  // function to submit the form
  const submitForm = async (data: ProfileFormValues) => {
    console.log('chetam')
    toast({
      title: "Hold on!",
    });

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error sending email");
      }

      const responseData = await response.json();
      toast({
        variant: "default",
        title: "Message sent!",
        description: "We'll get back to you soon.",
      });

      // set loading to false
      setLoading(false);

      // reset the form
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Message not sent!",
        description: "We'll fix the problem ASAP.",
      });
      setLoading(false);

      // Handle error as needed
    }
  };

  function setFile(arg0: File): void {
    throw new Error("Function not implemented.");
  }

  return (
    <section
      id="contact"
      className="w-11/12 mx-auto"
    >
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Join Our Daily{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Newsletter
          </span>
        </h3>
        <Form {...form}>
      {/* What to do on submit/ the Form comp wraps the original form */}
      <form onSubmit={form.handleSubmit(submitForm)} className="space-y-8 md:w-6/12 lg:w-3/4 mx-auto mt-32 gap-4 md:gap-2 px-5 py-12 bg-muted/50 border rounded-lg ">
        {/* Single form field/ Name/ Formfield is self closing */}
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Type your email here"
                  autoComplete="true"
                  {...field}
                />
              </FormControl>
              <FormMessage />
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
                  placeholder="Type your message here"
                  className="resize-none"
                  {...field}
                  autoComplete="true"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit button */}
        <div className="flex justify-end">
          <Button type="submit" disabled={loading}>
            Submit
          </Button>
        </div>
      </form>
    </Form>
    </section>
  );
};

export default ContactForm;