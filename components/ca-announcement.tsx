"use client"

import { Card } from "@/components/ui/card"
import { Rocket } from "lucide-react"

export function CAannouncement() {
  return (
    <section className="relative py-8 px-4 overflow-hidden">
      {/* Flying Rockets Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="rocket rocket-1">
          <Rocket className="h-6 w-6 text-primary rotate-45" />
        </div>
        <div className="rocket rocket-2">
          <Rocket className="h-5 w-5 text-accent rotate-45" />
        </div>
        <div className="rocket rocket-3">
          <Rocket className="h-7 w-7 text-secondary rotate-45" />
        </div>
        <div className="rocket rocket-4">
          <Rocket className="h-4 w-4 text-primary rotate-45" />
        </div>
        <div className="rocket rocket-5">
          <Rocket className="h-6 w-6 text-accent rotate-45" />
        </div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <Card className="p-6 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm border-primary/30 glow-border">
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Rocket className="h-5 w-5 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Contract Address</span>
              <Rocket className="h-5 w-5 text-primary animate-pulse" />
            </div>

            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 border border-primary/20">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-2">
                COMING SOON
              </div>
              <p className="text-muted-foreground text-sm">
                Contract address will be revealed at launch. Stay tuned for the cosmic adventure!
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
