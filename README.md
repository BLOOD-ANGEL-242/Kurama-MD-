# KURAMA MD V1
<h1 align="center">
  <br>
  <a href="https://github.com/BLOOD-ANGEL-242/Kurama-MD-"><img src="https://files.catbox.moe/pvwoxm.jpeg" alt="Kurama MD V1" width="300"></a>
  <br>
  KURAMA MD V1
  <br>
</h1>

<p align="center">
  <a href="https://github.com/BLOOD-ANGEL-242/Kurama-MD-/commits"><img src="https://img.shields.io/github/last-commit/BLOOD-ANGEL-242/Kurama-MD-?color=FF4500&style=for-the-badge" /></a>
  <a href="https://github.com/BLOOD-ANGEL-242/Kurama-MD-/stargazers"><img src="https://img.shields.io/github/stars/BLOOD-ANGEL-242/Kurama-MD-?color=FFD700&style=for-the-badge" /></a>
  <a href="https://github.com/BLOOD-ANGEL-242/Kurama-MD-/network/members"><img src="https://img.shields.io/github/forks/BLOOD-ANGEL-242/Kurama-MD-?color=00CED1&style=for-the-badge" /></a>
  <a href="https://github.com/BLOOD-ANGEL-242/Kurama-MD-/blob/main/LICENSE"><img src="https://img.shields.io/github/license/BLOOD-ANGEL-242/Kurama-MD-?color=008000&style=for-the-badge" /></a>
</p>

<p align="center">
  <a href="#présentation">Présentation</a> •
  <a href="#fonctionnalités-principales">Fonctionnalités</a> •
  <a href="#installation">Installation</a> •
  <a href="#exécution-247">Exécution 24/7</a> •
  <a href="#langues-supportées">Langues</a> •
  <a href="#plateformes-compatibles">Plateformes</a> •
  <a href="#support--contributions">Support</a> •
  <a href="#licence">Licence</a>
</p>

## Présentation

**Kurama MD V1** est un puissant bot multi-fonctionnel pour WhatsApp, inspiré du légendaire Renard à Neuf Queues. Développé pour offrir performance et polyvalence, il est compatible avec de nombreuses plateformes comme Termux, Replit, Panel Web, VPS et Heroku.

Que vous souhaitiez gérer une communauté, créer un bot de divertissement ou configurer un assistant personnel, Kurama MD V1 propose une large gamme de fonctionnalités avec une installation simple et rapide.

## Fonctionnalités Principales

- 🤖 **Fonctionnalités Avancées**
  - Commandes et réponses personnalisables
  - Support multi-appareils (MD)
  - Automatisation de la gestion de groupe
  
- 🔍 **Outils Média et Recherche**
  - Téléchargement depuis YouTube, TikTok et réseaux sociaux
  - Intégration de recherches web et Wikipedia
  - Outils de conversion média
  
- 🛡️ **Gestion de Groupe**
  - Protection anti-spam
  - Messages de bienvenue/au revoir
  - Gestion des rôles
  - Suivi d'activité
  
- 🎮 **Divertissement**
  - Jeux et quiz
  - Commandes amusantes
  - Génération de mèmes

## Installation

### Sous Termux (Installation Automatique)

```bash
termux-setup-storage
apt update && apt upgrade
pkg install -y bash wget
wget -O - https://raw.githubusercontent.com/BLOOD-ANGEL-242/Kurama-MD-/master/kurama.sh | bash
```

### Sous Termux (Installation Manuelle)

```bash
termux-setup-storage
apt update && apt upgrade
pkg install git nodejs ffmpeg imagemagick yarn
git clone https://github.com/BLOOD-ANGEL-242/Kurama-MD-
cd Kurama-MD-
yarn install
npm install
npm start
```

### VPS / Windows / Replit

```bash
git clone https://github.com/BLOOD-ANGEL-242/Kurama-MD-
cd Kurama-MD-
npm install
npm start
```

> **Important** : Assurez-vous d'avoir Node.js, ffmpeg, ImageMagick et Yarn installés !

## Exécution 24/7

Pour un fonctionnement continu avec PM2 :

```bash
npm install -g pm2
pm2 start index.js
pm2 save
pm2 startup
```

**Commandes PM2 :**
- Redémarrer : `pm2 restart all`
- Voir les logs : `pm2 logs`
- Arrêter : `pm2 stop all`
- Supprimer : `pm2 delete all`

## Langues Supportées

| Langue | Niveau de Support |
|--------|-------------------|
| 🇫🇷 Français | Complet |
| 🇬🇧 Anglais | Complet |
| 🇵🇹 Portugais | Complet |
| 🇪🇸 Espagnol | Complet |

> D'autres langues peuvent être facilement ajoutées via les fichiers de configuration linguistique.

## Plateformes Compatibles

| Plateforme | Compatibilité |
|------------|---------------|
| 📱 Termux (Android) | ✅ Complète |
| ☁️ Replit (Cloud IDE) | ✅ Complète |
| 🌐 Panel Web | ✅ Complète |
| 🖥️ VPS (Linux/Windows) | ✅ Complète |
| 🚀 Heroku | ✅ Complète |

## Support & Contributions

Rejoignez nos canaux communautaires pour le support, les mises à jour et les discussions :

- [Canal Telegram](https://t.me/blood_242)
- [Canal WhatsApp](https://whatsapp.com/channel/0029VayOeIbGufIvDPhi6m1X)

Pour soutenir le développement de Kurama MD V1, contactez directement le développeur.

## Développeur

**BLOOD-ANGEL-242**
- GitHub : [@BLOOD-ANGEL-242](https://github.com/BLOOD-ANGEL-242)
- Telegram : [@blood_242](https://t.me/blood_242)

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

<p align="center">
  <strong>Kurama MD V1</strong> - Le Renard de Feu qui ne dort jamais !
</p>
