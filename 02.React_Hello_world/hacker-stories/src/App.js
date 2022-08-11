function say(message) {
    return `Me: ${message}`;
}

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

function App() {
    return (
        <div>
            <h1>{say("It's ok!")}</h1>

            <Search />
            <hr />

            <List />
        </div>
    );
}

function List() {
    return details.map(item => {
        return (
            <div key={item.id}>
                {item.id}. {item.name} is {item.age} years old.
            </div>
        )
    })
}

function Search() {
    return (
        <div>
            <label htmlFor="search">Search:</label>
            <input type='text' id="search" />
        </div>
    )
}

export default App;

