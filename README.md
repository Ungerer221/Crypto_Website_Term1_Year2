# Cryptic Website Term1 Year2
 A crypto currencie website for term one year two where

<img src='Assets\landing page.png'></img>

# Demo Video
https://drive.google.com/file/d/14Ra4spYU_XXYypeWEOCwefLQxVNAE5Kd/view?usp=sharing

# Brief
 For this website we had to use an api of our choice and make a website using our chosen api. The Site had to call and show the information that the api provided. We also had to display selected and specific informations.

 For the project we where tasked to Build a full stack website using ```Node.js``` and ```react```.

 - ```Node.js```
 - ```React```

# Project Requirments

## Landing Dashboard
 - This page must summarize or breakdown the most relevant properties of your data set.
 - Your dashboard must introduce and contextualise your concept and research.

## Comparison Page
 - Must compare two objectsfrom your data set.
 - the object properties should be represented by 3 different chart.js elements, bar, pie, radar, and poalr area.
 - The user must be able to update/select different objects to compare within the data set.

## Timeline Page
 - the time line page should contain a signle line graph, mapping all the entries of at least 5 different object properties.
 - The timeline should only show one property set at a time, across the entire dataset entry time line.
 - must be able to change the property displayed via an input.

# About The Project
## Project Description
Cryptic is a website that displays crpto information using the greko crpto api. the site allows the user to compare information between differnet currencies. The user can also calculate the total values of thier total crypto currencies.

 ### Built With
 - ```JavaScript```
 - ```HTML```
 - ```CSS``` 

## Technologies used
 - Axios
 - React Icons
 - React Charts
 - Bootstrap

## NPM installs
### React
```
npm i react
```
### Axios
```
npm i axios
```
### Chart.js
```
npm i cart.js react-chartjs-2
```
### Router Dom
```
npm i react-router-dom
```

## Resources Used
React Icons
https://react-icons.github.io/react-icons/
```
npm i react-icons
```

# Site Structure
The website consists of one folder ```app```. The site has a ```components``` folder which store the different components used across the site.


# Features & Functionality
## Api Call
The ```useEffect``` and ```useState``` use to call information onto the main website
```
const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
```

## Calling the Graph Data
```
<div className='row'>
    {data2 ? <div style={{ width: 1000, margin: 'auto' }}> <Line options={selected} data={data2} /> </div> : null}
    {/* the problem is it that its showing the same graph  */}
</div>
<div>
    {data2 ? <div style={{ width: 600, margin: 'auto' }}> <Bar options={options} data={data2} /> </div> : null}
</div>
<div>
    {data2 ? <div style={{ width: 600, margin: 'auto' }}> <Radar options={options} data={data2} /> </div> : null}
</div>
```

## Time Line useEffect 
this shows the info when the currency is selected
```
useEffect(() => {
    // so that there is no network requiest error if there is no selected object
        if(!selected) return;
        axios.get(`https://api.coingecko.com/api/v3/coins/${selected?.id}/market_chart?vs_currency=usd&days=${range}&${range === 1 ? 'interval=hourly' : `interval=daily`}`)
          .then((response) => {
            console.log(response.data);
            // ------------------------------------- issue here -------------------------- //
            setData({
              labels: response.data.prices.map((data) => { return moment.unix(data[0] / 1000).format(range === 1 ? "HH:MM" : "MM-DD") }), //the .prices.map is there because it is a function on an arrey because the prices is actually and object
              datasets: [
                {
                  label: `${selected.name} Pricing Over ` + range  + ( range === 1 ? ' Day' : ' Days'),
                  data: response.data.prices.map((data) => { return data[1] }),
                  borderColor: 'rgb(255, 99, 132)',
                  backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
              ],
            })
          });
      }, [selected, range]);
```

# Development Process

## Style Sheet
<img src='Assets\style sheet 2.png'></img>

## WireFrames

### Landing page
<img src='Assets\landing page.png'></img>

### Compare Page
<img src='Assets\comparing page.png'></img>

# HighLights 
The greatest high light was actualy getting the functionality to work. To get the Info from the API and to display it was quite enjoyable.
- Working Functionality
- Fixing irritating bugs
- Designing the site 

# Challenges 
> [!IMPORTANT]
> There where some ```Bugs``` that was very challenging to fix 
- the other challenge was to actualy get the api key and then to connect the api and call the right information

# Future Implementation
- Updated UI
- Increased Data Display for each currency 
- Updated Calculating and comparison page
- Update Website Structure
- a crypto corrency viewing page which displays all the currencies in card format
- an alert that shows when the site is receiving data from the DB

# Final Product

## Landing
<img src='Assets\Capture2.PNG'></img>

## Compare Page
<img src='Assets\Capture1.PNG'></img>
<img src='Assets\Capture5.PNG'></img>

## Timeline Page
<img src='Assets\Capture3.PNG'></img>

## Portfolio Page
<img src='Assets\Capture4.PNG'></img>

# Author
- Ungerer Hattingh 221032

# Useful Sources 

## JavaScript
https://javascript.info/

## React
https://react.dev/

# Problems to fix
- the timeline page, time frame selection function