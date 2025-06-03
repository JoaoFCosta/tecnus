import React from "react";

const DashboardData = () => {
  const attendanceData = [12, 14, 17, 18, 19, 14, 19, 14, 14, 18, 12];
  const maxValue = Math.max(...attendanceData);

  const statsData = [
    { label: "Docs", value: 12, color: "#6c757d" },
    { label: "Seg. e Tec", value: 14, color: "#6c757d" },
    { label: "Planilhas", value: 17, color: "#17a2b8" },
    { label: "Direitos", value: 18, color: "#6f42c1" },
    { label: "Excel 1", value: 19, color: "#17a2b8" },
    { label: "Excel 2", value: 14, color: "#6f42c1" },
    { label: "Drive", value: 19, color: "#6c757d" },
    { label: "Classroom", value: 14, color: "#17a2b8" },
    { label: "Gmail", value: 14, color: "#6c757d" },
    { label: "Tec e Banco", value: 18, color: "#6f42c1" },
    { label: "Apresentações", value: 12, color: "#17a2b8", span: true },
  ];

  return (
    <div className="text-white">
      <div className="container p-3 pt-5">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-8">
            {/* Cards Row */}
            <div className="row mb-4">
              {/* Alunos Card */}
              <div className="col-md-6 mb-3">
                <div className="card border-0 h-100 gradient-purple rounded-5">
                  <div className="card-body-data p-4 d-flex flex-column justify-content-between rounded-5">
                    <div className="d-flex justify-content-between align-items-start">
                      <span className="fs-1 textLink fw-bold">Alunos</span>
                      <i className="bi bi-people fs-4"></i>
                    </div>
                    <div className="mt-3">
                      <span className="display-4 fw-bold textLink">102</span>
                      <small className="ms-2 textLink">+ 2 ontem</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificados Card */}
              <div className="col-md-6 mb-3">
                <div className="card border-0 h-100 gradient-blue rounded-5">
                  <div className="card-body-data p-4 d-flex flex-column justify-content-between rounded-5">
                    <div className="d-flex justify-content-between align-items-start">
                      <span className="fs-1 textLink text-light fw-bold">
                        Certificados
                      </span>
                      <i className="bi bi-award fs-4 opacity-75"></i>
                    </div>
                    <div className="mt-3">
                      <span className="display-4 fw-bold textLink">56</span>
                      <small className="ms-2 textLink">+ 4 ontem</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chart Section */}
            <div className="mb-4">
              <h4 className="fw-bold fs-1 textLink mb-3">
                Quantos alunos assistiram
              </h4>
              <div className="bg-secondary bg-opacity-25 rounded-4 p-4">
                <div className="d-flex align-items-end justify-content-between chart-container">
                  {attendanceData.map((value, index) => (
                    <div
                      key={index}
                      className="d-flex flex-column align-items-center"
                    >
                      <div
                        className={`chart-bar rounded-1 mb-2 ${
                          index % 3 === 0
                            ? "bg-info"
                            : index % 3 === 1
                            ? "bg-primary"
                            : "bg-secondary"
                        }`}
                        style={{
                          width: "24px",
                          height: `${(value / maxValue) * 120 + 20}px`,
                        }}
                      ></div>
                      <small className="text-muted">{value}</small>
                      <span className={`course-color-${index} fw-bold mt-1`}>
                        {value[index]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="col-lg-4">
            <div className="row g-2">
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className={stat.fullWidth ? "col-12" : "col-6"}
                >
                  <div className="d-flex align-items-center p-2">
                    <span className="display-6 fw-bold me-3 textLink text-white">
                      {stat.value}
                    </span>
                    <span className="fs-5 text-info textLink">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardData;
