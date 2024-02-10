import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Search } from "react-bootstrap-icons";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar">
      <div className="container">
        <div>
          <Link to={"/"} className="navbar-brand">
            <img
              src="https://www.freepnglogos.com/uploads/star-wars-logo-png-10.png"
              alt="Bootstrap"
              width="150"
              height="64"
            />
          </Link>
        </div>
        <div className="d-flex justify-content-center ">
          <div className="d-flex justify-content-center pe-2">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                autoComplete="on"
              />
            </form>
            <button className="btn btn-outline-light" type="submit">
              <Search size={25} />
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-warning"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Favorites {store.favorites.length}
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Favorites
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <ul>
                      {store.favorites.map((fav, index) => (
                        <div
                          key={index}
                          className="d-flex justify-content-between my-2"
                        >
                          <li>{fav.name}</li>
                          <button
                            onClick={() =>
                              actions.handleDelete({ _id: fav._id })
                            }
                            className="btn btn-danger rounded"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </ul>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
