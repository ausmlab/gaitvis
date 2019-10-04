var slider = document.getElementById("myRange");
var heatmapCheckbox = document.getElementById("heatmapCheckbox");
var filestems = ['video1', 'video2', 'video3'];
var dropdown = document.getElementById('dropdown');
var humanRadius = 1.0;
var color = ["#1b70fc", "#faff16", "#d50527", "#158940", "#f898fd", "#24c9d7", "#cb9b64", "#866888", "#22e67a", "#e509ae", "#9dabfa", "#437e8a", "#b21bff", "#ff7b91", "#94aa05", "#ac5906", "#82a68d", "#fe6616", "#7a7352", "#f9bc0f", "#b65d66", "#07a2e6", "#c091ae", "#8674d2", "#8a91a7", "#88fc07", "#ea42fe", "#9e8010", "#10b437", "#c281fe", "#f92b75", "#07c99d", "#a946aa", "#bfd544", "#16977e", "#ff6ac8", "#a88178", "#5776a9", "#678007", "#fa9316", "#85c070", "#6aa2a9", "#989e5d", "#fe9169", "#cd714a", "#6ed014", "#c5639c", "#c23271", "#698ffc", "#678275", "#c5a121", "#a978ba", "#ee534e", "#d24506", "#59c3fa", "#ca7b0a", "#6f7385", "#9a634a", "#48aa6f", "#ad9ad0", "#d7908c", "#6a8a53", "#8c46fc", "#8f5ab8", "#fd1105", "#7ea7cf", "#d77cd1", "#a9804b", "#0688b4", "#6a9f3e", "#ee8fba", "#a67389", "#9e8cfe", "#bd443c", "#6d63ff", "#d110d5", "#798cc3", "#df5f83", "#b1b853", "#bb59d8", "#1d960c", "#867ba8", "#18acc9", "#25b3a7", "#f3db1d", "#938c6d", "#936a24", "#a964fb", "#92e460", "#a05787", "#9c87a0", "#20c773", "#8b696d", "#78762d", "#638ba8", "#e154c6", "#40835f", "#d73656", "#1afd5c", "#c4f546", "#3d88d8", "#bd3896", "#1397a3", "#f940a5", "#66aeff", "#d097e7", "#fe6ef9", "#d86507", "#8b900a", "#d47270", "#e8ac48", "#cf7c97", "#cebb11", "#718a90", "#e78139", "#ff7463", "#bea1fd", "#f81d47", "#72b93c", "#7ba66a", "#656dc4", "#3a8278", "#66988b", "#a384d5", "#b35a3b", "#e07cfd", "#27cf4c", "#b224d4", "#b39579", "#b68f38", "#e51188", "#938747", "#5eb195", "#bba85b", "#f39f5a", "#9961a0", "#bd60b6", "#14a147", "#db8c67", "#9bc52e", "#96a0cd", "#7b68ac", "#039762", "#cf15fd", "#d1583d", "#b77163", "#7a9176", "#b87aab", "#fa12e9", "#6cbd87", "#fa8cdb", "#4de903", "#ae4e71", "#ff5572", "#a49f32", "#eb72a6", "#da9108", "#a2e200", "#657b5a", "#ad7002", "#5a966f", "#f04d1f", "#7e7cfb", "#5b788f", "#518236", "#95795f", "#ab8995", "#b28dbb", "#8dae50", "#af6c36", "#d892c7", "#d44792", "#4299be", "#58a802", "#6699da", "#bd8464", "#c279dc", "#0bc9be", "#f88e87", "#25dd96", "#9a5f72", "#727da1", "#6eb0c8", "#84788f", "#d45762", "#ce61fe", "#7d9cb1", "#5fb45f", "#dd2506", "#5b7af0", "#da3d3a", "#5f9304", "#9e6cce", "#ff30c8", "#78d670", "#2dfe92", "#4674cb", "#5e7a7d", "#bb415b", "#528e90", "#808f3f", "#bc7d82", "#829d9c", "#ea6842", "#c58545", "#8795e8", "#ab965f", "#93a27d", "#fd5a93", "#56b5bc", "#06aa84", "#978eb7", "#9bfe63", "#d1055c", "#7a60d3", "#c306af", "#cb0189", "#837d03", "#8c66fe", "#bd6885", "#589854", "#3998fa", "#e7889c", "#b94c14", "#9950e4", "#9576a0", "#dd4076", "#3b9f96", "#d262d7", "#d37ab2", "#58addf", "#a39be6", "#fca707", "#1d7cbf", "#a06564", "#47c117", "#10c1e5", "#8e7643", "#7e8357", "#fb7a46", "#ff7f11", "#d5e315", "#7578b7", "#c641b4", "#a36b95", "#8c85c4", "#b2aa02", "#85659d", "#746f94", "#428614", "#8b6f04", "#a54dca", "#778495", "#c8547c", "#c2632a", "#bc49fe", "#e05ea9", "#ae9009", "#70a9a0", "#bc8e8a", "#17ba82", "#e47c64", "#b991e4", "#ff53e3", "#dc9247", "#d1b442", "#0ce54b", "#5e87ba", "#427ca1", "#0f8a8a", "#917385", "#408ca3", "#a97354", "#727fd7", "#829765", "#b570e9", "#ff3835", "#24a8b0", "#ec676e", "#87a9e8", "#d09e47", "#9cc35b", "#e6ca34", "#2d84fc", "#be6800", "#eb455f", "#7296be", "#ce8f9f", "#e4ac04", "#a7584f", "#d40043", "#c6391c", "#b94f8a", "#538a77", "#be594f", "#a964bb", "#e22ac8", "#78a011", "#ab7cf9", "#687b44", "#8f71b3", "#509235", "#b58008", "#69a67e", "#c97f71", "#18b259", "#e2820a", "#c589cf", "#e68fe1", "#b6c008", "#6aee71", "#51804f", "#8d6b48", "#8c64ce", "#af559e", "#be46c7", "#a17478", "#ec1e28", "#9e7b31", "#cb7431", "#e27486", "#e46dc2", "#7bcc4b", "#76f249", "#11ff13", "#61886a", "#0b91d0", "#8c86a0", "#6493a0", "#988e31", "#b9809b", "#899e39", "#a595b1", "#769ff9", "#95ad70", "#4fbfa8", "#5fc560", "#fd8f46", "#ff90a1", "#5ed282", "#b924be", "#0e876d", "#9a81b5", "#0ad811", "#91d636", "#5268f1", "#11829b", "#9b6431", "#8e6c60", "#6b8231", "#e6125e", "#cf4fa7", "#a47b9b", "#c96575", "#40a12f", "#b67a30", "#da5c26", "#d443e7", "#947afd", "#8985e3", "#4da088", "#7b9689", "#a48965", "#bc73c1", "#509fb3", "#db6857", "#a89948", "#a49c77", "#fe5d3d", "#e766ec", "#c69378", "#27b3fc", "#86b90c", "#46c98e", "#fea943", "#d4ce14", "#9c53ad", "#926280", "#c73342", "#ab5f7f", "#7670e1", "#5e7dc5", "#5f8492", "#468f5b", "#8d7c29", "#ac6978", "#6c8f2e", "#8388ae", "#759852", "#e840ae", "#cf66b7", "#e85193", "#d66b99", "#66a0bf", "#df723a", "#8a9ebe", "#b390fa", "#ee7c7a", "#d58db1", "#e881c4", "#79b4ec", "#f379dd", "#a1b73a", "#fd7cbc", "#fe84ab", "#1dd0fd", "#b2e54a", "#fcef31", "#007bdd", "#d20577", "#cb5502", "#a96cab", "#b46d95", "#658bd8", "#e71ced", "#809bd1", "#b485ce", "#e7730c", "#c28e0e", "#f258bf", "#fe63ad", "#a0ab58", "#d38bfd", "#e595fe", "#6fe045", "#7c52fd", "#6872a1", "#018957", "#b24e51", "#148d28", "#a36416", "#617ea2", "#c54a52", "#9d7244", "#379087", "#618983", "#3e9171", "#a17265", "#897e5d", "#a85ce0", "#4a8cb5", "#b76a49", "#9970e1", "#7589a8", "#c36865", "#07a360", "#d54acf", "#6c9597", "#6e9966", "#bb794a", "#f4328c", "#919260", "#ee4d7e", "#51a658", "#ea5d07", "#b68d5b", "#54ad42", "#9793ce", "#eb4ce4", "#d18188", "#c388bb", "#fe605e", "#999bff", "#bc97d3", "#7fb67a", "#b8aa3e", "#e59c35", "#afa8fe", "#22d56e", "#b2c447", "#96d45d", "#add317", "#fecd0f", "#b0f707", "#e4f439", "#7d6c8e", "#557d75", "#a65768", "#767643", "#a75c2a", "#e11e3e", "#718763", "#dd4a2b", "#08a90f", "#a581ad", "#6e9a80", "#579ed0", "#fe4052", "#d2804f", "#ad92a9", "#1db498", "#cc8c2c", "#f36887", "#07b4e4", "#1cbf53", "#16bacb", "#5fb5ae", "#ed8559", "#5fbbe0", "#ef83f5", "#f9b63c", "#d3fe14", "#9f2dfe", "#537e69", "#85712b", "#cf0aa4", "#c04e2f", "#935cf0", "#b933ed", "#7b7b95", "#7a8340", "#d82996", "#9d7d88", "#c86550", "#748ea0", "#399e73", "#4e9ba0", "#a68a47", "#80969e", "#7f9d79", "#53a5ea", "#979ab7", "#5cbf98", "#e9907b", "#e59968", "#d09dfc", "#687c87", "#c8426d", "#ac46fe", "#996dac", "#27964f", "#15a5d1", "#999d0f", "#8d9baa", "#89a359", "#dc61f8", "#7eac38", "#41b86f", "#bd9754", "#d386e3", "#86b6fe", "#c4be46", "#a03ddf", "#9e549b", "#b43aa2", "#92608e", "#746cbe", "#be3c82", "#497dbd", "#956a79", "#bc526a", "#9c710c", "#c329dc", "#af55b6", "#b35e95", "#7a881f", "#6b8e7c", "#998054", "#e83a08", "#917ac6", "#838b6d", "#db514b", "#4c92cd", "#099bb8", "#bb6aa9", "#ef17a1", "#a87f63", "#b16ed2", "#d343fd", "#b67e72", "#9a81e4", "#c6729d", "#19a893", "#818bff", "#8992bf", "#a18bc6", "#b188ab", "#4da8a6", "#b68a77", "#b381e4", "#c97bbc", "#71aa57", "#d4812e", "#6bad74", "#70b007", "#cb77f7", "#59b384", "#82aa7f", "#cc8d60", "#dd8479", "#ba9a6e", "#bd9c3c", "#fc4dfc", "#df82a9", "#8aba4a", "#d69d00", "#f9846f", "#99b864", "#c7ad12", "#54d85f", "#83e521", "#9aef3e", "#5ffe80", "#647593", "#c82c55", "#806fa2", "#508099", "#228895", "#528285", "#747c5f", "#448a46", "#a2712b", "#927994", "#eb1c75", "#d34f6f", "#838d52", "#759312", "#f5235f", "#b8758a", "#fb3903", "#9d9001", "#949944", "#6ca490", "#978fe4", "#bd8894", "#e166d4", "#a891df", "#05b5b9", "#96a835", "#94a1e5", "#fe6c7b", "#a9a666", "#58bad1", "#60c076", "#d195d3", "#ee9137", "#06ceb0", "#e2a158", "#02d6a1", "#e0bb27", "#8955d9", "#ad4a8d", "#5a8724", "#a86654", "#bc5900", "#3686c0", "#9f5fc5", "#687eaf", "#d4327a", "#cf38a5", "#5383e0", "#b56c6f", "#9e78c0", "#75908d", "#4c9d66", "#ed3e41", "#d55a95", "#c068d1", "#e45570", "#c1795e", "#e6583f", "#ca7381", "#a08bb3", "#b47fb9", "#d17660", "#ee6757", "#4eacbc", "#af9c04", "#d474e7", "#f2732c", "#73b18e", "#eb7a9a", "#52be46", "#fd6da0", "#05bff9", "#d7a83b", "#6965dd", "#5d72b5", "#846b7e", "#b15142", "#ca2f2b", "#73791a", "#aa46bd", "#867256", "#7776a6", "#cb4633", "#8273ba", "#d304c0", "#bd4c9f", "#966f8e", "#5e8b44", "#c55f39", "#888628", "#917fa2", "#cf5d56", "#cf52b9", "#e008ff", "#7f88d0", "#a6872f", "#ae8084", "#cd5ce6", "#f512cf", "#b58643", "#d57213", "#9591a7", "#4da881", "#fd3e69", "#939775", "#53a898", "#fb5507", "#6ca4b6", "#7ea0a8", "#c580aa", "#82a195", "#0ab811", "#53a2fe", "#50aacc", "#57b42a", "#70a5dd", "#9e9ac4", "#8da6d4", "#84b366", "#a998fe", "#d7927c", "#75bb58", "#87a9fe", "#70c11a", "#9bb600", "#59cb3a", "#e8a00d", "#8bcb67", "#fc92ce", "#a8d04b", "#17ee67", "#c4d816", "#bfe620", "#b018e9", "#7d63bf", "#8f5ea4", "#567a86", "#a9507f", "#617b66", "#577e5d", "#a45c41", "#d60910", "#c24007", "#7f7412", "#5970d8", "#8764b6", "#04897b", "#3f8831", "#4176e9", "#8f699a", "#a5653d", "#a45f98", "#a06682", "#d32f68", "#9a6f55", "#857b41", "#8668df", "#688199", "#87759b", "#b9587f", "#c9457f", "#6d846d", "#b2625c", "#6c73f7", "#508b97", "#5d8d5e", "#d5444d", "#2f9638", "#cc5324", "#b06c1f", "#0c9595", "#e33726", "#0494c0", "#8180b4", "#4f9384", "#928602", "#058ef7", "#81869f", "#c35ca9", "#e13d88", "#918758", "#be6f3b", "#e14e05", "#459e00", "#6f83f4", "#9c6cfc", "#2594e2", "#c655d0", "#5894ac", "#da5183", "#539d43", "#ad7f2b", "#5092e2", "#bb5fea", "#6a90c8", "#cf6386", "#d46641", "#d06b32", "#629f1e", "#a676e1", "#f511b9", "#5c9c98", "#c37571", "#e5575f", "#92924f", "#f14937", "#8293b3", "#a8869d", "#da6774", "#61a366", "#6d95e8", "#d36aab", "#1bad79", "#8894d2", "#ce6fc6", "#dd724f", "#f058a7", "#e96497", "#fe4596", "#c88886", "#7ba6c0", "#6aacad", "#e372b2", "#c187e6", "#6daeba", "#f27556", "#09c138", "#f466d3", "#d883c4", "#b8a064", "#dd8c54", "#de8e2a", "#72b1d7", "#e379e5", "#e5878a", "#a7ad43", "#c490fa", "#b19ee5", "#2dc0c1", "#5db7fd", "#b3af59", "#c6a846", "#b3b535", "#ff7ecf", "#e891c8", "#87c702", "#fd85f0", "#fe9940", "#f995eb", "#c3c733", "#1ee891", "#14f33a", "#d3db3a", "#82fa70", "#716daa", "#757089", "#3d826d", "#966459", "#3b8452", "#8f6b38", "#b75827", "#b743d5", "#479114", "#59967b", "#6b9270", "#5c95bb", "#78983d", "#ce8262", "#fa6a36", "#16d481", "#7fd95b", "#9054cb", "#1b7faf", "#358182", "#956369", "#807242", "#9b6600", "#8358eb", "#68788b", "#816f86", "#a75c60", "#627f52", "#6e7b52", "#5e8142", "#527eac", "#3684a5", "#c12eb6", "#c92d92", "#048d69", "#966b68", "#d71d54", "#278d51", "#d13708", "#7b64f4", "#6a77c2", "#9465b6", "#b748b0", "#478884", "#3d8a7a", "#dd026f", "#ca415d", "#318e62", "#dc2629", "#b16320", "#8e7902", "#ad45eb", "#028daa", "#648487", "#4f8c69", "#9a60e3", "#7777cd", "#8e6ec4", "#ac60ab", "#9c6da0", "#c75363", "#e80e4d", "#cc504a", "#b450e0", "#7080c1", "#db18b8", "#c75096", "#758b49", "#8473f1", "#817dc4", "#7784b3", "#be618d", "#ab7370", "#e23a65", "#e5374f", "#ac7640", "#639440", "#c9630d", "#e002db", "#9c78af", "#3c96a9", "#a773a2", "#9b7d92", "#ad757f", "#ae7764", "#4d8afc", "#8f81b7", "#db42b4", "#fb1532", "#f33324", "#c17318", "#b462f6", "#1f9acf", "#808f9d", "#b1779c", "#e93b9a", "#0ea73b", "#8c9232", "#738ce7", "#6d95b2", "#1ca1b4", "#10a4a2", "#ac8093", "#a08c5a", "#669f53", "#859754", "#bd7f20", "#479bdf", "#ae7acf", "#e937da", "#87977a", "#c57d2f", "#b18a1d", "#889c15", "#9086fa", "#c06ee6", "#9889d2", "#b67bc8", "#719e9a", "#d3708a", "#849b86", "#9f9457", "#7aa14f", "#ee5d2d", "#fd4727", "#e66729", "#a99131", "#5f99fd", "#14a2fd", "#b873fe", "#df54e7", "#a989be", "#08b26b", "#f55660", "#929c6c", "#6caa29", "#7b95fe", "#f724fa", "#cb74d3", "#fe4b80", "#f16905", "#6aa5cf", "#a394bd"];
var frame2time = 0.2;
var frameWindowSize = 20;
var frameCount = 0;
//var opacityLookupTable = [1, 0.631272442, 0.15825031, 0.015608801, 0.000598028];
//var opacityLookupTable = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1];
var opacityLookupTable = [1, 0.0];
var data;


