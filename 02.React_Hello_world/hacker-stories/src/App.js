import React from 'react';

function say(message) {
    return `Me: ${message}`;
}

const useSemiPersistentState = (key, initialState) => {
    const [searchTerm, setSearchTerm] = React.useState(
        localStorage.getItem('search') || initialState
    );

    React.useEffect(() => {
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

            <Search search={searchTerm} onSearch={handleSearch} />
            <hr />

            <List details={searchedDetails} />
        </>
    );
}

const List = ({ details }) =>
    details.map(({ id, ...item }) => <Item key={id} {...item} />)
// rest operator(left) and spread operator(right)

const Item = ({ name, age }) => (
    <>
        {name} is {age} years old.
    </>
);

const Search = ({ search, onSearch }) => {
    return (
        <>
            <label htmlFor="search">Search:</label>
            <input
                type='text'
                id='search'
                value={search}
                onChange={onSearch} />
        </>
    );
}

export default App;

