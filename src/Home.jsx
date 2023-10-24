import React from 'react';
import ReactEcharts from 'echarts-for-react';
import Users from './Users';

function Home(props) {

  const data = [
    { name: 'Different Users', value: 300, fill: "#2962ff" },
    { name: 'Mismatch Users', value: 50, fill: "#ff6d00" }
  ];

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: <br>{c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      right: "right",
      textStyle: {
        fontSize: 20,
      },
      itemWidth: 40,
      itemHeight: 20,

    },
    series: [
      {
        name: 'Label',
        type: 'pie',
        radius: '50%',
        center: ['50%', '70%'],
        data: data,
        label: {
          formatter: "{c} ({d}%)",
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };


  return (
    <main className="main-container">
      <h1 className='text-center mt-4'>IFS Cloud Setup Comparison Tool</h1>
      {/* <div className="main-title">
        <h3 className='m-4' style={{position:"absolute",top:"50px"}}>DASHBOARD</h3>
      </div> */}
      <div className="charts" >
        <ReactEcharts option={option} style={{ height: "60vh", width: "60vw" }} />
      </div>
    </main>
  );
}

export default Home;
