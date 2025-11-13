import Link from "next/link";
import Image from "next/image";
import promo from "../../../content/promo.json";
import {
  Button,
  Chip,
  ProductCard,
  TestimonialCard,
  type ProductCardProps
} from "@pkg/ui";
import { PromoBanner } from "../components/promo-banner";

const categories = [
  "Lighting",
  "Furniture",
  "Workspace",
  "Sound",
  "Storage",
  "Wearables",
  "Wellness",
  "Materials",
  "Books"
];

const heroVisuals = [
  {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80",
    alt: "Minimalist lamp on a wooden desk"
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
    alt: "Creative studio setup with chair and plants"
  }
];

const featuredProducts: ProductCardProps[] = [
  {
    title: "Luma Fold Desk",
    price: "$420",
    image: {
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      alt: "Foldable wooden desk"
    },
    badge: { label: "New", tone: "info", variant: "solid" }
  },
  {
    title: "Sculpt Halo Lamp",
    price: "$180",
    image: {
      src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      alt: "Modern halo lamp"
    },
    badge: { label: "Back in stock", tone: "success", variant: "soft" }
  },
  {
    title: "Echo Acoustic Tiles",
    price: "$64",
    image: {
      src: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80",
      alt: "Acoustic wall tiles"
    },
    badge: { label: "Bundle", tone: "warning", variant: "soft" }
  },
  {
    title: "Atlas Task Chair",
    price: "$520",
    image: {
      src: "https://images.unsplash.com/photo-1616628182504-d887fb2c5999?auto=format&fit=crop&w=800&q=80",
      alt: "Ergonomic task chair"
    }
  },
  {
    title: "Mono Stacking Trays",
    price: "$48",
    image: {
      src: "https://images.unsplash.com/photo-1585675100414-1394c339fd9f?auto=format&fit=crop&w=800&q=80",
      alt: "Stacked storage trays"
    }
  },
  {
    title: "Studio Field Recorder",
    price: "$320",
    image: {
      src: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80",
      alt: "Portable field recorder"
    }
  }
];

const testimonials = [
  {
    quote: "Our team redesigned the entire studio flow with their bundles. Everything feels intentional now.",
    author: "Morgan Riley",
    role: "Creative Director, Loom"
  },
  {
    quote: "The curation saves so much time. Every delivery feels like a design-forward surprise.",
    author: "Jamie Chen",
    role: "Lead Designer, Northworks"
  }
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <PromoBanner promo={promo} />
      <section className="section-padding mx-auto flex w-full max-w-6xl flex-col gap-2xl">
        <div className="grid gap-2xl lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-center">
          <div className="flex flex-col gap-lg">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-text-muted">
              Design-first essentials
            </span>
            <h1 className="max-w-xl text-display leading-display font-semibold text-text-strong">
              Tools that choreograph your studio flow
            </h1>
            <p className="max-w-lg text-body text-text-muted">
              Thoughtfully curated kits and modular pieces that make every creative session feel effortless. Build a studio that
              adapts to your rhythm.
            </p>
            <div className="flex flex-wrap gap-sm">
              <Button size="lg" asChild>
                <Link href="/catalog">Shop the drop</Link>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <Link href="/about">Meet the curators</Link>
              </Button>
            </div>
            <dl className="grid grid-cols-2 gap-lg sm:grid-cols-3" aria-label="Studio impact highlights">
              <div>
                <dt className="text-sm text-text-muted">Studios refreshed</dt>
                <dd className="text-3xl font-semibold text-text-strong">2.4k+</dd>
              </div>
              <div>
                <dt className="text-sm text-text-muted">Average setup time</dt>
                <dd className="text-3xl font-semibold text-text-strong">48 hrs</dd>
              </div>
              <div>
                <dt className="text-sm text-text-muted">Satisfaction score</dt>
                <dd className="text-3xl font-semibold text-text-strong">4.9/5</dd>
              </div>
            </dl>
          </div>
          <div className="relative hidden h-full gap-md lg:flex lg:flex-col">
            <div className="relative flex-1 overflow-hidden rounded-xl shadow-card">
              <Image
                src={heroVisuals[0].src}
                alt={heroVisuals[0].alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 360px, 100vw"
                priority
              />
            </div>
            <div className="relative flex-1 overflow-hidden rounded-xl shadow-card">
              <Image
                src={heroVisuals[1].src}
                alt={heroVisuals[1].alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 360px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-surface-base py-xl"
        aria-labelledby="category-heading"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-md px-xl">
          <div className="flex items-center justify-between">
            <h2 id="category-heading" className="text-h2 font-h2 leading-h2 text-text-strong">
              Explore by flow
            </h2>
            <Link
              href="/catalog"
              className="hidden rounded-pill px-sm py-xs text-sm font-medium text-accent-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary md:inline"
            >
              See all
            </Link>
          </div>
          <div
            className="-mx-xl flex gap-sm overflow-x-auto px-xl pb-sm pt-xs"
            style={{ scrollSnapType: "x mandatory" }}
            aria-label="Product categories"
          >
            {categories.map((category) => (
              <div key={category} style={{ scrollSnapAlign: "start" }}>
                <Chip>
                  {category}
                </Chip>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding mx-auto flex w-full max-w-6xl flex-col gap-xl" aria-labelledby="featured-heading">
        <div className="flex flex-col gap-sm sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="featured-heading" className="text-h2 font-h2 leading-h2 text-text-strong">
              Featured this week
            </h2>
            <p className="max-w-xl text-body text-text-muted">
              Curations for builders, sound artists, and cross-disciplinary makers. Limited batches updated every Monday.
            </p>
          </div>
          <Button asChild size="md">
            <Link href="/catalog">View full catalog</Link>
          </Button>
        </div>
        <div className="grid gap-lg sm:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.title} {...product}>
              <p className="text-sm text-text-muted">Modular and ready to ship worldwide.</p>
            </ProductCard>
          ))}
        </div>
      </section>

      <section className="bg-surface-base py-2xl" aria-labelledby="testimonial-heading">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-xl px-xl">
          <div className="flex flex-col gap-sm sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="testimonial-heading" className="text-h2 font-h2 leading-h2 text-text-strong">
                Trusted by studio leads
              </h2>
              <p className="max-w-xl text-body text-text-muted">
                We partner with forward-thinking teams to choreograph purposeful, tactile spaces.
              </p>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/stories">Read studio stories</Link>
            </Button>
          </div>
          <div className="grid gap-lg md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.author} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
