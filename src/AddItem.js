import React from "react";
import styled from 'styled-components';

const DivItem = styled.div`
  margin: 10px;
`
const ItemProp = styled.input`
  padding: 12px 10px;
  border-radius: 3px;
  border: 1px solid #cccccc;
  font-size: 16px;
`

const LabelItemProp = styled.label`
  display: none
`

const Button = styled.button`
  background-color: #0000ff;
  color: #FFFFFF;
  border: 0;
  padding: 15px 20px;
  min-width: 150px;
  font-size: 16px;
  border-radius: 3px;
  cursor: pointer;
  transition: opacity 200ms ease-out;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    opacity: 0.4;
    cursor: disabled;
  }
  &:active {
    box-shadow: 0 0px rgba(0, 0, 0, 0.2);
    transform: translateY(1px);
  }
`

export default function AddItem(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <DivItem>
        <LabelItemProp htmlFor="item-name">Название:</LabelItemProp>
        <ItemProp
          type="text"
          value={props.name}
          onChange={props.onNameChange}
          id="item-name"
          placeholder="Название товара"
          className="textfield"
        />
      </DivItem>
      <DivItem>
        <LabelItemProp htmlFor="item-description">Описание:</LabelItemProp>
        <ItemProp
          type="text"
          value={props.desc}
          onChange={props.onDescChange}
          id="item-description"
          placeholder="Описание товара"
          className="textfield"
        />
      </DivItem>
      <DivItem className="form-footer">
        <div className="validation">{props.valid}</div>
        <Button type="submit" className="btn btn-basic">Добавить</Button>
      </DivItem>
    </form>
  );
}