for (f in filestems) {
    dropdown.add(new Option(filestems[f]));
}

function FootstepChart() {
    this.margin = {top: 20, right: 20, bottom: 40, left: 40};
    this.width = 500 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
}

FootstepChart.prototype.initGraph = function() {
    this.x = d3.scale.linear()
        .range([0, this.width]);

    this.y = d3.scale.linear()
        .range([this.height, 0]);

    let that = this;
    this.rValueLine = d3.svg.line()
        .interpolate("basis")
        .x(function (d) {
            return that.x(d.rx);
        })
        .y(function (d) {
            return that.y(d.ry);
        });
    this.lValueLine = d3.svg.line()
        .interpolate("basis")
        .x(function (d) {
            return that.x(d.lx);
        })
        .y(function (d) {
            return that.y(d.ly);
        });

    this.xAxis = d3.svg.axis()
        .scale(this.x)
        .orient("bottom");

    this.yAxis = d3.svg.axis()
        .scale(this.y)
        .orient("left");

    this.svg = d3.select(".footstepchart").append("svg")
        .attr("width", this.width + this.margin.left + this.margin.right)
        .attr("height", this.height + this.margin.top + this.margin.bottom)
        .append("g")
        .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
}



FootstepChart.prototype.drawAxes = function() {
    this.x.domain([-10, 10]);
    this.y.domain([-8, 12]);

    humanRadius = Math.sqrt(Math.pow((this.x(1) - this.x(0)), 2)) * 0.5; //1m in graph space units

    this.svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + this.height + ")")
        .call(this.xAxis)
        .append("text")
        .attr("class", "label")
        .attr("x", this.width)
        .attr("y", -6)
        .style("text-anchor", "end")
        .text("x (m)");

    this.svg.append("g")
        .attr("class", "y axis")
        .call(this.yAxis)
        .append("text")
        .attr("class", "label")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("y (m)")

}

