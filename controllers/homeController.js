import Home from '../models/Home.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Récupérer les maisons selon critères (ex : ?localisation=Paris)
export const getHomes = async (req, res) => {
  try {
    const filter = req.query || {};
    //const homes = await Home.find(filter);
    // On ne sélectionne que les champs désirés
    const homes = await Home.find(filter).select('robotId sessionId homeId startTime endTime count -_id');
    res.json(homes);
  } catch (error) {
    console.error('Erreur dans getHomes:', error); // Affichage console utile
    res.status(500).json({ error: `Erreur serveur` });
  }
};

// Ajouter une nouvelle maison
export const addHome = async (req, res) => {
  try {
    const home = new Home(req.body);
    await home.save();
    res.status(201).json(home);
  } catch (error) {
    console.error('Erreur dans addHome:', error); // Affichage console utile
    res.status(400).json({ error: 'Données invalides' });
  }
};

// Envoyer une image
export const getImage = (req, res) => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const imagePath = path.join(__dirname, '../public/images', req.params.imageName);

  res.sendFile(imagePath, (err) => {
    if (err) {
        console.error('Erreur dans getImage:', err); // Affichage console utile
        res.status(404).json({ error: 'Image non trouvée' });
    }
  });
};
