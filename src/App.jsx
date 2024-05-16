import SideBar from "./components/SideBar/SideBar.jsx";
import CvButtons from "./components/CvButtons/CvButtons";
import CompanyLogo from "./components/CompanyHeader/CompanyLogo.jsx";
const App = () => {
  return (
    <div className="App">
      <SideBar />
      <div id="main-Content" className="ml-0 md:ml-64 p-4">
        <h1 className="text-3xl">Main Content</h1>
        <CompanyLogo />
        <CvButtons />
      </div>
    </div>
  );
};

export default App;
