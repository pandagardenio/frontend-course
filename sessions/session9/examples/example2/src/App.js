import './App.css';
import Card from './components/Card';
import Counter from './components/Counter';
import TextField from './components/TextField';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Card
                    title="Handling state inside a react component"
                >
                    <Counter/>
                </Card>
                <Card
                    title="As we can see, each Counter component has its own independent state"
                >
                    <Counter/>
                </Card>
                <Card
                    title="This is another example on how we can handle events, in this case on a text input"
                >
                    <TextField/>
                </Card>
            </header>
        </div>
    );
}

export default App;
