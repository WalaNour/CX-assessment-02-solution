var width = window.innerWidth;
var height = window.innerHeight;
var radius = 50;

var bounceTop = 0 + 'px';
var bounceBottom = (height - radius * 2) + 'px';

var ball = d3.select('.container').selectAll('div')
            .data([0]).enter().append('div').attr('class', 'ball')
            .style({
              top: bounceTop,
              left: width / 2 - radius + 'px',
              width: radius * 2 + 'px',
              height: radius * 2 + 'px'
            });


