sports = [
    ['skier', '⛷'],
    ['snowboarder', '🏂'],
    ['apple', '🍎'],
    ['hockey', '🏒'],
    ['ice skate', '⛸'],
    ['swimmer', '🏊'],
    ['surfer', '🏄‍'],
    ['watermelon', '🍉'],
    ['lemon', '🍋'],
    ['rowboat', '🚣'],
    ['bicyclist', '🚴‍']
];

firstSpotrs = sports.slice()
firstSpotrs = sports.slice(5, 7);
console.log(firstSpotrs)

secondSummerSpors = sports.slice()
secondSummerSpors = sports.slice(9, 12)
console.log(secondSummerSpors)

summerSports = firstSpotrs.concat(secondSummerSpors)
console.log(summerSports)

firstWinterSport = sports.slice()
console.log(firstWinterSport)
firstWinterSport = sports.slice(0, 2)
console.log(firstWinterSport)

secondWinterSport = sports.slice()
console.log(secondWinterSport)
secondWinterSport = sports.slice(3, 5)
console.log(secondWinterSport)

winterSports = firstWinterSport.concat(secondWinterSport)
console.log(winterSports)

firstFructGroup = sports.slice()
console.log(firstFructGroup)

firstFructGroup = sports.slice(2, 3)
console.log(firstFructGroup)

secondFructGroup = sports.slice(7, 9)
console.log(secondFructGroup)

fruits = firstFructGroup.concat(secondFructGroup)
console.log(fruits)

listFruits = fruits.join(`</li> <li>`);
listWinterSports = winterSports.join(`</li><li>`)
listSummerSports = summerSports.join(`</li> <li>`)




document.write(`

<ul>
<p>Winter Sports</p>
<li>${listWinterSports}</li>
<p> Summer Sports </p>
<li>${listSummerSports}</li>
<p> Fruits </p>
<li> ${listFruits} </li>
</ul>
`)