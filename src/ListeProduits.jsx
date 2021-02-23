import "./ListeProduits.scss";
import Produit from "./Produit";
import tabProduits from "./data/produits.json";
import instanceFirebase from 'firebase/app';
import "firebase/firestore";

// Code pour intégrer Firebase temporairement placé ici

// Configuration du projet FB
const firebaseConfig = {
  apiKey: "AIzaSyBAB1bpsWFNArALnECEKBRvNvkucnWE3eA",
  authDomain: "panier-achats-react.firebaseapp.com",
  databaseURL: "https://panier-achats-react-default-rtdb.firebaseio.com",
  projectId: "panier-achats-react",
  storageBucket: "panier-achats-react.appspot.com",
  messagingSenderId: "1061179620791",
  appId: "1:1061179620791:web:d61b330e1cda1a773d7c32",
  measurementId: "G-MHHR9EPPGB"
};

// Obtenir une instance de l'API Firebase
if(!instanceFirebase.apps.length) {
  instanceFirebase.initializeApp(firebaseConfig);
}

// Obtenir une instance de la BD Firestore.
const bd = instanceFirebase.firestore;

// AJAX et donc Promise et donc Async (à compléter au prochain cours)
// let mesProduits =  bd.collection("produits").get();


function ListeProduits(props) {
  //console.log("Panier dans ListeProduits", props.etatPanier);
  return (
    <div className="ListeProduits">
      <h2>Produits disponibles</h2>
      <ul>
        {tabProduits.map((prd) => (
          <Produit
            key={prd.id}
            etatPanier={props.etatPanier}
            id={prd.id}
            nom={prd.nom}
            prix={prd.prix}
          />
        ))}
      </ul>
    </div>
  );
}

export default ListeProduits;
