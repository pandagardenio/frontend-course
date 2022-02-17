import './App.css';
import Button from './components/Button';
import Card from './components/Card';

function App() {
    return (
        <div className="App">
        <header className="App-header">
            <Card
                content="With React we can build reusable components. For example, with this Card component we just need to pass the content as a prop and we don't have to repeat the same structure over and over"
                title="My first Component"
            />
            <Card
                content="Just by changing the props, we can modify what our component is going to render"
                title="Changing Props"
            />
            <Button content="I'm a button component"/>
        </header>
        </div>
    );
}

export default App;
