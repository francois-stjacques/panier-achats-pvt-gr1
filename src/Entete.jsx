import "./Entete.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import SommairePanier from "./SommairePanier";

export default function Entete(props) {
  let etatCacherSommaire = true;

  function basculerSommairePanier() {
    etatCacherSommaire = etatCacherSommaire ? false : true;
    console.log(etatCacherSommaire);
  }

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
          <SommairePanier cacher={etatCacherSommaire} />
        </li>
        <li>Mon compte</li>
      </ul>
    </header>
  );
}
