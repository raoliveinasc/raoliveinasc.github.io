import React, { useState, useEffect } from "react";
import Select from "react-select";

export default function App(props) {
  // React state to manage selected options
  const [selectedOptions, setSelectedOptions] = useState();

  // Array of all options
  const optionList = [
    { value: "revisao", label: "Revisão Geral - 10 Itens (Mecânica e Elétrica)" },
    { value: "corrente", label: "Manutenção de Corrente" },
    { value: "retrovisores", label: "Retrovisores" },
    { value: "reparo1", label: "Reparo - Câmara de Pneu" },
    { value: "reparo2", label: "Reparo - Pneu" },
    { value: "troca1", label: "Troca - Óleo de Motor" },
    { value: "troca2", label: "Troca - Kit Transmissão (Relação & Corrente)" },
    { value: "troca3", label: "Troca - Filtro de Óleo" },
    { value: "troca4", label: "Troca - Pastilha de Freio" },
    { value: "troca5", label: "Troca - Lona de Freio" },
    { value: "troca6", label: "Troca - Filtro de Ar" },
    { value: "troca7", label: "Troca - Lâmpadas" },
    { value: "troca8", label: "Troca - Vela de Ignição" },
    { value: "troca9", label: "Troca - Manete" },
    { value: "troca10", label: "Troca - Câmara de Pneu" },
    { value: "troca11", label: "Troca - Pneu" },
    { value: "troca12", label: "Troca - Fusível" },
    { value: "troca13", label: "Troca - Tensor de Corrente de Comando" },
    { value: "troca14", label: "Troca - Cabo do Acelerador" },
    { value: "troca15", label: "Troca - Cabo de Embreagem" },
    { value: "troca16", label: "Troca - Cabo de Freio (Freio Tambor Diânteiro)" },
    { value: "troca17", label: "Troca - Cabo do Velocímetro" },
    { value: "troca18", label: "Troca - Cabo de Vela e Cachimbo" },
    { value: "troca19", label: "Troca - Rolamento da Roda" },
    { value: "troca20", label: "Troca - Bateria" },
    { value: "troca21", label: "Troca - Relé de Seta" },
    { value: "troca22", label: "Troca - Filtro de Combustível e Mangueiras" },
    { value: "troca23", label: "Troca - Fluido de Freio" },
    { value: "troca24", label: "Troca - Flexível de Freio" },
    { value: "troca25", label: "Troca - Amortecedor Traseiro" },
    { value: "troca26", label: "Troca - Embreagem" },
    { value: "troca27", label: "Troca - Regulador" }
  ];

  // Function triggered on selection
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  return (
    <div className="app">
      <h2>Serviços Oferecidos</h2>
      <div className="dropdown-container">
        <Select
          options={optionList}
          placeholder="Escolha o serviço"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti
        />
      </div>
    </div>
  );
}