import { Component } from 'react';
import Bio from '../bio/Bio';
import Footer from '../footer/Footer';
import Gallery from '../gallery/Gallery';
import Header from '../header/Header';
import SportsmansList from '../SportsmansList/SportsmansList';
import './App.css';

class App extends Component  {
    constructor(props){
        super(props);
        this.state = {   
            data:         
                [
                    {name: 'Влад Р', task: 'Проплыть', taskDone: false, result: '13:03:46', id: 1},
                    {name: 'Матвей Б', task: 'Проплыть', taskDone: false, result: '13:03:46', id: 2},
                    {name: 'Вера К', task: 'Проплыть', taskDone: false, result: '13:03:46', id: 3},
                    {name: 'Мирон А', task: 'Проплыть', taskDone: false, result: '13:03:46', id: 4},
                ],
        }
    }
    render() {
        const {data} = this.state;
        return (
            <div className='container'>
            <Header/>
            <Bio/>
            <Gallery/>
            <SportsmansList data = {data}/>
            <Footer/>
        </div>
        )
    }

}

export default App;