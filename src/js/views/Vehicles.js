import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "../../styles/details.css";
import { Link } from "react-router-dom";
import { ArrowReturnLeft } from "react-bootstrap-icons";

export const Vehicles = () => {
  const params = useParams();
  const [VehicleDetails, setVehicleDetails] = useState([]);

  const getVehicleDetails = async () => {
    const response = await fetch(
      `https://www.swapi.tech/api/vehicles/${params.uid}`
    );
    const data = await response.json();
    const details = data;
    setVehicleDetails(details.result.properties);
  };
  getVehicleDetails();

  return (
    <>
      <div className="container d-flex justify-content-between">
        <div className="details-page">
          <h1>{VehicleDetails.name}</h1>
          <div className="d-flex justify-content-center">
            <p className="details-page pe-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, cupiditate commodi! Maxime quod molestias iure eos
              ratione harum itaque, repellendus assumenda voluptatum
              necessitatibus accusamus beatae. Quis et, ex aliquam esse
              repellendus vel voluptate rerum, veniam assumenda culpa dolorem,
              vitae quia sunt. Qui, ipsa. Molestias possimus expedita voluptas
              rem delectus similique sint rerum excepturi illo eos sequi placeat
              alias aperiam iure ipsum perferendis quod, cum optio quasi quaerat
              exercitationem nisi consequatur. Nisi nulla laboriosam consectetur
              sint eius perspiciatis minus, delectus, totam fugiat pariatur
              deserunt asperiores ipsam praesentium quia, a dolorum. Mollitia
              eaque maiores quibusdam excepturi minus reiciendis ut ad sint
              deserunt laborum atque, nihil nulla sapiente, dignissimos, eos
              modi? Iusto eum veniam magnam velit provident eaque doloremque
              dolorem ducimus, minima id.
            </p>
            <img
              className="pb-5"
              src={`https://starwars-visualguide.com/assets/img/vehicles/${params.uid}.jpg`}
              alt=""
            />
          </div>
          <div class="row pb-5">
            <div class="col-sm-2">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Name</h5>
                  <p class="card-text">{VehicleDetails.name}</p>
                </div>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Model</h5>
                  <p class="card-text">{VehicleDetails.model}</p>
                </div>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Vehicle Class</h5>
                  <p class="card-text">{VehicleDetails.vehicle_class}</p>
                </div>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Manufacturer</h5>
                  <p class="card-text">{VehicleDetails.manufacturer}</p>
                </div>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Consumables</h5>
                  <p class="card-text">{VehicleDetails.consumables}</p>
                </div>
              </div>
            </div>
            <div class="col-sm-2">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Crew</h5>
                  <p class="card-text">{VehicleDetails.crew}</p>
                </div>
              </div>
            </div>
          </div>
          <Link to={"/"}>
            <button className="btn btn-light">
              <ArrowReturnLeft size={35} />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
