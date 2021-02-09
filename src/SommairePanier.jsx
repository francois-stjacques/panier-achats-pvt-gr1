import './SommairePanier.scss';

export default function SommairePanier(props) {
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