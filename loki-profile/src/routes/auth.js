import Profile from "../components/profile/profile";
import AddPosts from "../components/posts/addposts";
import Posts from "../components/posts/post";
import UpdateUser from "../components/profile/updateUser";
import UpdatePosts from "../components/posts/updatePosts";
import MyMovie from "../components/myMovie/myMovie";
import AddMovie from "../components/myMovie/addMovie";
import MovieDetail from "../components/myMovie/movieDetail";
export const routesAuth = [
    // Tai khoan
    {path:"/profile", Component: Profile},
    {path:"/posts", Component: Posts},
    {path:"/add-posts", Component: AddPosts},
    {path:"/update-user", Component: UpdateUser},
    {path:"/update-posts", Component: UpdatePosts},
    {path:"/my-movie", Component: MyMovie},
    {path:"/add-movie", Component: AddMovie},
    {path:"/movie-detail", Component: MovieDetail},

  ]