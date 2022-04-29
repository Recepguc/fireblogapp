//! database add and call functions

import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
  update,
} from "firebase/database";
import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AutContext";

export const BlogContext = createContext();

const d = new Date();
const time = d.toLocaleDateString();
console.log(time);

const BlogContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  //!Add Blog
  const AddBlog = (info) => {
    const database = getDatabase();
    const blogRef = ref(database, "BlogPage");
    const newBlogRef = push(blogRef);
    set(newBlogRef, {
      title: info.title,
      imageURL: info.imageURL,
      content: info.content,
      author: currentUser.email,
      date: time,
    });
  };
  //!Call Blog
  const BlogFetch = () => {
    const [isLoading, setIsLoading] = useState();
    const [blogList, setBlogList] = useState();

    useEffect(() => {
      setIsLoading(true);
      const database = getDatabase();
      const blogRef = ref(database, "BlogPage");

      onValue(blogRef, (snapshot) => {
        const data = snapshot.val();
        const blogArray = [];

        for (let id in data) {
          blogArray.push({ id, ...data[id] });
        }
        setBlogList(blogArray);
        setIsLoading(false);
      });
    }, []);
    return { isLoading, blogList };
  };
  // Delete Blog
  const DeleteBlog = (id) => {
    const database = getDatabase();

    remove(ref(database, "BlogPage/" + id));
  };
  //Edit Blog
  const EditBlog = (info) => {
    const database = getDatabase();
    const updates = {};

    updates["BlogPage/" + info.id] = info;
    return update(ref(database), updates);
  };
  return (
    <BlogContext.Provider value={{ BlogFetch, AddBlog, DeleteBlog, EditBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
export default BlogContextProvider;
