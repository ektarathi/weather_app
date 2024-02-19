import "./App.css";
import SearchEngine from "./components/SearchEngine";
import styled from "styled-components";

const Styledheading = styled.h1`
  font-size: 3em;
  line-height: 1.1;
`;

function App() {
  return (
    <div aria-label="landing-page" className="container">
      <Styledheading>Weather App </Styledheading>
      <SearchEngine />
    </div>
  );
}

export default App;
