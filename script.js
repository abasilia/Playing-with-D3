const svg = d3.select('#canvas');
const rect = svg.append('rect');
rect
  .attr('x', 25)
  .attr('y', 0)
  .attr('width', 150)
  .attr('height', 60)
  .attr('fill', 'pink');

const circ = svg.append('circle');
circ.attr('cx', 100).attr('cy', 30).attr('r', 25).attr('fill', 'blue');

const svg1= d3.select('body').append('svg')
.attr('width', 400)
.attr('height', 400)

svg1.append('circle')
.attr('cx', 200)
.attr('cy', 200)
.attr('r', 100)
.attr('fill', 'purple')



