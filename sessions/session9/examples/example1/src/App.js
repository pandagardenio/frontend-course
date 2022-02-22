import './App.css';
import Button from './components/Button';
import Card from './components/Card';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Card
                    title="Using children in our React components"
                >
                    <p>With children we can pass any content to our React components</p>
                    <p>In the case of this card, it allow us to pass more than one paragraph for example</p>
                </Card>
                <Card
                    title="We can even pass custom components"
                >
                    <p>Using children we can even pass custom React Components, as we are doing with the button component below</p>
                    <Button content="I'm a button component"/>
                </Card>
            </header>
        </div>
    );
}

export default App;
