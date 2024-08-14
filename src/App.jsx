// import { useState, useEffect } from "react";
// import "./App.css";
// import DefaultLayout from "./layouts/DefaultLayout";
// import { Routes, Route, useLocation } from "react-router-dom";
// import Dashboard from "./pages/dashbaord";
// import Books from "./pages/book";
// import User from "./pages/user";
// import Member from "./pages/member";

// function App() {
//   const { pathname } = useLocation();
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
//   useEffect(() => {
//     setTimeout(() => setLoading(false), 1000);
//   }, []);
//   return loading ? (
//     <>Loading...</>
//   ) : (
//     <DefaultLayout>
//       <Routes>
//         <Route
//           index
//           path="/"
//           element={
//             <>
//               <Dashboard />
//             </>
//           }
//         />
//         <Route
//           path="/books"
//           element={
//             <>
//               <Books />
//             </>
//           }
//         />
//         <Route
//           path="/users"
//           element={
//             <>
//               <User />
//             </>
//           }
//         />
//         <Route
//           path="/members"
//           element={
//             <>
//               <Member />
//             </>
//           }
//         />
//       </Routes>
//     </DefaultLayout>
//   );
// }

// export default App;
import React from "react";
import { RouterProvider } from "react-router-dom";
import { browseRoute } from "./routes/browseRoute";

const App = () => {
  return (
    <div>
      <RouterProvider router={browseRoute} />
    </div>
  );
};

export default App;
