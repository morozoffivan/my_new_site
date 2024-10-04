import './SportsmansListItem.css';

const SportsmansListItem = () => {
    return (
        <>
        
        {/* Реализовать dropdown class который будет открывать задания для спортсмена */}
        <div class="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
        <h1>Имя</h1>
    <div class="list-group">
    <label class="list-group-item d-flex gap-3">
      <input class="form-check-input flex-shrink-0" type="checkbox" value=""/>
      <span class="pt-1 form-checked-content">
        <strong>Sportsman</strong>
        <small class="d-block text-body-secondary">
          <svg class="bi me-1" width="1em" height="1em"></svg>
          2:00–2:30pm
        </small>
      </span>
    </label>
  </div>
</div>
        </>
        
    )
}

export default SportsmansListItem;