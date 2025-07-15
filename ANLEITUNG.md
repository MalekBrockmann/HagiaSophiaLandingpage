# 🏛️ Hagia Sophia Website - Anleitung für Entwickler

## 📖 Über die Website
Eine responsive Website über die Alte Hagia Sophia mit 3D-Anwendung und Bildergalerie.
**Komplett fertig programmiert und einsatzbereit.**

## 📁 Dateien Übersicht
| Datei | Beschreibung |
|-------|--------------|
| `index.html` | Hauptseite (alle Inhalte) |
| `styles.css` | Design und responsive Layout |
| `script.js` | Interaktive Funktionen |
| `Bilder/` | 6 Galerie-Bilder |
| `hfu.html` | HFU-Seite |
| `impressum.html` | Impressum-Seite |
| `logo.svg` | Website-Logo |

## ✨ Wichtige Features
- ✅ **Responsive Design** (funktioniert auf allen Geräten)
- ✅ **3D Unity-Anwendung** (eingebettet, landscape-format)
- ✅ **Bildergalerie** mit Lightbox
- ✅ **Mobile Navigation** (Hamburger-Menü)
- ✅ **Zweisprachig** (Deutsch/Englisch)
- ✅ **Smooth Scrolling** und Animationen

## 🚀 Weiterarbeiten - So geht's

### 1. Repository klonen
```bash
git clone https://github.com/MalekBrockmann/HagiaSophiaLandingpage.git
cd HagiaSophiaLandingpage
```

### 2. Dateien bearbeiten
- **`index.html`**: Inhalte ändern
- **`styles.css`**: Design anpassen
- **`script.js`**: Funktionen erweitern

### 3. Lokal testen
- Dateien in Browser öffnen **ODER**
- Live Server in VS Code verwenden

### 4. Änderungen hochladen
```bash
git add .
git commit -m "Beschreibung der Änderung"
git push
```

## ⚙️ Wichtige Infos für Änderungen

### 📱 Responsive Design
- **Breakpoints**: `1800px`, `1400px`, `1200px`, `992px`, `768px`, `576px`
- **Mobile-first** Ansatz verwendet
- **Immer auf verschiedenen Geräten testen!**

### 🎮 3D-Anwendung
- Unity-iframe in `.unity-wrapper`
- Feste **16:9 Landscape-Größen**
- **Scrolling ist deaktiviert**
- Änderungen an `model-container` vorsichtig machen

### 🖼️ Galerie
- Bilder in `Bilder/` Ordner
- Namen müssen in `index.html` angepasst werden
- **Lightbox funktioniert automatisch**

### 🌐 Sprachen
- `.language-content` Container verwenden
- `.content-de` für Deutsch
- `.content-en` für Englisch
- Language-Toggle in Navigation

### 🎨 CSS-Struktur
- **Reset und base styles** (Zeile 1-50)
- **Typography** (Zeile 25-45)
- **Header/Navigation** (Zeile 50-100)
- **Sections** (Zeile 125-300)
- **Galerie** (Zeile 300-450)
- **Media Queries** (Zeile 500+)

### ⚡ JavaScript-Funktionen
- Smooth Scrolling
- Lightbox Galerie
- Mobile Navigation
- Language Switcher
- Unity-iframe Responsive-Handler

## 🌐 GitHub Pages Hosting

Die Website ist **fertig konfiguriert** für GitHub Pages:

1. **Repository Settings** → **Pages**
2. **Source**: Deploy from branch
3. **Branch**: `main`
4. **Folder**: `/ (root)`
5. **Save**

**Website ist dann verfügbar unter:**
```
https://github.com/MalekBrockmann/HagiaSophiaLandingpage.git

## 🔧 Häufige Änderungen

### ✏️ Texte ändern
1. `index.html` öffnen
2. Gewünschte Stelle finden
3. Text ändern (**auf Deutsch UND Englisch!**)

### 🎨 Farben ändern
1. `styles.css` öffnen
2. `:root` Variablen am Anfang ändern:
```css
--primary-color: #000
--secondary-color: #86868b
--background-color: #fff
```

### 🖼️ Bilder austauschen
1. Neue Bilder in `Bilder/` Ordner
2. **Gleiche Namen verwenden** ODER
3. Namen in `index.html` anpassen

### 🎮 3D-Anwendung austauschen
1. Neue URL in `index.html` bei `iframe src=""`
2. Unity-Anwendung muss **responsive sein**

### 📄 Neue Seiten hinzufügen
1. Neue `.html` Datei erstellen
2. CSS/JS von `index.html` kopieren
3. Navigation in `index.html` erweitern

## 🚨 Probleme lösen

### 📱 Website nicht responsive
- Media Queries in `styles.css` prüfen
- Browser-Cache leeren (`Ctrl+F5`)

### 🎮 3D-Anwendung falsche Größe
- `adjustUnitySize()` Funktion in `script.js` prüfen
- `aspect-ratio` in CSS kontrollieren

### 🖼️ Galerie funktioniert nicht
- JavaScript-Konsole auf Fehler prüfen
- Bildpfade in `index.html` kontrollieren

### 📱 Mobile Navigation geht nicht
- `nav-toggle` Button-ID prüfen
- JavaScript Event-Listener kontrollieren

## 💡 Tipps für Entwickler

- ✅ **Immer Backup machen** vor großen Änderungen
- ✅ **Auf verschiedenen Geräten testen**
- ✅ **Browser-Entwicklertools verwenden**
- ✅ **Git regelmäßig committen**
- ✅ **Änderungen dokumentieren**

## 🌐 Browser-Support

- ✅ **Chrome/Edge** (empfohlen)
- ✅ **Firefox**
- ✅ **Safari**
- ✅ **Mobile Browser** (iOS/Android)

## ⚡ Performance-Tipps

- 🗜️ **Bilder komprimieren** vor Upload
- 📝 **CSS/JS nicht unnötig erweitern**
- 🚫 **Externe Bibliotheken vermeiden**
- 📊 **Lighthouse-Tests durchführen**

---

## ⚠️ Wichtig
**Diese Website ist vollständig funktionsfähig!**
Nur kleine Änderungen sollten nötig sein.

**Bei Fragen**: Repository Issues auf GitHub verwenden.

---
*Stand: Juli 2025* 