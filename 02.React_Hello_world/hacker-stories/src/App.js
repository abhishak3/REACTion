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

    const [searchTerm, setSearchTerm] = React.useState('');

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    }

    const searchedDetails = details.filter(detail =>
        detail.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>{say("It's ok!")}</h1>

            <Search onSearch={handleSearch} />
            <hr />

            <List details={searchedDetails} />
        </div>
    );
}

const List = props => {
    return props.details.map(item => (
        <div key={item.id}>
            {item.id}. {item.name} is {item.age} years old.
        </div>
    ));
}

const Search = ({ onSearch }) => {
    return (
        <div>
            <label htmlFor="search">Search:</label>
            <input type='text' id="search" onChange={onSearch} />
        </div>
    );
}

export default App;

