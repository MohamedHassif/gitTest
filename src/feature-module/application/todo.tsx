import React from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/common/imageWithBasePath";
import Select from "react-select";
import {
  lastModified,
} from "../../core/common/selectoption/selectoption";
import TodoModal from "../../core/modals/todoModal";
import { all_routes } from "../router/all_routes";
import TooltipOption from "../../core/common/tooltipOption";

const Todo = () => {
  const options = [
    { value: "bulk-actions", label: "Bulk Actions" },
    { value: "delete-marked", label: "Delete Marked" },
    { value: "unmark-all", label: "Unmark All" },
    { value: "mark-all", label: "Mark All" },
  ];
  const routes = all_routes;
  return (
    <>
    <div className="page-wrapper notes-page-wrapper">
      <div className="content pb-4">
        <div className="d-md-flex d-block align-items-center justify-content-between mb-3 pb-3 border-bottom position-relative">
          <div className="my-auto mb-2">
            <h3 className="page-title mb-1">Todo</h3>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={routes.adminDashboard}>Dashboard</Link>
                </li>
                <li className="breadcrumb-item">Application</li>
                <li className="breadcrumb-item active" aria-current="page">
                  Todo
                </li>
              </ol>
            </nav>
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
            <TooltipOption />
            <div className="mb-2">
              <Link
                to="#"
                className="btn btn-primary d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#note-units"
              >
                <i className="ti ti-square-rounded-plus me-2" />
                Add Task
              </Link>
            </div>
          </div>
          <Link
            id="toggle_btn2"
            className="notes-tog position-absolute start-0 avatar avatar-sm rounded-circle bg-primary text-white"
            to="#"
          >
            <i className="fas fa-chevron-left" />
          </Link>
        </div>
        <div className="row">
          <div className="col-xl-3 col-md-12 sidebars-right theiaStickySidebar section-bulk-widget">
          <div className="stickybar">
            <div className="border rounded-3 mt-4 bg-white p-3">
              <div className="mb-3 pb-3 border-bottom">
                <h4 className="d-flex align-items-center">
                  <i className="ti ti-file-text me-2" />
                  Todo List
                </h4>
              </div>
              <div className="border-bottom pb-3 ">
                <div
                  className="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="d-flex text-start align-items-center fw-semibold fs-15 nav-link active mb-1"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="true"
                  >
                    <i className="ti ti-inbox me-2" />
                    Inbox <span className="ms-2">1</span>
                  </button>
                  <button
                    className="d-flex text-start align-items-center fw-semibold fs-15 nav-link mb-1"
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="false"
                  >
                    <i className="ti ti-circle-check me-2" />
                    Done
                  </button>
                  <button
                    className="d-flex text-start align-items-center fw-semibold fs-15 nav-link mb-1"
                    id="v-pills-messages-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-messages"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    <i className="ti ti-star me-2" />
                    Important
                  </button>
                  <button
                    className="d-flex text-start align-items-center fw-semibold fs-15 nav-link mb-0"
                    id="v-pills-settings-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-settings"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                  >
                    <i className="ti ti-trash me-2" />
                    Trash
                  </button>
                </div>
              </div>
              <div className="mt-3">
                <div className="border-bottom px-2 pb-3 mb-3">
                  <h5 className="mb-2">Tags</h5>
                  <div className="d-flex flex-column mt-2">
                    <Link to="#" className="text-info mb-2">
                      <span className="text-info me-2">
                        <i className="fas fa-square square-rotate fs-10" />
                      </span>
                      Pending
                    </Link>
                    <Link to="#" className="text-danger mb-2">
                      <span className="text-danger me-2">
                        <i className="fas fa-square square-rotate fs-10" />
                      </span>
                      Onhold
                    </Link>
                    <Link to="#" className="text-warning mb-2">
                      <span className="text-warning me-2">
                        <i className="fas fa-square square-rotate fs-10" />
                      </span>
                      Inprogress
                    </Link>
                    <Link to="#" className="text-success">
                      <span className="text-success me-2">
                        <i className="fas fa-square square-rotate fs-10" />
                      </span>
                      Done
                    </Link>
                  </div>
                </div>
                <div className="px-2">
                  <h5 className="mb-2">Priority</h5>
                  <div className="d-flex flex-column mt-2">
                    <Link to="#" className="text-warning mb-2">
                      <span className="text-warning me-2">
                        <i className="fas fa-square square-rotate fs-10" />
                      </span>
                      Medium
                    </Link>
                    <Link to="#" className="text-success mb-2">
                      <span className="text-success me-2">
                        <i className="fas fa-square square-rotate fs-10" />
                      </span>
                      High
                    </Link>
                    <Link to="#" className="text-danger">
                      <span className="text-danger me-2">
                        <i className="fas fa-square square-rotate fs-10" />
                      </span>
                      Low
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className="col-xl-9 budget-role-notes">
            <div className="bg-white rounded-3 d-flex align-items-center justify-content-between flex-wrap my-4 p-3 pb-0">
              <div className="d-flex align-items-center mb-3">
                <div className="me-3">
                  <Select
                    options={options}
                    className="select"
                    classNamePrefix="react-select"
                  />
                </div>
                <Link to="#" className="btn btn-light">
                  Apply
                </Link>
              </div>
              <div className="form-sort mb-3">
                <i className="ti ti-filter feather-filter info-img ms-1" />
                <Select
                  className="select"
                  classNamePrefix="react-select"
                  options={lastModified}
                  placeholder="Sort by Date"
                />
              </div>
            </div>
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade active show"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                <div className="row">
                  <div className="col-lg-12">
                    <div
                      className="accordion todo-accordion"
                      id="accordionExample"
                    >
                      <div className="accordion-item">
                        <div className="accordion-header" id="headingOne">
                          <div
                            className="accordion-button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-controls="collapseOne"
                          >
                            <div className="d-flex align-items-center justify-content-between w-100 mb-3">
                              <div className="d-flex align-items-center">
                                <span>
                                  <i className="ti ti-calendar-due me-2" />
                                </span>
                                <h5 className="fw-semibold">Today</h5>
                                <span className="avatar avatar-xs bg-primary rounded-circle p-1 ms-2">
                                  1
                                </span>
                              </div>
                              <div>
                                <Link to="#">
                                  <span>
                                    <i className="fas fa-chevron-down" />
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <div className="card">
                              <div className="card-body p-3 pb-0">
                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                  <div className="input-block todo-inbox-check d-flex align-items-center w-50 mb-3">
                                    <div className="form-check form-check-md me-2">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                      />
                                    </div>
                                    <div className="strike-info">
                                      <h4 className="mb-1">
                                      Submit Computer Science lab report by 5:00pm
                                      </h4>
                                      <p>Review calculations and graphs before submission</p>
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center flex-fill justify-content-between ms-4 mb-3">
                                    <div className="notes-card-body d-flex align-items-center">
                                      <p className="badge bg-outline-danger d-inline-flex align-items-center me-2 mb-0">
                                        <i className="fas fa-circle fs-6 me-1" />{" "}
                                        High
                                      </p>
                                      <p className="badge bg-outline-secondary mb-0">
                                        {" "}
                                        New
                                      </p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <span className="avatar avatar-md me-2">
                                        <img
                                          src="https://img.freepik.com/premium-photo/young-man-with-curly-hair-glasses-holding-notebook-looking-confidently-camera-against-teal-background_74054-23198.jpg?size=626&ext=jpg&uid=P158678429&ga=GA1.1.1440782937.1705666628&semt=ais_hybrid"
                                          alt="Img"
                                          className="img-fluid rounded-circle"
                                        />
                                      </span>
                                      <Link
                                        to="#"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="fas fa-ellipsis-v" />
                                      </Link>
                                      <div className="dropdown-menu notes-menu dropdown-menu-end">
                                        <Link
                                          to="#"
                                          className="dropdown-item"
                                          data-bs-toggle="modal"
                                          data-bs-target="#edit-note-units"
                                        >
                                          <span>
                                            <i data-feather="edit" />
                                          </span>
                                          Edit
                                        </Link>
                                        <Link
                                          to="#"
                                          className="dropdown-item"
                                          data-bs-toggle="modal"
                                          data-bs-target="#delete-modal"
                                        >
                                          <span>
                                            <i data-feather="trash-2" />
                                          </span>
                                          Delete
                                        </Link>
                                        <Link to="#" className="dropdown-item">
                                          <span>
                                            <i data-feather="star" />
                                          </span>
                                          Not Important
                                        </Link>
                                        <Link
                                          to="#"
                                          className="dropdown-item"
                                          data-bs-toggle="modal"
                                          data-bs-target="#view-note-units"
                                        >
                                          <span>
                                            <i data-feather="eye" />
                                          </span>
                                          View
                                        </Link>
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
                    <div
                      className="accordion todo-accordion"
                      id="accordionExample2"
                    >
                      <div className="accordion-item">
                        <div className="accordion-header" id="headingTwo">
                          <div
                            className="accordion-button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-controls="collapseTwo"
                          >
                            <div className="d-flex align-items-center justify-content-between w-100 mb-3">
                              <div className="d-flex align-items-center">
                                <span>
                                  <i className="ti ti-calendar-due me-2" />
                                </span>
                                <h5 className="fw-semibold">Yesterday</h5>
                              </div>
                              <div>
                                <Link to="#">
                                  <span>
                                    <i className="fas fa-chevron-down" />
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample2"
                        >
                          <div className="accordion-body">
                            <div className="card">
                              <div className="card-body p-3 pb-0">
                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                  <div className="input-block todo-inbox-check d-flex align-items-center w-50 mb-3">
                                    <div className="form-check form-check-md me-2">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                      />
                                    </div>
                                    <div className="strike-info">
                                      <h4 className="mb-1">
                                      Attend team meeting at 10:30am
                                      </h4>
                                      <p>Discuss upcoming group assignment tasks</p>
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center flex-fill justify-content-between ms-4 mb-3">
                                    <div className="notes-card-body d-flex align-items-center">
                                      <p className="badge bg-outline-danger d-inline-flex align-items-center me-2 mb-0">
                                        <i className="fas fa-circle fs-6 me-1" />
                                        High
                                      </p>
                                      <p className="badge bg-outline-info mb-0">
                                        Pending
                                      </p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <span>
                                        <i className="ti ti-star me-2" />
                                      </span>
                                      <span className="avatar avatar-md me-2">
                                        <img
                                          src="https://img.freepik.com/premium-photo/portrait-female-college-student-park_573056-8426.jpg?size=626&ext=jpg&uid=P158678429&ga=GA1.1.1440782937.1705666628&semt=ais_hybrid"
                                          alt="Img"
                                          className="img-fluid rounded-circle"
                                        />
                                      </span>
                                      <Link
                                        to="#"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="fas fa-ellipsis-v" />
                                      </Link>
                                      <div className="dropdown-menu notes-menu dropdown-menu-end">
                                        <Link
                                          to="#"
                                          className="dropdown-item"
                                          data-bs-toggle="modal"
                                          data-bs-target="#edit-note-units"
                                        >
                                          <span>
                                            <i data-feather="edit" />
                                          </span>
                                          Edit
                                        </Link>
                                        <Link
                                          to="#"
                                          className="dropdown-item"
                                          data-bs-toggle="modal"
                                          data-bs-target="#delete-modal"
                                        >
                                          <span>
                                            <i data-feather="trash-2" />
                                          </span>
                                          Delete
                                        </Link>
                                        <Link to="#" className="dropdown-item">
                                          <span>
                                            <i data-feather="star" />
                                          </span>
                                          Not Important
                                        </Link>
                                        <Link
                                          to="#"
                                          className="dropdown-item"
                                          data-bs-toggle="modal"
                                          data-bs-target="#view-note-units"
                                        >
                                          <span>
                                            <i data-feather="eye" />
                                          </span>
                                          View
                                        </Link>
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
                    <div
                      className="accordion todo-accordion"
                      id="accordionExample4"
                    >
                      <div className="accordion-item">
                        <div className="accordion-header" id="headingFour">
                          <div
                            className="accordion-button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-controls="collapseFour"
                          >
                            <div className="d-flex align-items-center justify-content-between w-100 mb-3">
                              <div className="d-flex align-items-center">
                                <span>
                                  <i className="ti ti-calendar-due me-2" />
                                </span>
                                <h5 className="fw-semibold">25/10/2024</h5>
                              </div>
                              <div>
                                <Link to="#">
                                  <span>
                                    <i className="fas fa-chevron-down" />
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingFour"
                          data-bs-parent="#accordionExample4"
                        >
                          <div className="accordion-body">
                            <div className="card mb-3">
                              <div className="card-body p-3 pb-0">
                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                  <div className="input-block todo-inbox-check d-flex align-items-center w-50 mb-3">
                                    <div className="form-check form-check-md me-2">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                      />
                                    </div>
                                    <div className="strike-info">
                                      <h4 className="mb-1">
                                      Meet with Professor Davis at 2:15pm
                                      </h4>
                                      <p>Go over research proposal for thesis</p>
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center flex-fill justify-content-between ms-4 mb-3">
                                    <div className="notes-card-body d-flex align-items-center">
                                      <p className="badge bg-outline-danger d-inline-flex align-items-center me-2 mb-0">
                                        <i className="fas fa-circle fs-6 me-1" />
                                        High
                                      </p>
                                      <p className="badge bg-outline-info mb-0">
                                        Pending
                                      </p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <span>
                                        <i className="ti ti-star me-2" />
                                      </span>
                                      <span className="avatar avatar-md me-2">
                                        <img
                                          src="https://img.freepik.com/free-photo/portrait-delighted-hipster-male-student-with-crisp-hair_176532-8157.jpg?size=626&ext=jpg&uid=P158678429&ga=GA1.1.1440782937.1705666628&semt=ais_hybrid"
                                          alt="Img"
                                          className="img-fluid rounded-circle"
                                        />
                                      </span>
                                      <Link
                                        to="#"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="fas fa-ellipsis-v" />
                                      </Link>
                                      <div className="dropdown-menu notes-menu dropdown-menu-end">
                                        <Link
                                          to="#"
                                          className="dropdown-item"
                                          data-bs-toggle="modal"
                                          data-bs-target="#edit-note-units"
                                        >
                                          <span>
                                            <i data-feather="edit" />
                                          </span>
                                          Edit
                                        </Link>
                                        <Link
                                          to="#"
                                          className="dropdown-item"
                                          data-bs-toggle="modal"
                                          data-bs-target="#delete-modal"
                                        >
                                          <span>
                                            <i data-feather="trash-2" />
                                          </span>
                                          Delete
                                        </Link>
                                        <Link to="#" className="dropdown-item">
                                          <span>
                                            <i data-feather="star" />
                                          </span>
                                          Not Important
                                        </Link>
                                        <Link
                                          to="#"
                                          className="dropdown-item"
                                          data-bs-toggle="modal"
                                          data-bs-target="#view-note-units"
                                        >
                                          <span>
                                            <i data-feather="eye" />
                                          </span>
                                          View
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-body p-3 pb-0">
                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                  <div className="input-block todo-inbox-check d-flex align-items-center w-50 mb-3 todo-strike-content">
                                    <div className="form-check form-check-md me-2">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                      />
                                    </div>
                                    <div className="strike-info">
                                      <h4 className="mb-1">
                                      Library study session at 6:00pm
                                      </h4>
                                      <p>
                                      Finish reading materials for History exam
                                      </p>
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center flex-fill justify-content-between ms-4 mb-3">
                                    <div className="notes-card-body d-flex align-items-center">
                                      <p className="badge bg-outline-danger d-inline-flex align-items-center me-2 mb-0">
                                        <i className="fas fa-circle fs-6 me-1" />
                                        High
                                      </p>
                                      <p className="badge bg-outline-warning mb-0">
                                        InProgress
                                      </p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                      <span>
                                        <i className="ti ti-star me-2" />
                                      </span>
                                      <span className="avatar avatar-md me-2">
                                        <img
                                          src="https://img.freepik.com/free-photo/close-up-portrait-young-cheerful-beautiful-girl-with-dark-long-hair-casual-gray-shirt-smiling-with-teeth-looking_231208-5555.jpg?size=626&ext=jpg&uid=P158678429&ga=GA1.1.1440782937.1705666628&semt=ais_hybrid"
                                          alt="Img"
                                          className="img-fluid rounded-circle"
                                        />
                                      </span>
                                      <Link
                                        to="#"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="fas fa-ellipsis-v" />
                                      </Link>
                                      <div className="dropdown-menu notes-menu dropdown-menu-end">
                                        <Link
                                          to="#"
                                          className="dropdown-item"
                                          data-bs-toggle="modal"
                                          data-bs-target="#edit-note-units"
                                        >
                                          <span>
                                            <i data-feather="edit" />
                                          </span>
                                          Edit
                                        </Link>
                                        <Link
                                          to="#"
                                          className="dropdown-item"
                                          data-bs-toggle="modal"
                                          data-bs-target="#delete-modal"
                                        >
                                          <span>
                                            <i data-feather="trash-2" />
                                          </span>
                                          Delete
                                        </Link>
                                        <Link to="#" className="dropdown-item">
                                          <span>
                                            <i data-feather="star" />
                                          </span>
                                          Not Important
                                        </Link>
                                        <Link
                                          to="#"
                                          className="dropdown-item"
                                          data-bs-toggle="modal"
                                          data-bs-target="#view-note-units"
                                        >
                                          <span>
                                            <i data-feather="eye" />
                                          </span>
                                          View
                                        </Link>
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
                </div>
              </div>
              <div
                className="tab-pane fade "
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <div className="d-block">
                  <div className="card">
                    <div className="card-body p-3 pb-0">
                      <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <div className="input-block todo-inbox-check d-flex align-items-center w-50 mb-3">
                          <div className="form-check form-check-md me-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                          <div className="strike-info">
                            <h4 className="mb-1">Submit internship application by 11:59pm</h4>
                            <p>Update resume and write cover letter</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center flex-fill justify-content-between ms-4 mb-3">
                          <div className="notes-card-body d-flex align-items-center">
                            <p className="badge bg-outline-danger d-inline-flex align-items-center me-2 mb-0">
                              <i className="fas fa-circle fs-6 me-1" />
                              High
                            </p>
                            <p className="badge bg-outline-info mb-0">
                              Pending
                            </p>
                          </div>
                          <div className="d-flex align-items-center">
                            <span>
                              <i className="ti ti-star me-2" />
                            </span>
                            <span className="avatar avatar-md me-2">
                              <img
                                src="https://img.freepik.com/premium-photo/young-indian-student-standing-front-university-campus_1239886-2368.jpg?size=626&ext=jpg&uid=P158678429&ga=GA1.1.1440782937.1705666628&semt=ais_hybrid"
                                alt="Img"
                                className="img-fluid rounded-circle"
                              />
                            </span>
                            <Link
                              to="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fas fa-ellipsis-v" />
                            </Link>
                            <div className="dropdown-menu notes-menu dropdown-menu-end">
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#edit-note-units"
                              >
                                <span>
                                  <i data-feather="edit" />
                                </span>
                                Edit
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#delete-modal"
                              >
                                <span>
                                  <i data-feather="trash-2" />
                                </span>
                                Delete
                              </Link>
                              <Link to="#" className="dropdown-item">
                                <span>
                                  <i data-feather="star" />
                                </span>
                                Not Important
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#view-note-units"
                              >
                                <span>
                                  <i data-feather="eye" />
                                </span>
                                View
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body p-3 pb-0">
                      <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <div className="input-block todo-inbox-check d-flex align-items-center w-50 mb-3">
                          <div className="form-check form-check-md me-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                          <div className="strike-info">
                            <h4 className="mb-1">
                            Meet with Sarah Johnson at 11:00am
                            </h4>
                            <p>Review design ideas for marketing project</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center flex-fill justify-content-between ms-4 mb-3">
                          <div className="notes-card-body d-flex align-items-center">
                            <p className="badge bg-outline-danger d-inline-flex align-items-center me-2 mb-0">
                              <i className="fas fa-circle fs-6 me-1" /> High
                            </p>
                            <p className="badge bg-outline-secondary mb-0">
                              {" "}
                              New
                            </p>
                          </div>
                          <div className="d-flex align-items-center">
                            <span className="avatar avatar-md me-2">
                              <img
                                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=P158678429&ga=GA1.1.1440782937.1705666628&semt=ais_hybrid"
                                alt="Img"
                                className="img-fluid rounded-circle"
                              />
                            </span>
                            <Link
                              to="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fas fa-ellipsis-v" />
                            </Link>
                            <div className="dropdown-menu notes-menu dropdown-menu-end">
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#edit-note-units"
                              >
                                <span>
                                  <i data-feather="edit" />
                                </span>
                                Edit
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#delete-modal"
                              >
                                <span>
                                  <i data-feather="trash-2" />
                                </span>
                                Delete
                              </Link>
                              <Link to="#" className="dropdown-item">
                                <span>
                                  <i data-feather="star" />
                                </span>
                                Not Important
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#view-note-units"
                              >
                                <span>
                                  <i data-feather="eye" />
                                </span>
                                View
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-3">
                    <div className="card-body p-3 pb-0">
                      <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <div className="input-block todo-inbox-check d-flex align-items-center w-50 mb-3">
                          <div className="form-check form-check-md me-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                          <div className="strike-info">
                            <h4 className="mb-1">Attend Career Fair at 1:30pm</h4>
                            <p>Network with potential internship employers</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center flex-fill justify-content-between ms-4 mb-3">
                          <div className="notes-card-body d-flex align-items-center">
                            <p className="badge bg-outline-danger d-inline-flex align-items-center me-2 mb-0">
                              <i className="fas fa-circle fs-6 me-1" />
                              High
                            </p>
                            <p className="badge bg-outline-info mb-0">
                              Pending
                            </p>
                          </div>
                          <div className="d-flex align-items-center">
                            <span>
                              <i className="ti ti-star me-2" />
                            </span>
                            <span className="avatar avatar-md me-2">
                              <img
                                src="https://img.freepik.com/premium-photo/young-beautiful-student-picture_216014-16980.jpg?size=626&ext=jpg&uid=P158678429&ga=GA1.1.1440782937.1705666628&semt=ais_hybrid"
                                alt="Img"
                                className="img-fluid rounded-circle"
                              />
                            </span>
                            <Link
                              to="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fas fa-ellipsis-v" />
                            </Link>
                            <div className="dropdown-menu notes-menu dropdown-menu-end">
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#edit-note-units"
                              >
                                <span>
                                  <i data-feather="edit" />
                                </span>
                                Edit
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#delete-modal"
                              >
                                <span>
                                  <i data-feather="trash-2" />
                                </span>
                                Delete
                              </Link>
                              <Link to="#" className="dropdown-item">
                                <span>
                                  <i data-feather="star" />
                                </span>
                                Not Important
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#view-note-units"
                              >
                                <span>
                                  <i data-feather="eye" />
                                </span>
                                View
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                <div className="d-block">
                  <div className="card">
                    <div className="card-body p-3 pb-0">
                      <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <div className="input-block todo-inbox-check d-flex align-items-center w-50 mb-3">
                          <div className="form-check form-check-md me-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                          <div className="strike-info">
                            <h4 className="mb-1">Pick up books from the library at 4:00pm</h4>
                            <p>Check out research materials for Sociology paper</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center flex-fill justify-content-between ms-4 mb-3">
                          <div className="notes-card-body d-flex align-items-center">
                            <p className="badge bg-outline-danger d-inline-flex align-items-center me-2 mb-0">
                              <i className="fas fa-circle fs-6 me-1" />
                              High
                            </p>
                            <p className="badge bg-outline-info mb-0">
                              Pending
                            </p>
                          </div>
                          <div className="d-flex align-items-center">
                            <span>
                              <i className="ti ti-star me-2" />
                            </span>
                            <span className="avatar avatar-md me-2">
                              <img
                                src="https://img.freepik.com/premium-photo/young-beautiful-student-picture_216014-16934.jpg?size=626&ext=jpg&uid=P158678429&ga=GA1.1.1440782937.1705666628&semt=ais_hybrid"
                                alt="Img"
                                className="img-fluid rounded-circle"
                              />
                            </span>
                            <Link
                              to="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fas fa-ellipsis-v" />
                            </Link>
                            <div className="dropdown-menu notes-menu dropdown-menu-end">
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#edit-note-units"
                              >
                                <span>
                                  <i data-feather="edit" />
                                </span>
                                Edit
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#delete-modal"
                              >
                                <span>
                                  <i data-feather="trash-2" />
                                </span>
                                Delete
                              </Link>
                              <Link to="#" className="dropdown-item">
                                <span>
                                  <i data-feather="star" />
                                </span>
                                Not Important
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#view-note-units"
                              >
                                <span>
                                  <i data-feather="eye" />
                                </span>
                                View
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body p-3 pb-0">
                      <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <div className="input-block todo-inbox-check d-flex align-items-center w-50 mb-3">
                          <div className="form-check form-check-md me-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                          <div className="strike-info">
                            <h4 className="mb-1">
                            Call IT helpdesk at 3:00pm
                            </h4>
                            <p>Resolve issues with online portal access</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center flex-fill justify-content-between ms-4 mb-3">
                          <div className="notes-card-body d-flex align-items-center">
                            <p className="badge bg-outline-danger d-inline-flex align-items-center me-2 mb-0">
                              <i className="fas fa-circle fs-6 me-1" /> High
                            </p>
                            <p className="badge bg-outline-secondary mb-0">
                              {" "}
                              New
                            </p>
                          </div>
                          <div className="d-flex align-items-center">
                            <span className="avatar avatar-md me-2">
                              <img
                                src="https://img.freepik.com/free-photo/close-up-portrait-young-guy-with-curly-hair_176532-8156.jpg?size=626&ext=jpg&uid=P158678429&ga=GA1.1.1440782937.1705666628&semt=ais_hybrid"
                                alt="Img"
                                className="img-fluid rounded-circle"
                              />
                            </span>
                            <Link
                              to="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fas fa-ellipsis-v" />
                            </Link>
                            <div className="dropdown-menu notes-menu dropdown-menu-end">
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#edit-note-units"
                              >
                                <span>
                                  <i data-feather="edit" />
                                </span>
                                Edit
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#delete-modal"
                              >
                                <span>
                                  <i data-feather="trash-2" />
                                </span>
                                Delete
                              </Link>
                              <Link to="#" className="dropdown-item">
                                <span>
                                  <i data-feather="star" />
                                </span>
                                Not Important
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#view-note-units"
                              >
                                <span>
                                  <i data-feather="eye" />
                                </span>
                                View
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body p-3 pb-0">
                      <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <div className="input-block todo-inbox-check d-flex align-items-center w-50 mb-3">
                          <div className="form-check form-check-md me-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                          <div className="strike-info">
                            <h4 className="mb-1">Call student advisor at 9:30am</h4>
                            <p>
                            Discuss course schedule for next semester
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center flex-fill justify-content-between ms-4 mb-3">
                          <div className="notes-card-body d-flex align-items-center">
                            <p className="badge bg-outline-danger d-inline-flex align-items-center me-2 mb-0">
                              <i className="fas fa-circle fs-6 me-1" />
                              High
                            </p>
                            <p className="badge bg-outline-info mb-0">
                              Pending
                            </p>
                          </div>
                          <div className="d-flex align-items-center">
                            <span>
                              <i className="ti ti-star me-2" />
                            </span>
                            <span className="avatar avatar-md me-2">
                              <img
                                src="https://img.freepik.com/premium-photo/young-indian-student-standing-front-university-campus_1239886-2378.jpg?size=626&ext=jpg&uid=P158678429&ga=GA1.1.1440782937.1705666628&semt=ais_hybrid"
                                alt="Img"
                                className="img-fluid rounded-circle"
                              />
                            </span>
                            <Link
                              to="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fas fa-ellipsis-v" />
                            </Link>
                            <div className="dropdown-menu notes-menu dropdown-menu-end">
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#edit-note-units"
                              >
                                <span>
                                  <i data-feather="edit" />
                                </span>
                                Edit
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#delete-modal"
                              >
                                <span>
                                  <i data-feather="trash-2" />
                                </span>
                                Delete
                              </Link>
                              <Link to="#" className="dropdown-item">
                                <span>
                                  <i data-feather="star" />
                                </span>
                                Not Important
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#view-note-units"
                              >
                                <span>
                                  <i data-feather="eye" />
                                </span>
                                View
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                <div className="d-block">
                  <div className="card">
                    <div className="card-body p-3 pb-0">
                      <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <div className="input-block todo-inbox-check d-flex align-items-center w-50 mb-3">
                          <div className="form-check form-check-md me-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                          <div className="strike-info">
                            <h4 className="mb-1">Meet with project group at 5:00pm</h4>
                            <p>Finalize slides for tomorrow's presentation</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center flex-fill justify-content-between ms-4 mb-3">
                          <div className="notes-card-body d-flex align-items-center">
                            <p className="badge bg-outline-danger d-inline-flex align-items-center me-2 mb-0">
                              <i className="fas fa-circle fs-6 me-1" />
                              High
                            </p>
                            <p className="badge bg-outline-info mb-0">
                              Pending
                            </p>
                          </div>
                          <div className="d-flex align-items-center">
                            <span>
                              <i className="ti ti-star me-2" />
                            </span>
                            <span className="avatar avatar-md me-2">
                              <img
                                src="https://img.freepik.com/free-photo/female-student-with-books-paperworks_1258-48204.jpg?size=626&ext=jpg&ga=GA1.1.1440782937.1705666628&semt=ais_hybrid"
                                alt="Img"
                                className="img-fluid rounded-circle"
                              />
                            </span>
                            <Link
                              to="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fas fa-ellipsis-v" />
                            </Link>
                            <div className="dropdown-menu notes-menu dropdown-menu-end">
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#edit-note-units"
                              >
                                <span>
                                  <i data-feather="edit" />
                                </span>
                                Edit
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#delete-modal"
                              >
                                <span>
                                  <i data-feather="trash-2" />
                                </span>
                                Delete
                              </Link>
                              <Link to="#" className="dropdown-item">
                                <span>
                                  <i data-feather="star" />
                                </span>
                                Not Important
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#view-note-units"
                              >
                                <span>
                                  <i data-feather="eye" />
                                </span>
                                View
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body p-3 pb-0">
                      <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <div className="input-block todo-inbox-check d-flex align-items-center w-50 mb-3">
                          <div className="form-check form-check-md me-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                          <div className="strike-info">
                            <h4 className="mb-1">Submit club registration form by 6:00pm</h4>
                            <p>
                            Ensure all required documents are attached
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center flex-fill justify-content-between ms-4 mb-3">
                          <div className="notes-card-body d-flex align-items-center">
                            <p className="badge bg-outline-danger d-inline-flex align-items-center me-2 mb-0">
                              <i className="fas fa-circle fs-6 me-1" />
                              High
                            </p>
                            <p className="badge bg-outline-info mb-0">
                              Pending
                            </p>
                          </div>
                          <div className="d-flex align-items-center">
                            <span>
                              <i className="ti ti-star me-2" />
                            </span>
                            <span className="avatar avatar-md me-2">
                              <img
                                src="https://img.freepik.com/free-photo/young-woman-wearing-striped-shirt-eyeglasses_273609-13230.jpg?size=626&ext=jpg&ga=GA1.1.1440782937.1705666628&semt=ais_hybrid"
                                alt="Img"
                                className="img-fluid rounded-circle"
                              />
                            </span>
                            <Link
                              to="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fas fa-ellipsis-v" />
                            </Link>
                            <div className="dropdown-menu notes-menu dropdown-menu-end">
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#edit-note-units"
                              >
                                <span>
                                  <i data-feather="edit" />
                                </span>
                                Edit
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#delete-modal"
                              >
                                <span>
                                  <i data-feather="trash-2" />
                                </span>
                                Delete
                              </Link>
                              <Link to="#" className="dropdown-item">
                                <span>
                                  <i data-feather="star" />
                                </span>
                                Not Important
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#view-note-units"
                              >
                                <span>
                                  <i data-feather="eye" />
                                </span>
                                View
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row custom-pagination">
              <div className="col-md-12">
                <div className="paginations d-flex justify-content-end">
                  <span>
                    <i className="fas fa-chevron-left" />
                  </span>
                  <ul className="d-flex align-items-center page-wrap">
                    <li>
                      <Link to="#" className="active">
                        1
                      </Link>
                    </li>
                    <li>
                      <Link to="#">2</Link>
                    </li>
                    <li>
                      <Link to="#">3</Link>
                    </li>
                    <li>
                      <Link to="#">4</Link>
                    </li>
                  </ul>
                  <span>
                    <i className="fas fa-chevron-right" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <TodoModal />
     </>
  );
};

export default Todo;