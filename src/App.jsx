import { UserInput } from "./components/UserContext";
import MainContainer from "./components/MainContainer";
import KommunerDropdown from "./components/KommunerDropdown";
import YearDropdown from "./components/YearDropdown";
import SearchButton from "./components/SearchButton";
import NavBar from "./components/NavBar";

const App = () => {
    return (
        <UserInput>
            <MainContainer>
                <NavBar />
                <KommunerDropdown />
                <YearDropdown />
                <SearchButton />
            </MainContainer>
        </UserInput>
    );
};

export default App;
