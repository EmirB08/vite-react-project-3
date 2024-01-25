import MainContainer from "./components/MainContainer";
import KommunerDropdown from "./components/KommunerDropdown";
import YearDropdown from "./components/YearDropdown";

const App = () => {
  return (
    <MainContainer>
      <KommunerDropdown />
      <YearDropdown />
    </MainContainer>
  );
};

export default App;
