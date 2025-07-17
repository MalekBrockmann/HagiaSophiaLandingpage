# Hagia Sophia Website - Entwickler Anleitung

## Überblick
Responsive Website für die Alte Hagia Sophia mit 3D-Anwendung und Bildergalerie.

## Wichtige Dateien
- `index.html` - Hauptseite (alle Inhalte)
- `styles.css` - Design und Layout
- `script.js` - JavaScript Funktionen
- `Bilder/` - Galerie-Bilder

## Repository klonen
```bash
git clone https://github.com/MalekBrockmann/HagiaSophiaLandingpage.git
cd HagiaSophiaLandingpage
```

## Änderungen hochladen
```bash
git add .
git commit -m "Beschreibung der Änderung"
git push
```

## Häufige Änderungen

### Texte ändern
1. `index.html` öffnen
2. Text suchen und ändern
3. **Wichtig:** Sowohl Deutsch (.content-de) als auch Englisch (.content-en) ändern

### Farben anpassen
In `styles.css` die CSS-Variablen am Anfang ändern:
```css
:root {
    --primary-color: #000;
    --secondary-color: #86868b;
    --background-color: #fff;
}
```

### Bilder austauschen
1. Neue Bilder in `Bilder/` Ordner legen
2. Gleiche Dateinamen verwenden oder Namen in `index.html` anpassen

### 3D-Anwendung ersetzen
In `index.html` die iframe URL ändern:
```html
<iframe src="NEUE-URL-HIER">
```

## Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: unter 768px

## 3D-Anwendung
- Verwendet festes 16:9 Format
- Scrolling ist deaktiviert
- Bei Problemen: `adjustUnitySize()` Funktion in `script.js` prüfen

## Sprachen
- Deutsch: `.content-de` Klasse
- Englisch: `.content-en` Klasse
- Language-Toggle funktioniert automatisch

## GitHub Pages Hosting
1. Repository Settings > Pages
2. Source: Deploy from branch
3. Branch: main
4. Folder: / (root)

Website verfügbar unter: https://malekbrockmann.github.io/HagiaSophiaLandingpage

## Wichtige Hinweise
- Immer auf verschiedenen Geräten testen
- Bei Problemen Browser-Cache leeren (Ctrl+F5)
- Backup vor größeren Änderungen machen 