FootstepChart.prototype.reset = function() {
    this.svg.selectAll(".line").remove();
    this.svg.selectAll(".dot").remove();
    this.svg.selectAll(".boundingCircle").remove()
}

FootstepChart.prototype.drawChart = function(data, groupByID) {
    let that = this;
    this.lines = this.svg.selectAll(".line")
        .data(groupByID);
    let g = this.lines.enter().append("g")
    g.append("path")
        .attr("class", "line")
        .attr("d", function (d) {
            return that.rValueLine(d.values)
        })
        .style("opacity", function (d) {
            return lineOpacityLookup(d);
        });
    g.append("path")
        .attr("class", "line")
        .attr("d", function (d) {
            return that.lValueLine(d.values)
        })
        .style("opacity", function (d) {
            return lineOpacityLookup(d);
        });

    this.dots = this.svg.selectAll(".dot")
        .data(data);
    g = this.dots.enter().append("g")
    g.append("circle")
        .attr("class", "dot")
        .attr("r", 3.5)
        .attr("cx", function (d) {
            return that.x(d.rx);
        })
        .attr("cy", function (d) {
            return that.y(d.ry);
        })
        .style("fill", function (d) {
            return color[d.id];
        })
        .style("opacity", function (d) {
            return circleOpacityLookup(d.frame);
        });
    g.append("circle")
        .attr("class", "dot")
        .attr("r", 3.5)
        .attr("cx", function (d) {
            return that.x(d.lx);
        })
        .attr("cy", function (d) {
            return that.y(d.ly);
        })
        .style("fill", function (d) {
            return color[d.id];
        })
        .style("opacity", function (d) {
            return circleOpacityLookup(d.frame);
        });
    g.append("circle")
        .attr("class", "boundingCircle")
        .attr("r", humanRadius)
        .attr("cx", function (d) {
            return that.x(d.cx);
        })
        .attr("cy", function (d) {
            return that.y(d.cy);
        })
        .style("opacity", function (d) {
            return circleOpacityLookup(d.frame);
        });
}

