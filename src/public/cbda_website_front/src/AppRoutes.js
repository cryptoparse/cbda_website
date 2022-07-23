import { Routes, Route } from "react-router-dom";
import WelcomeScreen from "./Screens/WelcomeScreen/WelcomeScreen";
import UserDataEntry from "./Screens/StudentDetailsScreen/StudentDetailsScreen";
export default function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/">
        <WelcomeScreen />
      </Route>
      <Route exact path="/userDataEntry">
        <UserDataEntry />
      </Route>
    </Routes>
  );
}
