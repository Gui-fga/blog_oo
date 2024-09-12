import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, ChevronRight, Search } from "lucide-react"

export default function Nav (){
    return(
        <div>
            <Card>
              <CardHeader>
                <CardTitle>The Future of Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Explore the latest trends and technologies shaping the future of web development.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost">
                  Read More <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Mastering Responsive Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn the best practices for creating responsive and mobile-friendly websites.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost">
                  Read More <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
        </div>
    )
}