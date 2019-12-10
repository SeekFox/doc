var mermaid_config = {
    startOnLoad:true,
    htmlLabels:true
}
mermaid.sequenceConfig = {
    diagramMarginX:50,
    diagramMarginY:10,
    boxTextMargin:5,
    noteMargin:10,
    messageMargin:35,
    mirrorActors:true,
    width:150,
    // Height of actor boxes
    height:30
};

mermaid.ganttConfig = {
    titleTopMargin:25,
    barHeight:20,
    barGap:4,
    topPadding:50,
    leftPadding:100,
    gridLineStartPadding:35,
    fontSize:11,
    numberSectionStyles:4,
    axisFormatter: [
        // Within a day
        ["%I:%M", function (d) {
            return d.getHours();
        }],
        // Monday a week
        ["\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 %Y-%m-%d", function (d) {
            return d.getDay() == 1;
        }],
        // Day within a week (not monday)
        ["%a %d", function (d) {
            return d.getDay() && d.getDate() != 1;
        }],
        // within a month
        ["%b %d", function (d) {
            return d.getDate() != 1;
        }],
        // Month
        ["\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 %Y-%m-%d", function (d) {
            return d.getMonth();
        }]
    ]
};

mermaid.init(mermaid_config);

//$( document ).ready(function() {
//    var diagrams = document.querySelectorAll('.mermaid');
//    var i;
//    for(i=0;i<diagrams.length;i++){
//        if(diagrams[i].offsetWidth>0){
//            mermaid.init(undefined, diagrams[i]);
//        }
//    }
//});
