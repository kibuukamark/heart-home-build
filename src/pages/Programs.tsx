import { Baby, BookOpen, Stethoscope, Users, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const programs = [
  {
    icon: Baby,
    title: "Baby Care Home",
    description:
      "Our flagship program provides a safe, loving home environment for orphaned babies and young children. We offer 24/7 care, proper nutrition, and nurturing attention to ensure healthy development.",
    features: [
      "Round-the-clock care by trained caregivers",
      "Nutritious meals and clean water",
      "Safe and stimulating living environment",
      "Regular health checkups",
    ],
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: BookOpen,
    title: "Education Support",
    description:
      "We believe education is the key to breaking the cycle of poverty. Our program ensures every child has access to quality education and learning resources.",
    features: [
      "School enrollment and fees coverage",
      "Learning materials and uniforms",
      "Tutoring and homework support",
      "Life skills training",
    ],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Program",
    description:
      "Comprehensive healthcare ensures our children grow up healthy and strong. We provide preventive care, treatment, and health education.",
    features: [
      "Regular medical checkups",
      "Vaccinations and immunizations",
      "Emergency medical care",
      "Mental health support",
    ],
    color: "bg-teal/10 text-teal",
  },
  {
    icon: Users,
    title: "Community Outreach",
    description:
      "We extend our support beyond our home to help vulnerable families in the community through education, resources, and empowerment programs.",
    features: [
      "Family support services",
      "Community education workshops",
      "Food and essential supplies distribution",
      "Parenting skills training",
    ],
    color: "bg-accent/10 text-accent",
  },
];

const Programs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-teal/10 text-teal font-medium text-sm mb-6">
              Our Programs
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Care for Every Child
            </h1>
            <p className="text-lg text-muted-foreground">
              Through our various programs, we address the holistic needs of orphaned and vulnerable
              children, giving them the foundation for a bright future.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {programs.map((program, index) => (
              <Card
                key={program.title}
                className="border-0 shadow-card overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid lg:grid-cols-3">
                  <CardHeader className="lg:col-span-1 bg-muted/50 p-8 flex flex-col justify-center">
                    <div
                      className={`w-16 h-16 rounded-full ${program.color} flex items-center justify-center mb-4`}
                    >
                      <program.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="font-heading text-2xl">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="lg:col-span-2 p-8">
                    <p className="text-muted-foreground mb-6">{program.description}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {program.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <Heart className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How Donations Help */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
              Your Impact
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              How Your Donation Helps
            </h2>
            <p className="text-muted-foreground">
              Every contribution makes a real difference in the lives of our children.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { amount: "$25", impact: "Provides nutritious meals for a child for one month" },
              { amount: "$50", impact: "Covers school supplies and uniforms for one term" },
              { amount: "$100", impact: "Funds healthcare checkups and vaccinations" },
              { amount: "$250", impact: "Supports a child's complete care for one month" },
            ].map((item, index) => (
              <Card
                key={item.amount}
                className="border-0 shadow-card text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <p className="font-heading text-3xl font-bold text-accent mb-3">{item.amount}</p>
                  <p className="text-muted-foreground text-sm">{item.impact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-accent-foreground mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
            Your support can transform a child's life. Join us in our mission to provide love, care,
            and opportunities to every child.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-card text-foreground hover:bg-card/90 gap-2">
              <Heart className="w-5 h-5" />
              Donate Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-card text-card hover:bg-card hover:text-foreground gap-2"
              asChild
            >
              <Link to="/get-involved">
                Volunteer With Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
