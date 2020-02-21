function objects()
{
    console.log("Three types of object creation");
    // countries1 = {"Ïndia": ["ÄP","TN","Delhi"], "America":["NA","Mexico"] };
    // Country2  = Object.create(countries1);
    // //Why?
    // console.log(countries1, Country2);
    // countries1 ["Ïndia"]= countries1.Ïndia.concat("Mumbai");
    // console.log(countries1, Country2.Ïndia);
    //Why narasinga??
    obj1 = {"Q":1,"w":2,"e":3};
    obj2 = Object.create(obj1);
    obj2.w=4
    console.log(obj1,obj2, obj1===obj2, obj2.Q );    

}

objects();
