import Header from './components/Header';
import Footer from './components/Footer';
import PictureGallery from './components/PictureGallery/PictureGallery';

import './App.css';

function App() {
    const pictures = [
        'https://img.freepik.com/free-photo/old-wooden-door-with-bougainvillea_1401-306.jpg?t=st=1646736058~exp=1646736658~hmac=977cc22391afa3aa2d9e70d65ee61c82fcdcd3436d97aa3e26f0e0d552fbb6b3&w=2000',
        'https://img.freepik.com/free-photo/miniature-businessman-map-europe_1401-341.jpg?w=2000',
        'https://img.freepik.com/free-photo/filament-bulb-lying-euro-coins_1401-453.jpg?w=2000',
        'https://img.freepik.com/free-photo/blue-morning-natural-mountains-bamboo_1417-32.jpg?w=2000',
        'https://img.freepik.com/free-photo/milford-sound-new-zealand-travel-destination-concept_53876-42945.jpg?w=2000',
        'https://img.freepik.com/free-photo/milky-way_1401-347.jpg?w=2000',
        'https://img.freepik.com/free-photo/seeds-with-lit-bulb_1232-553.jpg?w=2000',
        'https://img.freepik.com/free-photo/girl-frees-butterfly-from-moment-concept-freedom_34998-377.jpg?w=2000'
    ];

    return (
        <div className="App">
            <Header/>
            <PictureGallery pictures={pictures}/>
            <Footer/>
        </div>
    );
}

export default App;
