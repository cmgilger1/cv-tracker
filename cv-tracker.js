function findStat(sourceUrl, caseId, deathId, searchStr)
{
    $.ajax({
        url:sourceUrl
    })
    .done(function(htmlOut){
        var doc = document.createElement('docEl');
        doc.innerHTML = htmlOut;
        var titles = doc.getElementsByTagName('title');
        for (var i=0; i< titles.length; i++)
        {
            if (titles[i].innerText.includes(searchStr))
            {
                var fullString = titles[i].innerText;
                var wwCases = fullString.split(" ")[3] + ' cases';
                var wwDeaths = fullString.split(" ")[6] + ' deaths';
                
                document.getElementById(caseId).innerHTML = wwCases;
                document.getElementById(deathId).innerHTML = wwDeaths;
            }
        }
    });
}
function findWiscStat(sourceUrl, caseId, deathId, searchStr)
{
    $.ajax({
        url:sourceUrl
    })
    .done(function(htmlOut){
        var doc = document.createElement('docEl');
        doc.innerHTML = htmlOut;
        var cells = doc.getElementsByTagName('td');
        for (var i=0; i < cells.length; i++)
        {
            if (cells[i].innerText.includes(searchStr))
            {
                var wiscCases = cells[i + 1].innerText + ' cases';
                var wiscDeaths = cells[i + 3].innerText + '?? deaths';
                document.getElementById(caseId).innerHTML = wiscCases;
                document.getElementById(deathId).innerHTML = wiscDeaths;
            }
        }
    });
}

let url = 'https://cors-anywhere.herokuapp.com/https://www.worldometers.info/coronavirus';
let caseId = 'totalWwCases';
let deathId = 'totalWwDeaths';
let searchString = 'Coronavirus Update'
findStat(url, caseId, deathId, searchString);

url = 'https://cors-anywhere.herokuapp.com/https://www.worldometers.info/coronavirus'
caseId = 'totalUsCases';
deathId = 'totalUsDeaths';
searchString = 'United States Coronavirus';
findStat(url, caseId, deathId, searchString);

url = 'https://cors-anywhere.herokuapp.com/https://www.worldometers.info/coronavirus/country/us/';
caseId = 'totalWiscCases';
deathId = 'totalWiscDeaths';
searchString = 'Wisconsin'
findWiscStat(url, caseId, deathId, searchString);