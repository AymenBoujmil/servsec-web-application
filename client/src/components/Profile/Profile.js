import React from "react";
import {Link,Route} from "react-router-dom";
import ServicesTable from "../../_utils/ServicesTable";
import Update from './Update'
import History from './History'

function Profile() {
  const user=JSON.parse(localStorage.getItem('profile'));
  const nom = user.result.role === "Client" ? user.result.lastname+'_'+user.result.firstname : user.result.name;

  return (
    <>
      <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <div className="container card border-0 shadow my-5 card-body p-5" >
        <div class="container" style={{ marginTop: "15px" }}>
          <div class="main-body">
            <div class="row gutters-sm">
              <div class="col-md-4 mb-3">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex flex-column align-items-center text-center">
                      <img
                        src="https://davidwilsondmd.com/wp-content/uploads/2015/11/user.png"
                        alt="Admin"
                        class="rounded-circle"
                        width="150"
                      />
                      <div class="mt-3">
                        <h4>{nom}</h4>
                        <p class="text-secondary mb-1">{user?.result?.phone}</p>
                        <p class="text-muted font-size-sm">
                          {user?.result?.email}
                        </p>
                        <Link to="/Update">
                        <button class="btn btn-primary">Edit Profile</button></Link>
                        <Route path="/Update"
                        component={Update}
                        ></Route>
                        <button class="btn btn-outline-primary">Message</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="row">
                      <ul class="nav nav-pills nav-fill" id="myTab" role="tablist">
                        <li class="nav-item">
                          <a
                            class="nav-link active"
                            id="bio-tab"
                            data-toggle="tab"
                            href="#bio"
                            role="tab"
                            aria-controls="bio"
                            aria-selected="true"
                          >
                            Bio
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            id="info-tab"
                            data-toggle="tab"
                            href="#info"
                            role="tab"
                            aria-controls="info"
                            aria-selected="false"
                          >
                            Info
                          </a>
                        </li>
                        {user.result.role === "Client"?( 
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            id="history-tab"
                            data-toggle="tab"
                            href="#history"
                            role="tab"
                            aria-controls="history"
                            aria-selected="false"
                          >
                            History
                          </a>
                        </li>):
                        (

                          <li class="nav-item">
                          <a
                            class="nav-link"
                            id="services-tab"
                            data-toggle="tab"
                            href="#services"
                            role="tab"
                            aria-controls="info"
                            aria-selected="false"
                          >
                            Services
                          </a>
                        </li>
                        )}

                      </ul>
                    </div>
                    <hr></hr>
                    <div class="row">
                      <div
                        className="tab-content profile-tab"
                        id="myTabContent"
                      >
                        <div
                          className="tab-pane fade show active"
                          role="tabpanel"
                          id="bio"
                          aria-labelledby="bio-tab"
                        >
                          <p>
                            {user?.result?.bio}
                          </p>
                        </div>
                        <div
                          className="tab-pane fade"
                          role="tabpanel"
                          id="info"
                          aria-labelledby="info-tab"
                        >
                          <div class="table-responsive">
            <table class="table table-sm table-borderless mb-0">
              <tbody>
                <tr>
                  <th class="pl-0 w-25" scope="row">
                    <strong>First Name</strong>
                  </th>
                  <td>
                    {user.result.firstname
                      ? `${user.result.firstname}`
                      : "Unavailable"}
                  </td>
                </tr>
                <tr>
                  <th class="pl-0 w-25" scope="row">
                    <strong>Last Name</strong>
                  </th>
                  <td>
                    {user.result.lastname
                      ? `${user.result.lastname}`
                      : "Unavailable"}
                  </td>
                </tr>
                <tr>
                  <th class="pl-0 w-25" scope="row">
                    <strong>{user.result.role==="Client" ? "Birth Date" : "Founded in"}</strong>
                  </th>
                  <td>
                    {user.result.date
                      ? `${user.result.date}`
                      : "Unavailable"}
                  </td>
                </tr>
                <tr>
                  <th class="pl-0 w-25" scope="row">
                    <strong>Phone</strong>
                  </th>
                  <td>{user.result.phone ? `${user.result.phone}` : "Unavailable"}</td>
                </tr>
                <tr>
                  <th class="pl-0 w-25" scope="row">
                    <strong>Email</strong>
                  </th>
                  <td>
                    {user.result.email
                      ? `${user.result.email}`
                      : "Unavailable"}
                  </td>
                </tr>
                <tr>
                  <th class="pl-0 w-25" scope="row">
                    <strong>Role</strong>
                  </th>
                  <td>{user.result.role}</td>
                </tr>
                {user.result.role === "Entreprise" ? 
                (
                <><tr>
                  <th class="pl-0 w-25" scope="row">
                    <strong>Registration Number</strong>
                  </th>
                  <td>{user.result.matricule}</td>
                </tr>
                <tr>
                  <th class="pl-0 w-25" scope="row">
                    <strong>Sector</strong>
                  </th>
                  <td>{user.result.sector}</td>
                </tr>
                </>)
                : null
                }
              </tbody>
            </table>
          </div>
                        </div>
                        <div
                          class="tab-pane fade"
                          id="history"
                          role="tabpanel"
                          aria-labelledby="history-tab"
                        >
                          <div class="row">
                            <History/>
                            </div>
                        </div>
                        <div
                          class="tab-pane fade"
                          id="services"
                          role="tabpanel"
                          aria-labelledby="services-tab"
                        >
                          <div class="row">
                              {user.result.role==="Entreprise" ? (
                                <ServicesTable  />
                              ): (
                                <div style={{ paddingTop: "50px" }}>
                                    <div
                                      class="alert alert-danger"
                                      role="alert"
                                      style={{ display: "flex", justifyContent: "space-between" }}
                                    >
                                      You are not eligible to create services.
                                    </div>
                                  </div>
                              )}
                      
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
