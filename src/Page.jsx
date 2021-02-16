import './Page.scss';
import Entete from './Entete';
import Pied2Page from './Pied2Page';
import ListeProduits from './ListeProduits';
import {useState, useEffect} from 'react';

export default function Page(props) {
  // Remarquez l'initialisation "paresseuse" (lazy initialization) de l'état 
  const etatPanier = useState(() => {
    const panierLS = window.localStorage.getItem('panier-pvt-gr1');
    return (panierLS !== null) ? JSON.parse(panierLS) : {};
  }); 
  const [panier, setPanier] = etatPanier;

  // Sauvegarder le panier dans localStorage 
  // Comme ce code est un effet secondaire de votre composant 
  // (qui doit être exécuté à chaque mutation du panier) la bonne façon de 
  // le coder en respectant la manière React est d'utiliser un hook spécialisé "useEffect"
  useEffect(() => {
    window.localStorage.setItem('panier-pvt-gr1', JSON.stringify(panier))
  }, [panier]); // tableau des deps (dépendances)
  

  return (
    <div className="Page">
      <Entete etatPanier={etatPanier} />
      <section className="contenuPrincipal">
        <ListeProduits etatPanier={etatPanier} />
      </section>
      <Pied2Page />
    </div>
  );
}