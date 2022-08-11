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

            {details.map((item, index) => {
                return (
                    <div key={index}>{item.name} is {item.age} years old.</div>
                    // avoid using `index` because if list reorders, every key will
                    // change and React's reconciler have to redraw the array which
                    // can cause significant performance loss.
                    // use key associated with object. It will be more stable.
                )
            })}

        </div>
    );
}

export default App;

