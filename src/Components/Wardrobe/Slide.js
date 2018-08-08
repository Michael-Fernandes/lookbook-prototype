import React, { Component } from 'react';
import * as d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';
import outfit from "../../assets/check.jpg";

class Slide extends Component {
//   componentDidMount(){
//     d3.selectAll(".clothing").on("mouseover", function() {
//                                  d3.select(this).attr('fill', "orange")
//                               }).on("mouseout", function(){
//                                 d3.select(this).attr('fill', 'black')
//                               })
    
    
//     d3.select(img).raise();
//     //this.props.animateFauxDOM(800)
//     this.appendImage()
//   }


  appendImage(){
  
  }

  getSvg(){
      return (
        <svg id="svg-parent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 505 683">
            <g id='container'>
                <g id='wardrobe'>
                    <g id='jacket' className='cls-1 clothing'>
                        <polygon className='cls-2' points='303.36 387.68 265.79 386 257.43 389.33 200.53 387.33 185.02 388.62 185.33 377.9 190.84 356.55 168.15 360.27 159.67 339.75 165.67 238.86 180.31 164.32 183.56 157.5 213.39 135.96 234.92 129.66 296.01 126.67 333.72 155.45 342.01 194.6 351.33 235.22 348.34 326.33 338.31 340.36 326.5 341.72 326.5 392.88 303.36 387.68'></polygon>
                        <path d='M295.35,126.68l37.41,28.55,8.26,39,9.3,40.54-3,90.9-9.82,13.73-11.39,1.28-1.14.1v51l-22.28-5.06,0,0h0L265.39,385h-.2l-.19.08-8.15,3.26-56.8-2h-.12L185,387.58l.29-10.1,5.3-20.56.38-1.49-1.51.25L168,359.22l-8.28-20.05,6-100.7L180.29,164l3.17-6.66,29.65-21.42,21.39-6.25,60.85-3m.32-1-61.33,3L212.67,135l-30,21.67-3.33,7-14.67,74.67-6,101,8.67,21,22.33-3.67-5.33,20.67L184,388.67l16-1.33,57,2,8.35-3.33,37.13,1.67L326,393V341.67l11.83-1.33L348.21,326l3.06-91.33L342,194l-8.32-39.33-38-29Z'
                        transform='translate(.5 .5)'></path>
                    </g>
                    <g id='pants' className='cls-1 clothing'>
                        <polygon className='cls-2' points='280.87 602.5 278.94 596.22 272.05 589.99 274.39 578.26 266.34 573.23 269 486.75 252.48 444.42 237.67 485.06 233.32 562.04 238.02 566.41 239.97 583.31 234.56 588.38 237.52 594.63 225.36 601.67 198.11 602 191.1 590.85 196.67 582.98 189.52 391.6 322.75 395.61 322.04 584.22 306.95 594.72 303.69 596.07 303.36 602.5 280.87 602.5'></polygon>
                        <path d='M189.54,391.62l132.21,4L321,583.46,306.2,593.77,303.29,595l-.58.24,0,.88-.29,5.89H280.74L279,596l-.08-.39-.2-.25-6.58-6,2.22-11.13.14-.69-.59-.37-7.51-4.7L269,486.37v-.2l-.07-.19-16-41-1-2.47-.91,2.49-14.33,39.33-.05.14v.15l-4.33,76.67,0,.47.34.32,4.4,4.08,1.9,16.47-5,4.66-.53.5.31.66,2.61,5.5-11.64,6.74-26.84.32-6.68-10.63,5.28-7.46.2-.28v-.34l-7.13-190.68m-1-1,7.17,191.75-5.67,8L197.33,602l27.67-.33,12.67-7.33-3-6.33,5.33-5-2-17.33-4.67-4.33,4.33-76.67L252,445.33l16,41L265.33,573l8,5L271,589.67l7,6.58,2,6.75h23.33l.34-6.84,3-1.38L322,584l.71-189.39L188.5,390.58Z' transform='translate(.5 .5)'></path>
                    </g>
                    <g className='cls-1 clothing'>
                        <polygon className='cls-4' points='204.5 603 226.5 603 231 617.25 234.5 619.13 236.5 629.06 215.5 640.03 205 647.02 187 649.01 174 645 175 634.5 186 625.25 204.5 603'></polygon>
                        <polygon className='cls-4' points='281.25 602.5 303 602 303 610.5 325.75 631.5 329.88 641 329.44 646.5 319.97 650 298.48 651 285.99 638.5 274 631 276.87 618.5 281.25 602.5'></polygon>
                    </g>
                    <g className='cls-1 clothing'>
                        <polygon id='headband' className='cls-4' points='214.17 54.5 274.17 46.5 280.83 67.17 259.5 61.83 241.5 60.5 220.17 67.83 218.83 78.5 214.17 54.5'></polygon>
                    </g>
                </g>
            </g>
        </svg>
      );
  }


  render() {
    var svgNode = ReactFauxDOM.createElement('div');
    var svg = d3.select(svgNode).append(this.getSvg);
    
    var img = d3.select(svgNode).append("svg:image")
        .attr("transform", "translate(-0.5, -0.5)")
        .attr("xlink:href", "../../assets/check.jpg")
        .classed("d3-img", true);
    // append svg image of clothing

    return svgNode.toReact();    
  }
}

export default Slide;
