import React, { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import CircleProgress from "./circleProgress";
import ReactApexChart from "react-apexcharts";
import { Calendar } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dayjs from "dayjs";
import { DatePicker } from "antd";

const StudentDasboard = () => {
  const routes = all_routes;
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Month is zero-based, so we add 1
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${month}-${day}-${year}`;
  const defaultValue = dayjs(formattedDate);
  const [date, setDate] = useState<Nullable<Date>>(null);

  const [attendance_chart] = useState<any>({
    chart: {
      height: 255,
      type: "donut",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: false,
    },

    series: [60, 5, 15, 20],
    labels: ["Present", "Late", "Half Day", "Absent"],
    colors: ["#1ABE17", "#1170E4", "#E9EDF4", "#E82646"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    legend: {
      position: "bottom",
    },
  });
  const [performance_chart] = useState<any>({
    chart: {
      type: "area",
      height: 355,
    },
    series: [
      {
        name: "Avg. Exam Score",
        data: [75, 68, 65, 68, 75], // Sample data
      },
      {
        name: "Avg. Attendance",
        data: [85, 78, 75, 78, 85], // Sample data
      },
    ],
    xaxis: {
      categories: [
        "Quarter 1",
        "Quarter 2",
        "Half yearly",
        "Model",
        "Final Exam",
      ],
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return val + "%";
        },
      },
      shared: true,
      intersect: false,
      custom: function ({ series, seriesIndex, dataPointIndex, w }: any) {
        return `<div class="apexcharts-tooltip">${w.globals.labels[dataPointIndex]}<br>Exam Score: <span style="color: #1E90FF;">${series[0][dataPointIndex]}%</span><br>Attendance: <span style="color: #00BFFF;">${series[1][dataPointIndex]}%</span></div>`;
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    grid: {
      yaxis: {
        axisTicks: {
          show: true,
          borderType: "solid",
          color: "#78909C",
          width: 6,
          offsetX: 0,
          offsetY: 0,
        },
      },
    },
    markers: {
      size: 5,
      colors: ["#1E90FF", "#00BFFF"],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
    colors: ["#3D5EE1", "#6FCCD8"], // Color for the lines
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
    },
  });
  const [exam_result_chart] = useState<any>({
    chart: {
      type: "bar",
      height: 310,
    },
    series: [
      {
        name: "Marks",
        data: [97, 92, 90, 82, 90], // Corresponding scores for Maths, Physics, Chemistry, English, Spanish
      },
    ],
    xaxis: {
      categories: ["CS", "Python", "Cloud", "Java", "Eng"],
    },
    plotOptions: {
      bar: {
        distributed: true,
        columnWidth: "50%",
        colors: {
          backgroundBarColors: ["#E9EDF4", "#fff"],
          backgroundBarOpacity: 1,
          backgroundBarRadius: 5,
        },
        dataLabels: {
          position: "top",
        },
      },
    },
    colors: ["#E9EDF4", "#3D5EE1", "#E9EDF4", "#E9EDF4", "#E9EDF4"], // Set specific colors for each bar
    tooltip: {
      y: {
        formatter: function (val: any) {
          return val + "%";
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: any) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: "14px",
        colors: ["#304758"],
      },
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },

    legend: {
      show: false,
    },
  });
  function SampleNextArrow(props: any) {
    const { style, onClick } = props;
    return (
      <div
        className="slick-nav slick-nav-next class-slides"
        style={{ ...style, display: "flex", top: "-60px", right: "0" }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-right" style={{ fontSize: "12px" }}></i>
      </div>
    );
  }

  function SamplePrevArrow(props: any) {
    const { style, onClick } = props;
    return (
      <div
        className="slick-nav slick-nav-prev class-slides"
        style={{ ...style, display: "flex", top: "-60px", right: "30px" }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-left" style={{ fontSize: "12px" }}></i>
      </div>
    );
  }
  const profile = {
    dots: false,
    autoplay: false,
    slidesToShow: 5,
    margin: 24,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
            <div className="my-auto mb-2">
              <h3 className="page-title mb-1">Student Dashboard</h3>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={routes.adminDashboard}>Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Student Dashboard
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-xxl-8 d-flex">
              <div className="row flex-fill">
                {/* Profile */}
                <div className="col-xl-6 d-flex">
                  <div className="flex-fill">
                    <div className="card bg-dark position-relative">
                      <div className="card-body">
                        <div className="d-flex align-items-center row-gap-3 mb-3">
                          <div className="avatar avatar-xxl rounded flex-shrink-0 me-3">
                            <img
                              src="https://offertabs.s3.amazonaws.com/offer/qy9s4z/large/810_1920_6095afa41d80b-SeniorPic.JPG"
                              alt="Img"
                            />
                          </div>
                          <div className="d-block">
                            <span className="badge bg-transparent-primary text-primary mb-1">
                              #ST1234546
                            </span>
                            <h3 className="text-truncate text-white mb-1">
                              Sainath Reddy Vennapusa
                            </h3>
                            <div className="d-flex align-items-center flex-wrap row-gap-2 text-gray-2">
                              <span className="border-end me-2 pe-2">
                                CS : IV, A
                              </span>
                              <span>Roll No : 36545</span>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between profile-footer flex-wrap row-gap-3 pt-4">
                          <div className="d-flex align-items-center">
                            <h6 className="text-white">1st Quarterly</h6>
                            <span className="badge bg-success d-inline-flex align-items-center ms-2">
                              <i className="ti ti-circle-filled fs-5 me-1" />
                              Pass
                            </span>
                          </div>
                          <Link
                            to={routes.editStudent}
                            className="btn btn-primary"
                          >
                            Edit Profile
                          </Link>
                        </div>
                        <div className="student-card-bg">
                          <ImageWithBasePath
                            src="assets/img/bg/circle-shape.png"
                            alt="Bg"
                          />
                          <ImageWithBasePath
                            src="assets/img/bg/shape-02.png"
                            alt="Bg"
                          />
                          <ImageWithBasePath
                            src="assets/img/bg/shape-04.png"
                            alt="Bg"
                          />
                          <ImageWithBasePath
                            src="assets/img/bg/blue-polygon.png"
                            alt="Bg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="card flex-fill">
                      <div className="card-header d-flex align-items-center justify-content-between">
                        <h4 className="card-title">Today’s Class</h4>
                        <div className="d-inline-flex align-items-center class-datepick">
                          <span className="icon">
                            <i className="ti ti-chevron-left me-2" />
                          </span>
                          {/* <input
                        type="text"
                        className="form-control datetimepicker border-0"
                        placeholder="16 May 2024"
                      /> */}
                          <DatePicker
                            className="form-control datetimepicker border-0"
                            format={{
                              format: "DD-MM-YYYY",
                              type: "mask",
                            }}
                            defaultValue={defaultValue}
                            placeholder="16 May 2024"
                          />
                          <span className="icon">
                            <i className="ti ti-chevron-right" />
                          </span>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="card mb-3">
                          <div className="d-flex align-items-center justify-content-between flex-wrap p-3 pb-1">
                            <div className="d-flex align-items-center flex-wrap mb-2">
                              <span className="avatar avatar-lg flex-shrink-0 rounded me-2">
                                <img
                                  src="https://thumbs.dreamstime.com/b/happly-teacher-standing-corridor-happy-male-dressed-smartly-smiling-school-holding-folders-digital-tablet-57218442.jpg"
                                  alt="Profile"
                                />
                              </span>
                              <div>
                                <h6 className="mb-1 ">
                                 Computer Science 
                                </h6>
                                <span>
                                  <i className="ti ti-clock me-2" />
                                  09:00 - 09:45 AM
                                </span>
                              </div>
                            </div>
                            <span className="badge badge-soft-success shadow-none mb-2">
                              <i className="ti ti-circle-filled fs-8 me-1" />
                              Completed
                            </span>
                          </div>
                        </div>
                        <div className="card mb-3">
                          <div className="d-flex align-items-center justify-content-between flex-wrap p-3 pb-1">
                            <div className="d-flex align-items-center flex-wrap mb-2">
                              <span className="avatar avatar-lg flex-shrink-0 rounded me-2">
                                <img
                                  src="https://www.fairviewer.org/wp-content/uploads/2017/12/1Q01257.jpg"
                                  alt="Profile"
                                />
                              </span>
                              <div>
                                <h6 className="mb-1 ">
                                  Cloud Computing 
                                </h6>
                                <span>
                                  <i className="ti ti-clock me-2" />
                                  10:45 - 11:30 AM
                                </span>
                              </div>
                            </div>
                            <span className="badge badge-soft-success shadow-none mb-2">
                              <i className="ti ti-circle-filled fs-8 me-1" />
                              Completed
                            </span>
                          </div>
                        </div>
                        <div className="card mb-0">
                          <div className="d-flex align-items-center justify-content-between flex-wrap p-3 pb-1">
                            <div className="d-flex align-items-center flex-wrap mb-2">
                              <span className="avatar avatar-lg flex-shrink-0 rounded me-2">
                                <img
                                  src="https://eslgold.com/wp-content/uploads/Teacher_GlenPenrod_555X555_Min.jpg"
                                  alt="Profile"
                                />
                              </span>
                              <div>
                                <h6 className="mb-1">English</h6>
                                <span>
                                  <i className="ti ti-clock me-2" />
                                  11:30 - 12:15 AM
                                </span>
                              </div>
                            </div>
                            <span className="badge badge-soft-warning shadow-none mb-2">
                              <i className="ti ti-circle-filled fs-8 me-1" />
                              Inprogress
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Profile */}
                {/* Attendance */}
                <div className="col-xl-6 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header d-flex align-items-center justify-content-between">
                      <h4 className="card-title">Attendance</h4>
                      <div className="card-dropdown">
                        <Link
                          to="#"
                          className="dropdown-toggle p-2"
                          data-bs-toggle="dropdown"
                        >
                          <span>
                            <i className="ti ti-calendar-due" />
                          </span>
                          This Week
                        </Link>
                        <div className="dropdown-menu  dropdown-menu-end">
                          <ul>
                            <li>
                              <Link to="#">This Week</Link>
                            </li>
                            <li>
                              <Link to="#">Last Week</Link>
                            </li>
                            <li>
                              <Link to="#">Last Month</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="attendance-chart">
                        <p className="mb-3">
                          <i className="ti ti-calendar-heart text-primary me-2" />
                          No of total working days{" "}
                          <span className="fw-medium text-dark"> 28 Days</span>
                        </p>
                        <div className="border rounded p-3">
                          <div className="row">
                            <div className="col text-center border-end">
                              <p className="mb-1">Present</p>
                              <h5>25</h5>
                            </div>
                            <div className="col text-center border-end">
                              <p className="mb-1">Absent</p>
                              <h5>2</h5>
                            </div>
                            <div className="col text-center">
                              <p className="mb-1">Halfday</p>
                              <h5>0</h5>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <div id="attendance_chart" />
                          <ReactApexChart
                            id="attendance_chart"
                            options={attendance_chart}
                            series={attendance_chart.series}
                            type="donut"
                            height={255}
                          />
                        </div>
                        <div className="bg-light-300 rounded border p-3 mb-0">
                          <div className="d-flex align-items-center justify-content-between flex-wrap mb-1">
                            <h6 className="mb-2">Last 7 Days </h6>
                            <p className="fs-12 mb-2">
                              14 May 2024 - 21 May 2024
                            </p>
                          </div>
                          <div className="d-flex align-items-center rounded gap-1 flex-wrap">
                            <Link
                              to="#"
                              className="badge badge-lg bg-success text-white"
                            >
                              M
                            </Link>
                            <Link
                              to="#"
                              className="badge badge-lg bg-success text-white"
                            >
                              T
                            </Link>
                            <Link
                              to="#"
                              className="badge badge-lg bg-success text-white"
                            >
                              W
                            </Link>
                            <Link
                              to="#"
                              className="badge badge-lg bg-success text-white"
                            >
                              T
                            </Link>
                            <Link
                              to="#"
                              className="badge badge-lg bg-danger text-white"
                            >
                              F
                            </Link>
                            <Link
                              to="#"
                              className="badge badge-lg bg-white border text-default"
                            >
                              S
                            </Link>
                            <Link
                              to="#"
                              className="badge badge-lg  bg-white border text-gray-1"
                            >
                              S
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Attendance */}
                {/* Fees */}
                <div className="col-xl-12 d-flex">
                  <div className="row flex-fill">
                    <div className="col-sm-6 col-xl-3 d-flex">
                      <Link
                        to={routes.studentFees}
                        className="card border-0 border-bottom border-primary border-2 flex-fill animate-card"
                      >
                        <div className="card-body">
                          <div className="d-flex align-items-center">
                            <span className="avatar avatar-md rounded bg-primary me-2">
                              <i className="ti ti-report-money fs-16" />
                            </span>
                            <h6>Pay Fees</h6>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-sm-6 col-xl-3 d-flex">
                      <Link
                        to={routes.studentResult}
                        className="card border-0 border-bottom border-success flex-fill animate-card"
                      >
                        <div className="card-body">
                          <div className="d-flex align-items-center">
                            <span className="avatar avatar-md rounded bg-success me-2">
                              <i className="ti ti-hexagonal-prism-plus fs-16" />
                            </span>
                            <h6>Exam Result</h6>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-sm-6 col-xl-3 d-flex">
                      <Link
                        to={routes.studentTimeTable}
                        className="card border-0 border-bottom border-warning flex-fill animate-card"
                      >
                        <div className="card-body">
                          <div className="d-flex align-items-center">
                            <span className="avatar avatar-md rounded bg-warning me-2">
                              <i className="ti ti-calendar fs-16" />
                            </span>
                            <h6>Calendar</h6>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-sm-6 col-xl-3 d-flex">
                      <Link
                        to={routes.studentLeaves}
                        className="card border-0 border-bottom border-dark border-2 flex-fill animate-card"
                      >
                        <div className="card-body">
                          <div className="d-flex align-items-center">
                            <span className="avatar avatar-md rounded bg-dark me-2">
                              <i className="ti ti-calendar-share fs-16" />
                            </span>
                            <h6>Attendance</h6>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* /Fees */}
              </div>
            </div>
            {/* Schedules */}
            <div className="col-xxl-4 d-flex">
              <div className="card flex-fill">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h4 className="card-title">Schedules</h4>
                  <Link
                    to={routes.feesAssign}
                    className="link-primary fw-medium"
                  >
                    View All
                  </Link>
                </div>
                <div className="card-body pb-0">
                  {/* <div className="datepic mb-2" /> */}
                  <Calendar
                    className="datepickers mb-2 custom-cal-react"
                    value={date}
                    onChange={(e) => setDate(e.value)}
                    inline
                  />
                  <h5 className="mb-3">Exams</h5>
                  <div className="p-3 pb-0 mb-3 border rounded">
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="mb-3">1st Quarterly</h5>
                      <span className="badge badge-soft-danger d-inline-flex align-items-center mb-3">
                        <i className="ti ti-clock me-1" />
                        19 Days More
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="mb-3">
                        <h6 className="mb-1">Cyber Security</h6>
                        <p>
                          <i className="ti ti-clock me-1" />
                          01:30 - 02:15 PM
                        </p>
                      </div>
                      <div className="mb-3 text-end">
                        <p className="mb-1">
                          <i className="ti ti-calendar-bolt me-1" />
                          06 Nov 2024
                        </p>
                        <p className="text-primary">Room No : 15</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 pb-0 mb-3 border rounded">
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="mb-3">2nd Quarterly</h5>
                      <span className="badge badge-soft-danger d-inline-flex align-items-center mb-3">
                        <i className="ti ti-clock me-1" />
                        20 Days More
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="mb-3">
                        <h6 className="mb-1">R Programming </h6>
                        <p>
                          <i className="ti ti-clock me-1" />
                          01:30 - 02:15 PM
                        </p>
                      </div>
                      <div className="mb-3 text-end">
                        <p className="mb-1">
                          <i className="ti ti-calendar-bolt me-1" />
                          07 Nov 2024
                        </p>
                        <p className="text-primary">Room No : 15</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Schedules */}
          </div>
          <div className="row">
            {/* Performance */}
            <div className="col-xxl-7 d-flex">
              <div className="card flex-fill">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h4 className="card-title">Performance</h4>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="bg-white dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-calendar me-2" />
                      2024 - 2025
                    </Link>
                    <ul className="dropdown-menu mt-2 p-3">
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          2024 - 2025
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          2023 - 2024
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          2022 - 2023
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body pb-0">
                  <div id="performance_chart" />
                  <ReactApexChart
                    id="performance_chart"
                    options={performance_chart}
                    series={performance_chart.series}
                    type="area"
                    height={355}
                  />
                </div>
              </div>
            </div>
            {/* /Performance */}
            {/* Home Works */}
            <div className="col-xxl-5 d-flex">
              <div className="card flex-fill">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h4 className="card-titile">Assignments</h4>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="bg-white dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-book-2 me-2" />
                      All Subject
                    </Link>
                    <ul className="dropdown-menu mt-2 p-3">
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Computer Science 
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Cloud Computing
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          English
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body py-1">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item py-3 px-0 pb-0">
                      <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <div className="d-flex align-items-center overflow-hidden mb-3">
                          <Link
                            to="#"
                            className="avatar avatar-xl flex-shrink-0 me-2"
                          >
                            <img
                              src="https://tse2.mm.bing.net/th?id=OIP.U5UepcXFuf7wPg1uerEHvgHaEK&pid=Api&P=0&h=180"
                              alt="img"
                            />
                          </Link>
                          <div className="overflow-hidden">
                            <p className="d-flex align-items-center text-info mb-1">
                              <i className="ti ti-tag me-2" />
                              Computer Science
                            </p>
                            <h6 className="text-truncate mb-1">
                              <Link to={routes.classHomeWork}>
                              Operators,Loops & Control Structure.
                              </Link>
                            </h6>
                            <div className="d-flex align-items-center flex-wrap">
                              <div className="d-flex align-items-center border-end me-1 pe-1">
                                <Link
                                  to={routes.teacherDetails}
                                  className="avatar avatar-xs flex-shrink-0 me-2"
                                >
                                  <img
                                    src="http://myhelpsite.co.uk/wp-content/uploads/2022/06/teacher-profile-featured.jpg"
                                    className="rounded-circle"
                                    alt="teacher"
                                  />
                                </Link>
                                <p className="text-dark">Perry</p>
                              </div>
                              <p>Due by : 16 Nov 2024</p>
                            </div>
                          </div>
                        </div>
                        <CircleProgress value={80} />
                      </div>
                    </li>
                    <li className="list-group-item py-3 px-0 pb-0">
                      <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <div className="d-flex align-items-center overflow-hidden mb-3">
                          <Link
                            to="#"
                            className="avatar avatar-xl flex-shrink-0 me-2"
                          >
                            <img
                              src="https://tse2.mm.bing.net/th?id=OIP.WqDreNz92-NWSDyoU6y1dwHaEj&pid=Api&P=0&h=180"
                              alt="img"
                            />
                          </Link>
                          <div className="overflow-hidden">
                            <p className="d-flex align-items-center text-success mb-1">
                              <i className="ti ti-tag me-2" />
                            Cloud Computing
                            </p>
                            <h6 className="text-truncate mb-1">
                              <Link to={routes.classHomeWork}>
                              Components of AWS and Key Pairs 
                              </Link>
                            </h6>
                            <div className="d-flex align-items-center flex-wrap">
                              <div className="d-flex align-items-center border-end me-1 pe-1">
                                <Link
                                  to={routes.teacherDetails}
                                  className="avatar avatar-xs flex-shrink-0 me-2"
                                >
                                  <img
                                    src="https://ohsobserver.com/wp-content/uploads/2017/09/DrHendrickson-800x1200.jpg"
                                    className="rounded-circle"
                                    alt="teacher"
                                  />
                                </Link>
                                <p className="text-dark">David</p>
                              </div>
                              <p>Due by : 17 Nov 2025</p>
                            </div>
                          </div>
                        </div>

                        <CircleProgress value={65} />
                      </div>
                    </li>
                    <li className="list-group-item py-3 px-0 pb-0">
                      <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <div className="d-flex align-items-center overflow-hidden mb-3">
                          <Link
                            to="#"
                            className="avatar avatar-xl flex-shrink-0 me-2"
                          >
                            <img
                              src="https://static.skillshare.com/uploads/video/thumbnails/8c4aafb1c434984e623de4a917e676ab/original"
                              alt="img"
                            />
                          </Link>
                          <div className="overflow-hidden">
                            <p className="d-flex align-items-center text-danger mb-1">
                              <i className="ti ti-tag me-2" />
                            Python Programming 
                            </p>
                            <h6 className="text-truncate mb-1">
                              <Link to={routes.classHomeWork}>
                                OOPS Concepts in Python Programming
                              </Link>
                            </h6>
                            <div className="d-flex align-items-center flex-wrap">
                              <div className="d-flex align-items-center border-end me-1 pe-1">
                                <Link
                                  to={routes.teacherDetails}
                                  className="avatar avatar-xs flex-shrink-0 me-2"
                                >
                                  <img
                                    src="https://tse1.mm.bing.net/th?id=OIP.QPosubDRHiq1JQjP3yK60gHaHa&pid=Api&P=0&h=180"
                                    className="rounded-circle"
                                    alt="teacher"
                                  />
                                </Link>
                                <p className="text-dark">Hema</p>
                              </div>
                              <p>Due by : 21 Nov 2024</p>
                            </div>
                          </div>
                        </div>
                        <CircleProgress value={30} />
                      </div>
                    </li>
                    <li className="list-group-item py-3 px-0 pb-0">
                      <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <div className="d-flex align-items-center overflow-hidden mb-3">
                          <Link
                            to="#"
                            className="avatar avatar-xl flex-shrink-0 me-2"
                          >
                            <img
                              src="http://1.bp.blogspot.com/-UQHfQ114j44/T6BDYnixLNI/AAAAAAAAAMY/49tO5FSwZ_4/s1600/english+book.jpg"
                              alt="img"
                            />
                          </Link>
                          <div className="overflow-hidden">
                            <p className="d-flex align-items-center text-skyblue mb-1">
                              <i className="ti ti-tag me-2" />
                              Engish
                            </p>
                            <h6 className="text-truncate mb-1">
                              <Link to={routes.classHomeWork}>
                                English - Vocabulary Introduction
                              </Link>
                            </h6>
                            <div className="d-flex align-items-center flex-wrap">
                              <div className="d-flex align-items-center border-end me-1 pe-1">
                                <Link
                                  to={routes.teacherDetails}
                                  className="avatar avatar-xs flex-shrink-0 me-2"
                                >
                                  <img
                                    src="https://www.fairviewer.org/wp-content/uploads/2017/12/1Q11013.jpg"
                                    className="rounded-circle"
                                    alt="teacher"
                                  />
                                </Link>
                                <p className="text-dark">Rosy</p>
                              </div>
                              <p>Due by : 21 Nov 2024</p>
                            </div>
                          </div>
                        </div>
                        <CircleProgress value={10} />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Home Works */}
          </div>
          <div className="row">
            {/* Class Faculties */}
            <div className="col-xl-12">
              <div className="card flex-fill">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h4 className="card-title">Class Faculties</h4>
                  <div className="owl-nav slide-nav text-end nav-control" />
                </div>
                <div className="card-body">
                  <Slider
                    {...profile}
                    className="teachers-profile-slider owl-carousel"
                  >
                    <div className="card bg-light-100 mb-0">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <Link
                            to={routes.teacherDetails}
                            className="avatar avatar-lg rounded me-2"
                          >
                            <img
                              src="http://www.vivekanandcollege.ac.in/uploads/dptmarathi/Alwekar%20sir/1670999553049.jpg"
                              alt="Teacher"
                            />
                          </Link>
                          <div className="overflow-hidden">
                            <h6 className="mb-1 text-truncate">
                              <Link to={routes.teacherDetails}>Aaron</Link>
                            </h6>
                            <p>Comp Sci</p>
                          </div>
                        </div>
                        <div className="row gx-2">
                          <div className="col-6">
                            <Link
                              to="#"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-mail me-2" />
                              Email
                            </Link>
                          </div>
                          <div className="col-6">
                            <Link
                              to="#"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-message-chatbot me-2" />
                              Chat
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card bg-light-100 mb-0">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <Link
                            to={routes.teacherDetails}
                            className="avatar avatar-lg rounded me-2"
                          >
                            <img
                              src="https://tse4.mm.bing.net/th?id=OIP.KyLSaRtoiRJtt3w_wcTmhgHaHa&pid=Api&P=0&h=180"
                              alt="Teacher"
                            />
                          </Link>
                          <div>
                            <h6 className="mb-1 text-truncate">
                              <Link to={routes.teacherDetails}>Hellana</Link>
                            </h6>
                            <p>English</p>
                          </div>
                        </div>
                        <div className="row gx-2">
                          <div className="col-6">
                            <Link
                              to="#"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-mail me-2" />
                              Email
                            </Link>
                          </div>
                          <div className="col-6">
                            <Link
                              to="#"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-message-chatbot me-2" />
                              Chat
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card bg-light-100 mb-0">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <Link
                            to={routes.teacherDetails}
                            className="avatar avatar-lg rounded me-2"
                          >
                            <img
                              src="https://tse4.mm.bing.net/th?id=OIP.zNI0mmKBRdoyK5GPaoaikAHaHa&pid=Api&P=0&h=180"
                              alt="Teacher"
                            />
                          </Link>
                          <div>
                            <h6 className="mb-1 text-truncate">
                              <Link to={routes.teacherDetails}>Jossy</Link>
                            </h6>
                            <p>Python</p>
                          </div>
                        </div>
                        <div className="row gx-2">
                          <div className="col-6">
                            <Link
                              to="#"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-mail me-2" />
                              Email
                            </Link>
                          </div>
                          <div className="col-6">
                            <Link
                              to="#"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-message-chatbot me-2" />
                              Chat
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card bg-light-100 mb-0">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <Link
                            to={routes.teacherDetails}
                            className="avatar avatar-lg rounded me-2"
                          >
                            <img
                              src="https://tse4.mm.bing.net/th?id=OIP.6k_LGExuQh6Hp5LIFkT85AAAAA&pid=Api&P=0&h=180"
                              alt="Teacher"
                            />
                          </Link>
                          <div>
                            <h6 className="mb-1 text-truncate">
                              <Link to={routes.teacherDetails}>
                                Josua
                              </Link>
                            </h6>
                            <p>DSA</p>
                          </div>
                        </div>
                        <div className="row gx-2">
                          <div className="col-6">
                            <Link
                              to="#"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-mail me-2" />
                              Email
                            </Link>
                          </div>
                          <div className="col-6">
                            <Link
                              to="#"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-message-chatbot me-2" />
                              Chat
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card bg-light-100 mb-0">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <Link
                            to={routes.teacherDetails}
                            className="avatar avatar-lg rounded me-2"
                          >
                            <img
                              src="https://tse1.mm.bing.net/th?id=OIP.gjifa4yzwAknj65EguLeCQHaHa&pid=Api&P=0&h=180"
                              alt="Teacher"
                            />
                          </Link>
                          <div>
                            <h6 className="mb-1 text-truncate">
                              <Link to={routes.teacherDetails}>Teresa</Link>
                            </h6>
                            <p>Javascript</p>
                          </div>
                        </div>
                        <div className="row gx-2">
                          <div className="col-6">
                            <Link
                              to="#"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-mail me-2" />
                              Email
                            </Link>
                          </div>
                          <div className="col-6">
                            <Link
                              to="#"
                              className="btn btn-outline-light bg-white d-flex align-items-center justify-content-center fw-semibold fs-12"
                            >
                              <i className="ti ti-message-chatbot me-2" />
                              Chat
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                   
                  </Slider>
                </div>
              </div>
            </div>
            {/* /Class Faculties */}
          </div>
          <div className="row">
            {/* Leave Status */}
            <div className="col-xxl-4 col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h4 className="card-title">Leave Status</h4>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="bg-white dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-calendar me-2" />
                      This Month
                    </Link>
                    <ul className="dropdown-menu mt-2 p-3">
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          This Month
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          This Year
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Last Week
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <div className="bg-light-300 d-sm-flex align-items-center justify-content-between p-3 mb-3">
                    <div className="d-flex align-items-center mb-2 mb-sm-0">
                      <div className="avatar avatar-lg bg-danger-transparent flex-shrink-0 me-2">
                        <i className="ti ti-brand-socket-io" />
                      </div>
                      <div>
                        <h6 className="mb-1">Emergency Leave</h6>
                        <p>Date : 15 Jun 2024</p>
                      </div>
                    </div>
                    <span className="badge bg-skyblue d-inline-flex align-items-center">
                      <i className="ti ti-circle-filled fs-5 me-1" />
                      Pending
                    </span>
                  </div>
                  <div className="bg-light-300 d-sm-flex align-items-center justify-content-between p-3 mb-3">
                    <div className="d-flex align-items-center mb-2 mb-sm-0">
                      <div className="avatar avatar-lg bg-info-transparent flex-shrink-0 me-2">
                        <i className="ti ti-medical-cross" />
                      </div>
                      <div>
                        <h6 className="mb-1">Medical Leave</h6>
                        <p>Date : 15 Jun 2024</p>
                      </div>
                    </div>
                    <span className="badge bg-success d-inline-flex align-items-center">
                      <i className="ti ti-circle-filled fs-5 me-1" />
                      Approved
                    </span>
                  </div>
                  <div className="bg-light-300 d-sm-flex align-items-center justify-content-between p-3 mb-3">
                    <div className="d-flex align-items-center mb-2 mb-sm-0">
                      <div className="avatar avatar-lg bg-info-transparent flex-shrink-0 me-2">
                        <i className="ti ti-medical-cross" />
                      </div>
                      <div>
                        <h6 className="mb-1">Medical Leave</h6>
                        <p>Date : 16 Jun 2024</p>
                      </div>
                    </div>
                    <span className="badge bg-danger d-inline-flex align-items-center">
                      <i className="ti ti-circle-filled fs-5 me-1" />
                      Declined
                    </span>
                  </div>
                  <div className="bg-light-300 d-sm-flex align-items-center justify-content-between p-3 mb-0">
                    <div className="d-flex align-items-center mb-2 mb-sm-0">
                      <div className="avatar avatar-lg bg-danger-transparent flex-shrink-0 me-2">
                        <i className="ti ti-brand-socket-io" />
                      </div>
                      <div>
                        <h6 className="mb-1">Fever</h6>
                        <p>Date : 16 Jun 2024</p>
                      </div>
                    </div>
                    <span className="badge bg-success d-inline-flex align-items-center">
                      <i className="ti ti-circle-filled fs-5 me-1" />
                      Approved
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* /Leave Status */}
            {/* Exam Result */}
            <div className="col-xxl-4 col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h4 className="card-title">Exam Result</h4>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="bg-white dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-calendar me-2" />
                      1st Quarter
                    </Link>
                    <ul className="dropdown-menu mt-2 p-3">
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          1st Quarter
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          2nd Quarter
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body pb-0">
                  <div className="d-flex align-items-center flex-wrap">
                    <span className="badge badge-soft-primary badge-md me-1 mb-3">
                    CS : 97{" "}
                    </span>
                    <span className="badge badge-soft-success badge-md me-1 mb-3">
                      Python: 92
                    </span>
                    <span className="badge badge-soft-warning badge-md me-1 mb-3">
                     Cloud : 90
                    </span>
                    <span className="badge badge-soft-danger badge-md mb-3">
                      Java: 80
                    </span>
                  </div>
                  <ReactApexChart
                    id="exam-result-chart"
                    options={exam_result_chart}
                    series={exam_result_chart.series}
                    type="bar"
                    height={310}
                  />
                </div>
              </div>
            </div>
            {/* /Exam Result */}
            {/* Fees Reminder */}
            <div className="col-xxl-4 d-flex">
              <div className="card flex-fill">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h4 className="card-titile">Fees Reminder</h4>
                  <Link
                    to={routes.feesAssign}
                    className="link-primary fw-medium"
                  >
                    View All
                  </Link>
                </div>
                <div className="card-body py-1">
                  <div className="d-flex align-items-center justify-content-between py-3">
                    <div className="d-flex align-items-center overflow-hidden me-2">
                      <span className="bg-info-transparent avatar avatar-lg me-2 rounded-circle flex-shrink-0">
                        <i className="ti ti-bus-stop fs-16" />
                      </span>
                      <div className="overflow-hidden">
                        <h6 className="text-truncate mb-1">Transport Fees</h6>
                        <p>$2500</p>
                      </div>
                    </div>
                    <div className="text-end">
                      <h6 className="mb-1">Last Date</h6>
                      <p>25 May 2025</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between py-3">
                    <div className="d-flex align-items-center overflow-hidden me-2">
                      <span className="bg-success-transparent avatar avatar-lg me-2 rounded-circle flex-shrink-0">
                        <i className="ti ti-books fs-16" />
                      </span>
                      <div className="overflow-hidden">
                        <h6 className="text-truncate mb-1">Book Fees</h6>
                        <p>$2500</p>
                      </div>
                    </div>
                    <div className="text-end">
                      <h6 className="mb-1">Last Date</h6>
                      <p>20 Feb 2025</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between py-3">
                    <div className="d-flex align-items-center overflow-hidden me-2">
                      <span className="bg-info-transparent avatar avatar-lg me-2 rounded-circle flex-shrink-0">
                        <i className="ti ti-report-money fs-16" />
                      </span>
                      <div className="overflow-hidden">
                        <h6 className="text-truncate mb-1">Exam Fees</h6>
                        <p>$2500</p>
                      </div>
                    </div>
                    <div className="text-end">
                      <h6 className="mb-1">Last Date</h6>
                      <p>22 Apr 2025</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between py-3">
                    <div className="d-flex align-items-center overflow-hidden me-2">
                      <span className="bg-skyblue-transparent avatar avatar-lg me-2 rounded-circle flex-shrink-0">
                        <i className="ti ti-meat fs-16" />
                      </span>
                      <div className="overflow-hidden">
                        <h6 className="text-truncate mb-1">
                          Mess Fees{" "}
                          <span className="d-inline-flex align-items-center badge badge-soft-danger">
                            <i className="ti ti-circle-filled me-1 fs-5" />
                            Due
                          </span>
                        </h6>
                        <p className="text-danger">$2500 + $150</p>
                      </div>
                    </div>
                    <div className="text-end">
                      <h6 className="mb-1">Last Date</h6>
                      <p>27 Jun 2025</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between py-3">
                    <div className="d-flex align-items-center overflow-hidden me-2">
                      <span className="bg-danger-transparent avatar avatar-lg me-2 rounded-circle flex-shrink-0">
                        <i className="ti ti-report-money fs-16" />
                      </span>
                      <div className="overflow-hidden">
                        <h6 className="text-truncate mb-1">Hostel</h6>
                        <p>$2500</p>
                      </div>
                    </div>
                    <div className="text-end">
                      <h6 className="mb-1">Last Date</h6>
                      <p>16 May 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Fees Reminder */}
          </div>
          <div className="row">
            {/* Notice Board */}
            <div className="col-xxl-4 col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header  d-flex align-items-center justify-content-between">
                  <h4 className="card-title">Notice Board</h4>
                  <Link to={routes.noticeBoard} className="fw-medium">
                    View All
                  </Link>
                </div>
                <div className="card-body">
                  <div className="notice-widget">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div className="d-flex align-items-center overflow-hidden me-2">
                        <span className="bg-primary-transparent avatar avatar-md me-2 rounded-circle flex-shrink-0">
                          <i className="ti ti-books fs-16" />
                        </span>
                        <div className="overflow-hidden">
                          <h6 className="text-truncate mb-1">
                            New Syllabus Instructions
                          </h6>
                          <p>
                            <i className="ti ti-calendar me-2" />
                            Added on : 11 Mar 2025
                          </p>
                        </div>
                      </div>
                      <Link to={routes.noticeBoard}>
                        <i className="ti ti-chevron-right fs-16" />
                      </Link>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div className="d-flex align-items-center overflow-hidden me-2">
                        <span className="bg-success-transparent avatar avatar-md me-2 rounded-circle flex-shrink-0">
                          <i className="ti ti-note fs-16" />
                        </span>
                        <div className="overflow-hidden">
                          <h6 className="text-truncate mb-1">
                            World Environment Day Program.....!!!
                          </h6>
                          <p>
                            <i className="ti ti-calendar me-2" />
                            Added on : 21 Apr 2025
                          </p>
                        </div>
                      </div>
                      <Link to={routes.noticeBoard}>
                        <i className="ti ti-chevron-right fs-16" />
                      </Link>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div className="d-flex align-items-center overflow-hidden me-2">
                        <span className="bg-danger-transparent avatar avatar-md me-2 rounded-circle flex-shrink-0">
                          <i className="ti ti-bell-check fs-16" />
                        </span>
                        <div className="overflow-hidden">
                          <h6 className="text-truncate mb-1">
                            Exam Preparation Notification!
                          </h6>
                          <p>
                            <i className="ti ti-calendar me-2" />
                            Added on : 13 Mar 2025
                          </p>
                        </div>
                      </div>
                      <Link to={routes.noticeBoard}>
                        <i className="ti ti-chevron-right fs-16" />
                      </Link>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div className="d-flex align-items-center overflow-hidden me-2">
                        <span className="bg-skyblue-transparent avatar avatar-md me-2 rounded-circle flex-shrink-0">
                          <i className="ti ti-notes fs-16" />
                        </span>
                        <div className="overflow-hidden">
                          <h6 className="text-truncate mb-1">
                            Online Classes Preparation
                          </h6>
                          <p>
                            <i className="ti ti-calendar me-2" />
                            Added on : 24 May 2025
                          </p>
                        </div>
                      </div>
                      <Link to={routes.noticeBoard}>
                        <i className="ti ti-chevron-right fs-16" />
                      </Link>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div className="d-flex align-items-center overflow-hidden me-2">
                        <span className="bg-warning-transparent avatar avatar-md me-2 rounded-circle flex-shrink-0">
                          <i className="ti ti-package fs-16" />
                        </span>
                        <div className="overflow-hidden">
                          <h6 className="text-truncate mb-1">
                            Exam Time Table Release
                          </h6>
                          <p>
                            <i className="ti ti-calendar me-2" />
                            Added on : 24 May 2025
                          </p>
                        </div>
                      </div>
                      <Link to={routes.noticeBoard}>
                        <i className="ti ti-chevron-right fs-16" />
                      </Link>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-0">
                      <div className="d-flex align-items-center overflow-hidden me-2">
                        <span className="bg-danger-transparent avatar avatar-md me-2 rounded-circle flex-shrink-0">
                          <i className="ti ti-bell-check fs-16" />
                        </span>
                        <div className="overflow-hidden">
                          <h6 className="text-truncate mb-1">
                            English Exam Preparation
                          </h6>
                          <p>
                            <i className="ti ti-calendar me-2" />
                            Added on : 23 Mar 2025
                          </p>
                        </div>
                      </div>
                      <Link to={routes.noticeBoard}>
                        <i className="ti ti-chevron-right fs-16" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Notice Board */}
            {/* Syllabus */}
            <div className="col-xxl-4 col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header  d-flex align-items-center justify-content-between">
                  <h4 className="card-title">Syllabus</h4>
                </div>
                <div className="card-body">
                  <div
                    className="alert alert-success d-flex align-items-center mb-24"
                    role="alert"
                  >
                    <i className="ti ti-info-square-rounded me-2 fs-14" />
                    <div className="fs-14">
                      These Result are obtained from the syllabus completion on
                      the respective Class
                    </div>
                  </div>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col-sm-4">
                          <p className="text-dark">Computer Science</p>
                        </div>
                        <div className="col-sm-8">
                          <div className="progress progress-xs flex-grow-1">
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "20%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col-sm-4">
                          <p className="text-dark">Python Programming </p>
                        </div>
                        <div className="col-sm-8">
                          <div className="progress progress-xs flex-grow-1">
                            <div
                              className="progress-bar bg-secondary rounded"
                              role="progressbar"
                              style={{ width: "30%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col-sm-4">
                          <p className="text-dark">Cloud Computing </p>
                        </div>
                        <div className="col-sm-8">
                          <div className="progress progress-xs flex-grow-1">
                            <div
                              className="progress-bar bg-info rounded"
                              role="progressbar"
                              style={{ width: "40%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col-sm-4">
                          <p className="text-dark">DSA</p>
                        </div>
                        <div className="col-sm-8">
                          <div className="progress progress-xs flex-grow-1">
                            <div
                              className="progress-bar bg-success rounded"
                              role="progressbar"
                              style={{ width: "50%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col-sm-4">
                          <p className="text-dark">English</p>
                        </div>
                        <div className="col-sm-8">
                          <div className="progress progress-xs flex-grow-1">
                            <div
                              className="progress-bar bg-warning rounded"
                              role="progressbar"
                              style={{ width: "70%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col-sm-4">
                          <p className="text-dark">Java Programming </p>
                        </div>
                        <div className="col-sm-8">
                          <div className="progress progress-xs flex-grow-1">
                            <div
                              className="progress-bar bg-danger rounded"
                              role="progressbar"
                              style={{ width: "80%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col-sm-4">
                          <p className="text-dark">SQL</p>
                        </div>
                        <div className="col-sm-8">
                          <div className="progress progress-xs flex-grow-1">
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "85%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Syllabus */}
            {/* Todo */}
            <div className="col-xxl-4 col-xl-12 d-flex">
              <div className="card flex-fill">
                <div className="card-header  d-flex align-items-center justify-content-between">
                  <h4 className="card-title">Todo</h4>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="bg-white dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-calendar me-2" />
                      Today
                    </Link>
                    <ul className="dropdown-menu mt-2 p-3">
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          This Month
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          This Year
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Last Week
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush todo-list">
                    <li className="list-group-item py-3 px-0 pt-0">
                      <div className="d-sm-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center overflow-hidden me-2 todo-strike-content">
                          <div className="form-check form-check-md me-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultChecked
                            />
                          </div>
                          <div className="overflow-hidden">
                            <h6 className="mb-1 text-truncate">
                              Send Reminder to Students
                            </h6>
                            <p>01:00 PM</p>
                          </div>
                        </div>
                        <span className="badge badge-soft-success mt-2 mt-sm-0">
                          Compeleted
                        </span>
                      </div>
                    </li>
                    <li className="list-group-item py-3 px-0">
                      <div className="d-sm-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center overflow-hidden me-2">
                          <div className="form-check form-check-md me-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                          <div className="overflow-hidden">
                            <h6 className="mb-1 text-truncate">
                              Create Routine to new staff
                            </h6>
                            <p>04:50 PM</p>
                          </div>
                        </div>
                        <span className="badge badge-soft-skyblue mt-2 mt-sm-0">
                          Inprogress
                        </span>
                      </div>
                    </li>
                    <li className="list-group-item py-3 px-0">
                      <div className="d-sm-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center overflow-hidden me-2">
                          <div className="form-check form-check-md me-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                          <div className="overflow-hidden">
                            <h6 className="mb-1 text-truncate">
                              Extra Class Info to Students
                            </h6>
                            <p>04:55 PM</p>
                          </div>
                        </div>
                        <span className="badge badge-soft-warning mt-2 mt-sm-0">
                          Yet to Start
                        </span>
                      </div>
                    </li>
                    <li className="list-group-item py-3 px-0">
                      <div className="d-sm-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center overflow-hidden me-2">
                          <div className="form-check form-check-md me-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                          <div className="overflow-hidden">
                            <h6 className="mb-1 text-truncate">
                              Fees for Upcoming Academics
                            </h6>
                            <p>04:55 PM</p>
                          </div>
                        </div>
                        <span className="badge badge-soft-warning mt-2 mt-sm-0">
                          Yet to Start
                        </span>
                      </div>
                    </li>
                    <li className="list-group-item py-3 px-0 pb-0">
                      <div className="d-sm-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center overflow-hidden me-2">
                          <div className="form-check form-check-md me-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </div>
                          <div className="overflow-hidden">
                            <h6 className="mb-1 text-truncate">
                              English - Essay on Visit
                            </h6>
                            <p>05:55 PM</p>
                          </div>
                        </div>
                        <span className="badge badge-soft-warning mt-2 mt-sm-0">
                          Yet to Start
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Todo */}
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
    </>
  );
};

export default StudentDasboard;
