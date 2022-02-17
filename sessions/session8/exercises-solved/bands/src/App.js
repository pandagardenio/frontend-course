import './App.css';

const bands = [
    {
        name: "The Beatles",
        instruments: {
            John: "voice",
            Paul: "bass",
            Ringo: "drums",
            George: "guitar"
        }
    },
    {
        name: "The Ramones",
        instruments: {
            Johnny: "voice",
            Joey: "guitar",
            Marky: "drums",
            DeeDee: "bass"
        }
    }
];

function App() {
    return bands.map(band => {
        const name = band.name;
        return (
            <div>
                <h2>{name}</h2>
                {Object.keys(band.instruments).map(member => {
                    const instrument = band.instruments[member];
                    return (
                        <p className={instrument}>{member}</p>
                    )
                })}
            </div>
        )
    });
}

export default App;
