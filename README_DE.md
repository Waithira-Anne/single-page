# Router Basics V6

In dieser Übung erstellst du eine einfache Website mit einer Navigationsleiste. Du lernst, wie man verschiedene Routen definiert und jede verschachtelte Route mit **React Router v6** rendert.

## Was du machen wirst

* Zuerst schau dir unsere Router-Karte an:

![Router-Karte](/router-map.png)

* In der `parent` Route haben wir eine Navigationsleiste. Diese muss immer in unserer Web-App angezeigt werden.

* Wir haben 5 Routen, die in der `parent` Route verschachtelt sind:
    - `Home` - eine Standardseite, kein URL-Pfad ist gegeben.
    - `Page not found` - wird umgeleitet, wenn kein passender Pfad zur URL gefunden wird.
    - `ChildOne`, `ChildTwo`, `LastChild` - URL-Pfade sind gegeben und eine passende Kinderroute wird gerendert.

### Beispiel Ausgabe

So sieht eine [Erwartete Ausgabe](https://router-basics-v6.vercel.app/) aus.


## Aufgaben

### Aufgabe 1 Installiere react-router-dom
* Installiere `react-router-dom` mit
`npm i react-router-dom` 

### Aufgabe 2 Router Setup
* Erstelle im `src` Ordner einen `components` Ordner und füge 6 Komponenten hinzu:
  - `Parent` 
  - `Home`
  - `PageNotFound`
  - `ChildOne` `ChildTwo` `LastChild`
  
* In `App.js`, 
  - Bitte importiere die 6 oben genannten Komponenten. 
  - Importiere **BrowserRouter**, **Routes**, **Route** von `react-router-dom`.
  - Richte die Routen entsprechend dem oben gezeigten Router-Kartenbild ein. 5 Kinderrouten sind in `Parent` verschachtelt. Jede Route hat ein Komponentenelement und einen URL-Pfad.
  - Für `Parent` ist ein Pfad als `/` festgelegt.
  - Für die Standardseite `Home`, gib ein Attribut `index` anstelle eines Pfades an. Wenn `Home` ausgewählt ist, bleibt der Pfad `/`.  
  - `PageNotFound` ist für alle Pfade, die keine passenden Routen haben. Verwende `*` für den Pfad. 
  - Für jede Kinderroute ist ein anderer Pfad erforderlich. (`/one`, `/two`, `/three`)

### Aufgabe 3 Link & Render Routes
* In `Parent.js` befindet sich die Navigationsleiste für `Home`, `ChildOne`, `ChildTwo`, `LastChild`. 
  - Bitte importiere **Link** und **Outlet** von `react-router-dom`.
  - Verwende `Link`, um den URL-Pfad für jede Route festzulegen.
  - Füge `Outlet` hinzu - dies rendert die aktuell ausgewählte Route. 

## Hinweise

- [Nützliche Webseite](https://reactrouter.com/en/main)

