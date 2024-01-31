import { DataProvider } from "./components/DataContext";
import MainContainer from "./components/MainContainer";
import KommunerDropdown from "./components/KommunerDropdown";
import YearDropdown from "./components/YearDropdown";
import SearchButton from "./components/SearchButton";
import NavBar from "./components/NavBar";

const App = () => {
    return (
        <DataProvider>
            <MainContainer>
                <NavBar />
                <KommunerDropdown />
                <YearDropdown />
                <SearchButton />
            </MainContainer>
        </DataProvider>
    );
};

export default App;

