import { Heart, Target, Eye, Users, Award, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import gallery1 from "@/assets/gallery-1.jpeg";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We treat every child with love, kindness, and understanding.",
  },
  {
    icon: Users,
    title: "Family",
    description: "We create a warm, family-like environment where children belong.",
  },
  {
    icon: Award,
    title: "Integrity",
    description: "We operate with transparency and accountability in all we do.",
  },
  {
    icon: CheckCircle,
    title: "Excellence",
    description: "We strive to provide the best possible care and support.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Our Story of Love & Hope
            </h1>
            <p className="text-lg text-muted-foreground">
              LISA Supporting and Sustaining Lives was founded with a simple but powerful mission:
              to provide a loving home for orphaned children in Uganda.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={gallery1}
                alt="LISA Baby Care Home"
                className="rounded-2xl shadow-card"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">
                From Humble Beginnings to a Family Home
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  LISA began as a small initiative in Kampala, Uganda, driven by the desire to make
                  a difference in the lives of vulnerable children who had lost their parents.
                </p>
                <p>
                  What started as caring for just a few children has grown into a comprehensive
                  program that provides shelter, nutrition, education, and healthcare to dozens of
                  orphaned children through our Baby Care Home.
                </p>
                <p>
                  Today, LISA stands as a beacon of hope in the community, demonstrating that with
                  love and dedication, we can transform lives and create brighter futures for the
                  most vulnerable among us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-card overflow-hidden">
              <div className="h-2 bg-gradient-cta" />
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide comprehensive care, support, and opportunities for orphaned and
                  vulnerable children in Uganda, empowering them to reach their full potential and
                  become productive members of society.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card overflow-hidden">
              <div className="h-2 bg-gradient-hero" />
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  A world where every child, regardless of circumstances, has access to a loving
                  home, quality education, and the opportunity to build a bright future filled with
                  hope and possibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-teal/10 text-teal font-medium text-sm mb-4">
              Our Values
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">What Guides Us</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="border-0 shadow-card hover:shadow-glow transition-all duration-300 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">Located in Kampala, Uganda</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our Baby Care Home is located in the heart of Uganda's capital, where we serve the local
            community and beyond.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-card text-foreground hover:bg-card/90"
            asChild
          >
            <a
              href="https://maps.google.com/?q=Kampala,Uganda"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Map
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
