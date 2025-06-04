import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";
import MainLayout from "./layouts/MainLayout";
import ChooseSkipPage from "./features/skip/pages/ChooseSkipPage";
import { ROUTES } from "./configs/router";
import { NotFound } from "./common/components";

const App = () => {
  return (
    <MainLayout>
      <Router>
        <Routes>
          <Route>
            <Route
              path={ROUTES.HOME}
              element={<Navigate to={ROUTES.SKIPS} />}
            />
            <Route path={ROUTES.SKIPS} element={<ChooseSkipPage />} />
            <Route path={ROUTES.ALL} element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </MainLayout>
  );
};

export default App;
