const fs = require('fs');
const  path= require('path');

/**
 * Permet de lire des données d'un fichier json
 * @param {String} filePath chemin vers le fichier json à lire
 * @returns JSON
 */
const readJSONFile = (filePath) => {
  try {
    const fileData = fs.readFileSync(filePath, { encoding: "utf-8" });
    if (fileData === "") return [];
    return JSON.parse(fileData);
  } catch (error) {
    console.error(
      `Erreur lors de la lecture du fichier ${path.basename(filePath)}`,
      error
    );
  }
};

/**
 *
 * @param {String} filePath chemin vers le fichier json à lire
 * @param {JSON} data
 */
const writeJSONFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.error(
      `Erreur lors de l'écriture du fichier ${path.basename(filePath)}`,
      error
    );
  }
};

/** Génère in id (timestamp) */
const idGenerator = () => Date.now();

module.exports = { readJSONFile, writeJSONFile, idGenerator };