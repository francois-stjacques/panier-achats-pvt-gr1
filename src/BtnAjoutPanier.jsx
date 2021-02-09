import "./BtnAjoutPanier.scss";
import Badge from "@material-ui/core/Badge";
import { useState } from "react";

export default function BtnAjoutPanier(props) {
  // État du badge du bouton
  const [btnQte, setBtnQte] = useState(0);

  return (
    <Badge badgeContent={btnQte} color="secondary">
      <button
        onClick={() => {
          props.onClick();
          setBtnQte(btnQte+1);
        }}
        className="BtnAjoutPanier"
      >
        Ajouter au panier
      </button>
    </Badge>
  );
}
