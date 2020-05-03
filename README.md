

# Interactive Movie App

Die Anwendung wurde von Team Pünktlich im Rahmen der Veranstaltung 'Interaktives Storytelling: Multimedia Produktion' produziert. Eine gehostete Variante der App kann unter http://outofit.aescht.net abgerufen werden.

## Getting Started

Um die App local zum laufen zu bekommen müssen folgende Schritte befolgt werden. Dies kann auch nochmal unter https://angular.io/guide/setup-local nachgelesen werden.

### Prerequisites

(Kommandos in einer Kommdandozeile ausführen)

Node.js & NPM package manager installieren: https://nodejs.org

### Installing

Nachdem Node und NPM installiert sind kann die App lokal installiert werden. Dazu navigiert man in den Unterordner "interactive-movie-app" und installiert die Angular CLI

```
npm install -g @angular/cli@8.3.21
```

Um die App lokal zu hosten können nun folgende Kommandos ausgeführt werden

```
npm install

ng serve --open
```

## Deployment

Um die App auf einem Server zu hosten kann man folgendes Kommando ausführen:

```
ng build --prod
```
Den dabei erstellten 'dist' ordner kann dann auf einem Webserver gehostet werden.

## Built With

[Angular](https://angular.io/) - Web framework
