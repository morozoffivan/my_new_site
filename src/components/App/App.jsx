import Bio from '../bio/Bio';
import Footer from '../footer/Footer';
import Gallery from '../gallery/Gallery';
import Header from '../header/Header';
import SportsmansList from '../SportsmansList/SportsmansList';
import './App.css';

const App = () => {
    return (
        <div className='container'>
        <Header/>
        <Bio/>
        <Gallery/>
        <SportsmansList/>
        <Footer/>
    </div>
    )
    
}

export default App;