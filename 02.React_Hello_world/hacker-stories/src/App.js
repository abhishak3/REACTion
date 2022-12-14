import React, { useState, useEffect, useRef } from 'react';

const initialDetails = [
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

const getAsyncDetails = () =>
    new Promise(resolve =>
        setTimeout(
            () => resolve({ data: { details: initialDetails } }),
            2000
        )
    )

const App = () => {
    const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'abhi');
    const [details, setDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getAsyncDetails()
            .then(result => {
                setDetails(result.data.details);
                setIsLoading(false);
            })
            .catch(() => setIsError(true));
    }, [])

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

    const handleRemoveDetails = item => {
        const newDetails = details.filter(
            detail => detail.id !== item.id
        );
        setDetails(newDetails);
    };

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

            {isError && <p> Something went wrong... </p>}

            {
                isLoading ? (
                    <p> Loading... </p>
                ) : (
                    <List details={searchedDetails} onRemoveItem={handleRemoveDetails} />
                )
            }
        </>
    );
}

const List = ({ details, onRemoveItem }) =>
    details.map(item => <Item key={item.id} item={item} onRemoveItem={onRemoveItem} />)

const Item = ({ item, onRemoveItem }) => (
    <div>
        {item.name} is {item.age} years old.
        <button type="button" onClick={() => onRemoveItem(item)}>
            Dismiss
        </button>
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

