import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import User from "./pages/User";
import ErrorPage from "./pages/ErrorPage";
import Github, { githubApi } from "./pages/Github";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home/>
  //   },
  //   {
  //     path: "/about",
  //     element: <About/>
  //   }
  // ])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/user/:userid" element={<User />}></Route>
        <Route path="/github" element={<Github />} loader={githubApi}></Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
