import React, { useState } from "react";
import ItemsList from "./ItemsList";
import AddItem from "./AddItem";
import styled from 'styled-components';

const AddItemSign = styled.p`
  margin: 10px;
`

export default function Shop() {
    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [valid, setValid] = useState("");

    function handleFormSubmit(event) {
        event.preventDefault();

        if (!name) {
            setValid("Введите название");
            return;
        }
        if (!desc) {
            setValid("Введите описание ");
            return;
        }
        setItems([
            ...items,
            {
                id: items.length + 1,
                name: name,
                desc: desc
            }
        ]);

        postItems()

        setName("");
        setDesc("");
        setValid("");
    }

    async function postItems() {
        const requestOptions = {
            method: "POST",
            body: JSON.stringify({ name: name, desc: desc }),
            headers: { "Content-type": "application/json" }
        }

        try {
            const response = await fetch("https://covid-shop-mcs.herokuapp.com", requestOptions)
            const data = await response.json()
            if (data) {
                console.log(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleDescChange(event) {
        setDesc(event.target.value);
    }

    function handleDeleteClick(id) {
        setItems(items.filter((item) => item.id !== id));
    }

    return (
        <>
            <AddItem
                name={name}
                desc={desc}
                valid={valid}
                onNameChange={handleNameChange}
                onDescChange={handleDescChange}
                onFormSubmit={handleFormSubmit}
            />
            <div>{items.length === 0 && <AddItemSign>Добавьте первый товар</AddItemSign>}</div>
            <ItemsList items={items} onDeleteClick={handleDeleteClick} />
        </>
    );
}
