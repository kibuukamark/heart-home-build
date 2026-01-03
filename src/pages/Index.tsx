import { Heart, Users, Calendar, ArrowRight, Star, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import partnerLisaMedical from "@/assets/partner-lisa-medical.png";
import partnerMuslimCharity from "@/assets/partner-muslim-charity.png";
import partnerOPM from "@/assets/partner-opm.jpg";

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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={gallery3}
            alt="LISA Baby Care Home family"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-2xl">
            {/* Hero Content */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-sm text-secondary-foreground border border-secondary/30 font-medium text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                Making a Difference in Uganda
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-card">
                Every Child Deserves{" "}
                <span className="text-secondary">Love, Care & Hope</span>
              </h1>
              <p className="text-lg md:text-xl text-card/80 mb-8 max-w-xl">
                LISA Supporting and Sustaining Lives provides a loving home, quality education, and
                healthcare to orphaned children in Kampala, Uganda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-soft gap-2 text-lg px-8"
                >
                  <Heart className="w-5 h-5" />
                  Donate Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-card/50 text-card hover:bg-card hover:text-foreground gap-2 text-lg px-8 backdrop-blur-sm"
                  asChild
                >
                  <Link to="/about">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>

              {/* Floating Stats Preview */}
              <div className="mt-12 flex flex-wrap gap-6">
                {stats.slice(0, 3).map((stat) => (
                  <div key={stat.label} className="flex items-center gap-3 text-card/90">
                    <div className="w-10 h-10 rounded-full bg-card/10 backdrop-blur-sm flex items-center justify-center">
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-xl">{stat.value}</p>
                      <p className="text-xs text-card/70">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative floating images */}
        <div className="absolute bottom-8 right-8 hidden lg:flex gap-4 z-10">
          <div className="relative group animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <img
              src={gallery1}
              alt="Children at LISA"
              className="w-32 h-32 object-cover rounded-xl border-4 border-card shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform"
            />
          </div>
          <div className="relative group animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <img
              src={gallery2}
              alt="Happy moments"
              className="w-32 h-32 object-cover rounded-xl border-4 border-card shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform"
            />
          </div>
          <div className="relative group animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <img
              src={gallery4}
              alt="LISA Baby Care Home"
              className="w-32 h-32 object-cover rounded-xl border-4 border-card shadow-lg transform rotate-2 group-hover:rotate-0 transition-transform"
            />
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

      {/* Partners Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Our Partners
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold">
              Trusted By Leading Organizations
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
            <img
              src={partnerOPM}
              alt="Office of the Prime Minister"
              className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img
              src={partnerMuslimCharity}
              alt="Muslim Charity"
              className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img
              src={partnerLisaMedical}
              alt="LISA Medical Centre"
              className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
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