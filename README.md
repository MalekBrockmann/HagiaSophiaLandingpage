# Hagia Sophia Landing Page

Eine moderne Webanwendung zur 3D-Rekonstruktion und Analyse der Alten Hagia Sophia.

## Features

- **Responsive Design** - Optimiert für alle Geräte
- **3D-Erlebnis** - Interaktive Unity-Anwendung
- **Bildergalerie** - 6 archäologische Funde mit Lightbox
- **Mehrsprachig** - Deutsch und Englisch
- **Moderne UI/UX** - Smooth Animations und Hover-Effekte

## Galerie

Die Galerie zeigt 6 archäologische Funde der Alten Hagia Sophia:
- Architrav
- Giebelblock  
- Lämmerfries
- Pfeilerkapitell
- Bogenblock
- Kasettenblock

### Galerie-Features:
- **Responsive Grid-Layout**
- **Hover-Effekte** mit Bildinformationen
- **Lightbox** für Vollbildansicht
- **Navigation** mit Pfeiltasten oder Klick
- **Touch-Support** für mobile Geräte
- **Keyboard-Navigation** (Escape zum Schließen)

## Deployment

### Für GitHub Pages:
1. Alle Dateien in das Repository pushen
2. GitHub Pages aktivieren
3. Cache leeren: `Ctrl+F5` oder `Cmd+Shift+R`

### Cache-Busting:
Die CSS- und JS-Dateien haben Version-Parameter (`?v=1.1`) um Caching-Probleme zu vermeiden.

## Dateistruktur

```
├── index.html          # Hauptseite
├── styles.css          # Styling (v1.1)
├── script.js           # JavaScript (v1.1)
├── Bilder/             # Galerie-Bilder
│   ├── Architrav.jpg
│   ├── Giebelblock.jpg
│   ├── Lämmerfries.jpg
│   ├── Pfeilerkapitell.jpg
│   ├── Bogenblock.jpg
│   └── Kasettenblock.jpg
├── impressum.html      # Impressum
├── hfu.html           # HFU-Seite
└── logo.svg           # Logo
```

## Browser-Support

- Chrome/Edge (empfohlen)
- Firefox
- Safari
- Mobile Browser (iOS/Android)

## Technologien

- HTML5
- CSS3 (mit Fallbacks für ältere Browser)
- Vanilla JavaScript
- Unity WebGL (3D-Anwendung)

## Project Structure

```
.
├── index.html          # Main HTML structure
├── styles.css          # Styling and animations
├── script.js           # JavaScript functionality
└── README.md          # Project documentation
```

## Setup

1. Clone the repository
2. Open `index.html` in your web browser
3. No build process or dependencies required

## Future Enhancements

- Integration of 3D model viewer
- Image gallery with lightbox
- Additional content sections
- Interactive timeline
- Multi-language support

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 