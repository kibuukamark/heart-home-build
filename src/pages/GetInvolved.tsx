import { useState } from "react";
import { Heart, Users, Share2, Gift, Mail, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const waysToHelp = [
  {
    icon: Heart,
    title: "Donate",
    description:
      "Your financial contribution directly supports our children's care, education, and healthcare needs.",
    action: "Donate Now",
  },
  {
    icon: Users,
    title: "Volunteer",
    description:
      "Share your time and skills with our children. We welcome volunteers for various activities and programs.",
    action: "Apply Below",
  },
  {
    icon: Share2,
    title: "Spread the Word",
    description:
      "Follow us on social media and share our mission with your friends and family to increase awareness.",
    action: "Share on Social",
  },
  {
    icon: Gift,
    title: "In-Kind Donations",
    description:
      "Donate supplies, clothing, food, or educational materials to support our children's daily needs.",
    action: "Contact Us",
  },
];

const GetInvolved = () => {
  const { toast } = useToast();
  const [volunteerForm, setVolunteerForm] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    availability: "",
    message: "",
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest in volunteering. We'll be in touch soon!",
    });
    setVolunteerForm({
      name: "",
      email: "",
      phone: "",
      skills: "",
      availability: "",
      message: "",
    });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setNewsletterEmail("");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6">
              Get Involved
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Be Part of the Change
            </h1>
            <p className="text-lg text-muted-foreground">
              There are many ways you can help transform the lives of orphaned children in Uganda.
              Every contribution, big or small, makes a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {waysToHelp.map((way, index) => (
              <Card
                key={way.title}
                className="border-0 shadow-card hover:shadow-glow transition-all duration-300 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <way.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">{way.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{way.description}</p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    {way.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-16 bg-muted" id="volunteer-form">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-2 rounded-full bg-teal/10 text-teal font-medium text-sm mb-4">
                Volunteer With Us
              </span>
              <h2 className="font-heading text-3xl font-bold mb-4">
                Apply to Be a Volunteer
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you with volunteer opportunities.
              </p>
            </div>

            <Card className="border-0 shadow-card">
              <CardContent className="p-8">
                <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={volunteerForm.name}
                        onChange={(e) =>
                          setVolunteerForm({ ...volunteerForm, name: e.target.value })
                        }
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={volunteerForm.email}
                        onChange={(e) =>
                          setVolunteerForm({ ...volunteerForm, email: e.target.value })
                        }
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={volunteerForm.phone}
                        onChange={(e) =>
                          setVolunteerForm({ ...volunteerForm, phone: e.target.value })
                        }
                        placeholder="+256 700 000 000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="availability">Availability *</Label>
                      <Input
                        id="availability"
                        value={volunteerForm.availability}
                        onChange={(e) =>
                          setVolunteerForm({ ...volunteerForm, availability: e.target.value })
                        }
                        required
                        placeholder="e.g., Weekends, 3 months"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skills">Skills & Experience *</Label>
                    <Input
                      id="skills"
                      value={volunteerForm.skills}
                      onChange={(e) =>
                        setVolunteerForm({ ...volunteerForm, skills: e.target.value })
                      }
                      required
                      placeholder="e.g., Teaching, Healthcare, Childcare"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Why do you want to volunteer?</Label>
                    <Textarea
                      id="message"
                      value={volunteerForm.message}
                      onChange={(e) =>
                        setVolunteerForm({ ...volunteerForm, message: e.target.value })
                      }
                      placeholder="Tell us about yourself and why you'd like to volunteer with LISA..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-cta hover:opacity-90 text-accent-foreground"
                  >
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="border-0 shadow-card overflow-hidden max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2">
              <div className="bg-gradient-hero p-8 flex flex-col justify-center">
                <Mail className="w-12 h-12 text-primary-foreground mb-4" />
                <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-2">
                  Stay Updated
                </h3>
                <p className="text-primary-foreground/80">
                  Subscribe to our newsletter for updates on our children's progress and ways to
                  help.
                </p>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="newsletter-email">Email Address</Label>
                    <Input
                      id="newsletter-email"
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Subscribe
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default GetInvolved;
