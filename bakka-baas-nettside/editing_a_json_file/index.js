const express = require('express');
const fs = require('fs');
const { json } = require('stream/consumers');
const app = express();
const port = 3001;
 
app.listen(port, () => { // repeats port
    console.log(`Server lytter på port ${port}`);
});
 
app.get('/', function(request, response){ // shows "Hello World!" on the screen
    response.send('Hello world!');
});
 
app.get('/info', function(request, response){ // shows the places.json file
    const data = fs.readFileSync('places.json', 'utf8');
    const jsonData = JSON.parse(data);
    response.send(jsonData)
});
 
 
app.post('/info/:name-:startDate-:endDate', function(request, response){
 
    const newName = request.params.name
    const startD = request.params.startDate
    const endD = request.params.endDate
    fs.readFile('places.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        obj = JSON.parse(data); //now it an object
        console.log(obj['båser']['bås1']['bookings'])
        let booking3 = {
            "name": newName,
            "start": startD,
            "end": endD
            
            
        }
        console.log(booking3)
        obj['båser']['bås1']['bookings'].push(booking3) //add some data
        console.log(obj['båser']['bås1']['bookings'])
        
 
 
        // Convert the JSON object to a string
        const jsonString = JSON.stringify(obj, null, 2);
        const filePath = 'places.json';
        // Write the JSON string to the file
        fs.writeFile(filePath, jsonString, (err) => {
            if (err) {
            console.error('Error writing to file:', err);
            } else {
            console.log(`JSON object has been written to ${filePath}`);
            }
        });
    }});
    
    response.send("Posted")
});

app.get("/date", function(request, response){
    response.send(Date());
})