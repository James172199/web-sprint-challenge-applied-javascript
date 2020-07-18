// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
const  createHeader = (title, content) => {
function Header() {}
console.log('header component');
const header = document.createElement('div');
header.textContent = content;
return header;
}
const headerComponent = createHeader('test title', 'test content');
const accordion = document.querySelector('accordion');
accordion.appendChild(headerComponent);

const header = document.createElement('div');
const headerSpan = document.createElement('div');
const headerTitle = document.createElement('h1');

const createPanel = (title, content) => {
  // create the panel component
  // <div class="panel">
  //   <div class="panel-bar">
  //     <h3>Title of Panel</h3>
  //     <div class="panel-buttons">
  //       <button class="panel-btn-open">&#9660</button>
  //       <button class="panel-btn-close hide-btn">Close</button>
  //     </div>
  //   </div>
  //   <div class="panel-content">
  //     Content of panel
  //   </div>
  // </div>
  console.log('panel component');
  const panel = document.createElement('div');

  panel.textContent = content;
  
  return panel;// return the panel;
}
*/
