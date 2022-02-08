'use strict';

let tooltipLinks = document.getElementsByClassName('has-tooltip');
let tooltip = document.createElement('div');
tooltip.className = 'tooltip';
document.body.append(tooltip);


function onclick(e) {
    e.preventDefault();

    let left = e.target.getBoundingClientRect().left;
    let top = e.target.getBoundingClientRect().top;

    if (tooltip.classList.contains('tooltip_active') && tooltip.textContent === e.target.title) {
        tooltip.classList.remove('tooltip_active');
    } else {
        tooltip.classList.add('tooltip_active');
    };

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top + 20}px`;

    tooltip.textContent = e.target.title;

}

for (let tooltipLink of tooltipLinks) {
    tooltipLink.addEventListener('click', onclick)

}

