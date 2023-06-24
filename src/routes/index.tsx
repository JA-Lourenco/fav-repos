import { Routes, Route } from "react-router-dom";

import { Main } from "../Pages/Main";
import { Repository } from "../Pages/Repository";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/repository/:repo" element={<Repository />} />
    </Routes>
  );
}
