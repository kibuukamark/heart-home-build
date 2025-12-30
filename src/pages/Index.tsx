import { Heart, Users, Calendar, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";

const stats = [
  { icon: Users, value: "50+", label: "Children Cared For" },
  { icon: Calendar, value: "10+", label: "Years of Service" },
  { icon: Heart, value: "1000+", label: "Lives Touched" },
  { icon: Star, value: "100%", label: "Love & Dedication" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-6">
                Making a Difference in Uganda
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Every Child Deserves{" "}
                <span className="text-gradient">Love, Care & Hope</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                LISA Supporting and Sustaining Lives provides a loving home, quality education, and
                healthcare to orphaned children in Kampala, Uganda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-cta hover:opacity-90 text-accent-foreground shadow-soft gap-2 text-lg px-8"
                >
                  <Heart className="w-5 h-5" />
                  Donate Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2 text-lg px-8"
                  asChild
                >
                  <Link to="/about">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Hero Images */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative z-10">
                <img
                  src={gallery1}
                  alt="Children at LISA Baby Care Home"
                  className="rounded-2xl shadow-card w-full max-w-md mx-auto"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 z-20 hidden md:block">
                <img
                  src={gallery2}
                  alt="Happy moments at LISA"
                  className="rounded-2xl shadow-card w-48 border-4 border-card"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 left-1/4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center text-primary-foreground animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-10 h-10 mx-auto mb-3 opacity-80" />
                <p className="font-heading text-3xl md:text-4xl font-bold mb-1">{stat.value}</p>
                <p className="text-primary-foreground/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-teal/10 text-teal font-medium text-sm mb-4">
              Our Mission
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Nurturing Tomorrow's Leaders Today
            </h2>
            <p className="text-muted-foreground text-lg">
              We believe every child deserves the chance to thrive. Through our Baby Care Home and
              community programs, we provide comprehensive care that addresses the physical,
              emotional, and educational needs of orphaned children.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Safe Haven",
                description:
                  "A loving home environment where children feel secure, valued, and part of a caring family.",
                color: "bg-primary/10 text-primary",
              },
              {
                title: "Quality Education",
                description:
                  "Access to education and learning resources to build a foundation for a bright future.",
                color: "bg-secondary/10 text-secondary",
              },
              {
                title: "Healthcare",
                description:
                  "Comprehensive medical care and nutrition to ensure healthy development and growth.",
                color: "bg-teal/10 text-teal",
              },
            ].map((item, index) => (
              <Card
                key={item.title}
                className="border-0 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center mx-auto mb-6`}
                  >
                    <Heart className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Your support can transform a child's life. Whether through donations, volunteering, or
              spreading awareness, every action counts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-cta hover:opacity-90 text-accent-foreground shadow-soft gap-2"
              >
                <Heart className="w-5 h-5" />
                Make a Donation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <Link to="/get-involved">Become a Volunteer</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
