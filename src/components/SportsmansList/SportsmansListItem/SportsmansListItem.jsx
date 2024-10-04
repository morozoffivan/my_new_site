import './SportsmansListItem.css';

const SportsmansListItem = () => {
return (
<>
  <div
    class="dropdown-menu position-static d-flex flex-column flex-lg-row align-items-stretch justify-content-start p-3 rounded-3 shadow-lg hide"
    data-bs-theme="light">
    <nav class="col-lg-8">
      <ul class="list-unstyled d-flex flex-column gap-2">
        <li>
          <a href="#1" class="btn btn-hover-light rounded-2 d-flex align-items-start gap-2 py-2 px-3 lh-sm text-start">
            <svg class="bi" width="24" height="24"></svg>
            <div>
              <strong class="d-block">Main product</strong>
              <small>Take a tour through the product</small>
            </div>
          </a>
        </li>
        <li>
          <a href="#2" class="btn btn-hover-light rounded-2 d-flex align-items-start gap-2 py-2 px-3 lh-sm text-start">
            <svg class="bi" width="24" height="24"></svg>
            <div>
              <strong class="d-block">Another product</strong>
              <small>Explore this other product we offer</small>
            </div>
          </a>
        </li>
        <li>
          <a href="#1"
            className="btn btn-hover-light rounded-2 d-flex align-items-start gap-2 py-2 px-3 lh-sm text-start">
            <svg class="bi" width="24" height="24"></svg>
            <div>
              <strong class="d-block">Support</strong>
              <small>Get help from our support crew</small>
            </div>
          </a>
        </li>
      </ul>
    </nav>
    <div class="d-none d-lg-block vr mx-4 opacity-10">&nbsp;</div>
    <hr class="d-lg-none" />
    <div class="col-lg-auto pe-3">
      <nav>
        <ul class="d-flex flex-column gap-2 list-unstyled small">
          <li><a href="#1"
              class="link-offset-2 link-underline link-underline-opacity-25 link-underline-opacity-75-hover">Documentation</a>
          </li>
          <li><a href="#2"
              class="link-offset-2 link-underline link-underline-opacity-25 link-underline-opacity-75-hover">Use
              cases</a></li>
          <li><a href="#3"
              class="link-offset-2 link-underline link-underline-opacity-25 link-underline-opacity-75-hover">API
              status</a></li>
          <li><a href="#4"
              class="link-offset-2 link-underline link-underline-opacity-25 link-underline-opacity-75-hover">Partners</a>
          </li>
          <li><a href="#5"
              class="link-offset-2 link-underline link-underline-opacity-25 link-underline-opacity-75-hover">Resources</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  {/* Реализовать dropdown class который будет открывать задания для спортсмена */}
  <div class="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
    <h1>Имя</h1>
    <div class="list-group">
      <label class="list-group-item d-flex gap-3">
        <input class="form-check-input flex-shrink-0" type="checkbox" value="" />
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