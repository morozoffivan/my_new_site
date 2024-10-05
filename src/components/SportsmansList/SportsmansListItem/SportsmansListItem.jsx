import './SportsmansListItem.css';

const SportsmansListItem = (props) => {
  let classNameListGroup = "list-group-item list-group-item-action";
  let btnClass = "btn btn-outline-success";
  let btnText = "Выполнил";
  if(props.taskDone) {
    classNameListGroup += ' bg-success text-white';
    btnClass = "btn btn-danger";
    btnText = 'Не выполнил'
  }
  return (
          <a href="#1" className={classNameListGroup} aria-current="true">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{props.name}</h5>
            </div>
            <p className="mb-1">{props.task}</p>
            <small>{props.result}</small>
            <button 
            type="button" 
            className={btnClass} 
            data-toggle ='taskDone'
            onClick={props.toggleProp}>{btnText}</button>
          </a>
          )
}

export default SportsmansListItem;