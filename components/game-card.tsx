import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { GameScreenshots } from "@/components/game-screenshots"
import type { Game } from "@/lib/types"

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image src={game.coverImage || "/placeholder.svg"} alt={game.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{game.title}</CardTitle>
        <CardDescription>{game.genre}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-600 line-clamp-3">{game.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">View Screenshots</Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <GameScreenshots screenshots={game.screenshots} title={game.title} />
          </DialogContent>
        </Dialog>
        <Button>More Details</Button>
      </CardFooter>
    </Card>
  )
}