FootstepChart.prototype.updateChart = function (currentFrame) {
    this.dots.selectAll("circle").style("opacity", function (d) {
        return circleOpacityLookup(d.frame);
    })
    this.lines.selectAll("path")
        .style("opacity", function (d) {
            return lineOpacityLookup(d);
        });

    this.dots.selectAll(".boundingCircle")
        .filter(function (d) {
            //return (d.frame != +slider.value);
            return (d.frame != currentFrame);
        })
        .style("stroke-dasharray", '5 3');

    let active = this.dots.selectAll(".boundingCircle")
        .filter(function (d) {
            return (d.frame == currentFrame);
        });

    let that = this;
    active.each(function (d) {
        let objD = this;
        active.each(function (e) {
            if (d.id < e.id) {
                let dist = euclideanDistance([that.x(d.cx), that.y(d.cy)], [that.x(e.cx), that.y(e.cy)]);
                if (dist < humanRadius * 2) {
                    d3.select(objD)
                        .style("stroke-dasharray", '0 0')
                    d3.select(this)
                        .style("stroke-dasharray", '0 0')

                    let sss = speedDistanceGraph.svg.selectAll(".sline")
                        .filter(function (z) {
                            return ((d.id == +z.key) || (e.id == +z.key));
                        })
                }
            }
        });
    })
}


