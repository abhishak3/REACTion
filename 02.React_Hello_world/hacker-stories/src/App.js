import { wait } from '@testing-library/user-event/dist/utils';
import React, { useState, useEffect, useRef } from 'react';

function say(message) {
    return `Me: ${message}`;
}

const useSemiPersistentState = (key, initialState) => {
    const [searchTerm, setSearchTerm] = useState(
        localStorage.getItem('search') || initialState
    );

    useEffect(() => {
        localStorage.setItem('search', searchTerm);
    }, [searchTerm, key]);

    return [searchTerm, setSearchTerm];
}

const App = () => {
    const details = [
        {
            'id': 1,
            'name': 'Abhishek',
            'age': 32
        },
        {
            'id': 2,
            'name': 'Sunny',
            'age': 18
        },
        {
            'id': 3,
            'name': 'Honey',
            'age': 19
        }
    ]

    const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'abhi');
    const handleSearch = event => {
        setSearchTerm(event.target.value);
        //setSearchTerm(event.target.value);
        //// if we use setSearchTerm anywhere else we are gonna break the 
        //// feature we implemented that is storing state to localStorage.
        //// So, we'll use useEffect hook
        //localStorage.setItem('search', event.target.value);
    }


    const searchedDetails = details.filter(detail =>
        detail.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <h1>{say("It's ok!")}</h1>

            <InputWithLabel
                id="search"
                label="Search"
                search={searchTerm}
                onSearch={handleSearch}
                isFocused
            >
                <strong>Search: </strong>
            </InputWithLabel>
            <hr />

            <List details={searchedDetails} />
        </>
    );
}

const List = ({ details }) =>
    details.map(({ id, ...item }) => <Item key={id} {...item} />)
// rest operator(left) and spread operator(right)

const Item = ({ name, age }) => (
    <div>
        {name} is {age} years old.
    </div>
);

const InputWithLabel = ({
    id,
    type = 'text',
    search,
    onSearch,
    children,
    isFocused
}) => {
    const inputRef = useRef();
    useEffect(() => {
        if (isFocused && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isFocused]);

    return (
        <>
            <label htmlFor={id}>{children}</label>
            <input
                type={type}
                id={id}
                ref={inputRef}
                value={search}
                onChange={onSearch}
            />
        </>
    );
}

export default App;

