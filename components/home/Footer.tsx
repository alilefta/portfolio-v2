import Link from "next/link";
import { Button } from "../ui/custom/Button";
import {
  Facebook,
  Instagram,
  MapPin,
  MessageCircle,
  Twitter,
} from "lucide-react";

export default async function FooterSection() {
  return (
    <footer className="mx-auto flex max-w-7xl grid-cols-1 flex-col gap-12 px-6 py-8 md:grid md:grid-cols-11 lg:grid-cols-3 lg:gap-8 lg:px-8 lg:py-16">
      <div className="w-full md:col-span-5 lg:col-span-1">
        <h3 className="text flex flex-col text-7xl font-medium uppercase">
          <span>Design.</span>
          <span className="text-foreground/50">Code.</span>
          <span>Build.</span>
          <span className="text-foreground/50">Repeat.</span>
        </h3>

        <p className="text-foreground/70 text-sm">
          © 2025 Ali — Handcrafted with love and logic.
        </p>
      </div>

      <div className="w-full md:col-span-2 md:mx-auto md:w-fit lg:col-span-1 lg:pt-2">
        <h3 className="mb-4 text-2xl">Quick Links</h3>

        <div className="text-foreground/60 flex justify-start text-sm md:flex-col md:justify-start md:gap-4 lg:text-base">
          <div className="flex flex-1 flex-col gap-4">
            <Link href={"/"}>Home</Link>
            <Link href={"/projects"}>Projects</Link>
            <Link href={"/blog"}>Blog</Link>
          </div>
          <hr className="border-foreground/15 hidden border lg:block" />
          <div className="flex flex-1 flex-col gap-4">
            <Link href={"/contact"}>Contact Me</Link>
            <Link href={"/courses"}>Courses (soon)</Link>
            <Link href={"/services"}>Services</Link>
          </div>
        </div>
      </div>

      <div className="mx-auto grid h-auto w-full grid-rows-[2fr_1fr] gap-8 md:col-span-4 md:mr-0 md:ml-auto md:flex md:flex-col md:justify-between md:gap-12 lg:col-span-1 lg:w-fit">
        <div className="order-2 mx-auto flex w-full items-center justify-center gap-4 md:w-full md:justify-end md:gap-6 lg:justify-between lg:gap-4">
          <Button variant={"secondary"} size={"sm"} asChild>
            <Link href={"/"}>
              <Instagram size={"18"} />
            </Link>
          </Button>
          <Button variant={"secondary"} size={"sm"} asChild>
            <Link href={"/"}>
              <Facebook size={"18"} />{" "}
            </Link>
          </Button>
          <Button variant={"secondary"} size={"sm"} asChild>
            <Link href={"/"}>
              <Twitter size={"18"} />
            </Link>
          </Button>
          <Button variant={"secondary"} size={"sm"} asChild>
            <Link href={"/"}>
              <MessageCircle size={"18"} />
            </Link>
          </Button>
        </div>
        <div className="order-1 mx-auto flex h-auto w-full flex-col items-center justify-center md:mr-0 md:ml-auto md:w-fit md:items-start lg:pt-2">
          {/* Email Block */}
          <div className="py-4 md:py-0">
            <a
              href="mailto:alilefta95@gmail.com"
              className="group text-foreground flex items-center gap-3 font-mono text-2xl transition-colors hover:text-blue-400 md:text-xl lg:text-2xl"
            >
              alilefta95@gmail.com
            </a>
          </div>

          {/* Location & Socials */}
          <div className="border-foreground/10 flex w-full items-end justify-between gap-6 border-t pt-6 md:pt-2">
            <div className="text-foreground/60 mx-auto flex items-center gap-3 md:mr-0 md:ml-0">
              <MapPin className="h-5 w-5" />
              <div className="font-mono text-sm">
                <span className="text-foreground/50 block">
                  Babil, Hilla, Iraq
                </span>
                <span>51001</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
