import './Page.scss';
import Entete from './Entete';
import Pied2Page from './Pied2Page';
import ListeProduits from './ListeProduits';
import useLocalStorageState from './hooks/useLocalStorageState';
import { Switch, Route } from 'react-router-dom';
import Accueil from './Accueil';
import Apropos from './Apropos';
import Contact from './Contact';

export default function Page(props) {
  // On utilise notre hook personnalisé pour créer un état qui sera sauvegardé dans localStorage
  // Cet état aura comme valeur initiale : {} et l'étidquette localStorage sera : "panier-pvt-gr1"
  const etatPanier = useLocalStorageState({}, "panier-pvt-gr1");

  // Autre exemples d'utilisation : 
  // const etatConnexion = useLocalStorageState(false, "utilisateur-connexion");
  // const choixLangue = useLocalStorageState("fr", "choix-langue");

  // // Remarquez l'initialisation "paresseuse" (lazy initialization) de l'état 
  // const etatPanier = useState(() => {
  //   const panierLS = window.localStorage.getItem('panier-pvt-gr1'); // NOOB!
  //   return (panierLS !== null) ? JSON.parse(panierLS) : {};
  // }); 
  // const [panier, setPanier] = etatPanier;

  // // Sauvegarder le panier dans localStorage 
  // // Comme ce code est un effet secondaire de votre composant 
  // // (qui doit être exécuté à chaque mutation du panier) la bonne façon de 
  // // le coder en respectant la manière React est d'utiliser un hook spécialisé "useEffect"
  // useEffect(() => {
  //   window.localStorage.setItem('panier-pvt-gr1', JSON.stringify(panier))
  // }, [panier]); // tableau des deps (dépendances)

  return (
    <div className="Page">
      <Entete etatPanier={etatPanier} />
      <section className="contenuPrincipal">
        {/* Switch permet d'inclure les composants requis selon l'URL dans le lien */}
        <Switch>
          {/* Route match (apparie) chaque URL avec un lien et inclut le composant corerspondant */}
          <Route path="/" component={Accueil} exact />
          <Route path="/nos-produits" exact>
            <ListeProduits etatPanier={etatPanier} />
          </Route>
          <Route path="/a-propos-de-magasin" exact>
            <Apropos />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>

      </section>
      <Pied2Page />
    </div>
  );
}