function SpeedChart(name) {
    this.name = name;
    this.margin = {top: 20, right: 20, bottom: 40, left: 40};
    this.width = 300 - this.margin.left - this.margin.right;
    this.height = 300 - this.margin.top - this.margin.bottom;
}

SpeedChart.prototype.initGraph = function (anchor) {
    this.svg = d3.select(anchor).append("svg")
        .attr("width", this.width + this.margin.left + this.margin.right)
        .attr("height", this.height + this.margin.top + this.margin.bottom)
        .append("g")
        .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

    this.x = d3.scale.linear()
        .range([0, this.width]);
    this.y = d3.scale.linear()
        .range([this.height, 0]);
    this.xAxis = d3.svg.axis()
        .scale(this.x)
        .orient("bottom");
    this.yAxis = d3.svg.axis()
        .scale(this.y)
        .orient("left");

    let that = this;
    this.distanceSpeedLine = d3.svg.line()
        .interpolate("basis")
        .x(function (d) {
            return that.x(d.frame * frame2time);
        })
        .y(function (d) {
            return that.y(d.speed);
        });

    this.xAxis.ticks(5);
    this.yAxis.ticks(5);
}

SpeedChart.prototype.drawAxes = function (xDomain, yDomain, xLabel, yLabel) {
    this.x.domain(xDomain);
    this.y.domain(yDomain);

    this.svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + this.height + ")")
        .call(this.xAxis)
        .append("text")
        .attr("class", "label")
        .attr("x", this.width)
        .attr("y", -6)
        .style("text-anchor", "end")
        .text(xLabel);

    this.svg.append("g")
        .attr("class", "y axis")
        .call(this.yAxis)
        .append("text")
        .attr("class", "label")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text(yLabel);

    this.holder = this.svg.append("defs");
    this.holder.append("clipPath")
        .attr("id", "innerGraph")
        .append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .style("fill", "gray")
        .attr("height", this.height)
        .attr("width", this.width);
}

