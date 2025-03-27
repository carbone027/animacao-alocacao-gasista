// Pega a largura e altura da tela
const width = window.innerWidth, height = window.innerHeight;

// Cria o SVG ocupando toda a tela
const svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .call(d3.zoom().scaleExtent([1, 8]).on("zoom", zoomed))
    .append("g"); // Grupo para movimentar o mapa

// Projeção do mapa
const projection = d3.geoMercator().fitSize([width, height], {});
const path = d3.geoPath().projection(projection);

// Carrega o GeoJSON
d3.json("assets/merged-rewind.geojson").then(function(geoData) {
    projection.fitSize([width, height], geoData); // Ajusta o tamanho ao viewport

    svg.selectAll("path")
        .data(geoData.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", "lightblue")
        .attr("stroke", "black");
});

// Função para aplicar zoom e pan
function zoomed(event) {
    svg.attr("transform", event.transform);
}
