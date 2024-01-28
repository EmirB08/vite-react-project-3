import { DataProvider } from './components/DataContext'; // Adjust the import path as per your project structure
import MainContainer from './components/MainContainer';
import KommunerDropdown from './components/KommunerDropdown';
import YearDropdown from './components/YearDropdown';
import SearchButton from './components/SearchButton'; // Import the new SearchButton component

const App = () => {
    return (
        <DataProvider>
            <MainContainer>
                <KommunerDropdown />
                <YearDropdown />
                <SearchButton />
            </MainContainer>
        </DataProvider>
    );
};

export default App;

