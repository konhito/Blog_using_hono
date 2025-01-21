import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/blog/bulk`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setBlogs(response.data.blogs);
        setLoading(false);
      });
  }, []);
  return {
    loading,
    blogs,
  };
};
interface useBlog1 {
  id: number;
  title: string;
  content: string;
  author: {
    name: string;
  };
}

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<useBlog1>();
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/blog/${id}`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setBlog(response.data.blog);
        setLoading(false);
      });
  }, [id]);
  return {
    loading,
    blog,
  };
};
