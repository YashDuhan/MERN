// import React from "react";
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import { Dashboard } from "./components/Dashboard";
// import { Landing } from "./components/Landing";
// import { NewPage } from "./components/NewPage";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <AppBar />
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/" element={<Landing />} />
//           <Route path="/new-page" element={<NewPage />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// function AppBar() {
//   // Use Navigate can only be used inside the Browser Router only
//   const navigate = useNavigate();
//   return (
//     <div>
//       <button
//         onClick={() => {
//           navigate("/");
//         }}>
//         Landing Page
//       </button>
//       <button
//         onClick={() => {
//           navigate("/dashboard");
//         }}>
//         Dashboard
//       </button>
//       <button
//         onClick={() => {
//           navigate("/new-page");
//         }}>
//         NewPage
//       </button>
//     </div>
//   );
// }

// export default App;

// If the website is really huge we can also use the React.Lazy() to load only the necessary component

import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const Dashboard = React.lazy(() => import("./components/Dashboard"));
const Landing = React.lazy(() => import("./components/Landing"));
const NewPage = React.lazy(() => import("./components/NewPage"));

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"loading..."}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={"loading..."}>
                <Landing />
              </Suspense>
            }
          />
          <Route
            path="/new-page"
            element={
              <Suspense fallback={"loading..."}>
                <NewPage />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function AppBar() {
  // Use Navigate can only be used inside the Browser Router only
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}>
        Landing Page
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}>
        Dashboard
      </button>
      <button
        onClick={() => {
          navigate("/new-page");
        }}>
        NewPage
      </button>
    </div>
  );
}

export default App;
