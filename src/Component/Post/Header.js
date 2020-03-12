import React from 'react';

function Header() {
  return (
    <div >
      <nav className='navbar navbar-dark bg-primary'>
        <h4 className="navbar-brand">Navbar</h4>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
        </form>
      </nav>
    </div>
  );
}

export default Header;