SpeedChart.prototype.drawLineGraph = function (gdata) {
    let that = this;
    this.svg.selectAll(".sline").remove();
    this.svg.append("g")
        .attr("clip-path", "url(#innerGraph)")
        .selectAll(".sline")
        .data(gdata)
        .enter()
        .append("path")
        .attr("class", "sline")
        .attr("d", function (d) {
            return that.distanceSpeedLine(d.values.slice(1))
        })
        .style("stroke", function (d) {
            return color[+d.key];
        })
}

SpeedChart.prototype.updateLineGraph = function () {
    let that = this;
    this.svg.selectAll(".sline")
        .attr("d", function (d) {
            return that.distanceSpeedLine(d.values.slice(1))
        })
        .style("stroke-width", "");
}


var footstepchart = new FootstepChart();
footstepchart.initGraph();
footstepchart.drawAxes();


var speedDistanceGraph = new SpeedChart("speed-distance");
speedDistanceGraph.initGraph(".speedchart");

speedDistanceGraph.drawAxes([0, frameWindowSize * frame2time], [0, 5], "time (s)", "speed (m/s)");

var heatmapInstance = h337.create({
    container: document.querySelector('.footstepchart'),
    radius: humanRadius * 2
});





function loadVideo(path) {
    let video = document.querySelector(".videocontainer");
    document.getElementById("mp4source").src = path;
    video.load();
}

