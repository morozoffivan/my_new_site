import AddForm from './AddForm/AddForm';
import SearchFilter from './SearchFilter/SearchFilter';
import SearchPanel from './SearchPanel/SearchPanel';
import './SportsmansList.css';
import SportsmansListItem from './SportsmansListItem/SportsmansListItem';

const SportsmansList = ({data, toggleProp}) => {
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
                        {...otherProps}
                        toggleProp={(e) => {toggleProp(id, e.currentTarget.getAttribute('data-toggle'))}}/>
                    )
                })}
            </div>
            
            <AddForm/>
        </div>
    )

}

export default SportsmansList;