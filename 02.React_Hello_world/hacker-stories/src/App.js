import React from 'react';

function say(message) {
    return `Me: ${message}`;
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

    const [searchTerm, setSearchTerm] = React.useState('Abhishek'); // initalize for controlled component

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    }

    const searchedDetails = details.filter(detail =>
        detail.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>{say("It's ok!")}</h1>

            <Search search={searchTerm} onSearch={handleSearch} />
            <hr />

            <List details={searchedDetails} />
        </div>
    );
}

const List = ({ details }) =>
    details.map(item => <Item key={item.id} {...item} />)

const Item = ({ name, age }) => (
    <div>
        {name} is {age} years old.
    </div>
);

const Search = ({ search, onSearch }) => {
    return (
        <div>
            <label htmlFor="search">Search:</label>
            <input
                type='text'
                id='search'
                value={search}
                onChange={onSearch} />
        </div>
    );
}

export default App;

