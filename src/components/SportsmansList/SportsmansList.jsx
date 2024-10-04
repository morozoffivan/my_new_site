import SearchFilter from './SearchFilter/SearchFilter';
import SearchPanel from './SearchPanel/SearchPanel';
import './SportsmansList.css';
import SportsmansListItem from './SportsmansListItem/SportsmansListItem';

const SportsmansList = () => {
    return (
        <div>
            <SearchPanel/>
            <SearchFilter/>
            <SportsmansListItem/>

        </div>
    )

}

export default SportsmansList;