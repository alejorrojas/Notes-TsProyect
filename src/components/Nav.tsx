import { Props } from "./Interfaces";


function Nav({title}: Props){
  return <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="../logo-ts.svg" alt="logo" style={{ width: "15%" }} />
            {title && <span>{title}</span>}
          </a>
          <form className="d-flex">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button className="btn btn-info" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
  </>;
}

export default Nav;
