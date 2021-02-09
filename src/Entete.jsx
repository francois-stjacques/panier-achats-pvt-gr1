import "./Entete.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import SommairePanier from "./SommairePanier";
import { useState } from "react";

export default function Entete(props) {
  // const etatCacherSommairePanier = useState(true);
  // console.log("La variable statCacherSommairPanier : ", etatCacherSommairePanier);
  
  // // Array/Object DESTRUCTURING (décomposition des tableaux et objets)

  // const valeurEtatCacher = etatCacherSommairePanier[0];
  // console.log("Valeur état : ", valeurEtatCacher);

  // const fonctionSetDeEtatCacher = etatCacherSommairePanier[1];
  // console.log("Fonction qui modifie l'état : ", fonctionSetDeEtatCacher);

  // Avec la décomposition de tableau, c'est plus facile :
  const [cacheSommaire, setCacheSommaire] = useState(true);
  //console.log("Etat du SP : ", cacheSommaire);
  
  const basculerSommairePanier =  () => setCacheSommaire(cacheSommaire ? false : true);

  return (
    <header className="Entete">
      <div>Logo</div>
      <ul className="navPrincipale">
        <li>Produits</li>
        <li>A propos de nous</li>
        <li>Contactez-nous</li>
      </ul>
      <ul className="navUtil">
        <li>
          <Badge onClick={basculerSommairePanier} badgeContent="5" color="primary">
            <ShoppingCartIcon />
          </Badge>
          <SommairePanier cacher={cacheSommaire} etatPanier={props.etatPanier} />
        </li>
        <li>Mon compte</li>
      </ul>
    </header>
  );
}
