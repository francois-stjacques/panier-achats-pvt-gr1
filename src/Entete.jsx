import './Entete.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import SommairePanier from './SommairePanier';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Entete(props) {
  const [cacheSommaire, setCacheSommaire] = useState(true);
  
  const basculerSommairePanier =  () => setCacheSommaire(!cacheSommaire);
  
  const [panier] = props.etatPanier;
  return (
    <header className="Entete"> 
      <div><Link to="/">Logo</Link></div>
      <ul className="navPrincipale">
        <li><Link to="/nos-produits">Produits</Link></li>
        <li><Link to="/a-propos-de-magasin">A propos de nous</Link></li>
        <li><Link to="/contact">Contactez-nous</Link></li>
      </ul>
      <ul className="navUtil">
        <li>
          <Badge onClick={basculerSommairePanier} badgeContent={Object.values(panier).reduce( (accumulateur, eltCourant)  => accumulateur + eltCourant.qte, 0)} color="primary">
            <ShoppingCartIcon />
          </Badge>
          <SommairePanier cacher={cacheSommaire} etatPanier={props.etatPanier} />
        </li>
        <li>Mon compte</li>
      </ul>
    </header>
  );
}