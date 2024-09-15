"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Cards() {
  const [post, setPost] = useState([]);

  const getPosts = async () => {
    const response = await fetch("/api/posts/get-posts");
    const data = await response.json();
    setPost(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {post.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle>{post?.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {post?.content}
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost">
              Read More <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
