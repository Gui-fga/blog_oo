import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, ChevronRight, Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Cards (){
    return(
        <div className="space-y-6">
            {[1, 2, 3].map((post) => (
              <Card key={post}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={`/placeholder-user.jpg`} alt="Author" />
                      <AvatarFallback>AU</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">Understanding React Hooks</CardTitle>
                      <p className="text-sm text-muted-foreground">by John Doe • 5 days ago</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A comprehensive guide to using React Hooks for state management and side effects in your applications.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Button variant="ghost">
                    Read More <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <div className="flex items-center text-muted-foreground">
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>5 min read</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        )
    }