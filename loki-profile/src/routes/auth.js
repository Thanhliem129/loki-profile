import Profile from "../components/profile/profile";
import AddPosts from "../components/posts/addposts";
import Posts from "../components/posts/post";
import UpdateUser from "../components/profile/updateUser";
import UpdatePosts from "../components/posts/updatePosts";
export const routesAuth = [
    // Tai khoan
    {path:"/profile", Component: Profile},
    {path:"/posts", Component: Posts},
    {path:"/add-posts", Component: AddPosts},
    {path:"/update-user", Component: UpdateUser},
    {path:"/update-posts", Component: UpdatePosts},

  ]