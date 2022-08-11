//const name = "GodZilla";

function say(message) {
    return `Me: ${message}`;
}

function App() {
    return (
        <div>
            <h1>{say("It's ok!")}</h1>

            <label htmlFor="search">Search: </label>
            <input id="search" type="text" />
        </div>
    );
}

export default App;

