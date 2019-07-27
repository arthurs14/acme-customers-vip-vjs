const customerList = document.querySelector('#customerList');


let customers = [
  { id: 1, name: 'moe', email: 'moe@gmail.com', isVIP: true},
  { id: 2, name: 'larry', isVIP: true, email: 'larry@gmail.com'},
  { id: 4, name: 'shep', email: 'shep@gmail.com'},
 ];

customerList.addEventListener('click', (ev) => {
  if(ev.target.tagName === 'BUTTON') {
    const idx = [...ev.target.parentNode.children].indexOf(ev.target);
    customers = customers.filter((customer, _idx) => {
      return _idx !== idx;
    });
    render();
  }
});

const render = () => {
  const html = customers.map((customer, idx) => {
    return `
      <li idx='${idx}'><div>
      ${customer.name} (${customer.email})
      <button>Destroy</button>
      </div></li>
    `
  }).join('');
  customerList.innerHTML = html;
};

render();
