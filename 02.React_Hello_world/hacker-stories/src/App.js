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
    return (
        <div>
            <h1>{say("It's ok!")}</h1>

            <Search />
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

const Search = () => {
    const handleChange = event => {
        console.log(event.target.value);
    }

    return (
        <div>
            <label htmlFor="search">Search:</label>
            <input type='text' id="search" onChange={handleChange} />
        </div>
    );
}

export default App;

