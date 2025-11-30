import { MoveUpRight } from "lucide-react";
import { Button } from "../ui/custom/Button";
import { Badge } from "../ui/custom/Badge";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFloatingBar,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
} from "../ui/custom/card";

export default async function SelectedWork() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 py-6 lg:grid-cols-12 lg:px-8 lg:py-8">
      {/* Selected Work */}
      <div className="col-span-12 flex flex-col gap-6 lg:col-span-4">
        <Card className="glass-card flex flex-col p-8 lg:min-h-96">
          <div className="mb-12 flex-1">
            <h2 className="mb-6 text-2xl tracking-tighter">Selected Work</h2>
            <p className="text-foreground/60 text-sm capitalize">
              From concept to production—real projects solving real problems
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm tracking-tight capitalize">
              All projects
            </span>
            <Button>
              <MoveUpRight />
            </Button>
          </div>
        </Card>

        {/* Labora */}
        <Card interactive={true} className="col-span-12 lg:col-span-8">
          <CardImage>
            <CardFloatingBar position="top">
              {/* Left Item */}
              <Badge variant="surface" intent="success">
                <span className="mr-2 h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                In dev
              </Badge>

              {/* Right Item */}
              <Badge variant="glass">Cloud App</Badge>
            </CardFloatingBar>
            <Image
              src="/images/projects/labora.webp"
              width={800}
              height={800}
              alt="Featured project"
            />
          </CardImage>

          <CardHeader className="">
            <CardTitle className="mb-2">Labora SaaS Platform</CardTitle>
            <CardDescription>
              Next-generation cloud-based lab management with real-time
              collaboration, scheduling, and integrated mini-services
              marketplace.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col justify-between p-0">
            <div className="mb-2 flex flex-1 flex-wrap items-center gap-2">
              <Badge variant="outline">Next.js</Badge>
              <Badge variant="outline">Typescript</Badge>
              <Badge variant="outline">Neon & Drizzle</Badge>
              <Badge variant="outline">TanStack</Badge>
            </div>

            <div className="border-foreground/10 flex items-center justify-between rounded-xl border px-4 py-4">
              <span className="text-xs tracking-wider text-zinc-600 dark:text-zinc-400">
                Expected Deployement
              </span>
              <span className="text-foreground/90 text-sm tracking-tight">
                2026 Q2
              </span>
            </div>
          </CardContent>

          <CardFooter className="gap-4">
            <Button variant="outline" size="sm">
              Coming Soon
            </Button>
          </CardFooter>
        </Card>
      </div>
      {/* Oscar lab */}
      <Card className="col-span-12 lg:col-span-8" interactive={true}>
        <CardImage className="relative aspect-video w-full overflow-hidden border-b border-zinc-100 bg-zinc-100 dark:border-white/5 dark:bg-black/20">
          <Image
            src="/images/projects/3_dashboard_dark.png"
            width={800}
            height={800}
            alt="App Screenshot"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />

          {/* The Overlay (Dark Mode Only - Adds depth) */}
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]"></div>

          <CardFloatingBar position="top">
            <Badge variant="surface" intent="success">
              <span className="mr-2 h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              Deployed & Sold
            </Badge>
            <Badge variant="glass">Desktop App</Badge>
          </CardFloatingBar>
        </CardImage>
        <CardHeader>
          <div className="mb-8 flex items-center justify-between">
            {/* Project Type Label */}
            <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
              Enterprise SaaS
            </span>

            <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
              2024
            </span>
          </div>

          <CardTitle className="mb-2">Oscar Lab Management</CardTitle>
          <CardDescription className="max-w-3xl">
            An enterprise desktop application managing case workflows, staff
            compensation, and client relationships for Dental Laboratories.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge variant="outline">C# & .NET</Badge>
            <Badge variant="outline">WPF</Badge>
            <Badge variant="outline">SQLite</Badge>
            <Badge variant="outline">Entity Framework</Badge>
          </div>

          <div className="border-foreground/10 rounded-xl border px-6 py-4">
            <span className="mb-2 text-xs tracking-wider text-zinc-600 dark:text-zinc-400">
              Real Business Impact
            </span>
            <h5 className="text-foreground/90 text-sm tracking-tight">
              Streamlined operations for active dental lab
            </h5>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <Button asChild variant={"ghost"}>
            <Link
              href="/projects/Oscar_lab"
              className="flex items-center gap-2 text-sm font-medium text-zinc-900 decoration-blue-500 decoration-2 underline-offset-4 hover:underline dark:text-white"
            >
              View Case Study
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </Button>

          <Button
            variant={"ghost"}
            className="text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.97 8.205 11.522.6.11.82-.26.82-.577v-2.162c-3.338.725-4.042-1.61-4.042-1.61-.546-1.386-1.332-1.755-1.332-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .31.21.69.825.57C20.565 21.97 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </Button>
        </CardFooter>
      </Card>

      {/* Image Cryptography */}
      <Card className="col-span-12 lg:col-span-8">
        <CardImage className="relative aspect-video w-full overflow-hidden border-b border-zinc-100 bg-zinc-100 dark:border-white/5 dark:bg-black/20">
          <Image
            src="/images/projects/cryptography_dark.png"
            width={800}
            height={800}
            alt="App Screenshot"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />

          {/* The Overlay (Dark Mode Only - Adds depth) */}
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]"></div>

          <CardFloatingBar position="top">
            <Badge variant="surface" intent="success">
              <span className="mr-2 h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              Deployed
            </Badge>
          </CardFloatingBar>
        </CardImage>
        <CardHeader>
          <div className="mb-8 flex items-center justify-between">
            {/* Project Type Label */}
            <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
              Research Project
            </span>

            <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
              2024
            </span>
          </div>

          <CardTitle className="mb-2">Image Cryptography System</CardTitle>
          <CardDescription className="max-w-3xl">
            Advanced encryption algorithm using 5D chaotic system for secure
            image transmission and storage.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge variant="outline">Mathematics</Badge>
            <Badge variant="outline">Python</Badge>
            <Badge variant="outline">Numpy</Badge>
            <Badge variant="outline">Custom Tkinter GUI</Badge>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <Button asChild variant={"ghost"}>
            <Link
              href="/projects/Oscar_lab"
              className="flex items-center gap-2 text-sm font-medium text-zinc-900 decoration-blue-500 decoration-2 underline-offset-4 hover:underline dark:text-white"
            >
              View Case Study
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </Button>

          <Button
            variant={"ghost"}
            className="text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.97 8.205 11.522.6.11.82-.26.82-.577v-2.162c-3.338.725-4.042-1.61-4.042-1.61-.546-1.386-1.332-1.755-1.332-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .31.21.69.825.57C20.565 21.97 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </Button>
        </CardFooter>
      </Card>

      {/* Freelancer Command Center */}
      <Card interactive={true} className="col-span-12 lg:col-span-4">
        <CardImage>
          <Image
            src="/images/projects/freelancer_command_center.png"
            width={1024}
            height={1024}
            alt="Featured project"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />

          <CardFloatingBar position="top">
            <Badge variant="surface" intent="success">
              <span className="mr-2 h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              In dev
            </Badge>
            <Badge variant="outline">2026</Badge>
          </CardFloatingBar>
        </CardImage>

        <CardHeader>
          <div className="mb-2 flex items-center justify-between"></div>
          <CardTitle className="mb-2">Freelancer Command Center</CardTitle>
          <CardDescription>
            All-in-one dashboard for freelancers to manage projects, track time,
            invoice clients, and monitor finances. Built for solo developers who
            need simple, powerful tools.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="mb-2 flex flex-1 flex-wrap items-center gap-2">
            <Badge variant="outline">Next.js</Badge>
            <Badge variant="outline">Typescript</Badge>
            <Badge variant="outline">PostgreSQL</Badge>
            <Badge variant="outline">Stripe</Badge>
          </div>
        </CardContent>

        <CardFooter className="gap-4">
          <Button variant="outline" size="sm">
            Coming Soon
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
