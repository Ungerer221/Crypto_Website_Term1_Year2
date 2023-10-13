import React, { useEffect, useState } from 'react';
import axios from 'axios'
import CryptoSummary from '../components/CryptoSummary';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import moment from 'moment'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

// to create a type ---this might be part of the typescript---
// export type Crypto ={

// }

function Portfolio() {

  const [cryptos, setCryptos] = useState();
  const [selected, setSelected] = useState([])
  // --- 
  const [range, setRange] = useState(30) //for the 30 days range option
  const [data, setData] = useState();

  useEffect(() => {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'

    axios.get(url).then((response) => {
      setCryptos(response.data);
    })
  }, []);

  //-------------------------------------------------- this is new ---------------------------------------------------------------------------------------------------//
  //this is to help aid with the multiple options by using use effect to allow us to call multiple different sources from the api to split the options up. (see the video)
  // will be effected but the currency selected or the range
  // for the one day range choice we need to change the api info to hourly and not daily if the value is one

  // useEffect(() => {
  //   // so that there is no network requiest error if there is no selected object
  //   if(!selected) return;
  //   axios.get(`https://api.coingecko.com/api/v3/coins/${selected?.id}/market_chart?vs_currency=usd&days=${range}&${range === 1 ? 'interval=hourly' : `interval=daily`}`)
  //     .then((response) => {
  //       console.log(response.data);
  //       // ------------------------------------- issue here -------------------------- //
  //       setData({
  //         //the .prices.map is there because it is a function on an arrey because the prices is actually and object
  //         // after we have selecetd the one option for hourly we want to format the grapgh to suit the data. so if range = 1 then minutes and hours but if not then month and day
  //         labels: response.data.prices.map((data) => { return moment.unix(data[0] / 1000).format(range === 1 ? 'HH:MM' : 'MM-DD') }),
  //         datasets: [
  //           {
  //             label:  `${selected.name} Pricing Over ` + range  + ( range === 1 ? ' Day' : ' Days'),
  //             data: response.data.prices.map((data) => { return data[1] }),
  //             borderColor: 'rgb(255, 99, 132)',
  //             backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //           },
  //         ],
  //       })
  //       // an attempt to make it so that the title changes with the selected days 
  //       // setOptions(setData.label={'price over last` : + range + `day(s)`,}); 
  //     });
  // }, [selected, range]);
  // ---------------------------------------------------------------------------------------------------------------------- //
  // ----------------------------- the useEffect for the selected data and data that will show in the pie chart -------------//
  useEffect(() => {
    console.log('SELECTED', selected)
    // --- we only want the pie chart to show once we have selected data --- //
    if (selected.lenght === 0) return;
    // --- --- //
    setData({
      // --- we want the labels to be the names wiht an implicit return ---
      labels: selected.map((s) => s.name),
      datasets: [
        {
          // --- here we change the data so that it picks up the data from the source same with the labels --- //
          // --- for the labels we want to go through all the objects in the arrey ---
          label: '# of Votes',
          // --- for the values we want the owned * price to stack ---
          data: selected.map((s) => s.owned * s.current_price),
          // ---find out how to generate colors---
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    });
  }, [selected])

  // for the parent thing to
  function updateOwned(cryptos, amount) {
    // console.log(selected);

    // to create the owned object with this ------------------------------------------------------------------------------- //
    console.log('updateOwned', cryptos, amount);
    let temp = [...selected];
    // just saying that the find(c) is equal to the tryptos id 
    let tempObj = temp.find((c) => c.id === cryptos.id)
    // if temp object exists then we will assign a value to it 
    if (tempObj) {
      tempObj.owned = amount;
      // going to assign back to the original state 
      setSelected(temp);
    }
  }

  return (
    <>
      <div className="App">
        {/* ---  */}

        {/* select start  */}
        {/* for the drop down this all goes inside a select  */}
        <select onChange={(e) => {
          // for when we select and option it will target all the data for the one we have chosen
          // --- 
          // console.log(e.target.value) 
          // ---
          // here we can actually find the id inside the arrey and display the extra info 
          const c = cryptos?.find((x) => x.id === e.target.value);
          setSelected([...selected, c]);
          // console.log(c);
          // -------------------------------------------------------------------------------- //
          // onChange ends 
        }} defaultValue="default" style={{ border: 'none', outline: 'none', borderRadius: '12px', backgroundColor: '#e1e5ea', padding: '10px', marginTop: '10px', marginLeft: '10px', }}>
          {/* ---  */}

          <option value="default">Choose an Option</option>
          {/* this is the loop  */}
          {cryptos ? cryptos.map((cryptos => {
            // --- 
            return (
              // using the key and value you allow a function to select and use them individually depending on what you pick
              <option key={cryptos.id} value={cryptos.id} >
                {cryptos.name}
              </option>
            );
          })) : null}
        </select>
        {/* select end  */}
      </div>

      {selected.map((s) => {
        // just passing updateOwned function to be invoked later 
        return <CryptoSummary cryptos={s} updateOwned={updateOwned} />;
      })}


      {/* this is a check point as you already have the information changing to the selected just need to find a way to show the info of the screen  */}
      {/* {selected ? <CryptoSummary cryptos={selected} /> : null} */}
      {data ? <div style={{ width: 600 }}> <Pie data={data} /> </div> : null}

      {/* --------------------------------------------------- new thing -------------------------------------------------------------- */}
      {/* in selected exists we do selecetd.map  */}
      {selected ? 'Your Portfolio is worth: $' + selected.map((s) => {
        // ---this needs to be number---
        if (isNaN(s.owned)) {
          return 0;
        }

        return s.current_price * s.owned
        // now we are using reduce where 
        // this should give us a total 
      }).reduce((prev, current) => {
        console.log('prev, current', prev, current)
        return prev + current;
      }, 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2, }) : null}
    </>
  );
}

export default Portfolio;

// watch vidoe 60 again to understand what we are doing 
// but basically its we are taking the price and the amount owned and adding it to a total profile chart 