import Link from "next/link";
import { Component } from "lucide-react";

import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ModeToggle } from "@/components/theme-mode-toggle";

const components = [
  {
    name: "Picker",
    href: "/picker",
  },
  {
    name: "Type Writer",
    href: "/type-writer",
  },
  {
    name: "Drop Input",
    href: "/drop-input",
  },
  {
    name: "Long Press Button",
    href: "/long-press-button",
  },
  {
    name: "Mobile Drop",
    href: "/mobile-drop",
  },
  {
    name: "useScroll",
    href: "/use-scroll",
  },
  {
    name: "Dock",
    href: "/dock",
  },
];

interface SidebarProps {
  className?: string;
}

function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Components
          </h2>
          <div className="space-y-1">
            {components.map((component) => (
              <Button
                key={component.href}
                variant="secondary"
                className="w-full justify-start"
                asChild
              >
                <Link href={component.href}>
                  <Component className="mr-2 h-4 w-4" />
                  {component.name}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="block">
      <div className="border-t">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
            <Sidebar className="hidden lg:block" />
            <div className="col-span-3 lg:col-span-4 lg:border-l">
              <div className="h-full px-4 py-6 lg:px-8">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">
                      Re-Useable Components
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Re-useable components for your next project
                    </p>
                  </div>
                  <div className="ml-auto mr-4">
                    <ModeToggle />
                  </div>
                </div>
                <ScrollArea className="h-[500px] mt-8">
                  <div className="space-y-4">
                    <p className="font-mono text-sm">
                      Built with{" "}
                      <Link
                        className="underline underline-offset-2"
                        href="https://nextjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Next 15
                      </Link>{" "}
                      and Typescript
                    </p>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {components.map((component) => (
                        <Button
                          key={component.href}
                          variant="outline"
                          className="justify-start"
                          asChild
                        >
                          <Link href={component.href}>
                            <Component className="mr-2 h-4 w-4" />
                            {component.name}
                          </Link>
                        </Button>
                      ))}
                    </div>
                  </div>
                </ScrollArea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
