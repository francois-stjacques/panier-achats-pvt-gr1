import './SommairePanier.scss';

export default function SommairePanier(props) {
  //console.log("Etat du panier dans SommairePanier : ", props.etatPanier);
  const [panier, setPanier] = props.etatPanier;
  const infoPanier = retournerInfoPanier(panier);
  return (
    <div className={'SommairePanier' + (props.cacher?' cacher':'')}>
      <span className="nbArticles">Articles différents : </span>
      <span className="qteArticles">Articles total : </span>
      <span className="sousTotal">Sous-total : </span>
      <span className="tps">TPS : </span>
      <span className="tvq">TVQ : </span>
      <span className="total">Total : </span>
    </div>
  );
}

function retournerInfoPanier(pan) {
  let info = {}; // {nbArticles: 2, qteArticles: 18, sousTotal: 1234.87,}

  // Sortir les articles et les mettre dans un tableau
  let articles = Object.values(pan);

  // Nombre d'articles différents
  info.nbArticles = articles.length;

  // Quantité d'articles totale
  // Première façon :
  // let qteTotale = 0;
  // for(let i=0; i<articles.length; i++) {
  //   qteTotale += articles[i].qte;
  // }
  // info.qteArticles = qteTotale;

  // Meilleure façon :
  info.qteArticles = articles.reduce(function(valInit, valCourante) {
    return valCourante.qte + valInit;
  }, 0);

  // Sous-total
  let sousTotal = articles.reduce((i, c) => c.prix*c.qte + i, 0);

  console.log(sousTotal);

}