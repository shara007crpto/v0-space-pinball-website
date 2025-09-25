"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Coins, TrendingUp, Users } from "lucide-react"
import Image from "next/image"

export function TokenomicsSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/space-pinball-logo-new.png"
              alt="Space Pinball Logo"
              width={200}
              height={200}
              className="float-animation bg-transparent"
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            <span className="text-foreground">$SPIN</span>{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              TOKENOMICS
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            A fair and sustainable token economy designed to reward players, holders, and the entire Space Pinball
            community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 text-center bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
              <Coins className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">1B</h3>
            <p className="text-sm text-muted-foreground">Total Supply</p>
          </Card>

          <Card className="p-6 text-center bg-card/30 backdrop-blur-sm border-secondary/20 hover:border-secondary/40 transition-colors">
            <div className="w-16 h-16 mx-auto mb-4 bg-secondary/20 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-2">95%</h3>
            <p className="text-sm text-muted-foreground">Community</p>
          </Card>

          <Card className="p-6 text-center bg-card/30 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-colors">
            <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-accent mb-2">5%</h3>
            <p className="text-sm text-muted-foreground">Dev/Team</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-primary">Play to Earn</h3>
            <p className="text-muted-foreground mb-6">
              Earn $SPIN tokens by playing Space Pinball. Higher scores mean bigger rewards, creating a sustainable
              gaming economy.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Daily gaming rewards
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Score-based multipliers
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Tournament prizes
              </li>
            </ul>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-secondary/10 to-accent/10 border-secondary/20">
            <h3 className="text-2xl font-bold mb-4 text-secondary">Community Driven</h3>
            <p className="text-muted-foreground mb-6">
              95% of tokens go directly to the community through fair distribution, gaming rewards, and community
              initiatives.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                Fair distribution
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                Community rewards
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                Governance voting
              </li>
            </ul>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
            <h3 className="text-2xl font-bold mb-4 text-accent">Minimal Dev Allocation</h3>
            <p className="text-muted-foreground mb-6">
              Only 5% reserved for development and team, ensuring maximum value goes to the community and players.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Development funding
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Team incentives
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Future updates
              </li>
            </ul>
          </Card>
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="text-lg px-8 py-6 glow-animation">
            <Coins className="mr-2 h-5 w-5" />
            Buy $SPIN Now
          </Button>
        </div>
      </div>
    </section>
  )
}
