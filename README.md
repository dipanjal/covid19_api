
# CoVID-19 Live API
```API service for CoVID-19 daily update```

## Running the api server locally using Docker

This docker container will not include any mongo server. You have to configure your own external mongo instance informations in "/configuration/DBConfig.js".\
<br>
If you don't want to use external mongo server then check our [deb-mongo-docker](https://github.com/FTKhanFT/covid19_api/tree/dev-mongo-docker) branch. That container includes
a fully functional mongoDb server instance configured to the api.\
<br>

#### Make sure the docker demon is running then go to the root directory of the project and use following commands.

To build the container-

    docker-compose build
To run the docker container-
    	
    docker-compose up

## Indices

We will show some sample requests from this [API](http://covid-rest.herokuapp.com/)

It contains following requests
* [Today](#today)

  * [GET ALL DATA](#1-get-all-data)
  * [GET BY COUNTRY NAME](#2-get-by-country-name)
  * [GET SUMMARY](#3-get-summary)

* [Yesterday](#yesterday)

  * [GET ALL DATA FOR YESTERDAY](#1-get-all-data-for-yesterday)
  * [GET BY COUNTRY NAME FOR YESTERDAY](#2-get-by-country-name-for-yesterday)
  * [GET SUMMARY FOR YESTERDAY](#3-get-summary-for-yesterday)


--------


## Today
It contains following requests

#### [Today](#today)

* [GET ALL DATA](#1-get-all-data)
* [GET BY COUNTRY NAME](#2-get-by-country-name)
* [GET SUMMARY](#3-get-summary)



### 1. GET ALL DATA



***Endpoint:***

```bash
Method: GET
Type: HTTP
URL: http://covid-rest.herokuapp.com/
```



***Example Requests/Responses:***


<details>
  <summary>
  I. Example Response: GET ALL DATA Example
  </summary>
  <br>

```bash
Method: GET
Type: HTTP
URL: http://covid-rest.herokuapp.com/
```

<br>

```js
        {
            "code": 200,
            "message": "OK",
            "data": [
                {
                    "country_id": "1",
                    "country_name": "usa",
                    "total_cases": "4918420",
                    "new_cases": "",
                    "total_death": "160290",
                    "new_death": "",
                    "total_recovered": "2481680",
                    "active_cases": "",
                    "critical_cases": "2276450",
                    "total_cases_per_million": "18407",
                    "total_death_per_million": "14851"
                },
                {
                    "country_id": "2",
                    "country_name": "brazil",
                    "total_cases": "2808076",
                    "new_cases": "",
                    "total_death": "96096",
                    "new_death": "",
                    "total_recovered": "1970767",
                    "active_cases": "",
                    "critical_cases": "741213",
                    "total_cases_per_million": "8318",
                    "total_death_per_million": "13202"
                },
                {
                    "country_id": "3",
                    "country_name": "india",
                    "total_cases": "1908254",
                    "new_cases": "1641",
                    "total_death": "39820",
                    "new_death": "",
                    "total_recovered": "1282215",
                    "active_cases": "555",
                    "critical_cases": "586219",
                    "total_cases_per_million": "8944",
                    "total_death_per_million": "1382"
                },
                {
                    "country_id": "4",
                    "country_name": "russia",
                    "total_cases": "861423",
                    "new_cases": "",
                    "total_death": "14351",
                    "new_death": "",
                    "total_recovered": "661471",
                    "active_cases": "",
                    "critical_cases": "185601",
                    "total_cases_per_million": "2300",
                    "total_death_per_million": "5903"
                },
                {
                    "country_id": "5",
                    "country_name": "south africa",
                    "total_cases": "521318",
                    "new_cases": "",
                    "total_death": "8884",
                    "new_death": "",
                    "total_recovered": "363751",
                    "active_cases": "",
                    "critical_cases": "148683",
                    "total_cases_per_million": "539",
                    "total_death_per_million": "8780"
                },
                {
                    "country_id": "6",
                    "country_name": "mexico",
                    "total_cases": "449961",
                    "new_cases": "6148",
                    "total_death": "48869",
                    "new_death": "857",
                    "total_recovered": "300254",
                    "active_cases": "4577",
                    "critical_cases": "100838",
                    "total_cases_per_million": "3925",
                    "total_death_per_million": "3486"
                },
                {
                    "country_id": "7",
                    "country_name": "peru",
                    "total_cases": "439890",
                    "new_cases": "",
                    "total_death": "20007",
                    "new_death": "",
                    "total_recovered": "302457",
                    "active_cases": "",
                    "critical_cases": "117426",
                    "total_cases_per_million": "1418",
                    "total_death_per_million": "13324"
                },
                {
                    "country_id": "8",
                    "country_name": "chile",
                    "total_cases": "362962",
                    "new_cases": "",
                    "total_death": "9745",
                    "new_death": "",
                    "total_recovered": "336330",
                    "active_cases": "",
                    "critical_cases": "16887",
                    "total_cases_per_million": "1405",
                    "total_death_per_million": "18972"
                },
                {
                    "country_id": "9",
                    "country_name": "spain",
                    "total_cases": "349894",
                    "new_cases": "",
                    "total_death": "28498",
                    "new_death": "",
                    "total_recovered": "n/a",
                    "active_cases": "n/a",
                    "critical_cases": "n/a",
                    "total_cases_per_million": "617",
                    "total_death_per_million": "7483"
                },
                {
                    "country_id": "10",
                    "country_name": "colombia",
                    "total_cases": "334979",
                    "new_cases": "",
                    "total_death": "11315",
                    "new_death": "",
                    "total_recovered": "180258",
                    "active_cases": "",
                    "critical_cases": "143406",
                    "total_cases_per_million": "1493",
                    "total_death_per_million": "6577"
                },
                {
                    "country_id": "11",
                    "country_name": "iran",
                    "total_cases": "314786",
                    "new_cases": "",
                    "total_death": "17617",
                    "new_death": "",
                    "total_recovered": "272535",
                    "active_cases": "",
                    "critical_cases": "24634",
                    "total_cases_per_million": "4132",
                    "total_death_per_million": "3743"
                },
                {
                    "country_id": "12",
                    "country_name": "uk",
                    "total_cases": "306293",
                    "new_cases": "",
                    "total_death": "46299",
                    "new_death": "",
                    "total_recovered": "n/a",
                    "active_cases": "n/a",
                    "critical_cases": "n/a",
                    "total_cases_per_million": "77",
                    "total_death_per_million": "4510"
                },
                {
                    "country_id": "13",
                    "country_name": "saudi arabia",
                    "total_cases": "281456",
                    "new_cases": "",
                    "total_death": "2984",
                    "new_death": "",
                    "total_recovered": "243713",
                    "active_cases": "",
                    "critical_cases": "34759",
                    "total_cases_per_million": "1983",
                    "total_death_per_million": "8073"
                },
                {
                    "country_id": "14",
                    "country_name": "pakistan",
                    "total_cases": "281136",
                    "new_cases": "675",
                    "total_death": "6014",
                    "new_death": "15",
                    "total_recovered": "254286",
                    "active_cases": "4889",
                    "critical_cases": "20836",
                    "total_cases_per_million": "872",
                    "total_death_per_million": "1271"
                },
                {
                    "country_id": "15",
                    "country_name": "italy",
                    "total_cases": "248419",
                    "new_cases": "",
                    "total_death": "35171",
                    "new_death": "",
                    "total_recovered": "200766",
                    "active_cases": "",
                    "critical_cases": "12482",
                    "total_cases_per_million": "41",
                    "total_death_per_million": "4109"
                },
                {
                    "country_id": "16",
                    "country_name": "bangladesh",
                    "total_cases": "244020",
                    "new_cases": "",
                    "total_death": "3234",
                    "new_death": "",
                    "total_recovered": "139860",
                    "active_cases": "",
                    "critical_cases": "100926",
                    "total_cases_per_million": "",
                    "total_death_per_million": "1480"
                },
                {
                    "country_id": "17",
                    "country_name": "turkey",
                    "total_cases": "234934",
                    "new_cases": "",
                    "total_death": "5765",
                    "new_death": "",
                    "total_recovered": "218491",
                    "active_cases": "",
                    "critical_cases": "10678",
                    "total_cases_per_million": "583",
                    "total_death_per_million": "2783"
                },
                {
                    "country_id": "18",
                    "country_name": "argentina",
                    "total_cases": "213535",
                    "new_cases": "",
                    "total_death": "3979",
                    "new_death": "",
                    "total_recovered": "94129",
                    "active_cases": "",
                    "critical_cases": "115427",
                    "total_cases_per_million": "1150",
                    "total_death_per_million": "4721"
                },
                {
                    "country_id": "19",
                    "country_name": "germany",
                    "total_cases": "212331",
                    "new_cases": "",
                    "total_death": "9232",
                    "new_death": "",
                    "total_recovered": "194700",
                    "active_cases": "",
                    "critical_cases": "8399",
                    "total_cases_per_million": "270",
                    "total_death_per_million": "2533"
                },
                {
                    "country_id": "20",
                    "country_name": "france",
                    "total_cases": "192334",
                    "new_cases": "",
                    "total_death": "30296",
                    "new_death": "",
                    "total_recovered": "82166",
                    "active_cases": "",
                    "critical_cases": "79872",
                    "total_cases_per_million": "384",
                    "total_death_per_million": "2946"
                },
                {
                    "country_id": "21",
                    "country_name": "iraq",
                    "total_cases": "134722",
                    "new_cases": "",
                    "total_death": "5017",
                    "new_death": "",
                    "total_recovered": "96103",
                    "active_cases": "",
                    "critical_cases": "33602",
                    "total_cases_per_million": "511",
                    "total_death_per_million": "3343"
                },
                {
                    "country_id": "22",
                    "country_name": "canada",
                    "total_cases": "117792",
                    "new_cases": "",
                    "total_death": "8958",
                    "new_death": "",
                    "total_recovered": "102450",
                    "active_cases": "",
                    "critical_cases": "6384",
                    "total_cases_per_million": "2254",
                    "total_death_per_million": "3118"
                },
                {
                    "country_id": "23",
                    "country_name": "indonesia",
                    "total_cases": "115056",
                    "new_cases": "",
                    "total_death": "5388",
                    "new_death": "",
                    "total_recovered": "72050",
                    "active_cases": "",
                    "critical_cases": "37618",
                    "total_cases_per_million": "",
                    "total_death_per_million": "420"
                },
                {
                    "country_id": "24",
                    "country_name": "philippines",
                    "total_cases": "112593",
                    "new_cases": "",
                    "total_death": "2115",
                    "new_death": "",
                    "total_recovered": "66049",
                    "active_cases": "",
                    "critical_cases": "44429",
                    "total_cases_per_million": "239",
                    "total_death_per_million": "1026"
                },
                {
                    "country_id": "25",
                    "country_name": "qatar",
                    "total_cases": "111538",
                    "new_cases": "",
                    "total_death": "177",
                    "new_death": "",
                    "total_recovered": "108254",
                    "active_cases": "",
                    "critical_cases": "3107",
                    "total_cases_per_million": "73",
                    "total_death_per_million": "39724"
                },
                {
                    "country_id": "26",
                    "country_name": "kazakhstan",
                    "total_cases": "94882",
                    "new_cases": "1062",
                    "total_death": "1058",
                    "new_death": "",
                    "total_recovered": "67031",
                    "active_cases": "1899",
                    "critical_cases": "26793",
                    "total_cases_per_million": "221",
                    "total_death_per_million": "5048"
                },
                {
                    "country_id": "27",
                    "country_name": "egypt",
                    "total_cases": "94752",
                    "new_cases": "",
                    "total_death": "4912",
                    "new_death": "",
                    "total_recovered": "45569",
                    "active_cases": "",
                    "critical_cases": "44271",
                    "total_cases_per_million": "41",
                    "total_death_per_million": "924"
                },
                {
                    "country_id": "28",
                    "country_name": "ecuador",
                    "total_cases": "87963",
                    "new_cases": "",
                    "total_death": "5808",
                    "new_death": "",
                    "total_recovered": "70985",
                    "active_cases": "",
                    "critical_cases": "11170",
                    "total_cases_per_million": "366",
                    "total_death_per_million": "4979"
                },
                {
                    "country_id": "29",
                    "country_name": "bolivia",
                    "total_cases": "83361",
                    "new_cases": "1515",
                    "total_death": "3320",
                    "new_death": "92",
                    "total_recovered": "25390",
                    "active_cases": "880",
                    "critical_cases": "54651",
                    "total_cases_per_million": "71",
                    "total_death_per_million": "7132"
                },
                {
                    "country_id": "30",
                    "country_name": "sweden",
                    "total_cases": "81181",
                    "new_cases": "",
                    "total_death": "5747",
                    "new_death": "",
                    "total_recovered": "n/a",
                    "active_cases": "n/a",
                    "critical_cases": "n/a",
                    "total_cases_per_million": "38",
                    "total_death_per_million": "8034"
                },
                {
                    "country_id": "31",
                    "country_name": "oman",
                    "total_cases": "79159",
                    "new_cases": "",
                    "total_death": "421",
                    "new_death": "",
                    "total_recovered": "61421",
                    "active_cases": "",
                    "critical_cases": "17317",
                    "total_cases_per_million": "187",
                    "total_death_per_million": "15468"
                },
                {
                    "country_id": "32",
                    "country_name": "israel",
                    "total_cases": "76642",
                    "new_cases": "444",
                    "total_death": "561",
                    "new_death": "",
                    "total_recovered": "51329",
                    "active_cases": "1495",
                    "critical_cases": "24752",
                    "total_cases_per_million": "341",
                    "total_death_per_million": "8333"
                },
                {
                    "country_id": "33",
                    "country_name": "dominican republic",
                    "total_cases": "74295",
                    "new_cases": "",
                    "total_death": "1213",
                    "new_death": "",
                    "total_recovered": "38824",
                    "active_cases": "",
                    "critical_cases": "34258",
                    "total_cases_per_million": "385",
                    "total_death_per_million": "6842"
                },
                {
                    "country_id": "34",
                    "country_name": "ukraine",
                    "total_cases": "74219",
                    "new_cases": "",
                    "total_death": "1764",
                    "new_death": "",
                    "total_recovered": "40613",
                    "active_cases": "",
                    "critical_cases": "31842",
                    "total_cases_per_million": "132",
                    "total_death_per_million": "1698"
                },
                {
                    "country_id": "35",
                    "country_name": "belgium",
                    "total_cases": "70648",
                    "new_cases": "334",
                    "total_death": "9852",
                    "new_death": "2",
                    "total_recovered": "17639",
                    "active_cases": "41",
                    "critical_cases": "43157",
                    "total_cases_per_million": "63",
                    "total_death_per_million": "6093"
                },
                {
                    "country_id": "36",
                    "country_name": "panama",
                    "total_cases": "69424",
                    "new_cases": "",
                    "total_death": "1522",
                    "new_death": "",
                    "total_recovered": "43330",
                    "active_cases": "",
                    "critical_cases": "24572",
                    "total_cases_per_million": "161",
                    "total_death_per_million": "16067"
                },
                {
                    "country_id": "37",
                    "country_name": "kuwait",
                    "total_cases": "68774",
                    "new_cases": "",
                    "total_death": "465",
                    "new_death": "",
                    "total_recovered": "60326",
                    "active_cases": "",
                    "critical_cases": "7983",
                    "total_cases_per_million": "131",
                    "total_death_per_million": "16083"
                },
                {
                    "country_id": "38",
                    "country_name": "belarus",
                    "total_cases": "68250",
                    "new_cases": "",
                    "total_death": "574",
                    "new_death": "",
                    "total_recovered": "63163",
                    "active_cases": "",
                    "critical_cases": "4513",
                    "total_cases_per_million": "",
                    "total_death_per_million": "7223"
                },
                {
                    "country_id": "39",
                    "country_name": "uae",
                    "total_cases": "61352",
                    "new_cases": "",
                    "total_death": "351",
                    "new_death": "",
                    "total_recovered": "55090",
                    "active_cases": "",
                    "critical_cases": "5911",
                    "total_cases_per_million": "",
                    "total_death_per_million": "6196"
                },
                {
                    "country_id": "40",
                    "country_name": "netherlands",
                    "total_cases": "55955",
                    "new_cases": "",
                    "total_death": "6150",
                    "new_death": "",
                    "total_recovered": "n/a",
                    "active_cases": "n/a",
                    "critical_cases": "n/a",
                    "total_cases_per_million": "27",
                    "total_death_per_million": "3265"
                },
                {
                    "country_id": "41",
                    "country_name": "romania",
                    "total_cases": "55241",
                    "new_cases": "",
                    "total_death": "2480",
                    "new_death": "",
                    "total_recovered": "28006",
                    "active_cases": "",
                    "critical_cases": "24755",
                    "total_cases_per_million": "436",
                    "total_death_per_million": "2873"
                },
                {
                    "country_id": "42",
                    "country_name": "singapore",
                    "total_cases": "53346",
                    "new_cases": "",
                    "total_death": "27",
                    "new_death": "",
                    "total_recovered": "47454",
                    "active_cases": "",
                    "critical_cases": "5865",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "9112"
                },
                {
                    "country_id": "43",
                    "country_name": "guatemala",
                    "total_cases": "52365",
                    "new_cases": "",
                    "total_death": "2037",
                    "new_death": "",
                    "total_recovered": "40285",
                    "active_cases": "",
                    "critical_cases": "10043",
                    "total_cases_per_million": "5",
                    "total_death_per_million": "2918"
                },
                {
                    "country_id": "44",
                    "country_name": "portugal",
                    "total_cases": "51681",
                    "new_cases": "",
                    "total_death": "1739",
                    "new_death": "",
                    "total_recovered": "37318",
                    "active_cases": "",
                    "critical_cases": "12624",
                    "total_cases_per_million": "44",
                    "total_death_per_million": "5070"
                },
                {
                    "country_id": "45",
                    "country_name": "poland",
                    "total_cases": "48149",
                    "new_cases": "",
                    "total_death": "1738",
                    "new_death": "",
                    "total_recovered": "35056",
                    "active_cases": "",
                    "critical_cases": "11355",
                    "total_cases_per_million": "65",
                    "total_death_per_million": "1272"
                },
                {
                    "country_id": "46",
                    "country_name": "nigeria",
                    "total_cases": "44433",
                    "new_cases": "",
                    "total_death": "910",
                    "new_death": "",
                    "total_recovered": "31851",
                    "active_cases": "",
                    "critical_cases": "11672",
                    "total_cases_per_million": "7",
                    "total_death_per_million": "215"
                },
                {
                    "country_id": "47",
                    "country_name": "honduras",
                    "total_cases": "44299",
                    "new_cases": "505",
                    "total_death": "1400",
                    "new_death": "16",
                    "total_recovered": "5921",
                    "active_cases": "67",
                    "critical_cases": "36978",
                    "total_cases_per_million": "52",
                    "total_death_per_million": "4466"
                },
                {
                    "country_id": "48",
                    "country_name": "bahrain",
                    "total_cases": "42132",
                    "new_cases": "",
                    "total_death": "151",
                    "new_death": "",
                    "total_recovered": "39335",
                    "active_cases": "",
                    "critical_cases": "2646",
                    "total_cases_per_million": "43",
                    "total_death_per_million": "24691"
                },
                {
                    "country_id": "49",
                    "country_name": "japan",
                    "total_cases": "39858",
                    "new_cases": "",
                    "total_death": "1016",
                    "new_death": "",
                    "total_recovered": "27197",
                    "active_cases": "",
                    "critical_cases": "11645",
                    "total_cases_per_million": "88",
                    "total_death_per_million": "315"
                },
                {
                    "country_id": "50",
                    "country_name": "armenia",
                    "total_cases": "39298",
                    "new_cases": "",
                    "total_death": "768",
                    "new_death": "",
                    "total_recovered": "30372",
                    "active_cases": "",
                    "critical_cases": "8158",
                    "total_cases_per_million": "10",
                    "total_death_per_million": "13259"
                },
                {
                    "country_id": "51",
                    "country_name": "ghana",
                    "total_cases": "37812",
                    "new_cases": "",
                    "total_death": "191",
                    "new_death": "",
                    "total_recovered": "34313",
                    "active_cases": "",
                    "critical_cases": "3308",
                    "total_cases_per_million": "8",
                    "total_death_per_million": "1215"
                },
                {
                    "country_id": "52",
                    "country_name": "kyrgyzstan",
                    "total_cases": "37541",
                    "new_cases": "",
                    "total_death": "1427",
                    "new_death": "",
                    "total_recovered": "28743",
                    "active_cases": "",
                    "critical_cases": "7371",
                    "total_cases_per_million": "24",
                    "total_death_per_million": "5746"
                },
                {
                    "country_id": "53",
                    "country_name": "afghanistan",
                    "total_cases": "36782",
                    "new_cases": "",
                    "total_death": "1288",
                    "new_death": "",
                    "total_recovered": "25669",
                    "active_cases": "",
                    "critical_cases": "9825",
                    "total_cases_per_million": "31",
                    "total_death_per_million": "943"
                },
                {
                    "country_id": "54",
                    "country_name": "switzerland",
                    "total_cases": "35746",
                    "new_cases": "",
                    "total_death": "1981",
                    "new_death": "",
                    "total_recovered": "31600",
                    "active_cases": "",
                    "critical_cases": "2165",
                    "total_cases_per_million": "24",
                    "total_death_per_million": "4127"
                },
                {
                    "country_id": "55",
                    "country_name": "azerbaijan",
                    "total_cases": "32910",
                    "new_cases": "",
                    "total_death": "473",
                    "new_death": "",
                    "total_recovered": "28348",
                    "active_cases": "",
                    "critical_cases": "4089",
                    "total_cases_per_million": "66",
                    "total_death_per_million": "3243"
                },
                {
                    "country_id": "56",
                    "country_name": "algeria",
                    "total_cases": "32504",
                    "new_cases": "",
                    "total_death": "1248",
                    "new_death": "",
                    "total_recovered": "22375",
                    "active_cases": "",
                    "critical_cases": "8881",
                    "total_cases_per_million": "57",
                    "total_death_per_million": "740"
                },
                {
                    "country_id": "57",
                    "country_name": "morocco",
                    "total_cases": "27217",
                    "new_cases": "",
                    "total_death": "417",
                    "new_death": "",
                    "total_recovered": "19629",
                    "active_cases": "",
                    "critical_cases": "7171",
                    "total_cases_per_million": "31",
                    "total_death_per_million": "737"
                },
                {
                    "country_id": "58",
                    "country_name": "uzbekistan",
                    "total_cases": "27047",
                    "new_cases": "",
                    "total_death": "165",
                    "new_death": "",
                    "total_recovered": "18051",
                    "active_cases": "",
                    "critical_cases": "8831",
                    "total_cases_per_million": "224",
                    "total_death_per_million": "807"
                },
                {
                    "country_id": "59",
                    "country_name": "serbia",
                    "total_cases": "26738",
                    "new_cases": "",
                    "total_death": "605",
                    "new_death": "",
                    "total_recovered": "14047",
                    "active_cases": "",
                    "critical_cases": "12086",
                    "total_cases_per_million": "143",
                    "total_death_per_million": "3061"
                },
                {
                    "country_id": "60",
                    "country_name": "ireland",
                    "total_cases": "26253",
                    "new_cases": "",
                    "total_death": "1763",
                    "new_death": "",
                    "total_recovered": "23364",
                    "active_cases": "",
                    "critical_cases": "1126",
                    "total_cases_per_million": "5",
                    "total_death_per_million": "5311"
                },
                {
                    "country_id": "61",
                    "country_name": "moldova",
                    "total_cases": "25814",
                    "new_cases": "",
                    "total_death": "810",
                    "new_death": "",
                    "total_recovered": "18167",
                    "active_cases": "",
                    "critical_cases": "6837",
                    "total_cases_per_million": "362",
                    "total_death_per_million": "6401"
                },
                {
                    "country_id": "62",
                    "country_name": "kenya",
                    "total_cases": "23202",
                    "new_cases": "",
                    "total_death": "388",
                    "new_death": "",
                    "total_recovered": "9327",
                    "active_cases": "",
                    "critical_cases": "13487",
                    "total_cases_per_million": "44",
                    "total_death_per_million": "431"
                },
                {
                    "country_id": "63",
                    "country_name": "austria",
                    "total_cases": "21481",
                    "new_cases": "",
                    "total_death": "719",
                    "new_death": "",
                    "total_recovered": "19336",
                    "active_cases": "",
                    "critical_cases": "1426",
                    "total_cases_per_million": "23",
                    "total_death_per_million": "2384"
                },
                {
                    "country_id": "64",
                    "country_name": "venezuela",
                    "total_cases": "21438",
                    "new_cases": "",
                    "total_death": "187",
                    "new_death": "",
                    "total_recovered": "11875",
                    "active_cases": "",
                    "critical_cases": "9376",
                    "total_cases_per_million": "25",
                    "total_death_per_million": "754"
                },
                {
                    "country_id": "65",
                    "country_name": "nepal",
                    "total_cases": "21009",
                    "new_cases": "",
                    "total_death": "58",
                    "new_death": "",
                    "total_recovered": "15026",
                    "active_cases": "",
                    "critical_cases": "5925",
                    "total_cases_per_million": "",
                    "total_death_per_million": "720"
                },
                {
                    "country_id": "66",
                    "country_name": "ethiopia",
                    "total_cases": "19877",
                    "new_cases": "",
                    "total_death": "343",
                    "new_death": "",
                    "total_recovered": "8240",
                    "active_cases": "",
                    "critical_cases": "11294",
                    "total_cases_per_million": "153",
                    "total_death_per_million": "173"
                },
                {
                    "country_id": "67",
                    "country_name": "costa rica",
                    "total_cases": "19837",
                    "new_cases": "",
                    "total_death": "181",
                    "new_death": "",
                    "total_recovered": "6590",
                    "active_cases": "",
                    "critical_cases": "13066",
                    "total_cases_per_million": "98",
                    "total_death_per_million": "3891"
                },
                {
                    "country_id": "68",
                    "country_name": "australia",
                    "total_cases": "19444",
                    "new_cases": "714",
                    "total_death": "247",
                    "new_death": "15",
                    "total_recovered": "10799",
                    "active_cases": "177",
                    "critical_cases": "8398",
                    "total_cases_per_million": "47",
                    "total_death_per_million": "762"
                },
                {
                    "country_id": "69",
                    "country_name": "el salvador",
                    "total_cases": "18262",
                    "new_cases": "",
                    "total_death": "486",
                    "new_death": "",
                    "total_recovered": "8954",
                    "active_cases": "",
                    "critical_cases": "8822",
                    "total_cases_per_million": "503",
                    "total_death_per_million": "2814"
                },
                {
                    "country_id": "70",
                    "country_name": "cameroon",
                    "total_cases": "17718",
                    "new_cases": "",
                    "total_death": "391",
                    "new_death": "",
                    "total_recovered": "15320",
                    "active_cases": "",
                    "critical_cases": "2007",
                    "total_cases_per_million": "30",
                    "total_death_per_million": "666"
                },
                {
                    "country_id": "71",
                    "country_name": "czechia",
                    "total_cases": "17286",
                    "new_cases": "",
                    "total_death": "383",
                    "new_death": "",
                    "total_recovered": "11812",
                    "active_cases": "",
                    "critical_cases": "5091",
                    "total_cases_per_million": "19",
                    "total_death_per_million": "1614"
                },
                {
                    "country_id": "72",
                    "country_name": "ivory coast",
                    "total_cases": "16293",
                    "new_cases": "",
                    "total_death": "103",
                    "new_death": "",
                    "total_recovered": "11955",
                    "active_cases": "",
                    "critical_cases": "4235",
                    "total_cases_per_million": "",
                    "total_death_per_million": "616"
                },
                {
                    "country_id": "73",
                    "country_name": "s. korea",
                    "total_cases": "14456",
                    "new_cases": "33",
                    "total_death": "302",
                    "new_death": "1",
                    "total_recovered": "13406",
                    "active_cases": "54",
                    "critical_cases": "748",
                    "total_cases_per_million": "14",
                    "total_death_per_million": "282"
                },
                {
                    "country_id": "74",
                    "country_name": "denmark",
                    "total_cases": "14073",
                    "new_cases": "",
                    "total_death": "616",
                    "new_death": "",
                    "total_recovered": "12715",
                    "active_cases": "",
                    "critical_cases": "742",
                    "total_cases_per_million": "3",
                    "total_death_per_million": "2429"
                },
                {
                    "country_id": "75",
                    "country_name": "bosnia and herzegovina",
                    "total_cases": "12856",
                    "new_cases": "",
                    "total_death": "373",
                    "new_death": "",
                    "total_recovered": "6592",
                    "active_cases": "",
                    "critical_cases": "5891",
                    "total_cases_per_million": "",
                    "total_death_per_million": "3921"
                },
                {
                    "country_id": "76",
                    "country_name": "palestine",
                    "total_cases": "12770",
                    "new_cases": "",
                    "total_death": "86",
                    "new_death": "",
                    "total_recovered": "6419",
                    "active_cases": "",
                    "critical_cases": "6265",
                    "total_cases_per_million": "",
                    "total_death_per_million": "2498"
                },
                {
                    "country_id": "77",
                    "country_name": "bulgaria",
                    "total_cases": "12414",
                    "new_cases": "",
                    "total_death": "415",
                    "new_death": "",
                    "total_recovered": "6964",
                    "active_cases": "",
                    "critical_cases": "5035",
                    "total_cases_per_million": "41",
                    "total_death_per_million": "1788"
                },
                {
                    "country_id": "78",
                    "country_name": "madagascar",
                    "total_cases": "11895",
                    "new_cases": "",
                    "total_death": "123",
                    "new_death": "",
                    "total_recovered": "9286",
                    "active_cases": "",
                    "critical_cases": "2486",
                    "total_cases_per_million": "79",
                    "total_death_per_million": "429"
                },
                {
                    "country_id": "79",
                    "country_name": "sudan",
                    "total_cases": "11780",
                    "new_cases": "",
                    "total_death": "763",
                    "new_death": "",
                    "total_recovered": "6194",
                    "active_cases": "",
                    "critical_cases": "4823",
                    "total_cases_per_million": "",
                    "total_death_per_million": "268"
                },
                {
                    "country_id": "80",
                    "country_name": "north macedonia",
                    "total_cases": "11202",
                    "new_cases": "",
                    "total_death": "505",
                    "new_death": "",
                    "total_recovered": "7108",
                    "active_cases": "",
                    "critical_cases": "3589",
                    "total_cases_per_million": "4",
                    "total_death_per_million": "5377"
                },
                {
                    "country_id": "81",
                    "country_name": "senegal",
                    "total_cases": "10432",
                    "new_cases": "",
                    "total_death": "214",
                    "new_death": "",
                    "total_recovered": "6920",
                    "active_cases": "",
                    "critical_cases": "3298",
                    "total_cases_per_million": "41",
                    "total_death_per_million": "622"
                },
                {
                    "country_id": "82",
                    "country_name": "norway",
                    "total_cases": "9362",
                    "new_cases": "",
                    "total_death": "256",
                    "new_death": "",
                    "total_recovered": "8752",
                    "active_cases": "",
                    "critical_cases": "354",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "1726"
                },
                {
                    "country_id": "83",
                    "country_name": "drc",
                    "total_cases": "9178",
                    "new_cases": "",
                    "total_death": "215",
                    "new_death": "",
                    "total_recovered": "7727",
                    "active_cases": "",
                    "critical_cases": "1236",
                    "total_cases_per_million": "",
                    "total_death_per_million": "102"
                },
                {
                    "country_id": "84",
                    "country_name": "malaysia",
                    "total_cases": "9002",
                    "new_cases": "",
                    "total_death": "125",
                    "new_death": "",
                    "total_recovered": "8684",
                    "active_cases": "",
                    "critical_cases": "193",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "278"
                },
                {
                    "country_id": "85",
                    "country_name": "french guiana",
                    "total_cases": "7998",
                    "new_cases": "",
                    "total_death": "45",
                    "new_death": "",
                    "total_recovered": "6873",
                    "active_cases": "",
                    "critical_cases": "1080",
                    "total_cases_per_million": "26",
                    "total_death_per_million": "26719"
                },
                {
                    "country_id": "86",
                    "country_name": "gabon",
                    "total_cases": "7646",
                    "new_cases": "",
                    "total_death": "51",
                    "new_death": "",
                    "total_recovered": "5408",
                    "active_cases": "",
                    "critical_cases": "2187",
                    "total_cases_per_million": "11",
                    "total_death_per_million": "3428"
                },
                {
                    "country_id": "87",
                    "country_name": "tajikistan",
                    "total_cases": "7583",
                    "new_cases": "",
                    "total_death": "61",
                    "new_death": "",
                    "total_recovered": "6356",
                    "active_cases": "",
                    "critical_cases": "1166",
                    "total_cases_per_million": "",
                    "total_death_per_million": "794"
                },
                {
                    "country_id": "88",
                    "country_name": "haiti",
                    "total_cases": "7532",
                    "new_cases": "21",
                    "total_death": "171",
                    "new_death": "5",
                    "total_recovered": "4832",
                    "active_cases": "",
                    "critical_cases": "2529",
                    "total_cases_per_million": "",
                    "total_death_per_million": "660"
                },
                {
                    "country_id": "89",
                    "country_name": "guinea",
                    "total_cases": "7489",
                    "new_cases": "",
                    "total_death": "48",
                    "new_death": "",
                    "total_recovered": "6591",
                    "active_cases": "",
                    "critical_cases": "850",
                    "total_cases_per_million": "24",
                    "total_death_per_million": "569"
                },
                {
                    "country_id": "90",
                    "country_name": "finland",
                    "total_cases": "7483",
                    "new_cases": "",
                    "total_death": "331",
                    "new_death": "",
                    "total_recovered": "6950",
                    "active_cases": "",
                    "critical_cases": "202",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "1350"
                },
                {
                    "country_id": "91",
                    "country_name": "luxembourg",
                    "total_cases": "6917",
                    "new_cases": "",
                    "total_death": "118",
                    "new_death": "",
                    "total_recovered": "5537",
                    "active_cases": "",
                    "critical_cases": "1262",
                    "total_cases_per_million": "7",
                    "total_death_per_million": "11034"
                },
                {
                    "country_id": "92",
                    "country_name": "zambia",
                    "total_cases": "6793",
                    "new_cases": "",
                    "total_death": "173",
                    "new_death": "",
                    "total_recovered": "5109",
                    "active_cases": "",
                    "critical_cases": "1511",
                    "total_cases_per_million": "",
                    "total_death_per_million": "369"
                },
                {
                    "country_id": "93",
                    "country_name": "mauritania",
                    "total_cases": "6418",
                    "new_cases": "",
                    "total_death": "157",
                    "new_death": "",
                    "total_recovered": "5209",
                    "active_cases": "",
                    "critical_cases": "1052",
                    "total_cases_per_million": "3",
                    "total_death_per_million": "1377"
                },
                {
                    "country_id": "94",
                    "country_name": "paraguay",
                    "total_cases": "5852",
                    "new_cases": "",
                    "total_death": "59",
                    "new_death": "",
                    "total_recovered": "4645",
                    "active_cases": "",
                    "critical_cases": "1148",
                    "total_cases_per_million": "16",
                    "total_death_per_million": "820"
                },
                {
                    "country_id": "95",
                    "country_name": "albania",
                    "total_cases": "5750",
                    "new_cases": "",
                    "total_death": "176",
                    "new_death": "",
                    "total_recovered": "3031",
                    "active_cases": "",
                    "critical_cases": "2543",
                    "total_cases_per_million": "16",
                    "total_death_per_million": "1998"
                },
                {
                    "country_id": "96",
                    "country_name": "croatia",
                    "total_cases": "5318",
                    "new_cases": "",
                    "total_death": "154",
                    "new_death": "",
                    "total_recovered": "4517",
                    "active_cases": "",
                    "critical_cases": "647",
                    "total_cases_per_million": "7",
                    "total_death_per_million": "1296"
                },
                {
                    "country_id": "97",
                    "country_name": "djibouti",
                    "total_cases": "5248",
                    "new_cases": "",
                    "total_death": "59",
                    "new_death": "",
                    "total_recovered": "5044",
                    "active_cases": "",
                    "critical_cases": "145",
                    "total_cases_per_million": "",
                    "total_death_per_million": "5305"
                },
                {
                    "country_id": "98",
                    "country_name": "lebanon",
                    "total_cases": "5062",
                    "new_cases": "",
                    "total_death": "65",
                    "new_death": "",
                    "total_recovered": "1837",
                    "active_cases": "",
                    "critical_cases": "3160",
                    "total_cases_per_million": "40",
                    "total_death_per_million": "742"
                },
                {
                    "country_id": "99",
                    "country_name": "greece",
                    "total_cases": "4855",
                    "new_cases": "",
                    "total_death": "209",
                    "new_death": "",
                    "total_recovered": "1374",
                    "active_cases": "",
                    "critical_cases": "3272",
                    "total_cases_per_million": "13",
                    "total_death_per_million": "466"
                },
                {
                    "country_id": "100",
                    "country_name": "equatorial guinea",
                    "total_cases": "4821",
                    "new_cases": "",
                    "total_death": "83",
                    "new_death": "",
                    "total_recovered": "2182",
                    "active_cases": "",
                    "critical_cases": "2556",
                    "total_cases_per_million": "",
                    "total_death_per_million": "3427"
                },
                {
                    "country_id": "101",
                    "country_name": "car",
                    "total_cases": "4618",
                    "new_cases": "",
                    "total_death": "59",
                    "new_death": "",
                    "total_recovered": "1640",
                    "active_cases": "",
                    "critical_cases": "2919",
                    "total_cases_per_million": "2",
                    "total_death_per_million": "955"
                },
                {
                    "country_id": "102",
                    "country_name": "hungary",
                    "total_cases": "4553",
                    "new_cases": "",
                    "total_death": "598",
                    "new_death": "",
                    "total_recovered": "3415",
                    "active_cases": "",
                    "critical_cases": "540",
                    "total_cases_per_million": "7",
                    "total_death_per_million": "471"
                },
                {
                    "country_id": "103",
                    "country_name": "maldives",
                    "total_cases": "4446",
                    "new_cases": "",
                    "total_death": "19",
                    "new_death": "",
                    "total_recovered": "2693",
                    "active_cases": "",
                    "critical_cases": "1734",
                    "total_cases_per_million": "12",
                    "total_death_per_million": "8212"
                },
                {
                    "country_id": "104",
                    "country_name": "malawi",
                    "total_cases": "4361",
                    "new_cases": "",
                    "total_death": "128",
                    "new_death": "",
                    "total_recovered": "2047",
                    "active_cases": "",
                    "critical_cases": "2186",
                    "total_cases_per_million": "4",
                    "total_death_per_million": "227"
                },
                {
                    "country_id": "105",
                    "country_name": "libya",
                    "total_cases": "4224",
                    "new_cases": "",
                    "total_death": "96",
                    "new_death": "",
                    "total_recovered": "633",
                    "active_cases": "",
                    "critical_cases": "3495",
                    "total_cases_per_million": "",
                    "total_death_per_million": "614"
                },
                {
                    "country_id": "106",
                    "country_name": "zimbabwe",
                    "total_cases": "4221",
                    "new_cases": "",
                    "total_death": "81",
                    "new_death": "",
                    "total_recovered": "1238",
                    "active_cases": "",
                    "critical_cases": "2902",
                    "total_cases_per_million": "",
                    "total_death_per_million": "284"
                },
                {
                    "country_id": "107",
                    "country_name": "nicaragua",
                    "total_cases": "3902",
                    "new_cases": "",
                    "total_death": "123",
                    "new_death": "",
                    "total_recovered": "2913",
                    "active_cases": "",
                    "critical_cases": "866",
                    "total_cases_per_million": "",
                    "total_death_per_million": "588"
                },
                {
                    "country_id": "108",
                    "country_name": "hong kong",
                    "total_cases": "3670",
                    "new_cases": "",
                    "total_death": "42",
                    "new_death": "1",
                    "total_recovered": "2141",
                    "active_cases": "",
                    "critical_cases": "1487",
                    "total_cases_per_million": "43",
                    "total_death_per_million": "489"
                },
                {
                    "country_id": "109",
                    "country_name": "congo",
                    "total_cases": "3546",
                    "new_cases": "",
                    "total_death": "58",
                    "new_death": "",
                    "total_recovered": "1589",
                    "active_cases": "",
                    "critical_cases": "1899",
                    "total_cases_per_million": "",
                    "total_death_per_million": "641"
                },
                {
                    "country_id": "110",
                    "country_name": "montenegro",
                    "total_cases": "3361",
                    "new_cases": "",
                    "total_death": "53",
                    "new_death": "",
                    "total_recovered": "1869",
                    "active_cases": "",
                    "critical_cases": "1439",
                    "total_cases_per_million": "",
                    "total_death_per_million": "5351"
                },
                {
                    "country_id": "111",
                    "country_name": "thailand",
                    "total_cases": "3328",
                    "new_cases": "7",
                    "total_death": "58",
                    "new_death": "",
                    "total_recovered": "3142",
                    "active_cases": "",
                    "critical_cases": "128",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "48"
                },
                {
                    "country_id": "112",
                    "country_name": "somalia",
                    "total_cases": "3220",
                    "new_cases": "",
                    "total_death": "93",
                    "new_death": "",
                    "total_recovered": "1598",
                    "active_cases": "",
                    "critical_cases": "1529",
                    "total_cases_per_million": "2",
                    "total_death_per_million": "202"
                },
                {
                    "country_id": "113",
                    "country_name": "mayotte",
                    "total_cases": "3023",
                    "new_cases": "",
                    "total_death": "39",
                    "new_death": "",
                    "total_recovered": "2738",
                    "active_cases": "",
                    "critical_cases": "246",
                    "total_cases_per_million": "2",
                    "total_death_per_million": "11058"
                },
                {
                    "country_id": "114",
                    "country_name": "eswatini",
                    "total_cases": "2856",
                    "new_cases": "",
                    "total_death": "49",
                    "new_death": "",
                    "total_recovered": "1258",
                    "active_cases": "",
                    "critical_cases": "1549",
                    "total_cases_per_million": "5",
                    "total_death_per_million": "2459"
                },
                {
                    "country_id": "115",
                    "country_name": "sri lanka",
                    "total_cases": "2834",
                    "new_cases": "",
                    "total_death": "11",
                    "new_death": "",
                    "total_recovered": "2524",
                    "active_cases": "",
                    "critical_cases": "299",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "132"
                },
                {
                    "country_id": "116",
                    "country_name": "cuba",
                    "total_cases": "2701",
                    "new_cases": "",
                    "total_death": "88",
                    "new_death": "",
                    "total_recovered": "2382",
                    "active_cases": "",
                    "critical_cases": "231",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "238"
                },
                {
                    "country_id": "117",
                    "country_name": "cabo verde",
                    "total_cases": "2631",
                    "new_cases": "",
                    "total_death": "26",
                    "new_death": "",
                    "total_recovered": "1930",
                    "active_cases": "",
                    "critical_cases": "675",
                    "total_cases_per_million": "",
                    "total_death_per_million": "4727"
                },
                {
                    "country_id": "118",
                    "country_name": "mali",
                    "total_cases": "2543",
                    "new_cases": "",
                    "total_death": "124",
                    "new_death": "",
                    "total_recovered": "1946",
                    "active_cases": "",
                    "critical_cases": "473",
                    "total_cases_per_million": "",
                    "total_death_per_million": "125"
                },
                {
                    "country_id": "119",
                    "country_name": "namibia",
                    "total_cases": "2470",
                    "new_cases": "",
                    "total_death": "12",
                    "new_death": "",
                    "total_recovered": "211",
                    "active_cases": "",
                    "critical_cases": "2247",
                    "total_cases_per_million": "24",
                    "total_death_per_million": "971"
                },
                {
                    "country_id": "120",
                    "country_name": "south sudan",
                    "total_cases": "2437",
                    "new_cases": "",
                    "total_death": "47",
                    "new_death": "",
                    "total_recovered": "1175",
                    "active_cases": "",
                    "critical_cases": "1215",
                    "total_cases_per_million": "",
                    "total_death_per_million": "217"
                },
                {
                    "country_id": "121",
                    "country_name": "slovakia",
                    "total_cases": "2368",
                    "new_cases": "",
                    "total_death": "29",
                    "new_death": "",
                    "total_recovered": "1771",
                    "active_cases": "",
                    "critical_cases": "568",
                    "total_cases_per_million": "2",
                    "total_death_per_million": "434"
                },
                {
                    "country_id": "122",
                    "country_name": "slovenia",
                    "total_cases": "2190",
                    "new_cases": "",
                    "total_death": "123",
                    "new_death": "",
                    "total_recovered": "1854",
                    "active_cases": "",
                    "critical_cases": "213",
                    "total_cases_per_million": "2",
                    "total_death_per_million": "1053"
                },
                {
                    "country_id": "123",
                    "country_name": "lithuania",
                    "total_cases": "2137",
                    "new_cases": "",
                    "total_death": "80",
                    "new_death": "",
                    "total_recovered": "1647",
                    "active_cases": "",
                    "critical_cases": "410",
                    "total_cases_per_million": "6",
                    "total_death_per_million": "786"
                },
                {
                    "country_id": "124",
                    "country_name": "rwanda",
                    "total_cases": "2099",
                    "new_cases": "",
                    "total_death": "5",
                    "new_death": "",
                    "total_recovered": "1222",
                    "active_cases": "",
                    "critical_cases": "872",
                    "total_cases_per_million": "",
                    "total_death_per_million": "162"
                },
                {
                    "country_id": "125",
                    "country_name": "estonia",
                    "total_cases": "2091",
                    "new_cases": "",
                    "total_death": "63",
                    "new_death": "",
                    "total_recovered": "1937",
                    "active_cases": "",
                    "critical_cases": "91",
                    "total_cases_per_million": "",
                    "total_death_per_million": "1576"
                },
                {
                    "country_id": "126",
                    "country_name": "mozambique",
                    "total_cases": "2029",
                    "new_cases": "",
                    "total_death": "15",
                    "new_death": "",
                    "total_recovered": "765",
                    "active_cases": "",
                    "critical_cases": "1249",
                    "total_cases_per_million": "",
                    "total_death_per_million": "65"
                },
                {
                    "country_id": "127",
                    "country_name": "guinea-bissau",
                    "total_cases": "1981",
                    "new_cases": "",
                    "total_death": "27",
                    "new_death": "",
                    "total_recovered": "803",
                    "active_cases": "",
                    "critical_cases": "1151",
                    "total_cases_per_million": "5",
                    "total_death_per_million": "1005"
                },
                {
                    "country_id": "128",
                    "country_name": "suriname",
                    "total_cases": "1981",
                    "new_cases": "",
                    "total_death": "27",
                    "new_death": "",
                    "total_recovered": "1278",
                    "active_cases": "",
                    "critical_cases": "676",
                    "total_cases_per_million": "10",
                    "total_death_per_million": "3374"
                },
                {
                    "country_id": "129",
                    "country_name": "iceland",
                    "total_cases": "1918",
                    "new_cases": "",
                    "total_death": "10",
                    "new_death": "",
                    "total_recovered": "1825",
                    "active_cases": "",
                    "critical_cases": "83",
                    "total_cases_per_million": "",
                    "total_death_per_million": "5617"
                },
                {
                    "country_id": "130",
                    "country_name": "benin",
                    "total_cases": "1914",
                    "new_cases": "",
                    "total_death": "38",
                    "new_death": "",
                    "total_recovered": "1036",
                    "active_cases": "",
                    "critical_cases": "840",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "158"
                },
                {
                    "country_id": "131",
                    "country_name": "sierra leone",
                    "total_cases": "1855",
                    "new_cases": "",
                    "total_death": "67",
                    "new_death": "",
                    "total_recovered": "1397",
                    "active_cases": "",
                    "critical_cases": "391",
                    "total_cases_per_million": "",
                    "total_death_per_million": "232"
                },
                {
                    "country_id": "132",
                    "country_name": "yemen",
                    "total_cases": "1760",
                    "new_cases": "",
                    "total_death": "506",
                    "new_death": "",
                    "total_recovered": "863",
                    "active_cases": "",
                    "critical_cases": "391",
                    "total_cases_per_million": "",
                    "total_death_per_million": "59"
                },
                {
                    "country_id": "133",
                    "country_name": "tunisia",
                    "total_cases": "1584",
                    "new_cases": "",
                    "total_death": "51",
                    "new_death": "",
                    "total_recovered": "1227",
                    "active_cases": "",
                    "critical_cases": "306",
                    "total_cases_per_million": "3",
                    "total_death_per_million": "134"
                },
                {
                    "country_id": "134",
                    "country_name": "new zealand",
                    "total_cases": "1569",
                    "new_cases": "2",
                    "total_death": "22",
                    "new_death": "",
                    "total_recovered": "1523",
                    "active_cases": "",
                    "critical_cases": "24",
                    "total_cases_per_million": "",
                    "total_death_per_million": "314"
                },
                {
                    "country_id": "135",
                    "country_name": "angola",
                    "total_cases": "1344",
                    "new_cases": "",
                    "total_death": "59",
                    "new_death": "",
                    "total_recovered": "503",
                    "active_cases": "",
                    "critical_cases": "782",
                    "total_cases_per_million": "20",
                    "total_death_per_million": "41"
                },
                {
                    "country_id": "136",
                    "country_name": "uruguay",
                    "total_cases": "1300",
                    "new_cases": "",
                    "total_death": "37",
                    "new_death": "",
                    "total_recovered": "1048",
                    "active_cases": "",
                    "critical_cases": "215",
                    "total_cases_per_million": "3",
                    "total_death_per_million": "374"
                },
                {
                    "country_id": "137",
                    "country_name": "latvia",
                    "total_cases": "1249",
                    "new_cases": "",
                    "total_death": "32",
                    "new_death": "",
                    "total_recovered": "1070",
                    "active_cases": "",
                    "critical_cases": "147",
                    "total_cases_per_million": "",
                    "total_death_per_million": "663"
                },
                {
                    "country_id": "138",
                    "country_name": "jordan",
                    "total_cases": "1224",
                    "new_cases": "",
                    "total_death": "11",
                    "new_death": "",
                    "total_recovered": "1155",
                    "active_cases": "",
                    "critical_cases": "58",
                    "total_cases_per_million": "3",
                    "total_death_per_million": "120"
                },
                {
                    "country_id": "139",
                    "country_name": "liberia",
                    "total_cases": "1216",
                    "new_cases": "",
                    "total_death": "78",
                    "new_death": "",
                    "total_recovered": "698",
                    "active_cases": "",
                    "critical_cases": "440",
                    "total_cases_per_million": "",
                    "total_death_per_million": "240"
                },
                {
                    "country_id": "140",
                    "country_name": "uganda",
                    "total_cases": "1203",
                    "new_cases": "",
                    "total_death": "5",
                    "new_death": "",
                    "total_recovered": "1073",
                    "active_cases": "",
                    "critical_cases": "125",
                    "total_cases_per_million": "",
                    "total_death_per_million": "26"
                },
                {
                    "country_id": "141",
                    "country_name": "georgia",
                    "total_cases": "1182",
                    "new_cases": "",
                    "total_death": "17",
                    "new_death": "",
                    "total_recovered": "962",
                    "active_cases": "",
                    "critical_cases": "203",
                    "total_cases_per_million": "5",
                    "total_death_per_million": "296"
                },
                {
                    "country_id": "142",
                    "country_name": "cyprus",
                    "total_cases": "1180",
                    "new_cases": "",
                    "total_death": "19",
                    "new_death": "",
                    "total_recovered": "856",
                    "active_cases": "",
                    "critical_cases": "305",
                    "total_cases_per_million": "",
                    "total_death_per_million": "977"
                },
                {
                    "country_id": "143",
                    "country_name": "burkina faso",
                    "total_cases": "1153",
                    "new_cases": "",
                    "total_death": "54",
                    "new_death": "",
                    "total_recovered": "947",
                    "active_cases": "",
                    "critical_cases": "152",
                    "total_cases_per_million": "",
                    "total_death_per_million": "55"
                },
                {
                    "country_id": "144",
                    "country_name": "niger",
                    "total_cases": "1152",
                    "new_cases": "",
                    "total_death": "69",
                    "new_death": "",
                    "total_recovered": "1037",
                    "active_cases": "",
                    "critical_cases": "46",
                    "total_cases_per_million": "",
                    "total_death_per_million": "47"
                },
                {
                    "country_id": "145",
                    "country_name": "togo",
                    "total_cases": "988",
                    "new_cases": "",
                    "total_death": "19",
                    "new_death": "",
                    "total_recovered": "673",
                    "active_cases": "",
                    "critical_cases": "296",
                    "total_cases_per_million": "2",
                    "total_death_per_million": "119"
                },
                {
                    "country_id": "146",
                    "country_name": "andorra",
                    "total_cases": "939",
                    "new_cases": "",
                    "total_death": "52",
                    "new_death": "",
                    "total_recovered": "825",
                    "active_cases": "",
                    "critical_cases": "62",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "12151"
                },
                {
                    "country_id": "147",
                    "country_name": "chad",
                    "total_cases": "938",
                    "new_cases": "",
                    "total_death": "75",
                    "new_death": "",
                    "total_recovered": "814",
                    "active_cases": "",
                    "critical_cases": "49",
                    "total_cases_per_million": "",
                    "total_death_per_million": "57"
                },
                {
                    "country_id": "148",
                    "country_name": "jamaica",
                    "total_cases": "920",
                    "new_cases": "15",
                    "total_death": "12",
                    "new_death": "",
                    "total_recovered": "745",
                    "active_cases": "2",
                    "critical_cases": "163",
                    "total_cases_per_million": "",
                    "total_death_per_million": "311"
                },
                {
                    "country_id": "149",
                    "country_name": "syria",
                    "total_cases": "892",
                    "new_cases": "",
                    "total_death": "46",
                    "new_death": "",
                    "total_recovered": "283",
                    "active_cases": "",
                    "critical_cases": "563",
                    "total_cases_per_million": "",
                    "total_death_per_million": "51"
                },
                {
                    "country_id": "150",
                    "country_name": "malta",
                    "total_cases": "890",
                    "new_cases": "",
                    "total_death": "9",
                    "new_death": "",
                    "total_recovered": "666",
                    "active_cases": "",
                    "critical_cases": "215",
                    "total_cases_per_million": "",
                    "total_death_per_million": "2015"
                },
                {
                    "country_id": "151",
                    "country_name": "sao tome and principe",
                    "total_cases": "875",
                    "new_cases": "",
                    "total_death": "15",
                    "new_death": "",
                    "total_recovered": "794",
                    "active_cases": "",
                    "critical_cases": "66",
                    "total_cases_per_million": "",
                    "total_death_per_million": "3986"
                },
                {
                    "country_id": "152",
                    "country_name": "botswana",
                    "total_cases": "804",
                    "new_cases": "",
                    "total_death": "2",
                    "new_death": "",
                    "total_recovered": "63",
                    "active_cases": "",
                    "critical_cases": "739",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "341"
                },
                {
                    "country_id": "153",
                    "country_name": "lesotho",
                    "total_cases": "726",
                    "new_cases": "",
                    "total_death": "21",
                    "new_death": "",
                    "total_recovered": "174",
                    "active_cases": "",
                    "critical_cases": "531",
                    "total_cases_per_million": "",
                    "total_death_per_million": "339"
                },
                {
                    "country_id": "154",
                    "country_name": "bahamas",
                    "total_cases": "715",
                    "new_cases": "",
                    "total_death": "14",
                    "new_death": "",
                    "total_recovered": "91",
                    "active_cases": "",
                    "critical_cases": "610",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "1817"
                },
                {
                    "country_id": "155",
                    "country_name": "diamond princess",
                    "total_cases": "712",
                    "new_cases": "",
                    "total_death": "13",
                    "new_death": "",
                    "total_recovered": "651",
                    "active_cases": "",
                    "critical_cases": "48",
                    "total_cases_per_million": "4",
                    "total_death_per_million": ""
                },
                {
                    "country_id": "156",
                    "country_name": "san marino",
                    "total_cases": "699",
                    "new_cases": "",
                    "total_death": "42",
                    "new_death": "",
                    "total_recovered": "657",
                    "active_cases": "",
                    "critical_cases": "0",
                    "total_cases_per_million": "",
                    "total_death_per_million": "20596"
                },
                {
                    "country_id": "157",
                    "country_name": "vietnam",
                    "total_cases": "672",
                    "new_cases": "",
                    "total_death": "8",
                    "new_death": "",
                    "total_recovered": "378",
                    "active_cases": "",
                    "critical_cases": "286",
                    "total_cases_per_million": "",
                    "total_death_per_million": "7"
                },
                {
                    "country_id": "158",
                    "country_name": "gambia",
                    "total_cases": "671",
                    "new_cases": "",
                    "total_death": "14",
                    "new_death": "",
                    "total_recovered": "79",
                    "active_cases": "",
                    "critical_cases": "578",
                    "total_cases_per_million": "",
                    "total_death_per_million": "277"
                },
                {
                    "country_id": "159",
                    "country_name": "réunion",
                    "total_cases": "669",
                    "new_cases": "",
                    "total_death": "4",
                    "new_death": "",
                    "total_recovered": "592",
                    "active_cases": "",
                    "critical_cases": "73",
                    "total_cases_per_million": "3",
                    "total_death_per_million": "747"
                },
                {
                    "country_id": "160",
                    "country_name": "channel islands",
                    "total_cases": "595",
                    "new_cases": "",
                    "total_death": "47",
                    "new_death": "",
                    "total_recovered": "533",
                    "active_cases": "",
                    "critical_cases": "15",
                    "total_cases_per_million": "",
                    "total_death_per_million": "3419"
                },
                {
                    "country_id": "161",
                    "country_name": "tanzania",
                    "total_cases": "509",
                    "new_cases": "",
                    "total_death": "21",
                    "new_death": "",
                    "total_recovered": "183",
                    "active_cases": "",
                    "critical_cases": "305",
                    "total_cases_per_million": "7",
                    "total_death_per_million": "9"
                },
                {
                    "country_id": "162",
                    "country_name": "guyana",
                    "total_cases": "497",
                    "new_cases": "",
                    "total_death": "22",
                    "new_death": "",
                    "total_recovered": "186",
                    "active_cases": "",
                    "critical_cases": "289",
                    "total_cases_per_million": "2",
                    "total_death_per_million": "632"
                },
                {
                    "country_id": "163",
                    "country_name": "taiwan",
                    "total_cases": "476",
                    "new_cases": "",
                    "total_death": "7",
                    "new_death": "",
                    "total_recovered": "441",
                    "active_cases": "",
                    "critical_cases": "28",
                    "total_cases_per_million": "",
                    "total_death_per_million": "20"
                },
                {
                    "country_id": "164",
                    "country_name": "burundi",
                    "total_cases": "395",
                    "new_cases": "",
                    "total_death": "1",
                    "new_death": "",
                    "total_recovered": "304",
                    "active_cases": "",
                    "critical_cases": "90",
                    "total_cases_per_million": "",
                    "total_death_per_million": "33"
                },
                {
                    "country_id": "165",
                    "country_name": "comoros",
                    "total_cases": "388",
                    "new_cases": "",
                    "total_death": "7",
                    "new_death": "",
                    "total_recovered": "340",
                    "active_cases": "",
                    "critical_cases": "41",
                    "total_cases_per_million": "",
                    "total_death_per_million": "445"
                },
                {
                    "country_id": "166",
                    "country_name": "myanmar",
                    "total_cases": "356",
                    "new_cases": "1",
                    "total_death": "6",
                    "new_death": "",
                    "total_recovered": "302",
                    "active_cases": "",
                    "critical_cases": "48",
                    "total_cases_per_million": "",
                    "total_death_per_million": "7"
                },
                {
                    "country_id": "167",
                    "country_name": "mauritius",
                    "total_cases": "344",
                    "new_cases": "",
                    "total_death": "10",
                    "new_death": "",
                    "total_recovered": "334",
                    "active_cases": "",
                    "critical_cases": "0",
                    "total_cases_per_million": "",
                    "total_death_per_million": "270"
                },
                {
                    "country_id": "168",
                    "country_name": "isle of man",
                    "total_cases": "336",
                    "new_cases": "",
                    "total_death": "24",
                    "new_death": "",
                    "total_recovered": "312",
                    "active_cases": "",
                    "critical_cases": "0",
                    "total_cases_per_million": "",
                    "total_death_per_million": "3949"
                },
                {
                    "country_id": "169",
                    "country_name": "mongolia",
                    "total_cases": "293",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "244",
                    "active_cases": "14",
                    "critical_cases": "49",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "89"
                },
                {
                    "country_id": "170",
                    "country_name": "eritrea",
                    "total_cases": "282",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "225",
                    "active_cases": "",
                    "critical_cases": "57",
                    "total_cases_per_million": "",
                    "total_death_per_million": "79"
                },
                {
                    "country_id": "171",
                    "country_name": "guadeloupe",
                    "total_cases": "272",
                    "new_cases": "",
                    "total_death": "14",
                    "new_death": "",
                    "total_recovered": "179",
                    "active_cases": "",
                    "critical_cases": "79",
                    "total_cases_per_million": "",
                    "total_death_per_million": "680"
                },
                {
                    "country_id": "172",
                    "country_name": "martinique",
                    "total_cases": "269",
                    "new_cases": "",
                    "total_death": "15",
                    "new_death": "",
                    "total_recovered": "98",
                    "active_cases": "",
                    "critical_cases": "156",
                    "total_cases_per_million": "4",
                    "total_death_per_million": "717"
                },
                {
                    "country_id": "173",
                    "country_name": "cambodia",
                    "total_cases": "243",
                    "new_cases": "3",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "202",
                    "active_cases": "5",
                    "critical_cases": "41",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "15"
                },
                {
                    "country_id": "174",
                    "country_name": "faeroe islands",
                    "total_cases": "227",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "192",
                    "active_cases": "",
                    "critical_cases": "35",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "4644"
                },
                {
                    "country_id": "175",
                    "country_name": "cayman islands",
                    "total_cases": "203",
                    "new_cases": "",
                    "total_death": "1",
                    "new_death": "",
                    "total_recovered": "202",
                    "active_cases": "",
                    "critical_cases": "0",
                    "total_cases_per_million": "",
                    "total_death_per_million": "3085"
                },
                {
                    "country_id": "176",
                    "country_name": "trinidad and tobago",
                    "total_cases": "194",
                    "new_cases": "",
                    "total_death": "8",
                    "new_death": "",
                    "total_recovered": "135",
                    "active_cases": "",
                    "critical_cases": "51",
                    "total_cases_per_million": "",
                    "total_death_per_million": "139"
                },
                {
                    "country_id": "177",
                    "country_name": "gibraltar",
                    "total_cases": "189",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "183",
                    "active_cases": "",
                    "critical_cases": "6",
                    "total_cases_per_million": "",
                    "total_death_per_million": "5610"
                },
                {
                    "country_id": "178",
                    "country_name": "bermuda",
                    "total_cases": "157",
                    "new_cases": "",
                    "total_death": "9",
                    "new_death": "",
                    "total_recovered": "144",
                    "active_cases": "",
                    "critical_cases": "4",
                    "total_cases_per_million": "",
                    "total_death_per_million": "2522"
                },
                {
                    "country_id": "179",
                    "country_name": "sint maarten",
                    "total_cases": "150",
                    "new_cases": "",
                    "total_death": "16",
                    "new_death": "",
                    "total_recovered": "64",
                    "active_cases": "",
                    "critical_cases": "70",
                    "total_cases_per_million": "",
                    "total_death_per_million": "3495"
                },
                {
                    "country_id": "180",
                    "country_name": "brunei",
                    "total_cases": "141",
                    "new_cases": "",
                    "total_death": "3",
                    "new_death": "",
                    "total_recovered": "138",
                    "active_cases": "",
                    "critical_cases": "0",
                    "total_cases_per_million": "",
                    "total_death_per_million": "322"
                },
                {
                    "country_id": "181",
                    "country_name": "barbados",
                    "total_cases": "132",
                    "new_cases": "",
                    "total_death": "7",
                    "new_death": "",
                    "total_recovered": "98",
                    "active_cases": "",
                    "critical_cases": "27",
                    "total_cases_per_million": "",
                    "total_death_per_million": "459"
                },
                {
                    "country_id": "182",
                    "country_name": "aruba",
                    "total_cases": "132",
                    "new_cases": "",
                    "total_death": "3",
                    "new_death": "",
                    "total_recovered": "112",
                    "active_cases": "",
                    "critical_cases": "17",
                    "total_cases_per_million": "",
                    "total_death_per_million": "1236"
                },
                {
                    "country_id": "183",
                    "country_name": "monaco",
                    "total_cases": "123",
                    "new_cases": "",
                    "total_death": "4",
                    "new_death": "",
                    "total_recovered": "105",
                    "active_cases": "",
                    "critical_cases": "14",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "3132"
                },
                {
                    "country_id": "184",
                    "country_name": "turks and caicos",
                    "total_cases": "116",
                    "new_cases": "",
                    "total_death": "2",
                    "new_death": "",
                    "total_recovered": "38",
                    "active_cases": "",
                    "critical_cases": "76",
                    "total_cases_per_million": "3",
                    "total_death_per_million": "2992"
                },
                {
                    "country_id": "185",
                    "country_name": "papua new guinea",
                    "total_cases": "114",
                    "new_cases": "",
                    "total_death": "2",
                    "new_death": "",
                    "total_recovered": "34",
                    "active_cases": "",
                    "critical_cases": "78",
                    "total_cases_per_million": "",
                    "total_death_per_million": "13"
                },
                {
                    "country_id": "186",
                    "country_name": "seychelles",
                    "total_cases": "114",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "113",
                    "active_cases": "",
                    "critical_cases": "1",
                    "total_cases_per_million": "",
                    "total_death_per_million": "1158"
                },
                {
                    "country_id": "187",
                    "country_name": "bhutan",
                    "total_cases": "105",
                    "new_cases": "2",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "93",
                    "active_cases": "3",
                    "critical_cases": "12",
                    "total_cases_per_million": "",
                    "total_death_per_million": "136"
                },
                {
                    "country_id": "188",
                    "country_name": "antigua and barbuda",
                    "total_cases": "92",
                    "new_cases": "",
                    "total_death": "3",
                    "new_death": "",
                    "total_recovered": "75",
                    "active_cases": "",
                    "critical_cases": "14",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "939"
                },
                {
                    "country_id": "189",
                    "country_name": "liechtenstein",
                    "total_cases": "89",
                    "new_cases": "",
                    "total_death": "1",
                    "new_death": "",
                    "total_recovered": "85",
                    "active_cases": "",
                    "critical_cases": "3",
                    "total_cases_per_million": "",
                    "total_death_per_million": "2334"
                },
                {
                    "country_id": "190",
                    "country_name": "belize",
                    "total_cases": "72",
                    "new_cases": "15",
                    "total_death": "2",
                    "new_death": "",
                    "total_recovered": "31",
                    "active_cases": "1",
                    "critical_cases": "39",
                    "total_cases_per_million": "2",
                    "total_death_per_million": "181"
                },
                {
                    "country_id": "191",
                    "country_name": "french polynesia",
                    "total_cases": "64",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "62",
                    "active_cases": "",
                    "critical_cases": "2",
                    "total_cases_per_million": "",
                    "total_death_per_million": "228"
                },
                {
                    "country_id": "192",
                    "country_name": "st. vincent grenadines",
                    "total_cases": "55",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "45",
                    "active_cases": "",
                    "critical_cases": "10",
                    "total_cases_per_million": "",
                    "total_death_per_million": "496"
                },
                {
                    "country_id": "193",
                    "country_name": "saint martin",
                    "total_cases": "53",
                    "new_cases": "",
                    "total_death": "3",
                    "new_death": "",
                    "total_recovered": "41",
                    "active_cases": "",
                    "critical_cases": "9",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "1369"
                },
                {
                    "country_id": "194",
                    "country_name": "macao",
                    "total_cases": "46",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "46",
                    "active_cases": "",
                    "critical_cases": "0",
                    "total_cases_per_million": "",
                    "total_death_per_million": "71"
                },
                {
                    "country_id": "195",
                    "country_name": "curaçao",
                    "total_cases": "29",
                    "new_cases": "",
                    "total_death": "1",
                    "new_death": "",
                    "total_recovered": "24",
                    "active_cases": "",
                    "critical_cases": "4",
                    "total_cases_per_million": "",
                    "total_death_per_million": "177"
                },
                {
                    "country_id": "196",
                    "country_name": "fiji",
                    "total_cases": "27",
                    "new_cases": "",
                    "total_death": "1",
                    "new_death": "",
                    "total_recovered": "18",
                    "active_cases": "",
                    "critical_cases": "8",
                    "total_cases_per_million": "",
                    "total_death_per_million": "30"
                },
                {
                    "country_id": "197",
                    "country_name": "saint lucia",
                    "total_cases": "25",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "22",
                    "active_cases": "",
                    "critical_cases": "3",
                    "total_cases_per_million": "",
                    "total_death_per_million": "136"
                },
                {
                    "country_id": "198",
                    "country_name": "timor-leste",
                    "total_cases": "25",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "24",
                    "active_cases": "",
                    "critical_cases": "1",
                    "total_cases_per_million": "",
                    "total_death_per_million": "19"
                },
                {
                    "country_id": "199",
                    "country_name": "grenada",
                    "total_cases": "24",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "23",
                    "active_cases": "",
                    "critical_cases": "1",
                    "total_cases_per_million": "",
                    "total_death_per_million": "213"
                },
                {
                    "country_id": "200",
                    "country_name": "new caledonia",
                    "total_cases": "22",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "22",
                    "active_cases": "",
                    "critical_cases": "0",
                    "total_cases_per_million": "",
                    "total_death_per_million": "77"
                },
                {
                    "country_id": "201",
                    "country_name": "laos",
                    "total_cases": "20",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "19",
                    "active_cases": "",
                    "critical_cases": "1",
                    "total_cases_per_million": "",
                    "total_death_per_million": "3"
                },
                {
                    "country_id": "202",
                    "country_name": "dominica",
                    "total_cases": "18",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "18",
                    "active_cases": "",
                    "critical_cases": "0",
                    "total_cases_per_million": "",
                    "total_death_per_million": "250"
                },
                {
                    "country_id": "203",
                    "country_name": "saint kitts and nevis",
                    "total_cases": "17",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "16",
                    "active_cases": "",
                    "critical_cases": "1",
                    "total_cases_per_million": "",
                    "total_death_per_million": "319"
                },
                {
                    "country_id": "204",
                    "country_name": "greenland",
                    "total_cases": "14",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "13",
                    "active_cases": "",
                    "critical_cases": "1",
                    "total_cases_per_million": "",
                    "total_death_per_million": "247"
                },
                {
                    "country_id": "205",
                    "country_name": "montserrat",
                    "total_cases": "13",
                    "new_cases": "",
                    "total_death": "1",
                    "new_death": "",
                    "total_recovered": "10",
                    "active_cases": "",
                    "critical_cases": "2",
                    "total_cases_per_million": "",
                    "total_death_per_million": "2604"
                },
                {
                    "country_id": "206",
                    "country_name": "caribbean netherlands",
                    "total_cases": "13",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "7",
                    "active_cases": "",
                    "critical_cases": "6",
                    "total_cases_per_million": "",
                    "total_death_per_million": "495"
                },
                {
                    "country_id": "207",
                    "country_name": "falkland islands",
                    "total_cases": "13",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "13",
                    "active_cases": "",
                    "critical_cases": "0",
                    "total_cases_per_million": "",
                    "total_death_per_million": "3727"
                },
                {
                    "country_id": "208",
                    "country_name": "vatican city",
                    "total_cases": "12",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "12",
                    "active_cases": "",
                    "critical_cases": "0",
                    "total_cases_per_million": "",
                    "total_death_per_million": "14981"
                },
                {
                    "country_id": "209",
                    "country_name": "western sahara",
                    "total_cases": "10",
                    "new_cases": "",
                    "total_death": "1",
                    "new_death": "",
                    "total_recovered": "8",
                    "active_cases": "",
                    "critical_cases": "1",
                    "total_cases_per_million": "",
                    "total_death_per_million": "17"
                },
                {
                    "country_id": "210",
                    "country_name": "ms zaandam",
                    "total_cases": "9",
                    "new_cases": "",
                    "total_death": "2",
                    "new_death": "",
                    "total_recovered": "",
                    "active_cases": "",
                    "critical_cases": "7",
                    "total_cases_per_million": "",
                    "total_death_per_million": ""
                },
                {
                    "country_id": "211",
                    "country_name": "st. barth",
                    "total_cases": "9",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "6",
                    "active_cases": "",
                    "critical_cases": "3",
                    "total_cases_per_million": "",
                    "total_death_per_million": "911"
                },
                {
                    "country_id": "212",
                    "country_name": "british virgin islands",
                    "total_cases": "8",
                    "new_cases": "",
                    "total_death": "1",
                    "new_death": "",
                    "total_recovered": "7",
                    "active_cases": "",
                    "critical_cases": "0",
                    "total_cases_per_million": "",
                    "total_death_per_million": "264"
                },
                {
                    "country_id": "213",
                    "country_name": "saint pierre miquelon",
                    "total_cases": "4",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "1",
                    "active_cases": "",
                    "critical_cases": "3",
                    "total_cases_per_million": "",
                    "total_death_per_million": "691"
                },
                {
                    "country_id": "214",
                    "country_name": "anguilla",
                    "total_cases": "3",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "3",
                    "active_cases": "",
                    "critical_cases": "0",
                    "total_cases_per_million": "",
                    "total_death_per_million": "200"
                },
                {
                    "country_id": "215",
                    "country_name": "china",
                    "total_cases": "84491",
                    "new_cases": "27",
                    "total_death": "4634",
                    "new_death": "",
                    "total_recovered": "79047",
                    "active_cases": "17",
                    "critical_cases": "810",
                    "total_cases_per_million": "36",
                    "total_death_per_million": "59"
                }
            ],
            "others": {
                "message": "this api is still in progress, we are trying so hard to give our best",
                "endpoints": [
                    {
                        "url": "/",
                        "method": "GET",
                        "message": "get all report for today"
                    },
                    {
                        "url": "/yesterday",
                        "method": "GET",
                        "message": "get all report for yesterday"
                    },
                    {
                        "url": "/summary",
                        "method": "GET",
                        "message": "get total summary report for today"
                    },
                    {
                        "url": "/yesterday/summary",
                        "method": "GET",
                        "message": "get total summary report for yesterday"
                    },
                    {
                        "url": "/countries",
                        "method": "GET",
                        "message": "get all available country names"
                    },
                    {
                        "url": "/{country}",
                        "method": "GET",
                        "message": "get today report for a country, ex: /uk"
                    },
                    {
                        "url": "/yesterday/{country}",
                        "method": "GET",
                        "message": "get yesterday report for a country, ex: /usa"
                    },
                    {
                        "url": "/history",
                        "method": "GET",
                        "message": "get historical data"
                    },
                    {
                        "url": "/search",
                        "method": "POST",
                        "body": {
                            "fromDate": "05-04-2020",
                            "toDate": "08-04-2020"
                        },
                        "message": "get historical data"
                    }
                ]
            }
        }
```

</details>

***Status Code:*** 200
<hr>
<br>



### 2. GET BY COUNTRY NAME



***Endpoint:***

```bash
Method: GET
Type: HTTP
URL: http://covid-rest.herokuapp.com/{{country_name}}
```



***Example Requests/Responses:***


<details>
  <summary>
    I. Example Response: GET BY COUNTRY NAME Success Example
  </summary>
  <br>
  
```bash
Method: GET
Type: HTTP
URL: http://covid-rest.herokuapp.com/china
```

<br>

```js
        {
            "code": 200,
            "message": "OK",
            "data": {
                "country_id": "215",
                "country_name": "china",
                "total_cases": "84491",
                "new_cases": "27",
                "total_death": "4634",
                "new_death": "",
                "total_recovered": "79047",
                "active_cases": "17",
                "critical_cases": "810",
                "total_cases_per_million": "36",
                "total_death_per_million": "59"
            },
            "others": {
                "message": "this api is still in progress, we are trying so hard to give our best",
                "endpoints": [
                    {
                        "url": "/",
                        "method": "GET",
                        "message": "get all report for today"
                    },
                    {
                        "url": "/yesterday",
                        "method": "GET",
                        "message": "get all report for yesterday"
                    },
                    {
                        "url": "/summary",
                        "method": "GET",
                        "message": "get total summary report for today"
                    },
                    {
                        "url": "/yesterday/summary",
                        "method": "GET",
                        "message": "get total summary report for yesterday"
                    },
                    {
                        "url": "/countries",
                        "method": "GET",
                        "message": "get all available country names"
                    },
                    {
                        "url": "/{country}",
                        "method": "GET",
                        "message": "get today report for a country, ex: /uk"
                    },
                    {
                        "url": "/yesterday/{country}",
                        "method": "GET",
                        "message": "get yesterday report for a country, ex: /usa"
                    },
                    {
                        "url": "/history",
                        "method": "GET",
                        "message": "get historical data"
                    },
                    {
                        "url": "/search",
                        "method": "POST",
                        "body": {
                            "fromDate": "05-04-2020",
                            "toDate": "08-04-2020"
                        },
                        "message": "get historical data"
                    }
                ]
            }
        }
```

</details>

***Status Code:*** 200

<hr>
<br>


<details>
  <summary>
    II. Example Response: GET BY COUNTRY NAME Failed Example
  </summary>
  <br>

```bash
Method: GET
Type: HTTP
URL: http://covid-rest.herokuapp.com/absd
```

<br>

```js
        {
            "code": 404,
            "message": "record not found",
            "data": [
                "afghanistan",
                "albania",
                "algeria",
                "andorra",
                "angola",
                "anguilla",
                "antigua and barbuda",
                "argentina",
                "armenia",
                "aruba",
                "australia",
                "austria",
                "azerbaijan",
                "bahamas",
                "bahrain",
                "bangladesh",
                "barbados",
                "belarus",
                "belgium",
                "belize",
                "benin",
                "bermuda",
                "bhutan",
                "bolivia",
                "bosnia and herzegovina",
                "botswana",
                "brazil",
                "british virgin islands",
                "brunei",
                "bulgaria",
                "burkina faso",
                "burundi",
                "cabo verde",
                "cambodia",
                "cameroon",
                "canada",
                "car",
                "caribbean netherlands",
                "cayman islands",
                "chad",
                "channel islands",
                "chile",
                "china",
                "colombia",
                "comoros",
                "congo",
                "costa rica",
                "croatia",
                "cuba",
                "curaçao",
                "cyprus",
                "czechia",
                "denmark",
                "diamond princess",
                "djibouti",
                "dominica",
                "dominican republic",
                "drc",
                "ecuador",
                "egypt",
                "el salvador",
                "equatorial guinea",
                "eritrea",
                "estonia",
                "eswatini",
                "ethiopia",
                "faeroe islands",
                "falkland islands",
                "fiji",
                "finland",
                "france",
                "french guiana",
                "french polynesia",
                "gabon",
                "gambia",
                "georgia",
                "germany",
                "ghana",
                "gibraltar",
                "greece",
                "greenland",
                "grenada",
                "guadeloupe",
                "guatemala",
                "guinea",
                "guinea-bissau",
                "guyana",
                "haiti",
                "honduras",
                "hong kong",
                "hungary",
                "iceland",
                "india",
                "indonesia",
                "iran",
                "iraq",
                "ireland",
                "isle of man",
                "israel",
                "italy",
                "ivory coast",
                "jamaica",
                "japan",
                "jordan",
                "kazakhstan",
                "kenya",
                "kuwait",
                "kyrgyzstan",
                "laos",
                "latvia",
                "lebanon",
                "lesotho",
                "liberia",
                "libya",
                "liechtenstein",
                "lithuania",
                "luxembourg",
                "macao",
                "madagascar",
                "malawi",
                "malaysia",
                "maldives",
                "mali",
                "malta",
                "martinique",
                "mauritania",
                "mauritius",
                "mayotte",
                "mexico",
                "moldova",
                "monaco",
                "mongolia",
                "montenegro",
                "montserrat",
                "morocco",
                "mozambique",
                "ms zaandam",
                "myanmar",
                "namibia",
                "nepal",
                "netherlands",
                "new caledonia",
                "new zealand",
                "nicaragua",
                "niger",
                "nigeria",
                "north macedonia",
                "norway",
                "oman",
                "pakistan",
                "palestine",
                "panama",
                "papua new guinea",
                "paraguay",
                "peru",
                "philippines",
                "poland",
                "portugal",
                "qatar",
                "romania",
                "russia",
                "rwanda",
                "réunion",
                "s. korea",
                "saint kitts and nevis",
                "saint lucia",
                "saint martin",
                "saint pierre miquelon",
                "san marino",
                "sao tome and principe",
                "saudi arabia",
                "senegal",
                "serbia",
                "seychelles",
                "sierra leone",
                "singapore",
                "sint maarten",
                "slovakia",
                "slovenia",
                "somalia",
                "south africa",
                "south sudan",
                "spain",
                "sri lanka",
                "st. barth",
                "st. vincent grenadines",
                "sudan",
                "suriname",
                "sweden",
                "switzerland",
                "syria",
                "taiwan",
                "tajikistan",
                "tanzania",
                "thailand",
                "timor-leste",
                "togo",
                "trinidad and tobago",
                "tunisia",
                "turkey",
                "turks and caicos",
                "uae",
                "uganda",
                "uk",
                "ukraine",
                "uruguay",
                "usa",
                "uzbekistan",
                "vatican city",
                "venezuela",
                "vietnam",
                "western sahara",
                "yemen",
                "zambia",
                "zimbabwe"
            ],
            "others": {
                "message": "this api is still in progress, we are trying so hard to give our best",
                "endpoints": [
                    {
                        "url": "/",
                        "method": "GET",
                        "message": "get all report for today"
                    },
                    {
                        "url": "/yesterday",
                        "method": "GET",
                        "message": "get all report for yesterday"
                    },
                    {
                        "url": "/summary",
                        "method": "GET",
                        "message": "get total summary report for today"
                    },
                    {
                        "url": "/yesterday/summary",
                        "method": "GET",
                        "message": "get total summary report for yesterday"
                    },
                    {
                        "url": "/countries",
                        "method": "GET",
                        "message": "get all available country names"
                    },
                    {
                        "url": "/{country}",
                        "method": "GET",
                        "message": "get today report for a country, ex: /uk"
                    },
                    {
                        "url": "/yesterday/{country}",
                        "method": "GET",
                        "message": "get yesterday report for a country, ex: /usa"
                    },
                    {
                        "url": "/history",
                        "method": "GET",
                        "message": "get historical data"
                    },
                    {
                        "url": "/search",
                        "method": "POST",
                        "body": {
                            "fromDate": "05-04-2020",
                            "toDate": "08-04-2020"
                        },
                        "message": "get historical data"
                    }
                ]
            }
        }
```

</details>

***Status Code:*** 404
<hr>
<br>

### 3. GET SUMMARY



***Endpoint:***

```bash
Method: GET
Type: HTTP
URL: http://covid-rest.herokuapp.com/summary
```



## [Yesterday](#yesterday)
It contains following requests

#### [Yesterday](#yesterday)

* [GET ALL DATA FOR YESTERDAY](#1-get-all-data-for-yesterday)
* [GET BY COUNTRY NAME FOR YESTERDAY](#2-get-by-country-name-for-yesterday)
* [GET SUMMARY FOR YESTERDAY](#3-get-summary-for-yesterday)



### 1. GET ALL DATA FOR YESTERDAY



***Endpoint:***

```bash
Method: GET
Type: HTTP
URL: http://covid-rest.herokuapp.com/yesterday
```



***Example Requests/Responses:***

<details>
  <summary>
  I. Example Response: GET ALL DATA FOR YESTERDAY
  </summary>
  <br>

```bash
Method: GET
Type: HTTP
URL: http://covid-rest.herokuapp.com/yesterday
```

<br>

```js
        {
            "code": 200,
            "message": "OK",
            "data": [
                {
                    "country_id": "1",
                    "country_name": "china",
                    "total_cases": "84464",
                    "new_cases": "36",
                    "total_death": "4634",
                    "new_death": "",
                    "total_recovered": "79030",
                    "active_cases": "17",
                    "critical_cases": "800",
                    "total_cases_per_million": "36",
                    "total_death_per_million": "59"
                },
                {
                    "country_id": "2",
                    "country_name": "usa",
                    "total_cases": "4918420",
                    "new_cases": "54504",
                    "total_death": "160290",
                    "new_death": "1362",
                    "total_recovered": "2481680",
                    "active_cases": "34882",
                    "critical_cases": "2276450",
                    "total_cases_per_million": "18407",
                    "total_death_per_million": "14851"
                },
                {
                    "country_id": "3",
                    "country_name": "brazil",
                    "total_cases": "2808076",
                    "new_cases": "56411",
                    "total_death": "96096",
                    "new_death": "1394",
                    "total_recovered": "1970767",
                    "active_cases": "58448",
                    "critical_cases": "741213",
                    "total_cases_per_million": "8318",
                    "total_death_per_million": "13202"
                },
                {
                    "country_id": "4",
                    "country_name": "india",
                    "total_cases": "1906613",
                    "new_cases": "51282",
                    "total_death": "39820",
                    "new_death": "849",
                    "total_recovered": "1281660",
                    "active_cases": "51220",
                    "critical_cases": "585133",
                    "total_cases_per_million": "8944",
                    "total_death_per_million": "1380"
                },
                {
                    "country_id": "5",
                    "country_name": "russia",
                    "total_cases": "861423",
                    "new_cases": "5159",
                    "total_death": "14351",
                    "new_death": "144",
                    "total_recovered": "661471",
                    "active_cases": "7878",
                    "critical_cases": "185601",
                    "total_cases_per_million": "2300",
                    "total_death_per_million": "5903"
                },
                {
                    "country_id": "6",
                    "country_name": "south africa",
                    "total_cases": "521318",
                    "new_cases": "4456",
                    "total_death": "8884",
                    "new_death": "345",
                    "total_recovered": "363751",
                    "active_cases": "5714",
                    "critical_cases": "148683",
                    "total_cases_per_million": "539",
                    "total_death_per_million": "8780"
                },
                {
                    "country_id": "7",
                    "country_name": "mexico",
                    "total_cases": "443813",
                    "new_cases": "4767",
                    "total_death": "48012",
                    "new_death": "266",
                    "total_recovered": "295677",
                    "active_cases": "6283",
                    "critical_cases": "100124",
                    "total_cases_per_million": "3883",
                    "total_death_per_million": "3439"
                },
                {
                    "country_id": "8",
                    "country_name": "peru",
                    "total_cases": "439890",
                    "new_cases": "6790",
                    "total_death": "20007",
                    "new_death": "196",
                    "total_recovered": "302457",
                    "active_cases": "4366",
                    "critical_cases": "117426",
                    "total_cases_per_million": "1419",
                    "total_death_per_million": "13324"
                },
                {
                    "country_id": "9",
                    "country_name": "chile",
                    "total_cases": "362962",
                    "new_cases": "1469",
                    "total_death": "9745",
                    "new_death": "38",
                    "total_recovered": "336330",
                    "active_cases": "2354",
                    "critical_cases": "16887",
                    "total_cases_per_million": "1405",
                    "total_death_per_million": "18972"
                },
                {
                    "country_id": "10",
                    "country_name": "spain",
                    "total_cases": "349894",
                    "new_cases": "5760",
                    "total_death": "28498",
                    "new_death": "26",
                    "total_recovered": "n/a",
                    "active_cases": "n/a",
                    "critical_cases": "n/a",
                    "total_cases_per_million": "617",
                    "total_death_per_million": "7483"
                },
                {
                    "country_id": "11",
                    "country_name": "colombia",
                    "total_cases": "334979",
                    "new_cases": "7129",
                    "total_death": "11315",
                    "new_death": "298",
                    "total_recovered": "180258",
                    "active_cases": "6531",
                    "critical_cases": "143406",
                    "total_cases_per_million": "1493",
                    "total_death_per_million": "6577"
                },
                {
                    "country_id": "12",
                    "country_name": "iran",
                    "total_cases": "314786",
                    "new_cases": "2751",
                    "total_death": "17617",
                    "new_death": "212",
                    "total_recovered": "272535",
                    "active_cases": "2307",
                    "critical_cases": "24634",
                    "total_cases_per_million": "4132",
                    "total_death_per_million": "3743"
                },
                {
                    "country_id": "13",
                    "country_name": "uk",
                    "total_cases": "306293",
                    "new_cases": "670",
                    "total_death": "46299",
                    "new_death": "89",
                    "total_recovered": "n/a",
                    "active_cases": "n/a",
                    "critical_cases": "n/a",
                    "total_cases_per_million": "77",
                    "total_death_per_million": "4510"
                },
                {
                    "country_id": "14",
                    "country_name": "saudi arabia",
                    "total_cases": "281456",
                    "new_cases": "1363",
                    "total_death": "2984",
                    "new_death": "35",
                    "total_recovered": "243713",
                    "active_cases": "1659",
                    "critical_cases": "34759",
                    "total_cases_per_million": "1983",
                    "total_death_per_million": "8073"
                },
                {
                    "country_id": "15",
                    "country_name": "pakistan",
                    "total_cases": "280461",
                    "new_cases": "432",
                    "total_death": "5999",
                    "new_death": "15",
                    "total_recovered": "249397",
                    "active_cases": "524",
                    "critical_cases": "25065",
                    "total_cases_per_million": "1013",
                    "total_death_per_million": "1267"
                },
                {
                    "country_id": "16",
                    "country_name": "italy",
                    "total_cases": "248419",
                    "new_cases": "190",
                    "total_death": "35171",
                    "new_death": "5",
                    "total_recovered": "200766",
                    "active_cases": "177",
                    "critical_cases": "12482",
                    "total_cases_per_million": "41",
                    "total_death_per_million": "4109"
                },
                {
                    "country_id": "17",
                    "country_name": "bangladesh",
                    "total_cases": "244020",
                    "new_cases": "1918",
                    "total_death": "3234",
                    "new_death": "50",
                    "total_recovered": "139860",
                    "active_cases": "1955",
                    "critical_cases": "100926",
                    "total_cases_per_million": "",
                    "total_death_per_million": "1480"
                },
                {
                    "country_id": "18",
                    "country_name": "turkey",
                    "total_cases": "234934",
                    "new_cases": "1083",
                    "total_death": "5765",
                    "new_death": "18",
                    "total_recovered": "218491",
                    "active_cases": "994",
                    "critical_cases": "10678",
                    "total_cases_per_million": "583",
                    "total_death_per_million": "2783"
                },
                {
                    "country_id": "19",
                    "country_name": "argentina",
                    "total_cases": "213535",
                    "new_cases": "6792",
                    "total_death": "3979",
                    "new_death": "166",
                    "total_recovered": "94129",
                    "active_cases": "2827",
                    "critical_cases": "115427",
                    "total_cases_per_million": "1150",
                    "total_death_per_million": "4721"
                },
                {
                    "country_id": "20",
                    "country_name": "germany",
                    "total_cases": "212331",
                    "new_cases": "11",
                    "total_death": "9232",
                    "new_death": "",
                    "total_recovered": "194700",
                    "active_cases": "",
                    "critical_cases": "8399",
                    "total_cases_per_million": "270",
                    "total_death_per_million": "2533"
                },
                {
                    "country_id": "21",
                    "country_name": "france",
                    "total_cases": "192334",
                    "new_cases": "1039",
                    "total_death": "30296",
                    "new_death": "2",
                    "total_recovered": "82166",
                    "active_cases": "666",
                    "critical_cases": "79872",
                    "total_cases_per_million": "384",
                    "total_death_per_million": "2946"
                },
                {
                    "country_id": "22",
                    "country_name": "iraq",
                    "total_cases": "134722",
                    "new_cases": "2836",
                    "total_death": "5017",
                    "new_death": "83",
                    "total_recovered": "96103",
                    "active_cases": "1992",
                    "critical_cases": "33602",
                    "total_cases_per_million": "511",
                    "total_death_per_million": "3343"
                },
                {
                    "country_id": "23",
                    "country_name": "canada",
                    "total_cases": "117792",
                    "new_cases": "761",
                    "total_death": "8958",
                    "new_death": "11",
                    "total_recovered": "102450",
                    "active_cases": "853",
                    "critical_cases": "6384",
                    "total_cases_per_million": "2254",
                    "total_death_per_million": "3118"
                },
                {
                    "country_id": "24",
                    "country_name": "indonesia",
                    "total_cases": "115056",
                    "new_cases": "1922",
                    "total_death": "5388",
                    "new_death": "86",
                    "total_recovered": "72050",
                    "active_cases": "1813",
                    "critical_cases": "37618",
                    "total_cases_per_million": "",
                    "total_death_per_million": "420"
                },
                {
                    "country_id": "25",
                    "country_name": "philippines",
                    "total_cases": "112593",
                    "new_cases": "6352",
                    "total_death": "2115",
                    "new_death": "11",
                    "total_recovered": "66049",
                    "active_cases": "240",
                    "critical_cases": "44429",
                    "total_cases_per_million": "239",
                    "total_death_per_million": "1026"
                },
                {
                    "country_id": "26",
                    "country_name": "qatar",
                    "total_cases": "111538",
                    "new_cases": "216",
                    "total_death": "177",
                    "new_death": "",
                    "total_recovered": "108254",
                    "active_cases": "252",
                    "critical_cases": "3107",
                    "total_cases_per_million": "73",
                    "total_death_per_million": "39724"
                },
                {
                    "country_id": "27",
                    "country_name": "egypt",
                    "total_cases": "94752",
                    "new_cases": "112",
                    "total_death": "4912",
                    "new_death": "24",
                    "total_recovered": "45569",
                    "active_cases": "1503",
                    "critical_cases": "44271",
                    "total_cases_per_million": "41",
                    "total_death_per_million": "924"
                },
                {
                    "country_id": "28",
                    "country_name": "kazakhstan",
                    "total_cases": "93820",
                    "new_cases": "1158",
                    "total_death": "1058",
                    "new_death": "",
                    "total_recovered": "65132",
                    "active_cases": "2621",
                    "critical_cases": "27630",
                    "total_cases_per_million": "221",
                    "total_death_per_million": "4991"
                },
                {
                    "country_id": "29",
                    "country_name": "ecuador",
                    "total_cases": "87963",
                    "new_cases": "922",
                    "total_death": "5808",
                    "new_death": "41",
                    "total_recovered": "70985",
                    "active_cases": "64",
                    "critical_cases": "11170",
                    "total_cases_per_million": "366",
                    "total_death_per_million": "4979"
                },
                {
                    "country_id": "30",
                    "country_name": "bolivia",
                    "total_cases": "81846",
                    "new_cases": "1693",
                    "total_death": "3228",
                    "new_death": "75",
                    "total_recovered": "24510",
                    "active_cases": "354",
                    "critical_cases": "54108",
                    "total_cases_per_million": "71",
                    "total_death_per_million": "7003"
                },
                {
                    "country_id": "31",
                    "country_name": "sweden",
                    "total_cases": "81181",
                    "new_cases": "37",
                    "total_death": "5747",
                    "new_death": "6",
                    "total_recovered": "n/a",
                    "active_cases": "n/a",
                    "critical_cases": "n/a",
                    "total_cases_per_million": "38",
                    "total_death_per_million": "8034"
                },
                {
                    "country_id": "32",
                    "country_name": "oman",
                    "total_cases": "79159",
                    "new_cases": "",
                    "total_death": "421",
                    "new_death": "",
                    "total_recovered": "61421",
                    "active_cases": "",
                    "critical_cases": "17317",
                    "total_cases_per_million": "187",
                    "total_death_per_million": "15468"
                },
                {
                    "country_id": "33",
                    "country_name": "israel",
                    "total_cases": "76198",
                    "new_cases": "1768",
                    "total_death": "561",
                    "new_death": "15",
                    "total_recovered": "49834",
                    "active_cases": "2263",
                    "critical_cases": "25803",
                    "total_cases_per_million": "341",
                    "total_death_per_million": "8285"
                },
                {
                    "country_id": "34",
                    "country_name": "dominican republic",
                    "total_cases": "74295",
                    "new_cases": "1178",
                    "total_death": "1213",
                    "new_death": "30",
                    "total_recovered": "38824",
                    "active_cases": "",
                    "critical_cases": "34258",
                    "total_cases_per_million": "385",
                    "total_death_per_million": "6842"
                },
                {
                    "country_id": "35",
                    "country_name": "ukraine",
                    "total_cases": "74219",
                    "new_cases": "1061",
                    "total_death": "1764",
                    "new_death": "26",
                    "total_recovered": "40613",
                    "active_cases": "737",
                    "critical_cases": "31842",
                    "total_cases_per_million": "132",
                    "total_death_per_million": "1698"
                },
                {
                    "country_id": "36",
                    "country_name": "belgium",
                    "total_cases": "70314",
                    "new_cases": "465",
                    "total_death": "9850",
                    "new_death": "5",
                    "total_recovered": "17598",
                    "active_cases": "8",
                    "critical_cases": "42866",
                    "total_cases_per_million": "54",
                    "total_death_per_million": "6064"
                },
                {
                    "country_id": "37",
                    "country_name": "panama",
                    "total_cases": "69424",
                    "new_cases": "968",
                    "total_death": "1522",
                    "new_death": "25",
                    "total_recovered": "43330",
                    "active_cases": "1237",
                    "critical_cases": "24572",
                    "total_cases_per_million": "161",
                    "total_death_per_million": "16067"
                },
                {
                    "country_id": "38",
                    "country_name": "kuwait",
                    "total_cases": "68774",
                    "new_cases": "475",
                    "total_death": "465",
                    "new_death": "4",
                    "total_recovered": "60326",
                    "active_cases": "587",
                    "critical_cases": "7983",
                    "total_cases_per_million": "131",
                    "total_death_per_million": "16083"
                },
                {
                    "country_id": "39",
                    "country_name": "belarus",
                    "total_cases": "68250",
                    "new_cases": "84",
                    "total_death": "574",
                    "new_death": "3",
                    "total_recovered": "63163",
                    "active_cases": "220",
                    "critical_cases": "4513",
                    "total_cases_per_million": "",
                    "total_death_per_million": "7223"
                },
                {
                    "country_id": "40",
                    "country_name": "uae",
                    "total_cases": "61352",
                    "new_cases": "189",
                    "total_death": "351",
                    "new_death": "",
                    "total_recovered": "55090",
                    "active_cases": "227",
                    "critical_cases": "5911",
                    "total_cases_per_million": "",
                    "total_death_per_million": "6196"
                },
                {
                    "country_id": "41",
                    "country_name": "netherlands",
                    "total_cases": "55955",
                    "new_cases": "485",
                    "total_death": "6150",
                    "new_death": "1",
                    "total_recovered": "n/a",
                    "active_cases": "n/a",
                    "critical_cases": "n/a",
                    "total_cases_per_million": "27",
                    "total_death_per_million": "3265"
                },
                {
                    "country_id": "42",
                    "country_name": "romania",
                    "total_cases": "55241",
                    "new_cases": "1232",
                    "total_death": "2480",
                    "new_death": "48",
                    "total_recovered": "28006",
                    "active_cases": "256",
                    "critical_cases": "24755",
                    "total_cases_per_million": "436",
                    "total_death_per_million": "2873"
                },
                {
                    "country_id": "43",
                    "country_name": "singapore",
                    "total_cases": "53346",
                    "new_cases": "295",
                    "total_death": "27",
                    "new_death": "",
                    "total_recovered": "47454",
                    "active_cases": "275",
                    "critical_cases": "5865",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "9112"
                },
                {
                    "country_id": "44",
                    "country_name": "guatemala",
                    "total_cases": "52365",
                    "new_cases": "823",
                    "total_death": "2037",
                    "new_death": "24",
                    "total_recovered": "40285",
                    "active_cases": "939",
                    "critical_cases": "10043",
                    "total_cases_per_million": "5",
                    "total_death_per_million": "2918"
                },
                {
                    "country_id": "45",
                    "country_name": "portugal",
                    "total_cases": "51681",
                    "new_cases": "112",
                    "total_death": "1739",
                    "new_death": "1",
                    "total_recovered": "37318",
                    "active_cases": "207",
                    "critical_cases": "12624",
                    "total_cases_per_million": "44",
                    "total_death_per_million": "5070"
                },
                {
                    "country_id": "46",
                    "country_name": "poland",
                    "total_cases": "48149",
                    "new_cases": "680",
                    "total_death": "1738",
                    "new_death": "6",
                    "total_recovered": "35056",
                    "active_cases": "175",
                    "critical_cases": "11355",
                    "total_cases_per_million": "65",
                    "total_death_per_million": "1272"
                },
                {
                    "country_id": "47",
                    "country_name": "nigeria",
                    "total_cases": "44433",
                    "new_cases": "304",
                    "total_death": "910",
                    "new_death": "14",
                    "total_recovered": "31851",
                    "active_cases": "11188",
                    "critical_cases": "11672",
                    "total_cases_per_million": "7",
                    "total_death_per_million": "215"
                },
                {
                    "country_id": "48",
                    "country_name": "honduras",
                    "total_cases": "43794",
                    "new_cases": "597",
                    "total_death": "1384",
                    "new_death": "7",
                    "total_recovered": "5854",
                    "active_cases": "60",
                    "critical_cases": "36556",
                    "total_cases_per_million": "48",
                    "total_death_per_million": "4415"
                },
                {
                    "country_id": "49",
                    "country_name": "bahrain",
                    "total_cases": "42132",
                    "new_cases": "297",
                    "total_death": "151",
                    "new_death": "1",
                    "total_recovered": "39335",
                    "active_cases": "328",
                    "critical_cases": "2646",
                    "total_cases_per_million": "43",
                    "total_death_per_million": "24691"
                },
                {
                    "country_id": "50",
                    "country_name": "japan",
                    "total_cases": "39858",
                    "new_cases": "1171",
                    "total_death": "1016",
                    "new_death": "4",
                    "total_recovered": "27197",
                    "active_cases": "710",
                    "critical_cases": "11645",
                    "total_cases_per_million": "88",
                    "total_death_per_million": "315"
                },
                {
                    "country_id": "51",
                    "country_name": "armenia",
                    "total_cases": "39298",
                    "new_cases": "196",
                    "total_death": "768",
                    "new_death": "6",
                    "total_recovered": "30372",
                    "active_cases": "511",
                    "critical_cases": "8158",
                    "total_cases_per_million": "10",
                    "total_death_per_million": "13259"
                },
                {
                    "country_id": "52",
                    "country_name": "ghana",
                    "total_cases": "37812",
                    "new_cases": "",
                    "total_death": "191",
                    "new_death": "",
                    "total_recovered": "34313",
                    "active_cases": "",
                    "critical_cases": "3308",
                    "total_cases_per_million": "8",
                    "total_death_per_million": "1215"
                },
                {
                    "country_id": "53",
                    "country_name": "kyrgyzstan",
                    "total_cases": "37541",
                    "new_cases": "412",
                    "total_death": "1427",
                    "new_death": "7",
                    "total_recovered": "28743",
                    "active_cases": "816",
                    "critical_cases": "7371",
                    "total_cases_per_million": "24",
                    "total_death_per_million": "5746"
                },
                {
                    "country_id": "54",
                    "country_name": "afghanistan",
                    "total_cases": "36782",
                    "new_cases": "35",
                    "total_death": "1288",
                    "new_death": "",
                    "total_recovered": "25669",
                    "active_cases": "",
                    "critical_cases": "9825",
                    "total_cases_per_million": "31",
                    "total_death_per_million": "943"
                },
                {
                    "country_id": "55",
                    "country_name": "switzerland",
                    "total_cases": "35746",
                    "new_cases": "130",
                    "total_death": "1981",
                    "new_death": "",
                    "total_recovered": "31600",
                    "active_cases": "100",
                    "critical_cases": "2165",
                    "total_cases_per_million": "24",
                    "total_death_per_million": "4127"
                },
                {
                    "country_id": "56",
                    "country_name": "azerbaijan",
                    "total_cases": "32910",
                    "new_cases": "226",
                    "total_death": "473",
                    "new_death": "5",
                    "total_recovered": "28348",
                    "active_cases": "588",
                    "critical_cases": "4089",
                    "total_cases_per_million": "66",
                    "total_death_per_million": "3243"
                },
                {
                    "country_id": "57",
                    "country_name": "algeria",
                    "total_cases": "32504",
                    "new_cases": "532",
                    "total_death": "1248",
                    "new_death": "9",
                    "total_recovered": "22375",
                    "active_cases": "474",
                    "critical_cases": "8881",
                    "total_cases_per_million": "57",
                    "total_death_per_million": "740"
                },
                {
                    "country_id": "58",
                    "country_name": "morocco",
                    "total_cases": "27217",
                    "new_cases": "1021",
                    "total_death": "417",
                    "new_death": "16",
                    "total_recovered": "19629",
                    "active_cases": "661",
                    "critical_cases": "7171",
                    "total_cases_per_million": "31",
                    "total_death_per_million": "737"
                },
                {
                    "country_id": "59",
                    "country_name": "uzbekistan",
                    "total_cases": "27047",
                    "new_cases": "981",
                    "total_death": "165",
                    "new_death": "8",
                    "total_recovered": "18051",
                    "active_cases": "1213",
                    "critical_cases": "8831",
                    "total_cases_per_million": "224",
                    "total_death_per_million": "807"
                },
                {
                    "country_id": "60",
                    "country_name": "serbia",
                    "total_cases": "26738",
                    "new_cases": "287",
                    "total_death": "605",
                    "new_death": "7",
                    "total_recovered": "14047",
                    "active_cases": "",
                    "critical_cases": "12086",
                    "total_cases_per_million": "143",
                    "total_death_per_million": "3061"
                },
                {
                    "country_id": "61",
                    "country_name": "ireland",
                    "total_cases": "26253",
                    "new_cases": "45",
                    "total_death": "1763",
                    "new_death": "",
                    "total_recovered": "23364",
                    "active_cases": "",
                    "critical_cases": "1126",
                    "total_cases_per_million": "5",
                    "total_death_per_million": "5311"
                },
                {
                    "country_id": "62",
                    "country_name": "moldova",
                    "total_cases": "25814",
                    "new_cases": "332",
                    "total_death": "810",
                    "new_death": "10",
                    "total_recovered": "18167",
                    "active_cases": "225",
                    "critical_cases": "6837",
                    "total_cases_per_million": "362",
                    "total_death_per_million": "6401"
                },
                {
                    "country_id": "63",
                    "country_name": "kenya",
                    "total_cases": "23202",
                    "new_cases": "605",
                    "total_death": "388",
                    "new_death": "6",
                    "total_recovered": "9327",
                    "active_cases": "587",
                    "critical_cases": "13487",
                    "total_cases_per_million": "44",
                    "total_death_per_million": "431"
                },
                {
                    "country_id": "64",
                    "country_name": "austria",
                    "total_cases": "21481",
                    "new_cases": "96",
                    "total_death": "719",
                    "new_death": "1",
                    "total_recovered": "19336",
                    "active_cases": "273",
                    "critical_cases": "1426",
                    "total_cases_per_million": "23",
                    "total_death_per_million": "2384"
                },
                {
                    "country_id": "65",
                    "country_name": "venezuela",
                    "total_cases": "21438",
                    "new_cases": "684",
                    "total_death": "187",
                    "new_death": "7",
                    "total_recovered": "11875",
                    "active_cases": "253",
                    "critical_cases": "9376",
                    "total_cases_per_million": "25",
                    "total_death_per_million": "754"
                },
                {
                    "country_id": "66",
                    "country_name": "nepal",
                    "total_cases": "21009",
                    "new_cases": "259",
                    "total_death": "58",
                    "new_death": "1",
                    "total_recovered": "15026",
                    "active_cases": "65",
                    "critical_cases": "5925",
                    "total_cases_per_million": "",
                    "total_death_per_million": "720"
                },
                {
                    "country_id": "67",
                    "country_name": "ethiopia",
                    "total_cases": "19877",
                    "new_cases": "588",
                    "total_death": "343",
                    "new_death": "7",
                    "total_recovered": "8240",
                    "active_cases": "309",
                    "critical_cases": "11294",
                    "total_cases_per_million": "153",
                    "total_death_per_million": "173"
                },
                {
                    "country_id": "68",
                    "country_name": "costa rica",
                    "total_cases": "19837",
                    "new_cases": "435",
                    "total_death": "181",
                    "new_death": "10",
                    "total_recovered": "6590",
                    "active_cases": "1901",
                    "critical_cases": "13066",
                    "total_cases_per_million": "98",
                    "total_death_per_million": "3891"
                },
                {
                    "country_id": "69",
                    "country_name": "australia",
                    "total_cases": "18730",
                    "new_cases": "412",
                    "total_death": "232",
                    "new_death": "11",
                    "total_recovered": "10622",
                    "active_cases": "",
                    "critical_cases": "7876",
                    "total_cases_per_million": "44",
                    "total_death_per_million": "734"
                },
                {
                    "country_id": "70",
                    "country_name": "el salvador",
                    "total_cases": "18262",
                    "new_cases": "419",
                    "total_death": "486",
                    "new_death": "9",
                    "total_recovered": "8954",
                    "active_cases": "145",
                    "critical_cases": "8822",
                    "total_cases_per_million": "503",
                    "total_death_per_million": "2814"
                },
                {
                    "country_id": "71",
                    "country_name": "cameroon",
                    "total_cases": "17718",
                    "new_cases": "463",
                    "total_death": "391",
                    "new_death": "",
                    "total_recovered": "15320",
                    "active_cases": "",
                    "critical_cases": "2007",
                    "total_cases_per_million": "30",
                    "total_death_per_million": "666"
                },
                {
                    "country_id": "72",
                    "country_name": "czechia",
                    "total_cases": "17286",
                    "new_cases": "278",
                    "total_death": "383",
                    "new_death": "",
                    "total_recovered": "11812",
                    "active_cases": "104",
                    "critical_cases": "5091",
                    "total_cases_per_million": "19",
                    "total_death_per_million": "1614"
                },
                {
                    "country_id": "73",
                    "country_name": "ivory coast",
                    "total_cases": "16293",
                    "new_cases": "73",
                    "total_death": "103",
                    "new_death": "1",
                    "total_recovered": "11955",
                    "active_cases": "68",
                    "critical_cases": "4235",
                    "total_cases_per_million": "",
                    "total_death_per_million": "616"
                },
                {
                    "country_id": "74",
                    "country_name": "s. korea",
                    "total_cases": "14423",
                    "new_cases": "34",
                    "total_death": "301",
                    "new_death": "",
                    "total_recovered": "13352",
                    "active_cases": "72",
                    "critical_cases": "770",
                    "total_cases_per_million": "13",
                    "total_death_per_million": "281"
                },
                {
                    "country_id": "75",
                    "country_name": "denmark",
                    "total_cases": "14073",
                    "new_cases": "77",
                    "total_death": "616",
                    "new_death": "",
                    "total_recovered": "12715",
                    "active_cases": "33",
                    "critical_cases": "742",
                    "total_cases_per_million": "3",
                    "total_death_per_million": "2429"
                },
                {
                    "country_id": "76",
                    "country_name": "bosnia and herzegovina",
                    "total_cases": "12856",
                    "new_cases": "394",
                    "total_death": "373",
                    "new_death": "11",
                    "total_recovered": "6592",
                    "active_cases": "233",
                    "critical_cases": "5891",
                    "total_cases_per_million": "",
                    "total_death_per_million": "3921"
                },
                {
                    "country_id": "77",
                    "country_name": "palestine",
                    "total_cases": "12770",
                    "new_cases": "229",
                    "total_death": "86",
                    "new_death": "2",
                    "total_recovered": "6419",
                    "active_cases": "1029",
                    "critical_cases": "6265",
                    "total_cases_per_million": "",
                    "total_death_per_million": "2498"
                },
                {
                    "country_id": "78",
                    "country_name": "bulgaria",
                    "total_cases": "12414",
                    "new_cases": "255",
                    "total_death": "415",
                    "new_death": "11",
                    "total_recovered": "6964",
                    "active_cases": "280",
                    "critical_cases": "5035",
                    "total_cases_per_million": "41",
                    "total_death_per_million": "1788"
                },
                {
                    "country_id": "79",
                    "country_name": "madagascar",
                    "total_cases": "11895",
                    "new_cases": "235",
                    "total_death": "123",
                    "new_death": "5",
                    "total_recovered": "9286",
                    "active_cases": "461",
                    "critical_cases": "2486",
                    "total_cases_per_million": "79",
                    "total_death_per_million": "429"
                },
                {
                    "country_id": "80",
                    "country_name": "sudan",
                    "total_cases": "11780",
                    "new_cases": "42",
                    "total_death": "763",
                    "new_death": "11",
                    "total_recovered": "6194",
                    "active_cases": "57",
                    "critical_cases": "4823",
                    "total_cases_per_million": "",
                    "total_death_per_million": "268"
                },
                {
                    "country_id": "81",
                    "country_name": "north macedonia",
                    "total_cases": "11202",
                    "new_cases": "74",
                    "total_death": "505",
                    "new_death": "5",
                    "total_recovered": "7108",
                    "active_cases": "136",
                    "critical_cases": "3589",
                    "total_cases_per_million": "4",
                    "total_death_per_million": "5377"
                },
                {
                    "country_id": "82",
                    "country_name": "senegal",
                    "total_cases": "10432",
                    "new_cases": "46",
                    "total_death": "214",
                    "new_death": "3",
                    "total_recovered": "6920",
                    "active_cases": "19",
                    "critical_cases": "3298",
                    "total_cases_per_million": "41",
                    "total_death_per_million": "622"
                },
                {
                    "country_id": "83",
                    "country_name": "norway",
                    "total_cases": "9362",
                    "new_cases": "28",
                    "total_death": "256",
                    "new_death": "",
                    "total_recovered": "8752",
                    "active_cases": "",
                    "critical_cases": "354",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "1726"
                },
                {
                    "country_id": "84",
                    "country_name": "drc",
                    "total_cases": "9178",
                    "new_cases": "45",
                    "total_death": "215",
                    "new_death": "",
                    "total_recovered": "7727",
                    "active_cases": "303",
                    "critical_cases": "1236",
                    "total_cases_per_million": "",
                    "total_death_per_million": "102"
                },
                {
                    "country_id": "85",
                    "country_name": "malaysia",
                    "total_cases": "9002",
                    "new_cases": "1",
                    "total_death": "125",
                    "new_death": "",
                    "total_recovered": "8684",
                    "active_cases": "16",
                    "critical_cases": "193",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "278"
                },
                {
                    "country_id": "86",
                    "country_name": "french guiana",
                    "total_cases": "7998",
                    "new_cases": "50",
                    "total_death": "45",
                    "new_death": "1",
                    "total_recovered": "6873",
                    "active_cases": "106",
                    "critical_cases": "1080",
                    "total_cases_per_million": "26",
                    "total_death_per_million": "26719"
                },
                {
                    "country_id": "87",
                    "country_name": "gabon",
                    "total_cases": "7646",
                    "new_cases": "",
                    "total_death": "51",
                    "new_death": "",
                    "total_recovered": "5408",
                    "active_cases": "",
                    "critical_cases": "2187",
                    "total_cases_per_million": "11",
                    "total_death_per_million": "3428"
                },
                {
                    "country_id": "88",
                    "country_name": "tajikistan",
                    "total_cases": "7583",
                    "new_cases": "45",
                    "total_death": "61",
                    "new_death": "",
                    "total_recovered": "6356",
                    "active_cases": "39",
                    "critical_cases": "1166",
                    "total_cases_per_million": "",
                    "total_death_per_million": "794"
                },
                {
                    "country_id": "89",
                    "country_name": "haiti",
                    "total_cases": "7511",
                    "new_cases": "35",
                    "total_death": "166",
                    "new_death": "1",
                    "total_recovered": "4832",
                    "active_cases": "226",
                    "critical_cases": "2513",
                    "total_cases_per_million": "",
                    "total_death_per_million": "658"
                },
                {
                    "country_id": "90",
                    "country_name": "guinea",
                    "total_cases": "7489",
                    "new_cases": "125",
                    "total_death": "48",
                    "new_death": "2",
                    "total_recovered": "6591",
                    "active_cases": "86",
                    "critical_cases": "850",
                    "total_cases_per_million": "24",
                    "total_death_per_million": "569"
                },
                {
                    "country_id": "91",
                    "country_name": "finland",
                    "total_cases": "7483",
                    "new_cases": "17",
                    "total_death": "331",
                    "new_death": "2",
                    "total_recovered": "6950",
                    "active_cases": "",
                    "critical_cases": "202",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "1350"
                },
                {
                    "country_id": "92",
                    "country_name": "luxembourg",
                    "total_cases": "6917",
                    "new_cases": "53",
                    "total_death": "118",
                    "new_death": "",
                    "total_recovered": "5537",
                    "active_cases": "39",
                    "critical_cases": "1262",
                    "total_cases_per_million": "7",
                    "total_death_per_million": "11034"
                },
                {
                    "country_id": "93",
                    "country_name": "zambia",
                    "total_cases": "6793",
                    "new_cases": "213",
                    "total_death": "173",
                    "new_death": "2",
                    "total_recovered": "5109",
                    "active_cases": "408",
                    "critical_cases": "1511",
                    "total_cases_per_million": "",
                    "total_death_per_million": "369"
                },
                {
                    "country_id": "94",
                    "country_name": "mauritania",
                    "total_cases": "6418",
                    "new_cases": "36",
                    "total_death": "157",
                    "new_death": "",
                    "total_recovered": "5209",
                    "active_cases": "35",
                    "critical_cases": "1052",
                    "total_cases_per_million": "3",
                    "total_death_per_million": "1377"
                },
                {
                    "country_id": "95",
                    "country_name": "paraguay",
                    "total_cases": "5852",
                    "new_cases": "128",
                    "total_death": "59",
                    "new_death": "4",
                    "total_recovered": "4645",
                    "active_cases": "396",
                    "critical_cases": "1148",
                    "total_cases_per_million": "16",
                    "total_death_per_million": "820"
                },
                {
                    "country_id": "96",
                    "country_name": "albania",
                    "total_cases": "5750",
                    "new_cases": "130",
                    "total_death": "176",
                    "new_death": "4",
                    "total_recovered": "3031",
                    "active_cases": "",
                    "critical_cases": "2543",
                    "total_cases_per_million": "16",
                    "total_death_per_million": "1998"
                },
                {
                    "country_id": "97",
                    "country_name": "croatia",
                    "total_cases": "5318",
                    "new_cases": "24",
                    "total_death": "154",
                    "new_death": "1",
                    "total_recovered": "4517",
                    "active_cases": "79",
                    "critical_cases": "647",
                    "total_cases_per_million": "7",
                    "total_death_per_million": "1296"
                },
                {
                    "country_id": "98",
                    "country_name": "djibouti",
                    "total_cases": "5248",
                    "new_cases": "8",
                    "total_death": "59",
                    "new_death": "",
                    "total_recovered": "5044",
                    "active_cases": "16",
                    "critical_cases": "145",
                    "total_cases_per_million": "",
                    "total_death_per_million": "5305"
                },
                {
                    "country_id": "99",
                    "country_name": "lebanon",
                    "total_cases": "5062",
                    "new_cases": "",
                    "total_death": "65",
                    "new_death": "",
                    "total_recovered": "1837",
                    "active_cases": "",
                    "critical_cases": "3160",
                    "total_cases_per_million": "40",
                    "total_death_per_million": "742"
                },
                {
                    "country_id": "100",
                    "country_name": "greece",
                    "total_cases": "4855",
                    "new_cases": "118",
                    "total_death": "209",
                    "new_death": "",
                    "total_recovered": "1374",
                    "active_cases": "",
                    "critical_cases": "3272",
                    "total_cases_per_million": "13",
                    "total_death_per_million": "466"
                },
                {
                    "country_id": "101",
                    "country_name": "equatorial guinea",
                    "total_cases": "4821",
                    "new_cases": "",
                    "total_death": "83",
                    "new_death": "",
                    "total_recovered": "2182",
                    "active_cases": "",
                    "critical_cases": "2556",
                    "total_cases_per_million": "",
                    "total_death_per_million": "3427"
                },
                {
                    "country_id": "102",
                    "country_name": "car",
                    "total_cases": "4618",
                    "new_cases": "4",
                    "total_death": "59",
                    "new_death": "",
                    "total_recovered": "1640",
                    "active_cases": "5",
                    "critical_cases": "2919",
                    "total_cases_per_million": "2",
                    "total_death_per_million": "955"
                },
                {
                    "country_id": "103",
                    "country_name": "hungary",
                    "total_cases": "4553",
                    "new_cases": "9",
                    "total_death": "598",
                    "new_death": "1",
                    "total_recovered": "3415",
                    "active_cases": "2",
                    "critical_cases": "540",
                    "total_cases_per_million": "7",
                    "total_death_per_million": "471"
                },
                {
                    "country_id": "104",
                    "country_name": "maldives",
                    "total_cases": "4446",
                    "new_cases": "153",
                    "total_death": "19",
                    "new_death": "1",
                    "total_recovered": "2693",
                    "active_cases": "23",
                    "critical_cases": "1734",
                    "total_cases_per_million": "12",
                    "total_death_per_million": "8212"
                },
                {
                    "country_id": "105",
                    "country_name": "malawi",
                    "total_cases": "4361",
                    "new_cases": "89",
                    "total_death": "128",
                    "new_death": "5",
                    "total_recovered": "2047",
                    "active_cases": "102",
                    "critical_cases": "2186",
                    "total_cases_per_million": "4",
                    "total_death_per_million": "227"
                },
                {
                    "country_id": "106",
                    "country_name": "libya",
                    "total_cases": "4224",
                    "new_cases": "161",
                    "total_death": "96",
                    "new_death": "3",
                    "total_recovered": "633",
                    "active_cases": "8",
                    "critical_cases": "3495",
                    "total_cases_per_million": "",
                    "total_death_per_million": "614"
                },
                {
                    "country_id": "107",
                    "country_name": "zimbabwe",
                    "total_cases": "4221",
                    "new_cases": "146",
                    "total_death": "81",
                    "new_death": "1",
                    "total_recovered": "1238",
                    "active_cases": "181",
                    "critical_cases": "2902",
                    "total_cases_per_million": "",
                    "total_death_per_million": "284"
                },
                {
                    "country_id": "108",
                    "country_name": "nicaragua",
                    "total_cases": "3902",
                    "new_cases": "230",
                    "total_death": "123",
                    "new_death": "7",
                    "total_recovered": "2913",
                    "active_cases": "421",
                    "critical_cases": "866",
                    "total_cases_per_million": "",
                    "total_death_per_million": "588"
                },
                {
                    "country_id": "109",
                    "country_name": "hong kong",
                    "total_cases": "3670",
                    "new_cases": "80",
                    "total_death": "41",
                    "new_death": "1",
                    "total_recovered": "2141",
                    "active_cases": "104",
                    "critical_cases": "1488",
                    "total_cases_per_million": "43",
                    "total_death_per_million": "489"
                },
                {
                    "country_id": "110",
                    "country_name": "congo",
                    "total_cases": "3546",
                    "new_cases": "",
                    "total_death": "58",
                    "new_death": "",
                    "total_recovered": "1589",
                    "active_cases": "",
                    "critical_cases": "1899",
                    "total_cases_per_million": "",
                    "total_death_per_million": "641"
                },
                {
                    "country_id": "111",
                    "country_name": "montenegro",
                    "total_cases": "3361",
                    "new_cases": "60",
                    "total_death": "53",
                    "new_death": "1",
                    "total_recovered": "1869",
                    "active_cases": "182",
                    "critical_cases": "1439",
                    "total_cases_per_million": "",
                    "total_death_per_million": "5351"
                },
                {
                    "country_id": "112",
                    "country_name": "thailand",
                    "total_cases": "3321",
                    "new_cases": "1",
                    "total_death": "58",
                    "new_death": "",
                    "total_recovered": "3142",
                    "active_cases": "",
                    "critical_cases": "121",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "48"
                },
                {
                    "country_id": "113",
                    "country_name": "somalia",
                    "total_cases": "3220",
                    "new_cases": "",
                    "total_death": "93",
                    "new_death": "",
                    "total_recovered": "1598",
                    "active_cases": "",
                    "critical_cases": "1529",
                    "total_cases_per_million": "2",
                    "total_death_per_million": "202"
                },
                {
                    "country_id": "114",
                    "country_name": "mayotte",
                    "total_cases": "3023",
                    "new_cases": "15",
                    "total_death": "39",
                    "new_death": "",
                    "total_recovered": "2738",
                    "active_cases": "",
                    "critical_cases": "246",
                    "total_cases_per_million": "2",
                    "total_death_per_million": "11058"
                },
                {
                    "country_id": "115",
                    "country_name": "eswatini",
                    "total_cases": "2856",
                    "new_cases": "18",
                    "total_death": "49",
                    "new_death": "4",
                    "total_recovered": "1258",
                    "active_cases": "5",
                    "critical_cases": "1549",
                    "total_cases_per_million": "5",
                    "total_death_per_million": "2459"
                },
                {
                    "country_id": "116",
                    "country_name": "sri lanka",
                    "total_cases": "2834",
                    "new_cases": "6",
                    "total_death": "11",
                    "new_death": "",
                    "total_recovered": "2524",
                    "active_cases": "7",
                    "critical_cases": "299",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "132"
                },
                {
                    "country_id": "117",
                    "country_name": "cuba",
                    "total_cases": "2701",
                    "new_cases": "31",
                    "total_death": "88",
                    "new_death": "1",
                    "total_recovered": "2382",
                    "active_cases": "9",
                    "critical_cases": "231",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "238"
                },
                {
                    "country_id": "118",
                    "country_name": "cabo verde",
                    "total_cases": "2631",
                    "new_cases": "48",
                    "total_death": "26",
                    "new_death": "1",
                    "total_recovered": "1930",
                    "active_cases": "19",
                    "critical_cases": "675",
                    "total_cases_per_million": "",
                    "total_death_per_million": "4727"
                },
                {
                    "country_id": "119",
                    "country_name": "mali",
                    "total_cases": "2543",
                    "new_cases": "",
                    "total_death": "124",
                    "new_death": "",
                    "total_recovered": "1946",
                    "active_cases": "3",
                    "critical_cases": "473",
                    "total_cases_per_million": "",
                    "total_death_per_million": "125"
                },
                {
                    "country_id": "120",
                    "country_name": "namibia",
                    "total_cases": "2470",
                    "new_cases": "64",
                    "total_death": "12",
                    "new_death": "",
                    "total_recovered": "211",
                    "active_cases": "24",
                    "critical_cases": "2247",
                    "total_cases_per_million": "24",
                    "total_death_per_million": "971"
                },
                {
                    "country_id": "121",
                    "country_name": "south sudan",
                    "total_cases": "2437",
                    "new_cases": "8",
                    "total_death": "47",
                    "new_death": "1",
                    "total_recovered": "1175",
                    "active_cases": "",
                    "critical_cases": "1215",
                    "total_cases_per_million": "",
                    "total_death_per_million": "217"
                },
                {
                    "country_id": "122",
                    "country_name": "slovakia",
                    "total_cases": "2368",
                    "new_cases": "14",
                    "total_death": "29",
                    "new_death": "",
                    "total_recovered": "1771",
                    "active_cases": "25",
                    "critical_cases": "568",
                    "total_cases_per_million": "2",
                    "total_death_per_million": "434"
                },
                {
                    "country_id": "123",
                    "country_name": "slovenia",
                    "total_cases": "2190",
                    "new_cases": "9",
                    "total_death": "123",
                    "new_death": "1",
                    "total_recovered": "1854",
                    "active_cases": "23",
                    "critical_cases": "213",
                    "total_cases_per_million": "2",
                    "total_death_per_million": "1053"
                },
                {
                    "country_id": "124",
                    "country_name": "lithuania",
                    "total_cases": "2137",
                    "new_cases": "17",
                    "total_death": "80",
                    "new_death": "",
                    "total_recovered": "1647",
                    "active_cases": "2",
                    "critical_cases": "410",
                    "total_cases_per_million": "6",
                    "total_death_per_million": "786"
                },
                {
                    "country_id": "125",
                    "country_name": "rwanda",
                    "total_cases": "2099",
                    "new_cases": "7",
                    "total_death": "5",
                    "new_death": "",
                    "total_recovered": "1222",
                    "active_cases": "53",
                    "critical_cases": "872",
                    "total_cases_per_million": "",
                    "total_death_per_million": "162"
                },
                {
                    "country_id": "126",
                    "country_name": "estonia",
                    "total_cases": "2091",
                    "new_cases": "11",
                    "total_death": "63",
                    "new_death": "",
                    "total_recovered": "1937",
                    "active_cases": "2",
                    "critical_cases": "91",
                    "total_cases_per_million": "",
                    "total_death_per_million": "1576"
                },
                {
                    "country_id": "127",
                    "country_name": "mozambique",
                    "total_cases": "2029",
                    "new_cases": "56",
                    "total_death": "15",
                    "new_death": "1",
                    "total_recovered": "765",
                    "active_cases": "89",
                    "critical_cases": "1249",
                    "total_cases_per_million": "",
                    "total_death_per_million": "65"
                },
                {
                    "country_id": "128",
                    "country_name": "guinea-bissau",
                    "total_cases": "1981",
                    "new_cases": "",
                    "total_death": "27",
                    "new_death": "",
                    "total_recovered": "803",
                    "active_cases": "",
                    "critical_cases": "1151",
                    "total_cases_per_million": "5",
                    "total_death_per_million": "1005"
                },
                {
                    "country_id": "129",
                    "country_name": "suriname",
                    "total_cases": "1981",
                    "new_cases": "88",
                    "total_death": "27",
                    "new_death": "",
                    "total_recovered": "1278",
                    "active_cases": "51",
                    "critical_cases": "676",
                    "total_cases_per_million": "10",
                    "total_death_per_million": "3374"
                },
                {
                    "country_id": "130",
                    "country_name": "iceland",
                    "total_cases": "1918",
                    "new_cases": "3",
                    "total_death": "10",
                    "new_death": "",
                    "total_recovered": "1825",
                    "active_cases": "",
                    "critical_cases": "83",
                    "total_cases_per_million": "",
                    "total_death_per_million": "5617"
                },
                {
                    "country_id": "131",
                    "country_name": "benin",
                    "total_cases": "1914",
                    "new_cases": "109",
                    "total_death": "38",
                    "new_death": "2",
                    "total_recovered": "1036",
                    "active_cases": "",
                    "critical_cases": "840",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "158"
                },
                {
                    "country_id": "132",
                    "country_name": "sierra leone",
                    "total_cases": "1855",
                    "new_cases": "7",
                    "total_death": "67",
                    "new_death": "",
                    "total_recovered": "1397",
                    "active_cases": "22",
                    "critical_cases": "391",
                    "total_cases_per_million": "",
                    "total_death_per_million": "232"
                },
                {
                    "country_id": "133",
                    "country_name": "yemen",
                    "total_cases": "1760",
                    "new_cases": "26",
                    "total_death": "506",
                    "new_death": "7",
                    "total_recovered": "863",
                    "active_cases": "",
                    "critical_cases": "391",
                    "total_cases_per_million": "",
                    "total_death_per_million": "59"
                },
                {
                    "country_id": "134",
                    "country_name": "tunisia",
                    "total_cases": "1584",
                    "new_cases": "19",
                    "total_death": "51",
                    "new_death": "",
                    "total_recovered": "1227",
                    "active_cases": "2",
                    "critical_cases": "306",
                    "total_cases_per_million": "3",
                    "total_death_per_million": "134"
                },
                {
                    "country_id": "135",
                    "country_name": "new zealand",
                    "total_cases": "1567",
                    "new_cases": "",
                    "total_death": "22",
                    "new_death": "",
                    "total_recovered": "1523",
                    "active_cases": "5",
                    "critical_cases": "22",
                    "total_cases_per_million": "",
                    "total_death_per_million": "313"
                },
                {
                    "country_id": "136",
                    "country_name": "angola",
                    "total_cases": "1344",
                    "new_cases": "64",
                    "total_death": "59",
                    "new_death": "1",
                    "total_recovered": "503",
                    "active_cases": "27",
                    "critical_cases": "782",
                    "total_cases_per_million": "20",
                    "total_death_per_million": "41"
                },
                {
                    "country_id": "137",
                    "country_name": "uruguay",
                    "total_cases": "1300",
                    "new_cases": "9",
                    "total_death": "37",
                    "new_death": "1",
                    "total_recovered": "1048",
                    "active_cases": "25",
                    "critical_cases": "215",
                    "total_cases_per_million": "3",
                    "total_death_per_million": "374"
                },
                {
                    "country_id": "138",
                    "country_name": "latvia",
                    "total_cases": "1249",
                    "new_cases": "3",
                    "total_death": "32",
                    "new_death": "",
                    "total_recovered": "1070",
                    "active_cases": "18",
                    "critical_cases": "147",
                    "total_cases_per_million": "",
                    "total_death_per_million": "663"
                },
                {
                    "country_id": "139",
                    "country_name": "jordan",
                    "total_cases": "1224",
                    "new_cases": "6",
                    "total_death": "11",
                    "new_death": "",
                    "total_recovered": "1155",
                    "active_cases": "24",
                    "critical_cases": "58",
                    "total_cases_per_million": "3",
                    "total_death_per_million": "120"
                },
                {
                    "country_id": "140",
                    "country_name": "liberia",
                    "total_cases": "1216",
                    "new_cases": "2",
                    "total_death": "78",
                    "new_death": "",
                    "total_recovered": "698",
                    "active_cases": "2",
                    "critical_cases": "440",
                    "total_cases_per_million": "",
                    "total_death_per_million": "240"
                },
                {
                    "country_id": "141",
                    "country_name": "uganda",
                    "total_cases": "1203",
                    "new_cases": "8",
                    "total_death": "5",
                    "new_death": "",
                    "total_recovered": "1073",
                    "active_cases": "3",
                    "critical_cases": "125",
                    "total_cases_per_million": "",
                    "total_death_per_million": "26"
                },
                {
                    "country_id": "142",
                    "country_name": "georgia",
                    "total_cases": "1182",
                    "new_cases": "3",
                    "total_death": "17",
                    "new_death": "",
                    "total_recovered": "962",
                    "active_cases": "3",
                    "critical_cases": "203",
                    "total_cases_per_million": "5",
                    "total_death_per_million": "296"
                },
                {
                    "country_id": "143",
                    "country_name": "cyprus",
                    "total_cases": "1180",
                    "new_cases": "25",
                    "total_death": "19",
                    "new_death": "",
                    "total_recovered": "856",
                    "active_cases": "",
                    "critical_cases": "305",
                    "total_cases_per_million": "",
                    "total_death_per_million": "977"
                },
                {
                    "country_id": "144",
                    "country_name": "burkina faso",
                    "total_cases": "1153",
                    "new_cases": "3",
                    "total_death": "54",
                    "new_death": "1",
                    "total_recovered": "947",
                    "active_cases": "",
                    "critical_cases": "152",
                    "total_cases_per_million": "",
                    "total_death_per_million": "55"
                },
                {
                    "country_id": "145",
                    "country_name": "niger",
                    "total_cases": "1152",
                    "new_cases": "",
                    "total_death": "69",
                    "new_death": "",
                    "total_recovered": "1037",
                    "active_cases": "5",
                    "critical_cases": "46",
                    "total_cases_per_million": "",
                    "total_death_per_million": "47"
                },
                {
                    "country_id": "146",
                    "country_name": "togo",
                    "total_cases": "988",
                    "new_cases": "12",
                    "total_death": "19",
                    "new_death": "",
                    "total_recovered": "673",
                    "active_cases": "10",
                    "critical_cases": "296",
                    "total_cases_per_million": "2",
                    "total_death_per_million": "119"
                },
                {
                    "country_id": "147",
                    "country_name": "andorra",
                    "total_cases": "939",
                    "new_cases": "2",
                    "total_death": "52",
                    "new_death": "",
                    "total_recovered": "825",
                    "active_cases": "4",
                    "critical_cases": "62",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "12151"
                },
                {
                    "country_id": "148",
                    "country_name": "chad",
                    "total_cases": "938",
                    "new_cases": "2",
                    "total_death": "75",
                    "new_death": "",
                    "total_recovered": "814",
                    "active_cases": "",
                    "critical_cases": "49",
                    "total_cases_per_million": "",
                    "total_death_per_million": "57"
                },
                {
                    "country_id": "149",
                    "country_name": "jamaica",
                    "total_cases": "905",
                    "new_cases": "11",
                    "total_death": "12",
                    "new_death": "",
                    "total_recovered": "743",
                    "active_cases": "",
                    "critical_cases": "150",
                    "total_cases_per_million": "",
                    "total_death_per_million": "305"
                },
                {
                    "country_id": "150",
                    "country_name": "syria",
                    "total_cases": "892",
                    "new_cases": "45",
                    "total_death": "46",
                    "new_death": "",
                    "total_recovered": "283",
                    "active_cases": "15",
                    "critical_cases": "563",
                    "total_cases_per_million": "",
                    "total_death_per_million": "51"
                },
                {
                    "country_id": "151",
                    "country_name": "malta",
                    "total_cases": "890",
                    "new_cases": "16",
                    "total_death": "9",
                    "new_death": "",
                    "total_recovered": "666",
                    "active_cases": "",
                    "critical_cases": "215",
                    "total_cases_per_million": "",
                    "total_death_per_million": "2015"
                },
                {
                    "country_id": "152",
                    "country_name": "sao tome and principe",
                    "total_cases": "875",
                    "new_cases": "1",
                    "total_death": "15",
                    "new_death": "",
                    "total_recovered": "794",
                    "active_cases": "7",
                    "critical_cases": "66",
                    "total_cases_per_million": "",
                    "total_death_per_million": "3986"
                },
                {
                    "country_id": "153",
                    "country_name": "botswana",
                    "total_cases": "804",
                    "new_cases": "",
                    "total_death": "2",
                    "new_death": "",
                    "total_recovered": "63",
                    "active_cases": "",
                    "critical_cases": "739",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "341"
                },
                {
                    "country_id": "154",
                    "country_name": "lesotho",
                    "total_cases": "726",
                    "new_cases": "8",
                    "total_death": "21",
                    "new_death": "2",
                    "total_recovered": "174",
                    "active_cases": "1",
                    "critical_cases": "531",
                    "total_cases_per_million": "",
                    "total_death_per_million": "339"
                },
                {
                    "country_id": "155",
                    "country_name": "bahamas",
                    "total_cases": "715",
                    "new_cases": "36",
                    "total_death": "14",
                    "new_death": "",
                    "total_recovered": "91",
                    "active_cases": "",
                    "critical_cases": "610",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "1817"
                },
                {
                    "country_id": "156",
                    "country_name": "diamond princess",
                    "total_cases": "712",
                    "new_cases": "",
                    "total_death": "13",
                    "new_death": "",
                    "total_recovered": "651",
                    "active_cases": "",
                    "critical_cases": "48",
                    "total_cases_per_million": "4",
                    "total_death_per_million": ""
                },
                {
                    "country_id": "157",
                    "country_name": "san marino",
                    "total_cases": "699",
                    "new_cases": "",
                    "total_death": "42",
                    "new_death": "",
                    "total_recovered": "657",
                    "active_cases": "",
                    "critical_cases": "0",
                    "total_cases_per_million": "",
                    "total_death_per_million": "20596"
                },
                {
                    "country_id": "158",
                    "country_name": "vietnam",
                    "total_cases": "672",
                    "new_cases": "20",
                    "total_death": "8",
                    "new_death": "2",
                    "total_recovered": "378",
                    "active_cases": "4",
                    "critical_cases": "286",
                    "total_cases_per_million": "",
                    "total_death_per_million": "7"
                },
                {
                    "country_id": "159",
                    "country_name": "gambia",
                    "total_cases": "671",
                    "new_cases": "",
                    "total_death": "14",
                    "new_death": "5",
                    "total_recovered": "79",
                    "active_cases": "11",
                    "critical_cases": "578",
                    "total_cases_per_million": "",
                    "total_death_per_million": "277"
                },
                {
                    "country_id": "160",
                    "country_name": "réunion",
                    "total_cases": "669",
                    "new_cases": "2",
                    "total_death": "4",
                    "new_death": "",
                    "total_recovered": "592",
                    "active_cases": "",
                    "critical_cases": "73",
                    "total_cases_per_million": "3",
                    "total_death_per_million": "747"
                },
                {
                    "country_id": "161",
                    "country_name": "channel islands",
                    "total_cases": "595",
                    "new_cases": "4",
                    "total_death": "47",
                    "new_death": "",
                    "total_recovered": "533",
                    "active_cases": "",
                    "critical_cases": "15",
                    "total_cases_per_million": "",
                    "total_death_per_million": "3419"
                },
                {
                    "country_id": "162",
                    "country_name": "tanzania",
                    "total_cases": "509",
                    "new_cases": "",
                    "total_death": "21",
                    "new_death": "",
                    "total_recovered": "183",
                    "active_cases": "",
                    "critical_cases": "305",
                    "total_cases_per_million": "7",
                    "total_death_per_million": "9"
                },
                {
                    "country_id": "163",
                    "country_name": "guyana",
                    "total_cases": "497",
                    "new_cases": "23",
                    "total_death": "22",
                    "new_death": "1",
                    "total_recovered": "186",
                    "active_cases": "1",
                    "critical_cases": "289",
                    "total_cases_per_million": "2",
                    "total_death_per_million": "632"
                },
                {
                    "country_id": "164",
                    "country_name": "taiwan",
                    "total_cases": "476",
                    "new_cases": "1",
                    "total_death": "7",
                    "new_death": "",
                    "total_recovered": "441",
                    "active_cases": "",
                    "critical_cases": "28",
                    "total_cases_per_million": "",
                    "total_death_per_million": "20"
                },
                {
                    "country_id": "165",
                    "country_name": "burundi",
                    "total_cases": "395",
                    "new_cases": "",
                    "total_death": "1",
                    "new_death": "",
                    "total_recovered": "304",
                    "active_cases": "",
                    "critical_cases": "90",
                    "total_cases_per_million": "",
                    "total_death_per_million": "33"
                },
                {
                    "country_id": "166",
                    "country_name": "comoros",
                    "total_cases": "388",
                    "new_cases": "2",
                    "total_death": "7",
                    "new_death": "",
                    "total_recovered": "340",
                    "active_cases": "10",
                    "critical_cases": "41",
                    "total_cases_per_million": "",
                    "total_death_per_million": "445"
                },
                {
                    "country_id": "167",
                    "country_name": "myanmar",
                    "total_cases": "355",
                    "new_cases": "",
                    "total_death": "6",
                    "new_death": "",
                    "total_recovered": "302",
                    "active_cases": "",
                    "critical_cases": "47",
                    "total_cases_per_million": "",
                    "total_death_per_million": "7"
                },
                {
                    "country_id": "168",
                    "country_name": "mauritius",
                    "total_cases": "344",
                    "new_cases": "",
                    "total_death": "10",
                    "new_death": "",
                    "total_recovered": "334",
                    "active_cases": "",
                    "critical_cases": "0",
                    "total_cases_per_million": "",
                    "total_death_per_million": "270"
                },
                {
                    "country_id": "169",
                    "country_name": "isle of man",
                    "total_cases": "336",
                    "new_cases": "",
                    "total_death": "24",
                    "new_death": "",
                    "total_recovered": "312",
                    "active_cases": "",
                    "critical_cases": "0",
                    "total_cases_per_million": "",
                    "total_death_per_million": "3949"
                },
                {
                    "country_id": "170",
                    "country_name": "mongolia",
                    "total_cases": "293",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "230",
                    "active_cases": "",
                    "critical_cases": "63",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "89"
                },
                {
                    "country_id": "171",
                    "country_name": "eritrea",
                    "total_cases": "282",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "225",
                    "active_cases": "",
                    "critical_cases": "57",
                    "total_cases_per_million": "",
                    "total_death_per_million": "79"
                },
                {
                    "country_id": "172",
                    "country_name": "guadeloupe",
                    "total_cases": "272",
                    "new_cases": "",
                    "total_death": "14",
                    "new_death": "",
                    "total_recovered": "179",
                    "active_cases": "",
                    "critical_cases": "79",
                    "total_cases_per_million": "",
                    "total_death_per_million": "680"
                },
                {
                    "country_id": "173",
                    "country_name": "martinique",
                    "total_cases": "269",
                    "new_cases": "",
                    "total_death": "15",
                    "new_death": "",
                    "total_recovered": "98",
                    "active_cases": "",
                    "critical_cases": "156",
                    "total_cases_per_million": "4",
                    "total_death_per_million": "717"
                },
                {
                    "country_id": "174",
                    "country_name": "cambodia",
                    "total_cases": "240",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "197",
                    "active_cases": "",
                    "critical_cases": "43",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "14"
                },
                {
                    "country_id": "175",
                    "country_name": "faeroe islands",
                    "total_cases": "227",
                    "new_cases": "2",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "192",
                    "active_cases": "",
                    "critical_cases": "35",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "4644"
                },
                {
                    "country_id": "176",
                    "country_name": "cayman islands",
                    "total_cases": "203",
                    "new_cases": "",
                    "total_death": "1",
                    "new_death": "",
                    "total_recovered": "202",
                    "active_cases": "",
                    "critical_cases": "0",
                    "total_cases_per_million": "",
                    "total_death_per_million": "3085"
                },
                {
                    "country_id": "177",
                    "country_name": "trinidad and tobago",
                    "total_cases": "194",
                    "new_cases": "12",
                    "total_death": "8",
                    "new_death": "",
                    "total_recovered": "135",
                    "active_cases": "",
                    "critical_cases": "51",
                    "total_cases_per_million": "",
                    "total_death_per_million": "139"
                },
                {
                    "country_id": "178",
                    "country_name": "gibraltar",
                    "total_cases": "189",
                    "new_cases": "1",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "183",
                    "active_cases": "",
                    "critical_cases": "6",
                    "total_cases_per_million": "",
                    "total_death_per_million": "5610"
                },
                {
                    "country_id": "179",
                    "country_name": "bermuda",
                    "total_cases": "157",
                    "new_cases": "",
                    "total_death": "9",
                    "new_death": "",
                    "total_recovered": "144",
                    "active_cases": "",
                    "critical_cases": "4",
                    "total_cases_per_million": "",
                    "total_death_per_million": "2522"
                },
                {
                    "country_id": "180",
                    "country_name": "sint maarten",
                    "total_cases": "150",
                    "new_cases": "4",
                    "total_death": "16",
                    "new_death": "",
                    "total_recovered": "64",
                    "active_cases": "",
                    "critical_cases": "70",
                    "total_cases_per_million": "",
                    "total_death_per_million": "3495"
                },
                {
                    "country_id": "181",
                    "country_name": "brunei",
                    "total_cases": "141",
                    "new_cases": "",
                    "total_death": "3",
                    "new_death": "",
                    "total_recovered": "138",
                    "active_cases": "",
                    "critical_cases": "0",
                    "total_cases_per_million": "",
                    "total_death_per_million": "322"
                },
                {
                    "country_id": "182",
                    "country_name": "barbados",
                    "total_cases": "132",
                    "new_cases": "",
                    "total_death": "7",
                    "new_death": "",
                    "total_recovered": "98",
                    "active_cases": "",
                    "critical_cases": "27",
                    "total_cases_per_million": "",
                    "total_death_per_million": "459"
                },
                {
                    "country_id": "183",
                    "country_name": "aruba",
                    "total_cases": "132",
                    "new_cases": "8",
                    "total_death": "3",
                    "new_death": "",
                    "total_recovered": "112",
                    "active_cases": "",
                    "critical_cases": "17",
                    "total_cases_per_million": "",
                    "total_death_per_million": "1236"
                },
                {
                    "country_id": "184",
                    "country_name": "monaco",
                    "total_cases": "123",
                    "new_cases": "2",
                    "total_death": "4",
                    "new_death": "",
                    "total_recovered": "105",
                    "active_cases": "",
                    "critical_cases": "14",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "3132"
                },
                {
                    "country_id": "185",
                    "country_name": "turks and caicos",
                    "total_cases": "116",
                    "new_cases": "",
                    "total_death": "2",
                    "new_death": "",
                    "total_recovered": "38",
                    "active_cases": "",
                    "critical_cases": "76",
                    "total_cases_per_million": "3",
                    "total_death_per_million": "2992"
                },
                {
                    "country_id": "186",
                    "country_name": "papua new guinea",
                    "total_cases": "114",
                    "new_cases": "3",
                    "total_death": "2",
                    "new_death": "",
                    "total_recovered": "34",
                    "active_cases": "",
                    "critical_cases": "78",
                    "total_cases_per_million": "",
                    "total_death_per_million": "13"
                },
                {
                    "country_id": "187",
                    "country_name": "seychelles",
                    "total_cases": "114",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "113",
                    "active_cases": "",
                    "critical_cases": "1",
                    "total_cases_per_million": "",
                    "total_death_per_million": "1158"
                },
                {
                    "country_id": "188",
                    "country_name": "bhutan",
                    "total_cases": "103",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "90",
                    "active_cases": "1",
                    "critical_cases": "13",
                    "total_cases_per_million": "",
                    "total_death_per_million": "133"
                },
                {
                    "country_id": "189",
                    "country_name": "antigua and barbuda",
                    "total_cases": "92",
                    "new_cases": "",
                    "total_death": "3",
                    "new_death": "",
                    "total_recovered": "75",
                    "active_cases": "",
                    "critical_cases": "14",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "939"
                },
                {
                    "country_id": "190",
                    "country_name": "liechtenstein",
                    "total_cases": "89",
                    "new_cases": "",
                    "total_death": "1",
                    "new_death": "",
                    "total_recovered": "85",
                    "active_cases": "",
                    "critical_cases": "3",
                    "total_cases_per_million": "",
                    "total_death_per_million": "2334"
                },
                {
                    "country_id": "191",
                    "country_name": "french polynesia",
                    "total_cases": "64",
                    "new_cases": "2",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "62",
                    "active_cases": "",
                    "critical_cases": "2",
                    "total_cases_per_million": "",
                    "total_death_per_million": "228"
                },
                {
                    "country_id": "192",
                    "country_name": "belize",
                    "total_cases": "57",
                    "new_cases": "",
                    "total_death": "2",
                    "new_death": "",
                    "total_recovered": "30",
                    "active_cases": "",
                    "critical_cases": "25",
                    "total_cases_per_million": "2",
                    "total_death_per_million": "143"
                },
                {
                    "country_id": "193",
                    "country_name": "st. vincent grenadines",
                    "total_cases": "55",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "45",
                    "active_cases": "",
                    "critical_cases": "10",
                    "total_cases_per_million": "",
                    "total_death_per_million": "496"
                },
                {
                    "country_id": "194",
                    "country_name": "saint martin",
                    "total_cases": "53",
                    "new_cases": "",
                    "total_death": "3",
                    "new_death": "",
                    "total_recovered": "41",
                    "active_cases": "",
                    "critical_cases": "9",
                    "total_cases_per_million": "1",
                    "total_death_per_million": "1369"
                },
                {
                    "country_id": "195",
                    "country_name": "macao",
                    "total_cases": "46",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "46",
                    "active_cases": "",
                    "critical_cases": "0",
                    "total_cases_per_million": "",
                    "total_death_per_million": "71"
                },
                {
                    "country_id": "196",
                    "country_name": "curaçao",
                    "total_cases": "29",
                    "new_cases": "",
                    "total_death": "1",
                    "new_death": "",
                    "total_recovered": "24",
                    "active_cases": "",
                    "critical_cases": "4",
                    "total_cases_per_million": "",
                    "total_death_per_million": "177"
                },
                {
                    "country_id": "197",
                    "country_name": "fiji",
                    "total_cases": "27",
                    "new_cases": "",
                    "total_death": "1",
                    "new_death": "",
                    "total_recovered": "18",
                    "active_cases": "",
                    "critical_cases": "8",
                    "total_cases_per_million": "",
                    "total_death_per_million": "30"
                },
                {
                    "country_id": "198",
                    "country_name": "saint lucia",
                    "total_cases": "25",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "22",
                    "active_cases": "",
                    "critical_cases": "3",
                    "total_cases_per_million": "",
                    "total_death_per_million": "136"
                },
                {
                    "country_id": "199",
                    "country_name": "timor-leste",
                    "total_cases": "25",
                    "new_cases": "1",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "24",
                    "active_cases": "",
                    "critical_cases": "1",
                    "total_cases_per_million": "",
                    "total_death_per_million": "19"
                },
                {
                    "country_id": "200",
                    "country_name": "grenada",
                    "total_cases": "24",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "23",
                    "active_cases": "",
                    "critical_cases": "1",
                    "total_cases_per_million": "",
                    "total_death_per_million": "213"
                },
                {
                    "country_id": "201",
                    "country_name": "new caledonia",
                    "total_cases": "22",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "22",
                    "active_cases": "",
                    "critical_cases": "0",
                    "total_cases_per_million": "",
                    "total_death_per_million": "77"
                },
                {
                    "country_id": "202",
                    "country_name": "laos",
                    "total_cases": "20",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "19",
                    "active_cases": "",
                    "critical_cases": "1",
                    "total_cases_per_million": "",
                    "total_death_per_million": "3"
                },
                {
                    "country_id": "203",
                    "country_name": "dominica",
                    "total_cases": "18",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "18",
                    "active_cases": "",
                    "critical_cases": "0",
                    "total_cases_per_million": "",
                    "total_death_per_million": "250"
                },
                {
                    "country_id": "204",
                    "country_name": "saint kitts and nevis",
                    "total_cases": "17",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "16",
                    "active_cases": "",
                    "critical_cases": "1",
                    "total_cases_per_million": "",
                    "total_death_per_million": "319"
                },
                {
                    "country_id": "205",
                    "country_name": "greenland",
                    "total_cases": "14",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "13",
                    "active_cases": "",
                    "critical_cases": "1",
                    "total_cases_per_million": "",
                    "total_death_per_million": "247"
                },
                {
                    "country_id": "206",
                    "country_name": "montserrat",
                    "total_cases": "13",
                    "new_cases": "",
                    "total_death": "1",
                    "new_death": "",
                    "total_recovered": "10",
                    "active_cases": "",
                    "critical_cases": "2",
                    "total_cases_per_million": "",
                    "total_death_per_million": "2604"
                },
                {
                    "country_id": "207",
                    "country_name": "caribbean netherlands",
                    "total_cases": "13",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "7",
                    "active_cases": "",
                    "critical_cases": "6",
                    "total_cases_per_million": "",
                    "total_death_per_million": "495"
                },
                {
                    "country_id": "208",
                    "country_name": "falkland islands",
                    "total_cases": "13",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "13",
                    "active_cases": "",
                    "critical_cases": "0",
                    "total_cases_per_million": "",
                    "total_death_per_million": "3727"
                },
                {
                    "country_id": "209",
                    "country_name": "vatican city",
                    "total_cases": "12",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "12",
                    "active_cases": "",
                    "critical_cases": "0",
                    "total_cases_per_million": "",
                    "total_death_per_million": "14981"
                },
                {
                    "country_id": "210",
                    "country_name": "western sahara",
                    "total_cases": "10",
                    "new_cases": "",
                    "total_death": "1",
                    "new_death": "",
                    "total_recovered": "8",
                    "active_cases": "",
                    "critical_cases": "1",
                    "total_cases_per_million": "",
                    "total_death_per_million": "17"
                },
                {
                    "country_id": "211",
                    "country_name": "ms zaandam",
                    "total_cases": "9",
                    "new_cases": "",
                    "total_death": "2",
                    "new_death": "",
                    "total_recovered": "",
                    "active_cases": "",
                    "critical_cases": "7",
                    "total_cases_per_million": "",
                    "total_death_per_million": ""
                },
                {
                    "country_id": "212",
                    "country_name": "st. barth",
                    "total_cases": "9",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "6",
                    "active_cases": "",
                    "critical_cases": "3",
                    "total_cases_per_million": "",
                    "total_death_per_million": "911"
                },
                {
                    "country_id": "213",
                    "country_name": "british virgin islands",
                    "total_cases": "8",
                    "new_cases": "",
                    "total_death": "1",
                    "new_death": "",
                    "total_recovered": "7",
                    "active_cases": "",
                    "critical_cases": "0",
                    "total_cases_per_million": "",
                    "total_death_per_million": "264"
                },
                {
                    "country_id": "214",
                    "country_name": "saint pierre miquelon",
                    "total_cases": "4",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "1",
                    "active_cases": "",
                    "critical_cases": "3",
                    "total_cases_per_million": "",
                    "total_death_per_million": "691"
                },
                {
                    "country_id": "215",
                    "country_name": "anguilla",
                    "total_cases": "3",
                    "new_cases": "",
                    "total_death": "",
                    "new_death": "",
                    "total_recovered": "3",
                    "active_cases": "",
                    "critical_cases": "0",
                    "total_cases_per_million": "",
                    "total_death_per_million": "200"
                }
            ],
            "others": {
                "message": "this api is still in progress, we are trying so hard to give our best",
                "endpoints": [
                    {
                        "url": "/",
                        "method": "GET",
                        "message": "get all report for today"
                    },
                    {
                        "url": "/yesterday",
                        "method": "GET",
                        "message": "get all report for yesterday"
                    },
                    {
                        "url": "/summary",
                        "method": "GET",
                        "message": "get total summary report for today"
                    },
                    {
                        "url": "/yesterday/summary",
                        "method": "GET",
                        "message": "get total summary report for yesterday"
                    },
                    {
                        "url": "/countries",
                        "method": "GET",
                        "message": "get all available country names"
                    },
                    {
                        "url": "/{country}",
                        "method": "GET",
                        "message": "get today report for a country, ex: /uk"
                    },
                    {
                        "url": "/yesterday/{country}",
                        "method": "GET",
                        "message": "get yesterday report for a country, ex: /usa"
                    },
                    {
                        "url": "/history",
                        "method": "GET",
                        "message": "get historical data"
                    },
                    {
                        "url": "/search",
                        "method": "POST",
                        "body": {
                            "fromDate": "05-04-2020",
                            "toDate": "08-04-2020"
                        },
                        "message": "get historical data"
                    }
                ]
            }
        }
```

</details>

***Status Code:*** 200
<hr>
<br>



### 2. GET BY COUNTRY NAME FOR YESTERDAY



***Endpoint:***

```bash
Method: GET
Type: HTTP
URL: http://covid-rest.herokuapp.com/yesterday/{{country_name}}
```



***Example Requests/Responses:***


<details>
  <summary>
  I. Example Response: GET BY COUNTRY NAME FOR YESTERDAY Succes example
  </summary>
  <br>

```bash
Method: GET
Type: HTTP
URL: http://covid-rest.herokuapp.com/yesterday/china
```

<br>

```js
        {
            "code": 200,
            "message": "OK",
            "data": {
                "country_id": "1",
                "country_name": "china",
                "total_cases": "84464",
                "new_cases": "36",
                "total_death": "4634",
                "new_death": "",
                "total_recovered": "79030",
                "active_cases": "17",
                "critical_cases": "800",
                "total_cases_per_million": "36",
                "total_death_per_million": "59"
            },
            "others": {
                "message": "this api is still in progress, we are trying so hard to give our best",
                "endpoints": [
                    {
                        "url": "/",
                        "method": "GET",
                        "message": "get all report for today"
                    },
                    {
                        "url": "/yesterday",
                        "method": "GET",
                        "message": "get all report for yesterday"
                    },
                    {
                        "url": "/summary",
                        "method": "GET",
                        "message": "get total summary report for today"
                    },
                    {
                        "url": "/yesterday/summary",
                        "method": "GET",
                        "message": "get total summary report for yesterday"
                    },
                    {
                        "url": "/countries",
                        "method": "GET",
                        "message": "get all available country names"
                    },
                    {
                        "url": "/{country}",
                        "method": "GET",
                        "message": "get today report for a country, ex: /uk"
                    },
                    {
                        "url": "/yesterday/{country}",
                        "method": "GET",
                        "message": "get yesterday report for a country, ex: /usa"
                    },
                    {
                        "url": "/history",
                        "method": "GET",
                        "message": "get historical data"
                    },
                    {
                        "url": "/search",
                        "method": "POST",
                        "body": {
                            "fromDate": "05-04-2020",
                            "toDate": "08-04-2020"
                        },
                        "message": "get historical data"
                    }
                ]
            }
        }
```

</details>

***Status Code:*** 200

<hr>
<br>
<details>
  <summary>
  II. Example Response: GET BY COUNTRY NAME FOR YESTERDAY Failed Example
  </summary>
  <br>

```bash
Method: GET
Type: HTTP
URL: http://covid-rest.herokuapp.com/yesterday/ancd
```

<br>


```js
        {
            "code": 404,
            "message": "record not found",
            "data": [
                "afghanistan",
                "albania",
                "algeria",
                "andorra",
                "angola",
                "anguilla",
                "antigua and barbuda",
                "argentina",
                "armenia",
                "aruba",
                "australia",
                "austria",
                "azerbaijan",
                "bahamas",
                "bahrain",
                "bangladesh",
                "barbados",
                "belarus",
                "belgium",
                "belize",
                "benin",
                "bermuda",
                "bhutan",
                "bolivia",
                "bosnia and herzegovina",
                "botswana",
                "brazil",
                "british virgin islands",
                "brunei",
                "bulgaria",
                "burkina faso",
                "burundi",
                "cabo verde",
                "cambodia",
                "cameroon",
                "canada",
                "car",
                "caribbean netherlands",
                "cayman islands",
                "chad",
                "channel islands",
                "chile",
                "china",
                "colombia",
                "comoros",
                "congo",
                "costa rica",
                "croatia",
                "cuba",
                "curaçao",
                "cyprus",
                "czechia",
                "denmark",
                "diamond princess",
                "djibouti",
                "dominica",
                "dominican republic",
                "drc",
                "ecuador",
                "egypt",
                "el salvador",
                "equatorial guinea",
                "eritrea",
                "estonia",
                "eswatini",
                "ethiopia",
                "faeroe islands",
                "falkland islands",
                "fiji",
                "finland",
                "france",
                "french guiana",
                "french polynesia",
                "gabon",
                "gambia",
                "georgia",
                "germany",
                "ghana",
                "gibraltar",
                "greece",
                "greenland",
                "grenada",
                "guadeloupe",
                "guatemala",
                "guinea",
                "guinea-bissau",
                "guyana",
                "haiti",
                "honduras",
                "hong kong",
                "hungary",
                "iceland",
                "india",
                "indonesia",
                "iran",
                "iraq",
                "ireland",
                "isle of man",
                "israel",
                "italy",
                "ivory coast",
                "jamaica",
                "japan",
                "jordan",
                "kazakhstan",
                "kenya",
                "kuwait",
                "kyrgyzstan",
                "laos",
                "latvia",
                "lebanon",
                "lesotho",
                "liberia",
                "libya",
                "liechtenstein",
                "lithuania",
                "luxembourg",
                "macao",
                "madagascar",
                "malawi",
                "malaysia",
                "maldives",
                "mali",
                "malta",
                "martinique",
                "mauritania",
                "mauritius",
                "mayotte",
                "mexico",
                "moldova",
                "monaco",
                "mongolia",
                "montenegro",
                "montserrat",
                "morocco",
                "mozambique",
                "ms zaandam",
                "myanmar",
                "namibia",
                "nepal",
                "netherlands",
                "new caledonia",
                "new zealand",
                "nicaragua",
                "niger",
                "nigeria",
                "north macedonia",
                "norway",
                "oman",
                "pakistan",
                "palestine",
                "panama",
                "papua new guinea",
                "paraguay",
                "peru",
                "philippines",
                "poland",
                "portugal",
                "qatar",
                "romania",
                "russia",
                "rwanda",
                "réunion",
                "s. korea",
                "saint kitts and nevis",
                "saint lucia",
                "saint martin",
                "saint pierre miquelon",
                "san marino",
                "sao tome and principe",
                "saudi arabia",
                "senegal",
                "serbia",
                "seychelles",
                "sierra leone",
                "singapore",
                "sint maarten",
                "slovakia",
                "slovenia",
                "somalia",
                "south africa",
                "south sudan",
                "spain",
                "sri lanka",
                "st. barth",
                "st. vincent grenadines",
                "sudan",
                "suriname",
                "sweden",
                "switzerland",
                "syria",
                "taiwan",
                "tajikistan",
                "tanzania",
                "thailand",
                "timor-leste",
                "togo",
                "trinidad and tobago",
                "tunisia",
                "turkey",
                "turks and caicos",
                "uae",
                "uganda",
                "uk",
                "ukraine",
                "uruguay",
                "usa",
                "uzbekistan",
                "vatican city",
                "venezuela",
                "vietnam",
                "western sahara",
                "yemen",
                "zambia",
                "zimbabwe"
            ],
            "others": {
                "message": "this api is still in progress, we are trying so hard to give our best",
                "endpoints": [
                    {
                        "url": "/",
                        "method": "GET",
                        "message": "get all report for today"
                    },
                    {
                        "url": "/yesterday",
                        "method": "GET",
                        "message": "get all report for yesterday"
                    },
                    {
                        "url": "/summary",
                        "method": "GET",
                        "message": "get total summary report for today"
                    },
                    {
                        "url": "/yesterday/summary",
                        "method": "GET",
                        "message": "get total summary report for yesterday"
                    },
                    {
                        "url": "/countries",
                        "method": "GET",
                        "message": "get all available country names"
                    },
                    {
                        "url": "/{country}",
                        "method": "GET",
                        "message": "get today report for a country, ex: /uk"
                    },
                    {
                        "url": "/yesterday/{country}",
                        "method": "GET",
                        "message": "get yesterday report for a country, ex: /usa"
                    },
                    {
                        "url": "/history",
                        "method": "GET",
                        "message": "get historical data"
                    },
                    {
                        "url": "/search",
                        "method": "POST",
                        "body": {
                            "fromDate": "05-04-2020",
                            "toDate": "08-04-2020"
                        },
                        "message": "get historical data"
                    }
                ]
            }
        }
```

</details>

***Status Code:*** 404

<hr>
<br>



### 3. GET SUMMARY FOR YESTERDAY



***Endpoint:***

```bash
Method: GET
Type: HTTP
URL: http://covid-rest.herokuapp.com/yesterday/summary
```



---
[Back to top](#covid-19-live-api)
> Made with &#9829; by [Tanvir Ahmed Khan](https://github.com/ftkhanft) | [RRAD](https://github.com/rrad-bd)
