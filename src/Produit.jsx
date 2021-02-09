import BtnAjoutPanier from './BtnAjoutPanier';
import './Produit.scss';

export default function Produit(props) {
    console.log("Panier dans Produit : ", props.etatPanier);

    /**
     * Ajoute l'article au panier
     */
    function ajouterArticle() {
        const [panier, setPanier] = props.etatPanier;
        if(panier[props.id]) {
            panier[props.id].qte++;
        }
        else {
            panier[props.id] = {prix: props.prix, qte: 1}
        }

        // Maintenant il faut changer l'état du panier avec setPanier
    }

    return (
        <li className="Produit">
            <div className="image">
                <img src={'images-produits/' + props.id + '.webp'} alt={props.nom}/>
            </div>
            <div className="info">
                <h3>{props.nom}</h3>
                <p className="prix">{props.prix} $CA</p>
                <BtnAjoutPanier onClick={ajouterArticle} />
            </div>
        </li>
    );
}