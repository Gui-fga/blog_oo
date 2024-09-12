import Nav from "@/components/Nav";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, ChevronRight, Search } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav/>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to BlogApp</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Discover insightful articles on technology, design, and more.
          </p>
          <div className="flex space-x-4">
            <Input placeholder="Search articles..." className="max-w-sm" />
            <Button>
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Posts</h2>
          <div className="grid md:grid-cols-2 gap-6">
          {/* parte dos cards */}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-6">Recent Posts</h2>
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
        </section>
      </main>
    </div>
  )
}