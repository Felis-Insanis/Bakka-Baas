import fs from "fs";;
import { DateTime } from 'luxon';
import cron from "node-cron";

// Read the JSON file
let data = fs.readFileSync('places.json');
let bookingsData = JSON.parse(data);


function updateIsOccupied(booking) {
    const currentDateTime = DateTime.local();
    const bookingStartDateTime = DateTime.fromFormat(`${booking.date} ${booking.start}`, 'yyyy-MM-dd HH:mm');
    const bookingEndDateTime = DateTime.fromFormat(`${booking.date} ${booking.end}`, 'yyyy-MM-dd HH:mm');
    return currentDateTime >= bookingStartDateTime && currentDateTime <= bookingEndDateTime;
}


// Read and update the JSON file
export default function updateBookings() {
    let data = fs.readFileSync('places.json');
    let bookingsData = JSON.parse(data);

    // Loop through each "båser" and update isOccupied field for each booking
    bookingsData.båser.forEach(bås => {
        bås.isOccupied = bås.bookings.some(updateIsOccupied);
    });

    // Save the updated JSON back to the file
    fs.writeFileSync('places.json', JSON.stringify(bookingsData, null, 2));

    console.log('Updated bookings:', JSON.stringify(bookingsData, null, 2));
}

updateBookings();

// Schedule the task to run every minute
cron.schedule('* * * * *', () => {
    updateBookings();
    console.log('Task ran at:', new Date().toISOString());
});