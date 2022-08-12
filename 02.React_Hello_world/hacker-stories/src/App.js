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

    const handleSearch = event => {
        console.log(event.target.value);
    }

    return (
        <div>
            <h1>{say("It's ok!")}</h1>

            <Search onSearch={handleSearch} />
            <hr />

            <List list={details} />
        </div>
    );
}

const List = props => {
    return props.list.map(item => (
        <div key={item.id}>
            {item.id}. {item.name} is {item.age} years old.
        </div>
    ));
}

const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = React.useState('None');
    // useState hook returns an array with two values
    // takes initial state as a value which is empty string in this case.
    // we can initiate with any string literal.
    // first element of array represents current state
    // second element is a function to update this state.

    const handleChange = event => {
        onSearch(event); // callback from App component
        if (event.target.value === '')
            setSearchTerm('None');
        else
            setSearchTerm(event.target.value);
    }


    return (
        <div>
            <label htmlFor="search">Search:</label>
            <input type='text' id="search" onChange={handleChange} />
            <p>Searching for <strong>{searchTerm}</strong></p>
        </div>
    );
}

export default App;

