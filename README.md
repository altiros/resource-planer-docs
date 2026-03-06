# Ressourcenplaner Dokumentation

Dokumentation für den [Altiros Ressourcenplaner](https://github.com/altiros/resource-planer).

**Live:** https://altiros.github.io/resource-planer-docs/

## Lokal entwickeln

```bash
npm install
npm run dev
```

Die Dokumentation ist unter http://localhost:3000 erreichbar.

## Technologie

- [Nextra v4](https://nextra.site/) (Next.js-basierte Dokumentation)
- MDX (Markdown + React-Komponenten)
- Automatisches Deployment via GitHub Pages

## Struktur

```
content/
├── index.mdx              # Einführung
├── getting-started.mdx    # Erste Schritte
├── benutzerhandbuch/      # Anwender-Dokumentation
├── administration/        # Admin-Dokumentation
├── api/                   # API-Referenz
└── entwicklung/           # Entwickler-Dokumentation
```