function loadData(filename) {
    let textPath = "data/" + filename + ".txt";
    let videoPath = "vid/" + filename + ".mp4";

    slider.value = 0;
    frameCount = 0;
    footstepchart.reset();
    d3.text(textPath, function (text) {
        let data = d3.csv.parseRows(text).map(function (row) {
            return {
                frame: +row[0],
                id: +row[1],
                rx: +row[2] / 1000,
                ry: +row[3] / 1000,
                lx: +row[4] / 1000,
                ly: +row[5] / 1000
            };
        });

        data.forEach(function (d) {
            d.cx = (d.rx + d.lx) * 0.5;
            d.cy = (d.ry + d.ly) * 0.5;
            d.time = d.frame / 5.0;
        });

        let maxFrame = d3.max(data, function (d) {
            return d.frame;
        })
        slider.max = maxFrame;
        frameCount = maxFrame + 1;

        let groupByID = d3.nest()
            .key(function (d) {
                return d.id;
            })
            .entries(data);

        groupByID.forEach(function (d) {
            d.values[0].speed = 0;
            for (var i = 1; i < d.values.length; i++) {
                var f1 = d.values[i];
                var f0 = d.values[i - 1];
                f1.speed = (euclideanDistance([f0.cx, f0.cy], [f1.cx, f1.cy]) / (f1.time - f0.time));
            }
        });
        footstepchart.drawChart(data,groupByID);
        speedDistanceGraph.drawLineGraph(groupByID);

        update();
    });

    loadVideo(videoPath);
}

