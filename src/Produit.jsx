import './Produit.css';

function Produit(props) {
    return (
        <li className="Produit">
            <div className="image">
                <img src={'images-produits/' + props.id + '.webp'} alt={props.nom}/>
            </div>
            <div className="info">
                <h3>{props.nom}</h3>
                <p className="prix">{props.prix} $CA</p>
                <button>Ajouter au panier</button>
            </div>
        </li>
    );
}

export default Produit;