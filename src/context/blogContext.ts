import React from "react";
import type { Post } from "../types/post";

export type BlogCtx = {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  removePost: (id: string) => void;
  upsertPost: (p: Post) => void;
};

export const BlogContext = React.createContext<BlogCtx>({
  posts: [],
  setPosts: () => {},
  removePost: () => {},
  upsertPost: () => {},
});
