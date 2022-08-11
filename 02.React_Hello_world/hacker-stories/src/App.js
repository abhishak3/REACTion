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

            <label htmlFor="search">Search: </label>
            <input id="search" type="text" />

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

export default App;

