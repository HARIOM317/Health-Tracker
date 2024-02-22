import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import "../stylesheets/ReportStyle.css";
import { AiFillEdit } from "react-icons/ai";
import CalorieIntakePopup from "./CalorieIntakePopup.tsx";
import { useNavigate } from "react-router-dom";


const StepReport = () => {
  const color = "#ffc20e";

  const chartsParams = {
    // margin: { bottom: 20, left: 25, right: 5 },
    height: 300,
  };

  const [dataS1, setDataS1] = React.useState<any>(null);
  const getDataForS1 = async () => {
    let temp = [
      {
        date: "Thu Sep 28 2023 20:30:30 GMT+0530 (India Standard Time)",
        value: 2000,
        unit: "kcal",
      },
      {
        date: "Wed Sep 27 2023 20:30:30 GMT+0530 (India Standard Time)",
        value: 2500,
        unit: "kcal",
      },
      {
        date: "Tue Sep 26 2023 20:30:30 GMT+0530 (India Standard Time)",
        value: 2700,
        unit: "kcal",
      },
      {
        date: "Mon Sep 25 2023 20:30:30 GMT+0530 (India Standard Time)",
        value: 3000,
        unit: "kcal",
      },
      {
        date: "Sun Sep 24 2023 20:30:30 GMT+0530 (India Standard Time)",
        value: 2000,
        unit: "kcal",
      },
      {
        date: "Sat Sep 23 2023 20:30:30 GMT+0530 (India Standard Time)",
        value: 2300,
        unit: "kcal",
      },
      {
        date: "Fri Sep 22 2023 20:30:30 GMT+0530 (India Standard Time)",
        value: 2500,
        unit: "kcal",
      },
      {
        date: "Thu Sep 21 2023 20:30:30 GMT+0530 (India Standard Time)",
        value: 2700,
        unit: "kcal",
      },
    ];

    let dataForLineChart = temp.map((item: any) => {
      let val = JSON.stringify(item.value);
      return val;
    });

    let dataForXAxis = temp.map((item: any) => {
      let val = new Date(item.date);
      return val;
    });

    console.log({
      data: dataForLineChart,
      title: "1 Day Calorie Intake",
      color: color,
      xAxis: {
        data: dataForXAxis,
        label: "Last 10 Days",
        scaleType: "time",
      },
    });

    setDataS1({
      data: dataForLineChart,
      title: "1 Day Calorie Intake",
      color: color,
      xAxis: {
        data: dataForXAxis,
        label: "Last 10 Days",
        scaleType: "time",
      },
    });
  };

  React.useEffect(() => {
    getDataForS1();
  }, []);

  const [showCalorieIntakePopup, setShowCalorieIntakePopup] =
    React.useState<boolean>(false);

  const navigate = useNavigate();

  const openDashboard = () => {
    navigate("/dashboard/home");
  };

  return (
    <section>
      <div style={{ display: "flex", flexDirection: "row", margin: "1rem" }}>
        <button className="my-btn" onClick={openDashboard}>
          Go To Dashboard
        </button>
        <button
          className="my-btn"
          onClick={() => {
            window.print();
          }}
        >
          Download Report
        </button>
      </div>
      <div className="reportpage">
        <div className="s1">
          {dataS1 && (
            <LineChart
              xAxis={[
                {
                  id: "Day",
                  data: dataS1.xAxis.data,
                  scaleType: dataS1.xAxis.scaleType,
                  label: dataS1.xAxis.label,
                  // valueFormatter: (date: any) => {
                  //   return date.getDate();
                  // },
                },
              ]}
              series={[
                {
                  data: dataS1.data,
                  label: dataS1.title,
                  color: dataS1.color,
                },
              ]}
              {...chartsParams}
            />
          )}
        </div>
        <div className="s2">
          {dataS1 && (
            <LineChart
              xAxis={[
                {
                  id: "Day",
                  data: dataS1.xAxis.data,
                  scaleType: dataS1.xAxis.scaleType,
                  label: dataS1.xAxis.label,
                  // valueFormatter: (date: any) => {
                  //   return date.getDate();
                  // },
                },
              ]}
              series={[
                {
                  data: dataS1.data,
                  label: dataS1.title,
                  color: dataS1.color,
                },
              ]}
              {...chartsParams}
            />
          )}
        </div>

        <div className="s3">
          {dataS1 && (
            <LineChart
              xAxis={[
                {
                  id: "Day",
                  data: dataS1.xAxis.data,
                  scaleType: dataS1.xAxis.scaleType,
                  label: dataS1.xAxis.label,
                  // valueFormatter: (date: any) => {
                  //   return date.getDate();
                  // },
                },
              ]}
              series={[
                {
                  data: dataS1.data,
                  label: dataS1.title,
                  color: dataS1.color,
                },
              ]}
              {...chartsParams}
            />
          )}
        </div>

        <div className="s4">
          {dataS1 && (
            <LineChart
              xAxis={[
                {
                  id: "Day",
                  data: dataS1.xAxis.data,
                  scaleType: dataS1.xAxis.scaleType,
                  label: dataS1.xAxis.label,
                  // valueFormatter: (date: any) => {
                  //   return date.getDate();
                  // },
                },
              ]}
              series={[
                {
                  data: dataS1.data,
                  label: dataS1.title,
                  color: dataS1.color,
                },
              ]}
              {...chartsParams}
            />
          )}
        </div>
        <button
          className="editbutton"
          onClick={() => {
            setShowCalorieIntakePopup(true);
          }}
        >
          <AiFillEdit />
        </button>

        {showCalorieIntakePopup && (
          <CalorieIntakePopup
            setShowCalorieIntakePopup={setShowCalorieIntakePopup}
          />
        )}
      </div>
    </section>
  );
};

export default StepReport;
