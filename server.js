const express = require('express');
const hbs = require('hbs');
const fs=require('fs');
var app = express();

const port=process.env.PORT || 3000;
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index.hbs', {
    comapnyName: 'The Travel Kingdom',
    quotes:'Jobs fill your pockets, adventures fill your soul.',
    cost: '1499',
    offerTill:'30th April 2020'
  });
});
app.get('/package', (req, res) => {
  res.render('package.hbs', {
    placeName: 'India Gate and Rastrapati Bhavan',
    location: 'New Delhi',
    noOfdays: '3 days',
    
    ameneties: 'Food, 4 Star Hotel, Sighteeing',
    cost: 2500
  });
});
app.get('/destination', (req, res) => {
  res.render('destination.hbs', {
    destinationName: 'Red Fort', 
    location: 'Chandni Chowk, New Delhi',
    description: 'The Red Fort is a historic fort in the city of Delhi in India that served as the main residence of the Mughal Emperors.Emperor Shah Jahan commissioned construction of the Red Fort on 12 May 1638, when he decided to shift his capital from Agra to Delhi.',
    activities: 'Sighteing',
    ratings:'4.5 Star'
  });
});
app.get('/contactus', (req, res) => {
  res.render('contactus.hbs', {
    pageName:'Contact Us',
    email:'infothetravelkingdom@gmail.com',
    whatsapp: '123466789',
    facebook:'thetravelkingdoms',
    instagram:'@thetravelkingdom'
  });
});

// When Non Existing Url passed
app.get('/*', (req, res) => {
  res.send({
    errorMessage: 'This Page Is Not Availabe'
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
