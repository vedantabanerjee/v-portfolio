import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function ContactMe() {
  return (
    <div>
      <section id="contact" className="py-12">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <div className="max-w-md mx-auto">
          <form className="grid gap-4">
            <Input placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Textarea placeholder="Message" />
            <Button type="submit" className="justify-self-end">
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactMe;
