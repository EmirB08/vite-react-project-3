import { DataProvider } from "./components/DataContext";
import MainContainer from "./components/MainContainer";
import KommunerDropdown from "./components/KommunerDropdown";
import YearDropdown from "./components/YearDropdown";
import SearchButton from "./components/SearchButton";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
    return (
        <DataProvider>
            <MainContainer>
                <NavBar />
                <KommunerDropdown />
                <YearDropdown />
                <SearchButton />
            </MainContainer>
            <Footer />
        </DataProvider>
    );
};

export default App;

