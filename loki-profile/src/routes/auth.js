import Profile from "../components/profile/profile";
import AddPosts from "../components/posts/addposts";
import Posts from "../components/posts/post";
export const routesAuth = [
    // Tai khoan
    {path:"/profile", Component: Profile},
    {path:"/posts", Component: Posts},
    {path:"/add-posts", Component: AddPosts},

  ]