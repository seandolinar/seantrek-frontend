import Datamap from 'datamaps'
import {Link} from 'react-router-dom'

let map = (history) => {
    return new Datamap(
        {
            scope: 'usa',
            element: document.getElementById('d3-container'),
            projection: 'mercator',
            fills: {
                VISITED: '#336699',
                defaultFill: '#aaaaaa'
            },
            data: {
                // need to put data into this
                PA: {fillKey: 'VISITED'}
            },
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
