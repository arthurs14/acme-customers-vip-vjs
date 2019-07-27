const customerList = document.querySelector('#customerList');


let customers = [
  { id: 1, name: 'moe', email: 'moe@gmail.com', isVIP: true},
  { id: 2, name: 'larry', isVIP: true, email: 'larry@gmail.com'},
  { id: 3, name: 'shep', email: 'shep@gmail.com'},
  { id: 4, name: 'tim', email: 'tim@gmail.com', isVIP: true},
  {id: 5, name: 'jim', email: 'jim@gmail.com'}
 ];

customerList.addEventListener('click', (ev) => {
  if(ev.target.tagName === 'BUTTON') {
    const idx = [...ev.target.parentNode.parentNode.children].indexOf(ev.target.parentNode);

    console.log('event target', ev.target.parentNode);

    customers = customers.filter((customer, _idx) => {
      return _idx !== idx;
    });
    render();
  }
});

const render = () => {
  const html = customers.map((customer, idx) => {
    return `
      <li>
        ${customer.name} (${customer.email})
        <button idx='${idx}'>Destroy</button>
      </li>
    `
  }).join('');
  customerList.innerHTML = html;
};

render();
