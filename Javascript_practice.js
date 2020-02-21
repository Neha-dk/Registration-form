function objects()
{
    console.log("Three types of object creation");
    countries1 = {"Ïndia": ["ÄP","TN","Delhi"], "America":["NA","Mexico"] };
    Country2  = Object.create(countries1);
    //Why?
    console.log(countries1, Country2);
    countries1 ["Ïndia"]= countries1.Ïndia.concat("Mumbai");
    console.log(countries1, Country2.Ïndia);
    
}

objects();
