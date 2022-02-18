import HomePage from "../components/home/homepage";

import SignUp from "../components/profile/signUp";
import Login from "../components/profile/login";

export const routes = [
    {path:"/homepage", Component: HomePage},
    // {path:"/posts", Component: Posts},
    {path:"/sign-up", Component: SignUp},
    {path:"/login", Component: Login},
  ]