// https://buttondown.com/cassidoo/archive/u1f9d1-u1f3a8-always-make-room-for-the-unexpected/

// This week's question:
// Given a year and month, return an array containing every date in that month that falls on a Sunday. Return each date in YYYY-MM-DD format.

// Examples:

// > getSundays(2026, 9)
// > [ '2026-09-06', '2026-09-13', '2026-09-20', '2026-09-27' ]

// > getSundays(2024, 2)
// > [ '2024-02-04', '2024-02-11', '2024-02-18', '2024-02-25' 



const getSundays = (yyyy, mm) => {
    const daysInMonth = new Date(yyyy, mm, 0).getDate()
    const date = new Date(yyyy, mm - 1, 1);
    const firstDay = date.getDay()
    const firstSunday = 8 - firstDay ;
    return Array.from({ length: 6 })
        .map((_, i) => firstSunday + 7 * i)
        .filter(item => item <= daysInMonth)
        .map(item => `${yyyy}-${('00' + mm).slice(-2)}-${('00' + item).slice(-2)}`);
}

console.log(getSundays(2026, 9));