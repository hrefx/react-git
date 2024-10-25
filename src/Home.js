import "./home.css";

function Home() {
    return (
      <div className="main-div">
        <h1>Dokumentacja strony</h1>
        <div className="div">
          <h2>Z czego jest zrobiona strona?</h2>
          <p>Strona zrobiona jest z głównego widoku, na którym jest przycisk do wyświetlenia wszystkich danych. Strona ma też Navbar, który jest połączony z metodą Routing, który służy nam do łatwego przemieszczania się po stronie. Strona też się składa z drugiego widoku, który ma identyczny Navbar, i który polega na wyświetleniu szczegółów elementu. I na której też wyszukujemy element według roku wydarzeń kalendarza. Na stronie jest jeszcze zaaplikowany progres ładowania strony, czyli pokazujemy użytkownikowi że strona się ładuje.          </p>
        </div>
        <div className="div">
          <h2>Z czego korzystałem?</h2>
          <p>Do zaprojektowania oraz poprawnego działania strony było wykorzystane API: https://date.nager.at/api</p>
        </div>
        <div className="div">
          <h2>Technologia strony?</h2>
          <p>Technologia: React JS</p>
        </div>
        <div className="div">
          <h2>Jak korzystać ze strony?</h2>
          <p>Będąc na stronie głównej, czyli Search musimy kliknąć w przycisk View, który nam wyświetli wszystkie kraje. Mozemy wybrać pasujący kraj, klikając na niego przechodzimy
            do strony w której są wyświetlane szczegóły tego kraju, filtrujemy to według roku, który wpiszemy w pole formularza.
          </p>
        </div>
      </div>
    );
  }
  
  export default Home;
  