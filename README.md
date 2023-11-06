# Crypto Website Term1 Year2
 A crypto currencie website for term one year two where

<img src='Assets\landing page.png'></img>

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
Crypto is a website that displays crpto information using the greko crpto api. the site allows the user to compare information between differnet currencies. The user can also calculate the total values of thier total crypto currencies.

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
## Useful Sources 

### JavaScript
https://javascript.info/

### React
https://react.dev/

# Style Sheet
<img src='Assets\style sheet 2.png'></img>

# Site Structure
The website consists of one file "app". The site has a ```components``` folder which store the different components used across the site.


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
