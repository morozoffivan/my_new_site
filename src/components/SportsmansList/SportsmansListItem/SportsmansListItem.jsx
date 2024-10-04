import './SportsmansListItem.css';

const SportsmansListItem = (props) => {
return (
        <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{props.name}</h5>
          </div>
          <p class="mb-1">{props.task}</p>
          <small>{props.result}</small>
          <button type="button" className="btn btn-outline-success">Success</button>
          <button type="button" class="btn btn-outline-danger">Danger</button>
        </a>
        )
}

export default SportsmansListItem;