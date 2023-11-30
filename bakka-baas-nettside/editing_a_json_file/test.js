const fs = require('fs');
const { DateTime } = require('luxon');

// Read the JSON file
let data = fs.readFileSync('places.json');
let bookingsData = JSON.parse(data);


function updateIsOccupied(booking) {
    const currentDateTime = DateTime.local();
    const bookingStartDateTime = DateTime.fromFormat(`${booking.date} ${booking.start}`, 'yyyy:MM:dd HH:mm:ss');
    const bookingEndDateTime = DateTime.fromFormat(`${booking.date} ${booking.end}`, 'yyyy:MM:dd HH:mm:ss');
    return currentDateTime >= bookingStartDateTime && currentDateTime <= bookingEndDateTime;
}

// Loop through each "båser" and update isOccupied field for each booking
bookingsData.båser.forEach(bås => {
    bås.isOccupied = bås.bookings.some(updateIsOccupied);
});



// Save the updated JSON back to the file
fs.writeFileSync('places.json', JSON.stringify(bookingsData, null, 2));

console.log('Updated bookings:', JSON.stringify(bookingsData, null, 2));
