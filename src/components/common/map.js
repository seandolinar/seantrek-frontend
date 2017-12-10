import Datamap from 'datamaps'
// import {Link} from 'react-router-dom'

let map = (history, data) => {
    return new Datamap(
        {
            scope: 'usa',
            element: document.getElementById('d3-container'),
            projection: 'mercator',
            fills: {
                ONE: '#eaeff4',
                TWO: '#c1d1e0',
                THREE: '#99b2cc',
                FOUR: '#7093b7',
                FIVE: '#4775a3',
                SIX: '#2d5b89',
                VISITED: '#336699',
                defaultFill: '#aaaaaa'
            },
            data: data,
            geographyConfig: {
                // tooltip
                popupTemplate: function(geography, data) {
                    return '<div class="hoverinfo">' + geography.id + ' '
                },
                highlightFillColor: '#ccc',
                highlightBorderColor: '#eee'
            },
            done: (datamap) => {
                // puts links on each state
                datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
                    history.push('/states/' + geography.id)
                })
            }
        }
    )
} 

export default map
