"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/utils/useAuth";

export default function Cards() {
  const [post, setPost] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  const getPosts = async () => {
    const response = await fetch("/api/posts/get-posts");
    const data = await response.json();
    setPost(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const editPost = async (postId, userId) => {
    if (user?.id != userId) {
      alert("Você não tem permissão para editar este post");
      console.log(user?.id, post?.user_id);
      return;
    }
    router.push(`/edit-post/${postId}`);
  };

  return (
    <div>
      {post.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle>{post?.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{post?.content}</p>
          </CardContent>
          <CardFooter>
            <Button
              variant="ghost"
              onClick={() => editPost(post?.id, post?.user_id)}
            >
              Editar <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
