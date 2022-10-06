const data = [
    {
        "name": "Hong Kong",
        "topLevelDomain": [
            ".hk"
        ],
        "alpha2Code": "HK",
        "alpha3Code": "HKG",
        "callingCodes": [
            "852"
        ],
        "capital": "City of Victoria",
        "altSpellings": [
            "HK",
            "香港"
        ],
        "region": "Asia",
        "subregion": "Eastern Asia",
        "population": 7324300,
        "latlng": [
            22.25,
            114.16666666
        ],
        "demonym": "Chinese",
        "area": 1104.0,
        "gini": 53.3,
        "timezones": [
            "UTC+08:00"
        ],
        "borders": [
            "CHN"
        ],
        "nativeName": "香港",
        "numericCode": "344",
        "currencies": [
            {
                "code": "HKD",
                "name": "Hong Kong dollar",
                "symbol": "$"
            }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "zh",
                "iso639_2": "zho",
                "name": "Chinese",
                "nativeName": "中文 (Zhōngwén)"
            }
        ],
        "translations": {
            "de": "Hong Kong",
            "es": "Hong Kong",
            "fr": "Hong Kong",
            "ja": "香港",
            "it": "Hong Kong",
            "br": "Hong Kong",
            "pt": "Hong Kong",
            "nl": "Hongkong",
            "hr": "Hong Kong",
            "fa": "هنگ‌کنگ"
        },
        "flag": "https://flagcdn.com/hk.svg",
        "regionalBlocs": [],
        "cioc": "HKG"
    }
]
function Capitalize(string){ //Capitalize first character
    let newString = "";
    let firstCharacter = string[0].toUpperCase();
    newString += firstCharacter
    for(let i=1;i<string.length;i++){
        newString += string[i]
    }
    return newString
}

for(let object of data){
    for(let key in object){
        if(Array.isArray(object[key])){
            for(let element of object[key]){
                if(element instanceof Object){
                    for(let valueKey in element){
                        console.log(Capitalize(key),"_"+valueKey,": ",element[valueKey])
                    }
                }else{
                    console.log(Capitalize(key),": ",element)
                }
            }
        }else if(object[key] instanceof Object){
            for(let valueKey in object[key]){
                console.log(Capitalize(key),"_",valueKey,": ",object[key][valueKey])
            }
        }
        else{
            console.log(Capitalize(key),": ",object[key])
        }
    }
    
}