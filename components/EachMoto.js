import Link from "next/link";


export default function EachMoto(props) {
  return (
    <>
      <div className="moto-modelo">
        <i className="fa-regular fa-motorcycle fa-2x"></i>
        <div className="moto-specs">
          <div className="nome-moto">{props.nomeMoto ? props.nomeMoto : "Selecione a Marca"}</div>
          <div className="moto-modelo-inside">
            <div className="espec-moto">{props.especMoto ? props.especMoto : "Selecione o Modelo"}</div>
            <div className="espec-moto">•</div>
            <div className="ano-moto">{props.anoMoto ? props.anoMoto : "Selecione o Ano"}</div>
          </div>
        </div>
        {!props.edit ?     <div className="remove-moto">
          <button className="remove-moto-button" type="button"><i className="fa-solid fa-x fa-lg"></i></button>
        </div> : 
        <div className="remove-moto">
          <Link className="remove-moto-button" href="/profile"><i class="fa-solid fa-pen-to-square fa-2x"></i></Link>
        </div>}
      </div>
      </>
  );
}