function update() {

    speedDistanceGraph.x.domain([(+slider.value - frameWindowSize) * frame2time, (+slider.value) * frame2time]);
    speedDistanceGraph.xAxis.scale(speedDistanceGraph.x);
    speedDistanceGraph.svg.select(".x.axis")
        .call(speedDistanceGraph.xAxis);
    speedDistanceGraph.updateLineGraph();

    if (heatmapCheckbox.checked) {
        let xBegin = (+slider.value) - frameWindowSize * 3;
        let points = data.filter(function (d) {
            return ((xBegin <= d.frame) && (d.frame <= +slider.value));
        }).map(function (d) {
            return {x: Math.round(footstepchart.x(d.cx)), y: Math.round(footstepchart.y(d.cy)), value: 1};
        });
        heatmapInstance.setData({max: 1, data: points});
    }

    footstepchart.updateChart(+slider.value);

    let video = document.querySelector(".videocontainer");
    video.currentTime = (+slider.value) * frame2time;
}

// =======================================================
// utility functions
function euclideanDistance(p0, p1) {
    return Math.sqrt(Math.pow(p1[0] - p0[0], 2) + Math.pow(p1[1] - p0[1], 2));
}

function circleOpacityLookup(fid) {
    let index = (+slider.value) - fid;
    let opacity = 0.0;
    if ((index >= 0) && (index < opacityLookupTable.length))
        opacity = opacityLookupTable[index];
    return opacity;
}

function lineOpacityLookup(d) {
    let ex = d3.extent(d.values, function (k) {
        return k.frame;
    });
    return ((ex[0] <= slider.value) && (slider.value <= ex[1])) ? 1 : 0;
}

// =======================================================
// events
slider.oninput = () => update();

heatmapCheckbox.onclick = () => {
    d3.select('.heatmap-canvas')
        .style("opacity", heatmapCheckbox.checked ? "" : "0");
    update();
};

dropdown.onchange = () => loadData(dropdown.options[dropdown.selectedIndex].value);

document.onkeydown = (e) => {
    var keyCode = e.code;
    if (keyCode == "ArrowLeft") {
        slider.value--;
        update();
    } else if (keyCode == "ArrowRight") {
        slider.value++;
        update();
    }
}

window.onload = () => loadData(dropdown.options[dropdown.selectedIndex].value);


// =======================================================

function handleMouseOver(d) {  // Add interactivity
    console.log("d.id");
    // Specify where to put label of text
    svg.append("text").attr({
        id: "t" + d.id,  // Create an id for text so we can select it later for removing on mouseout
        x: function () {
            return x(d.cx) - 30;
        },
        y: function () {
            return y(d.cy) - 15;
        }
    })
        .text(function () {
            return [d.id];  // Value of the text
        });
}

function handleMouseOut(d, i) {
    // Select text by id and then remove
    d3.select("#t" + d.id).remove();  // Remove text location
}
