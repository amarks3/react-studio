import 'bootstrap/dist/css/bootstrap.min.css';
export default function MList(props) {
  const createEntry = (m) => {
    return (
        
        <li >{m.num} x {m.text} Price: {m.price}</li>

    );
  };
  const mData = props.m;
  const listM = mData.map(createEntry);

  

let sum = 0;
mData.forEach(m => {
  console.log(m.price)
  sum = +(m.price) + sum
});

return <div>
  <list>{listM}</list>
  <p><b>Total: </b>{sum}</p>
  </div>;
}
  