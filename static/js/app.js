function buildMetadata(sample) {
     //Use D3 fetch to read JSON file
    d3.json("samples.json").then((importedData) => {
        console.log(importedData);
        var metadata = importedData.metadata;
        var resultsarray = metadata.filter(sampleobject => sampleobject.id == sample);
        var result = resultsarray[0]
        var panel = d3.select("#sample-metadata");
        panel.html("");
        Object.entries(result).forEach(([key, value]) => {
            panel.append("h6").text(`${key}: ${value}`);
        });
});
};

// Import variables from json
function buildCharts(sample) {
    d3.json("samples.json").then((data) => {
        var samples = data.samples;
        var resultsarray = samples.filter(sampleobject =>
            sampleobject.id == sample);
        var result = resultsarray[0]

        var ids = result.otu_ids;
        var labels = result.otu_labels;
        var values = result.sample_values;
        
        
        var LayoutBubble = {
            margin: { t: 0 },
            xaxis: { title: "OTU ID"},
            hovermode: "closest",

        };
    
    
            var DataBubble = [
                { 
                    x: ids,
                    y: values,
                    text: labels, 
                    mode: "markers",
                    marker: {
                        color: ids, 
                        size: values,
                    }
            }
        ];
        
        Plotly.newPlot("bubble", DataBubble, LayoutBubble);
    });
}

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
    buildMetadata(firstSample);
});
};

function optionChanged(newSample) {
buildCharts(newSample);
buildMetadata(newSample);
};

init();