"use client"

import { Card } from "@/components/ui/card"
import { Gamepad2, Trophy, Zap } from "lucide-react"

export function GameSection() {

  return (
    <section id="game-section" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
              PLAY & EARN
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Experience the thrill of space pinball while earning $SPIN tokens. Every game is a chance to boost your
            cosmic fortune!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Game Embed Area */}
          <Card className="p-4 bg-card/30 backdrop-blur-sm border-primary/20 flex items-center justify-center">
            <div className="w-full max-w-xs aspect-[9/16] rounded-lg overflow-hidden bg-white relative">
              <div 
                id="game-container" 
                className="w-full h-full flex items-center justify-center"
                dangerouslySetInnerHTML={{
                  __html: '<div style="transform: scale(1.2); transform-origin: center;"><script src="https://cdn.htmlgames.com/embed.js?game=SpacePinball&bgcolor=white"></script></div>'
                }}
              />
            </div>
          </Card>

          {/* Game Features */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Earn While Playing</h3>
                  <p className="text-muted-foreground">
                    Score points and earn $SPIN tokens with every successful game. The higher your score, the bigger
                    your rewards!
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Power-Up System</h3>
                  <p className="text-muted-foreground">
                    Unlock cosmic power-ups and special abilities that enhance your gameplay and multiply your earning
                    potential.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Gamepad2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Competitive Leaderboards</h3>
                  <p className="text-muted-foreground">
                    Compete with players worldwide and climb the cosmic leaderboards for exclusive rewards and
                    recognition.
                  </p>
                </div>
              </div>
            </div>

            <Card className="p-6 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-primary/20">
              <h4 className="text-lg font-bold mb-3">🚀 Pro Tip</h4>
              <p className="text-sm text-muted-foreground">
                Hold $SPIN tokens to unlock premium game modes, exclusive tournaments, and enhanced earning multipliers!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
