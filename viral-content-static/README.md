# ViralGuide - Landing Page Statica

Una landing page bilingue (Italiano/Inglese) per la vendita di una guida digitale sui contenuti virali per social media.

## Caratteristiche

- ✅ **Completamente Statica**: Solo HTML, CSS e JavaScript vanilla
- 🌍 **Bilingue**: Supporto completo per Italiano e Inglese
- 💳 **Pagamenti Integrati**: PayPal e Stripe
- 📱 **Responsive**: Ottimizzata per tutti i dispositivi
- 🍪 **GDPR Compliant**: Banner cookie e policy complete
- 🚀 **SEO Ottimizzata**: Meta tags, sitemap e robots.txt
- 📥 **Download Automatico**: Pagina post-pagamento con download immediato

## Struttura File

```
viral-content-static/
├── index.html              # Landing page principale
├── download.html           # Pagina post-pagamento
├── assets/                 # Asset statici
│   ├── guida_contenuti_virali.pdf      # Guida in italiano
│   ├── viral_content_guide_en.pdf      # Guida in inglese
│   ├── landing_page_hero.png           # Immagine hero
│   └── guida_copertina.png             # Copertina guida
├── robots.txt              # File SEO
├── sitemap.xml             # Sitemap SEO
└── favicon.ico             # Favicon
```

## Deployment

### Opzione 1: Netlify (Consigliato)
1. Comprimi tutta la cartella `viral-content-static` in un file ZIP
2. Vai su [Netlify](https://netlify.com)
3. Trascina il file ZIP nell'area di deploy
4. Il sito sarà live immediatamente

### Opzione 2: Vercel
1. Installa Vercel CLI: `npm i -g vercel`
2. Nella cartella del progetto: `vercel --prod`
3. Segui le istruzioni

### Opzione 3: GitHub Pages
1. Crea un repository GitHub
2. Carica tutti i file
3. Abilita GitHub Pages nelle impostazioni

### Opzione 4: Hosting Tradizionale
1. Carica tutti i file via FTP nella root del dominio
2. Assicurati che `index.html` sia nella directory principale

## Configurazione Pagamenti

### PayPal
- Link attuale: `https://www.paypal.com/ncp/payment/MDA7QSJQPVKN4`
- Sostituisci con il tuo link PayPal nella funzione `redirectToPayPal()`

### Stripe
- Link attuale: `https://buy.stripe.com/4gM7sL9VsegGbid9AA`
- Sostituisci con il tuo link Stripe nella funzione `redirectToStripe()`

## Personalizzazione

### Cambiare Colori
Modifica le variabili CSS in `index.html`:
- `#667eea` - Colore primario (blu)
- `#764ba2` - Colore secondario (viola)
- `#28a745` - Colore successo (verde)

### Aggiungere Analytics
Aggiungi il codice di Google Analytics prima del tag `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Modificare Contenuti
- **Titoli e testi**: Modifica direttamente in `index.html`
- **Immagini**: Sostituisci i file nella cartella `assets/`
- **PDF**: Sostituisci i file PDF nella cartella `assets/`

## Funzionalità Implementate

### Sistema Bilingue
- Cambio lingua dinamico con JavaScript
- Contenuti separati per IT/EN
- URL parametrizzati per mantenere la lingua

### Gestione Cookie
- Banner GDPR compliant
- Opzioni: Accetta tutti, Personalizza, Rifiuta
- Salvataggio preferenze in localStorage

### Pagamenti
- Integrazione PayPal e Stripe
- Reindirizzamento automatico post-pagamento
- Notifiche utente durante il processo

### SEO
- Meta tags Open Graph e Twitter Card
- Sitemap XML
- File robots.txt
- Struttura HTML semantica

## Browser Supportati

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Licenza

Tutti i diritti riservati. Questo codice è fornito per uso personale/commerciale del proprietario.

## Support

Per supporto tecnico o modifiche, contatta il team di sviluppo.
