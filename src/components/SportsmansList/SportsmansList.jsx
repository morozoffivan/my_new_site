import SearchFilter from './SearchFilter/SearchFilter';
import SearchPanel from './SearchPanel/SearchPanel';
import './SportsmansList.css';
import SportsmansListItem from './SportsmansListItem/SportsmansListItem';

const SportsmansList = ({data}) => {
    return (
        <div>
            <SearchPanel/>
            <SearchFilter/>
            
            <div className='list-group'>
                {data.map((item) => {
                    const {id, ...otherProps} = item;
                    return (
                        <SportsmansListItem
                        key = {id}
                        {...otherProps}/>
                    )
                })}
            </div>

        </div>
    )

}

export default SportsmansList;