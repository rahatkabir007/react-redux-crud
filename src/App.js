import { Route, Routes } from "react-router-dom";
import Header from "./shared/Header";
import Homepage from "./pages/Homepage";
import AddPost from "./pages/AddPost/AddPost";
import EditPost from "./pages/EditPost/EditPost";
import NotFound from "./shared/notFound/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/addPost" element={<AddPost />} />
        <Route path="/editPost/:id" element={<EditPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
