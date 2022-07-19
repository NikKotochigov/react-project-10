import React, { useState } from "react";
import styled from 'styled-components';

const ItemInfo = styled.div`
  margin-left: 10px;
`

const ItemQuantity = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;  
`

const ItemButton = styled.button`
  background-color: white;
  color: black;
  border: 1px solid var(--light-gray);
  padding: 5px 20px;
  min-width: 50px;
  font-size: 16px;
  border-radius: 3px;
  cursor: pointer;
  transition: opacity 200ms ease-out;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  margin-left: 10px;
  &:active {
    box-shadow: 0 0px rgba(0, 0, 0, 0.2);
    transform: translateY(1px);
  }
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    opacity: 0.4;
    cursor: disabled;
  }
`

const ItemTotal = styled.h3`
  font-size: 16px;
`

const ItemTitle = styled.h2`
  font-size: 30px;
`

export {ItemButton}

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div className="item">
      <ItemInfo className="item-info">
        <ItemTitle>{info.name}</ItemTitle>
        <p>{info.desc}</p>
      </ItemInfo>
      <ItemQuantity className="item-quantity">
        <ItemButton
          className="item-less"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </ItemButton>
        <ItemTotal className="item-total">{total ? total : ""}</ItemTotal>
        <ItemButton className="item-more" onClick={handleAddClick}>
          +
        </ItemButton>
      </ItemQuantity>
    </div>
  );
}
