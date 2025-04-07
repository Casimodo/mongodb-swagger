**Pour télécharger cliquer sur l'une des étiquettes ci-dessous**

[![GitHub release](https://img.shields.io/github/v/release/Casimodo/rasp-ap.svg)](https://github.com/Casimodo/rasp-ap/releases)
[![Github All Releases](https://img.shields.io/github/downloads/Casimodo/rasp-ap/total.svg)](https://github.com/Casimodo/rasp-ap/releases)


# 🧩 Objectif
Créer un système Node.js sur Raspberry Pi qui :

1. ✅ Tente de se connecter automatiquement au Wi-Fi enregistré.

2. ❌ Si échec, passe en mode Point d'Accès (AP) nommé raspi-setup.

3. 🌐 Lance une interface web sur http://192.168.4.1 pour :
    - Afficher la liste des réseaux Wi-Fi détectés

    - Choisir un SSID

    - Entrer le mot de passe Wi-Fi (masqué/démasqué)

4. 🔁 Sauvegarde les identifiants en config.json puis redémarre.

5. 🟢 Si la connexion Wi-Fi est réussie, affiche une page simple "Hello World" avec le SSID connecté.

6. ⚙️ Démarre automatiquement grâce à un service systemd.



# Installation système

## 📦 Pré-requis (Packages à installer)

Base de données fonctionnel
```bash
#Au niv du projet
sudo npm install
```

## 🔧 Configuration du fichier .env

Créer un fichier .env (voir ci-dessous le format)
```bash
MONGO_URI=mongodb://<USER>:<PASSWORD>@<URL>:<PORT>/<DBNAME>?authSource=admin
API_PORT=3000
API_KEY=<SECRET_KEY_API>
```

# 📂 Structure du projet
```php
api-project/                     ← 📁 Racine du projet
├── config/                      ← 📁 Fichiers de configuration
│   └── db.js                    ← 🔌 Connexion à la base MongoDB
│
├── controllers/                 ← 📁 Logique métier des routes (traitements)
│   └── homeController.js        ← ⚙️ Fonctions pour gérer les "Homes" (get, post, image)
│
├── middlewares/                 ← 📁 Middlewares (intercepteurs de requêtes)
│   └── apiKeyMiddleware.js      ← 🔐 Vérifie la clé API dans les headers
│
├── models/                      ← 📁 Schémas des données MongoDB
│   └── Home.js                  ← 🧱 Modèle "Home" (structure)
│
├── routes/                      ← 📁 Définition des routes Express
│   └── homeRoutes.js            ← 📍 Routes /api/homes (GET, POST, GET image)
│
├── public/                      ← 📁 Fichiers statiques (images, fichiers…)
│   └── images/                  ← 🖼️ Dossier contenant les images accessibles
│       └── exemple.jpg          ← Exemple d’image à tester avec l’API
│
├── swagger/                     ← 📁 Configuration Swagger pour documentation
│   └── swagger.js               ← 📄 Définition de l’API (title, sécurité, imports auto)
│
├── .env                         ← 🔐 Fichier d’environnement (PORT, MONGO_URI, API_KEY)
│
├── package.json                 ← 📦 Dépendances et scripts du projet
│
├── server.js                    ← 🚀 Point d’entrée principal (initialise Express, routes, Swagger)

```



# 🖥️ let's go, start !

Tu peux maintenant :

- Lancer avec ``sudo node serveur.js``

- Naviguer sur http://localhost:3000/api-docs pour l'accès direct à la doc

- Pour utiliser les API déverrouillé les accès avec le mot de passe que vous avez mis dans le fichier .env
