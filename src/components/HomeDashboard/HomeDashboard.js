import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { AiFillSignal } from "react-icons/ai";
import './HomeDashboard.css'


const HomePage = () => {
  return (
    <div>
        <div className='home-dashboard'>
            <div className='home-dashboard-pagename'>
                <AiFillSignal color="#0099da" size={50} style={{ marginLeft: '100px' }} />
                <p>Dashboard</p>
            </div>
            <div className='dashboard'>
                <div className='home-dashboard-div'>
                    <p>Headcount quantity per month</p>
                    <BarChart className='home-dashboard-chart'
                        series={[
                        { data: [35, 44, 24, 34] },
                        { data: [51, 6, 49, 30] },
                        { data: [15, 25, 30, 50] },
                        { data: [60, 50, 15, 25] },
                        ]}
                        height={300}
                        colors={['#0099da']}
                        borderRadius={4}
                        barLabel="value"
                        xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
                />
                </div>
                <div className='home-dashboard-div'>
                    <p>Headcount quantity per day</p>
                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[
                            {
                            data: [2, 5.5, 2, 8.5, 1.5, 5],
                            },
                        ]}
                        height={300}
                        colors={['#0099da']}
                    />
                </div>
            </div>
        </div>
 </div>
  );
};

export default HomePage;
