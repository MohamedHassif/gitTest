import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../router/all_routes";

import ImageWithBasePath from "../../../../core/common/imageWithBasePath";
import TeacherModal from "../teacherModal";
import TeacherSidebar from "./teacherSidebar";
import TeacherBreadcrumb from "./teacherBreadcrumb";

const TeacherLibrary = () => {
  const routes = all_routes;

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            {/* Page Header */}
            <TeacherBreadcrumb />
            {/* /Page Header */}
          </div>
          <div className="row">
            {/* Student Information */}
            <TeacherSidebar />
            {/* /Student Information */}
            <div className="col-xxl-9 col-xl-8">
              <div className="row">
                <div className="col-md-12">
                  {/* List */}
                  <ul className="nav nav-tabs nav-tabs-bottom mb-4">
                    <li>
                      <Link to={routes.teacherDetails} className="nav-link ">
                        <i className="ti ti-school me-2" />
                        Teacher Details
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={routes.teachersRoutine}
                        className="nav-link "
                      >
                        <i className="ti ti-table-options me-2" />
                        Routine
                      </Link>
                    </li>
                    <li>
                      <Link to={routes.teacherLeaves} className="nav-link">
                        <i className="ti ti-calendar-due me-2" />
                        Leave &amp; Attendance
                      </Link>
                    </li>
                    <li>
                      <Link to={routes.teacherSalary} className="nav-link">
                        <i className="ti ti-report-money me-2" />
                        Salary
                      </Link>
                    </li>
                    <li>
                      <Link to={routes.teacherLibrary} className="nav-link active">
                        <i className="ti ti-bookmark-edit me-2" />
                        Library
                      </Link>
                    </li>
                  </ul>
                  {/* /List */}
                  <div className="card">
                    <div className="card-header d-flex align-items-center justify-content-between">
                      <h5>Library</h5>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="btn btn-outline-light border-white bg-white dropdown-toggle shadow-md"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-calendar-due me-2" />
                          This Year
                        </Link>
                        <ul className="dropdown-menu p-3">
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              This Year
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              This Month
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              This Week
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body pb-1">
                      <div className="row">
                        {/* Book List */}
                        <div className="col-xxl-4 col-md-6 d-flex">
                          <div className="card mb-3 flex-fill">
                            <div className="card-body pb-1">
                              <span className="avatar avatar-xl mb-3">
                                <img
                                  src="https://i5.walmartimages.com/asr/a5843dbd-67be-4eb8-80f4-ca9e86d4ba18.83130bd24d69d630b693bd28a1cba10a.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff"
                                  className="img-fluid rounded"
                                  alt="img"
                                />
                              </span>
                              <h6 className="mb-3">Introduction to Algorithms</h6>
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="mb-3">
                                    <span className="fs-12 mb-1">
                                      Book taken on{" "}
                                    </span>
                                    <p className="text-dark">25 Jan 2025</p>
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="mb-3">
                                    <span className="fs-12 mb-1">
                                      Last Date
                                    </span>
                                    <p className="text-dark">25 Feb 2024</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                       
                        <div className="col-xxl-4 col-md-6 d-flex">
                          <div className="card mb-3 flex-fill">
                            <div className="card-body pb-1">
                              <span className="avatar avatar-xl mb-3">
                                <img
                                  src="https://images.thenile.io/r1000/9781107195394.jpg"
                                  className="img-fluid rounded"
                                  alt="img"
                                />
                              </span>
                              <h6 className="mb-3">Artificial Intelligence</h6>
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="mb-3">
                                    <span className="fs-12 mb-1">
                                      Book taken on{" "}
                                    </span>
                                    <p className="text-dark">22 Jan 2025</p>
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="mb-3">
                                    <span className="fs-12 mb-1">
                                      Last Date
                                    </span>
                                    <p className="text-dark">25 Mar 2025</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-xxl-4 col-md-6 d-flex">
                          <div className="card mb-3 flex-fill">
                            <div className="card-body pb-1">
                              <span className="avatar avatar-xl mb-3">
                                <img
                                  src="https://cdn01.sapnaonline.com/product_media/9789332901384/md_9789332901384.jpg"
                                  className="img-fluid rounded"
                                  alt="img"
                                />
                              </span>
                              <h6 className="mb-3">Database System Concepts</h6>
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="mb-3">
                                    <span className="fs-12 mb-1">
                                      Book taken on{" "}
                                    </span>
                                    <p className="text-dark">30 Jan 2025</p>
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="mb-3">
                                    <span className="fs-12 mb-1">
                                      Last Date
                                    </span>
                                    <p className="text-dark">10 Feb 2025</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-xxl-4 col-md-6 d-flex">
                          <div className="card mb-3 flex-fill">
                            <div className="card-body pb-1">
                              <span className="avatar avatar-xl mb-3">
                                <img
                                  src="https://rukminim1.flixcart.com/image/832/832/book/2/5/0/computer-networks-original-imaddspyg8x86wsd.jpeg?q=70"
                                  className="img-fluid rounded"
                                  alt="img"
                                />
                              </span>
                              <h6 className="mb-3">Computer Networks</h6>
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="mb-3">
                                    <span className="fs-12 mb-1">
                                      Book taken on{" "}
                                    </span>
                                    <p className="text-dark">10 Feb 2025</p>
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="mb-3">
                                    <span className="fs-12 mb-1">
                                      Last Date
                                    </span>
                                    <p className="text-dark">20 Feb 2025</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      
                        <div className="col-xxl-4 col-md-6 d-flex">
                          <div className="card mb-3 flex-fill">
                            <div className="card-body pb-1">
                              <span className="avatar avatar-xl mb-3">
                                <img
                                  src="https://tse4.mm.bing.net/th?id=OIP.cTd_vLjE4mQ9HCvyQz9KhQHaJ4&pid=Api&P=0&h=180"
                                  className="img-fluid rounded"
                                  alt="img"
                                />
                              </span>
                              <h6 className="mb-3">Pattern Recognition and Machine Learning</h6>
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="mb-3">
                                    <span className="fs-12 mb-1">
                                      Book taken on{" "}
                                    </span>
                                    <p className="text-dark">12 Mar 2025</p>
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="mb-3">
                                    <span className="fs-12 mb-1">
                                      Last Date
                                    </span>
                                    <p className="text-dark">22 Mar 2025</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      
                        <div className="col-xxl-4 col-md-6 d-flex">
                          <div className="card mb-3 flex-fill">
                            <div className="card-body pb-1">
                              <span className="avatar avatar-xl mb-3">
                                <img
                                  src="https://tse3.mm.bing.net/th?id=OIP.V3dLYW_YNHYOh7O5wsScWgAAAA&pid=Api&P=0&h=180"
                                  className="img-fluid rounded"
                                  alt="img"
                                />
                              </span>
                              <h6 className="mb-3"> Computer Systems Performance Analysis</h6>
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="mb-3">
                                    <span className="fs-12 mb-1">
                                      Book taken on{" "}
                                    </span>
                                    <p className="text-dark">15 Feb 2025</p>
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="mb-3">
                                    <span className="fs-12 mb-1">
                                      Last Date
                                    </span>
                                    <p className="text-dark">25 Apr 2025</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /Book List */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
      <TeacherModal />
    </>
  );
};

export default TeacherLibrary;
