import "./ListeProduits.scss";
import Produit from "./Produit";
import tabProduits from "./data/produits.json";

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
