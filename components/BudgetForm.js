import React, { useState, useEffect } from "react";
import Select from "react-select";

export default function BudgetForm() {

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

    <div className='budget-form-section'>
        <div className='budget-form-center'>
            <div className='budget-form-title'>Orçamento</div>
            <div className="budget-form-subtitle">Instruções para recebimento do Orçamento</div>
            <div className='budget-form-instructions'>
                <ol>
                    <li>Crie uma conta Otto</li>
                    <li>Insira os dados da sua moto</li>
                    <li>Selecione os serviços desejados</li>
                    <li>Verifique se os dados estão corretos</li>
                    <li>Aguarde o Email/SMS com o Orçamento</li>
                </ol>
            </div>
            <form className="budget-form-main">
                <div className="haveaccount-section">
                  <h2>Já tem conta OttoMotos?</h2>
                  <div className="haveaccount-decision">
                    <button className="haveaccount-button">
                      <div className="haveaccount-button-text">Sim, tenho conta</div>
                    </button>
                    <button className="haveaccount-button">
                      <div className="haveaccount-button-text">Não, ainda não</div>
                    </button>
                  </div>
                </div>
                <div className="basic-information-section">
                  <h2>Insira seus dados pessoais</h2>
                  <div className="basic-information-internal">
                    <input type="text" placeholder="Insira seu nome completo" className="if-each"></input>
                    <input type="text" placeholder="Insira seu email" className="if-each"></input>
                  </div>
                </div>
                <div className="insert-moto">
                  <h2>Motos Cadastradas</h2>
                  <div className="moto-modelo">
                    <div className="nome-moto">Honda CG 150</div>
                    <div className="moto-modelo-inside">
                      <div className="espec-moto">Cargo</div>
                      <div className="ano-moto">2015</div>
                    </div>
                  </div>
                  <button className="inserir-nova-moto">INSERIR NOVA MOTO</button>
                </div>
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
                    <button className="gerar-form">Gerar formulário</button>
                </div>
                <div className="form-gerado">
                    <div className="cada-item-form">
                      <div className="nome-item">Revisão Geral</div>
                      <select name="qtd-item" className="qtd-item">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
