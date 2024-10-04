import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <div>
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
        <img src={logo} alt="logo" width="40" height="32" />
        </a>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#1" className="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="#2" className="nav-link px-2">Features</a></li>
        <li><a href="#3" className="nav-link px-2">Pricing</a></li>
        <li><a href="#4" className="nav-link px-2">FAQs</a></li>
        <li><a href="#5" className="nav-link px-2">About</a></li>
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2">Login</button>
        <button type="button" class="btn btn-primary">Sign-up</button>
      </div>
    </header>
    </div>
    )
    
}

export default Header;