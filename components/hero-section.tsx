"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Play, Coins } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToGame = () => {
    const gameSection = document.getElementById("game-section")
    if (gameSection) {
      gameSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold text-balance">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  SPACE
                </span>
                <br />
                <span className="text-foreground">PINBALL</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl text-pretty">
                The ultimate gaming memecoin that combines classic pinball action with cosmic adventures. Play, earn,
                and explore the universe!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 py-6 glow-animation" onClick={scrollToGame}>
                <Play className="mr-2 h-5 w-5" />
                Play Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Coins className="mr-2 h-5 w-5" />
                Buy $SPIN
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <Card className="p-4 text-center bg-card/50 backdrop-blur-sm border-primary/20">
                <div className="text-2xl font-bold text-primary">1M+</div>
                <div className="text-sm text-muted-foreground">Players</div>
              </Card>
              <Card className="p-4 text-center bg-card/50 backdrop-blur-sm border-accent/20">
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Gaming</div>
              </Card>
            </div>
          </div>

          {/* Right side - Logo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/images/space-pinball-logo-new.png"
                alt="Space Pinball Logo"
                width={600}
                height={400}
                className="relative z-10 float-animation max-w-full h-auto bg-transparent"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
