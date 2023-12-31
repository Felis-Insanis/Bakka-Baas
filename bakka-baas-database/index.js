import express from "express";
import cors from "cors";
import fs from "fs";
import { json } from "node:stream/consumers";
const app = express();
const port = 3000;


app.use(cors(), express.json())

// Rest of your server setup

 
app.get('/', function(request, response){ // shows "Hello World!" on the screen
    response.send('Hello world!');
});
 
app.get('/info', function(request, response){ // shows the places.json file
    const data = fs.readFileSync('places.json', 'utf8');
    const jsonData = JSON.parse(data);
    response.send(jsonData)
});
 // Read the JSON file
// let JSONDATA = fs.readFileSync('places.json');
// let bookingsJSONDATA = JSON.parse(JSONDATA);


// function updateIsOccupied(booking) {
//     const currentDateTime = DateTime.local();
//     const bookingStartDateTime = DateTime.fromFormat(`${booking.date} ${booking.start}`, 'yyyy-MM-dd HH:mm');
//     const bookingEndDateTime = DateTime.fromFormat(`${booking.date} ${booking.end}`, 'yyyy-MM-dd HH:mm');
//     return currentDateTime >= bookingStartDateTime && currentDateTime <= bookingEndDateTime;
// }


// // Read and update the JSON file
// function updateBookings() {
//     let JSONDATA = fs.readFileSync('places.json');
//     let bookingsJSONDATA = JSON.parse(JSONDATA);

//     // Loop through each "båser" and update isOccupied field for each booking
//     bookingsJSONDATA.båser.forEach(bås => {
//         bås.isOccupied = bås.bookings.some(updateIsOccupied);
//     });

//     // Save the updated JSON back to the file
//     fs.writeFileSync('places.json', JSON.stringify(bookingsJSONDATA, null, 2));

//     console.log('Updated bookings:', JSON.stringify(bookingsJSONDATA, null, 2));
// }


app.post('/info/info/:id', function(request, response){
    
    const id = request.params.id
    const newBook = request.body;
    
    

    fs.readFile('places.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        let obj = JSON.parse(data); //now it an object
        console.log(obj['båser'][id]['bookings'])
        
        obj['båser'][id]['bookings'].push(newBook) //add some data
        
        const allBookings = [] 
        obj['båser'][id]['bookings'].forEach((booking) => {
            let interval = [booking["start"], booking["end"]]
            allBookings.push(interval)
        });

        console.log(allBookings)

        obj['båser'][id]['bookings'].forEach((booking) => {
            console.log("Bookings", booking)
            let startDate = newBook["start"] 
            let endDate = newBook["end"] 

            
            //booking.occupied = start_date <= current_date && current_date <= end_date;
        });
 
 
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
    //updateBookings()
    response.send("Posted")
});

app.get("/date", function(request, response){
    response.send(Date.parse("2023-11-23 09:20:30").toString());
})


 
app.listen(port, () => { // repeats port
    console.log(`Server lytter på port ${port}`);
});

const jsonFilePath = 'places.json'
function checkDates() {
    // Read the JSON file
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        const json_data = JSON.parse(data);
        const current_date = new Date();

        // json_data.bookings.forEach((booking) => {
        //     const start_date = new Date(booking.start_date);
        //     const end_date = new Date(booking.end_date);

        //     booking.occupied = start_date <= current_date && current_date <= end_date;
        // });

        // Write the updated JSON back to the file
        fs.writeFile(jsonFilePath, JSON.stringify(json_data, null, 2), 'utf8', (err) => {
            if (err) {
                console.error(err);
            }
        });
    });
}

// Run the checkDates function every hour (3600000 milliseconds)
// setInterval(checkDates, 3600000);

// // Call checkDates once to perform the initial check
// checkDates();

// Continue with the rest of your program...

