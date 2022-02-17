import Band from './components/Band';

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
        return (
            <Band name={band.name} instruments={band.instruments}/>
        )
    });
}

export default App;
