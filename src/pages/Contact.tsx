import { useState } from "react";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "Kampala, Uganda",
    link: "https://maps.google.com/?q=Kampala,Uganda",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@lisauganda.org",
    link: "mailto:info@lisauganda.org",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+256 700 000 000",
    link: "tel:+256700000000",
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Mon - Sat: 8am - 6pm",
    link: null,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll respond as soon as possible.",
    });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Contact Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              We'd Love to Hear From You
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions, want to visit, or interested in partnering with us? Reach out and
              let's start a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={info.title}
                className="border-0 shadow-card text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-heading font-bold mb-1">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm">{info.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">Send Us a Message</h2>
              <Card className="border-0 shadow-card">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name *</Label>
                        <Input
                          id="name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          required
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          required
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        required
                        placeholder="How can we help?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        required
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-cta hover:opacity-90 text-accent-foreground gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">Find Us</h2>
              <Card className="border-0 shadow-card overflow-hidden h-[calc(100%-3rem)]">
                <div className="w-full h-full min-h-[400px] bg-muted flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                    <h3 className="font-heading text-xl font-bold mb-2">Kampala, Uganda</h3>
                    <p className="text-muted-foreground mb-4">
                      Visit our Baby Care Home in the heart of Uganda's capital
                    </p>
                    <Button variant="outline" asChild>
                      <a
                        href="https://maps.google.com/?q=Kampala,Uganda"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open in Google Maps
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4 text-left">
              {[
                {
                  q: "How can I visit the Baby Care Home?",
                  a: "We welcome visitors! Please contact us to schedule a visit. We ask that visits be arranged in advance to ensure the safety and routine of our children.",
                },
                {
                  q: "Is my donation tax-deductible?",
                  a: "LISA is a registered non-profit organization. Please contact us for documentation regarding tax-deductible donations in your country.",
                },
                {
                  q: "Can I sponsor a specific child?",
                  a: "We are currently developing a child sponsorship program. Please contact us to learn about sponsorship opportunities.",
                },
              ].map((faq, index) => (
                <Card key={index} className="border-0 shadow-card">
                  <CardContent className="p-6">
                    <h4 className="font-heading font-bold mb-2">{faq.q}</h4>
                    <p className="text-muted-foreground text-sm">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
