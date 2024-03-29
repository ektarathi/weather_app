import "./App.css";
import SearchEngine from "./components/SearchEngine";
import styled from "styled-components";

const Styledheading = styled.h1`
  font-size: 3em;
  line-height: 1.1;
  color: white;
  margin-bottom: .5rem;
`;

function App() {
  return (
    <div aria-label="landing-page" className="container">
      <Styledheading>React Weather App </Styledheading>
      <SearchEngine />
    </div>
  );
}

export default App;
