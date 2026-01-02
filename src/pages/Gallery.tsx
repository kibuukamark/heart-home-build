import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.png";
import gallery7 from "@/assets/gallery-7.png";
import gallery8 from "@/assets/gallery-8.png";

const galleryImages = [
  { src: gallery3, alt: "LISA Baby Care Home family photo with children and staff", category: "Events" },
  { src: gallery4, alt: "Team meeting at Baby Care Home", category: "Daily Life" },
  { src: gallery5, alt: "Donation ceremony with supporters", category: "Events" },
  { src: gallery6, alt: "Staff receiving supplies", category: "Donations" },
  { src: gallery7, alt: "Visitor interacting with children", category: "Daily Life" },
  { src: gallery8, alt: "Community gathering at LISA", category: "Events" },
  { src: gallery1, alt: "Children at LISA Baby Care Home", category: "Daily Life" },
  { src: gallery2, alt: "Happy moments at LISA", category: "Activities" },
];

const categories = ["All", "Daily Life", "Activities", "Events", "Donations"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-6">
              Photo Gallery
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Moments of Joy & Hope
            </h1>
            <p className="text-lg text-muted-foreground">
              Take a glimpse into the daily lives of our children and the love that fills our home.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "border-border hover:bg-muted"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-card cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setLightboxImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block px-2 py-1 rounded bg-secondary/80 text-secondary-foreground text-xs mb-2">
                      {image.category}
                    </span>
                    <p className="text-card text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-card/20 hover:bg-card/40 transition-colors"
            onClick={() => setLightboxImage(null)}
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-card" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Want to See More?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Follow us on social media for daily updates and stories from our Baby Care Home.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Facebook
            </Button>
            <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
              Instagram
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;