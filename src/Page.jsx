import Entete from './Entete';
import Pied2Page from './Pied2Page';
import ListeProduits from './ListeProduits';
import './Page.css';

export default function Page() {
  return (
    <div className="Page">
      <Entete />
      <section className="contenuPrincipal">
        <ListeProduits />
      </section>
      <Pied2Page />
    </div>
  );
}