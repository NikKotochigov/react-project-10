import React from "react";
import Item from "./Item";
import styled from 'styled-components';
import { ItemButton } from "./Item";

const ShopList = styled.ul`
  list-style: none;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
`

const ItemList = styled.li`
  margin-bottom: 80px;
`

export default function ItemsList(props) {
  return (
    <ShopList className="shop">
      {props.items.map((item) => (
        <ItemList key={item.id}>
          <Item info={item} />
          <ItemButton
            className="btn-delete"
            onClick={() => props.onDeleteClick(item.id)}
          >
            Удалить
          </ItemButton>
        </ItemList>
      ))}
    </ShopList>
  );
}
