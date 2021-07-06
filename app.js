 function buildData(sample) {
     //Use D3 fetch to read JSON file
     d3.json("samples.json").then((importedData) => {
        console.log(importedData);
        var data = importedData.metadata;
        var array = metadata.filter(sampleobject => sampleobject.id == sample);
        var result = array[0]
        var panel = d3.select("#sample-metadata");
        panel.html("");
        
})
}

// Import variables from json
function buildCharts(sample) {
    d3.json("samples.json").then((data) => {
        var samples = data.samples;
        var resultsarray = samples.filter(sampleobject =>
            sampleobject.id == sample);
        var result = resultsarray[0]
        var ids = result.otu_ids;
        var labels = result.sample_values;
    
        var layoutBubble = {
            margin: { t: 0 },
            xaxis: { title: "OTU ID"}
            hovermode: "closest",

        };

            var dataBubble = [
                { 
                    x: ids,
                    y: values,
                    text: labels, 
                    mode: "markers",
                    marker: {
                        color: ids, 
                        size: values,
                    }
            }];
        
        Plotly.newplot("bubble", dataBubble, layoutBubble);
    });
};

function init() {

var selector = d3.select("#selDataset");

d3.json("samples.json").then((data) => {
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
        selector
        .append("option")
        .text(sample)
        .property("value", sample);

    });

    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    build
})
}