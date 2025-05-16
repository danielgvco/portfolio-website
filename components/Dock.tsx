"use client";

import Link from "next/link";
import { Home, Workflow, Briefcase } from "lucide-react";
import { Dock as MagicDock, DockIcon } from "@/components/magicui/dock";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import React from "react";

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>LinkedIn</title>
    <path
      fill="currentColor"
      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
    />
  </svg>
);

export default function Dock() {
  const navItems = [
    { href: "/#home", icon: Home, label: "Home" },
    { href: "/#experience", icon: Workflow, label: "Experience" },
    { href: "/projects", icon: Briefcase, label: "Projects" },
  ];

  return (
    <TooltipProvider>
      <MagicDock
        direction="middle"
        className={cn(
          "fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex rounded-2xl border border-gray-300/70 bg-white/40 p-2 backdrop-blur-sm dark:border-gray-700/70 dark:bg-gray-900/40"
        )}
      >
        {navItems.map(({ href, icon: Icon, label }) => (
          <DockIcon key={label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={href}
                  aria-label={label}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full backdrop-blur-0"
                  )}
                >
                  <Icon className="size-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}

        <Separator orientation="vertical" className="h-full" />

        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="https://www.linkedin.com/in/danielvco/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "size-12 rounded-full backdrop-blur-0"
                )}
              >
                <LinkedInIcon className="size-5" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>LinkedIn</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </MagicDock>
    </TooltipProvider>
  );
}
