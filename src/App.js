import logo from "./logo.png";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary defaultkeyword="sunset" />
      </main>
      <footer className="footer">
          This project was coded by{" "}
          <a
            href="https://amandariegle.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amanda Riegle
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/mandi-riegle/dictionary-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://dictionary-app-riegle.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
    </div>
  </div>
  );
}
