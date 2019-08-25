import d3 from 'd3'
import {pageNameToRoute} from '../common/util'

let build = (data) => {
    data = data.map((d, i) => {
        d['index'] = i
        return d
    })

    function buildSVG () { // change the function name so it's different from its parent
        d3.select('#d3-trek-timeline').select('svg').remove()

        const containerWidth = document.getElementById('d3-trek-timeline').offsetWidth

        let margin = {top: 30, right: 100, bottom: 250, left: 100}
        let width = containerWidth - margin.left - margin.right
        let height = 2500 - margin.top - margin.bottom

        const dateFormat = d3.time.format('%Y-%m-%d')

        const dateArray = data.map((d, i) => dateFormat.parse(d.date_start))

        const dateExtent = d3.extent(dateArray)

        const dateFormatTick = (d) => {
            if (d.getMonth() === 0 && d.getDate() === 1) {
                return d3.time.format('%Y')(d)
            } else {
                return d3.time.format('%b %d, %Y')(d)
            }
        }

        const yearDiff = dateExtent[1].getYear() - dateExtent[0].getYear() + 1

        const yearArray = Array(yearDiff).fill(0).map((d, i) => dateFormat.parse((parseInt(dateExtent[0].getYear()) + 1900 + i) + '-01-01'))

        const y = d3.time.scale()
            .domain(dateExtent)
            .range([0, height])

        let timelineAxis = d3.svg.axis()
            .scale(y)
            .orient('left')
            .tickFormat(dateFormatTick)
            .outerTickSize(0)
            .ticks(0)
            // .tickValues(yearArray.concat(dateArray))

        let svg = d3.select('#d3-trek-timeline')
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + (margin.left + width / 2) + ',' + margin.top + ')')

        svg.append('g')
            .attr('class', 'timeline')
            .call(timelineAxis)

        const datePlates = svg.selectAll('.years')
            .data(yearArray)
            .enter()

        datePlates.append('rect')
            .attr('x', -27)
            .attr('y', (d, i) => y(d) - 15)
            .attr('height', 32)
            .attr('width', 53)
            .attr('class', 'date-plate-rect')

        datePlates
            .append('text')
            .attr('class', 'date-plate-text')
            .attr('x', -28)
            .attr('y', (d, i) => y(d) + 10)
            .text((d) => dateFormatTick(d))

        const trekBox = svg.selectAll('.trek')
            .data(data)
            .enter().append('svg:a')
            .attr('xlink:href', function (d) { return '/treks/' + pageNameToRoute(d.trip_label) })

        // adds in tick mark for the trip
        trekBox.append('rect')
            .attr('y', (d, i) => y(dateFormat.parse(d.date_start)))
            .attr('x', (d, i) => (-(i % 2) * 50) - Math.pow(-1, (i % 2)) * 5)
            .attr('width', 41)
            .attr('height', 5)
            .attr('fill', '#000')

        // adds in trip label
        trekBox.append('text')
            .attr('y', (d, i) => y(dateFormat.parse(d.date_start)) + 8)
            .attr('x', (d, i) => (Math.pow(-1, (i % 2)) * 50))
            .attr('text-anchor', (d, i) => {
                if (i % 2) { return 'end' }
                return null
            })
            .text((d, i) => d.trip_label)
            .on('mouseenter', addPhoto)

        function addPhoto () {
            // moves the node to the front
            this.parentNode.parentNode.appendChild(this.parentNode)

            // adds in trip_photo
            const photo = d3.select(this.parentNode).append('svg:image')
                .attr('y', (d, i) => y(dateFormat.parse(d.date_start)) + 13)
                .attr('x', (d, i) => (-(d.index % 2) * 200) + Math.pow(-1, (d.index % 2)) * 50)
                .attr('width', 250)
                .attr('xlink:href', '//analytics.seandolinar.com/photos_seantrek/med_500/' + 'seantrek_o_01.JPG')
                .attr('xlink:href', (d, i) => {
                    if (d.photos.find((e) => e.featured === 1)) {
                        return '//analytics.seandolinar.com/photos_seantrek/med_500/' + d.photos.find((e) => e.featured === 1).photo_name
                    }
                })
                .attr('opacity', 0)

            const rect = d3.select(this.parentNode).insert('rect', ':first-child')
                .attr('class', 'trip-background')
                .attr('y', (d, i) => y(dateFormat.parse(d.date_start)) - 10)
                .attr('x', (d, i) => (-(d.index % 2) * 300) + Math.pow(-1, (d.index % 2)) * 35)
                .attr('height', 0)
                .attr('fill', '#cecece')
                .attr('stroke-width', 3)
                .attr('stroke', '#000')

            window.setTimeout(() => {
                rect.transition()
                    .attr('width', photo.node().getBoundingClientRect().width + 35)
                    .attr('height', photo.node().getBoundingClientRect().height + 35)

                photo.transition().delay(50).attr('opacity', 1)
            }, 10)

            d3.select(this.parentNode).on('mouseleave', removePhoto)
        }

        function removePhoto () {
            d3.select(this).select('image').transition().attr('opacity', 0).remove()
            d3.select(this).select('.trip-background').transition().delay(150).attr('opacity', 0).remove()
        }
    }
    buildSVG()

    window.addEventListener('resize', buildSVG)
}

// modify this?
// from https://bl.ocks.org/mbostock/7555321
// function wrap (text, width) {
//     text.each(function () {
//         let text = d3.select(this),
//             words = text.text().split(/\s+/).reverse(),
//             word,
//             line = [],
//             lineNumber = 0,
//             lineHeight = 1.1, // ems
//             y = text.attr('y'),
//             dy = parseFloat(text.attr('dy')),
//             tspan = text.text(null).append('tspan').attr('x', 0).attr('y', y).attr('dy', dy + 'em')
//       while (word = words.pop()) {
//             line.push(word)
//         tspan.text(line.join(' '))
//         if (tspan.node().getComputedTextLength() > width) {
//                 line.pop()
//           tspan.text(line.join(' '))
//           line = [word]
//           tspan = text.append('tspan').attr('x', 0).attr('y', y).attr('dy', ++lineNumber * lineHeight + dy + 'em').text(word)
//         }
//         }
//     })
//   }

export default build
