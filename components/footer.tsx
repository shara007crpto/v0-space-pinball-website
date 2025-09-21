"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Twitter, MessageCircle, Github, ExternalLink } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-20 px-4 border-t border-border/20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <Image
                src="/images/space-pinball-icon.png"
                alt="Space Pinball"
                width={60}
                height={60}
                className="float-animation"
              />
              <h3 className="text-3xl font-bold">Space Pinball</h3>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-md text-pretty">
              Join the cosmic gaming revolution. Play, earn, and explore the universe with the most exciting memecoin in
              space!
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                variant="outline"
                size="icon"
                className="border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-secondary/20 hover:border-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              >
                <MessageCircle className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-accent/20 hover:border-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-primary/20">
            <h4 className="text-2xl font-bold mb-4 text-center">Ready to Launch?</h4>
            <p className="text-muted-foreground text-center mb-6">
              Get your $SPIN tokens and start your cosmic pinball adventure today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1 glow-animation">
                <ExternalLink className="mr-2 h-4 w-4" />
                Buy $SPIN
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Join Community
              </Button>
            </div>
          </Card>
        </div>

        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Space Pinball. All rights reserved. Built for the cosmos.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
