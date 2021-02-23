import './Entete.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import SommairePanier from './SommairePanier';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Entete(props) {
  const [cacheSommaire, setCacheSommaire] = useState(true);
  
  const basculerSommairePanier =  () => setCacheSommaire(!cacheSommaire);
  
  const [panier] = props.etatPanier;
  return (
    <header className="Entete"> 
      <div><NavLink to="/" activeClassName="navActive" exact>Logo</NavLink></div>
      <ul className="navPrincipale">
        <li><NavLink to="/nos-produits" activeClassName="navActive">Produits</NavLink></li>
        <li><NavLink to="/a-propos-de-magasin" activeClassName="navActive">A propos de nous</NavLink></li>
        <li><NavLink to="/contact" activeClassName="navActive">Contactez-nous</NavLink></li>
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