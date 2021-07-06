function buildData(sample) {
    //Use D3 fetch to read JSON file
    d3.json("samples.json").then((importedData) => {
        console.log(importedData);
        var data = importedData.metadata;
        var array = metadata.filter(sampleobject => sampleobject.id == sample);
        var result = array[0]

    //Sort 
})
}