import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const bottles = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
  const time = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]

  const [weight, setWeight] = useState(90)
  const [bottle, setBottle] = useState(1)
  const [hour, setHour] = useState(1)
  const [gender, setGender] = useState('male')
  const [result, setResult] = useState(0)

  const litres = bottle * 0.33
  const grams = litres * 8 * 4.5
  const burning = weight / 10
  const gramsleft = grams - (burning * hour)


  const permil = () => {
    let permil = 0
    if (gender === 'male'){
      permil = gramsleft / (weight * 0.7)


    } else {
      permil = gramsleft / (weight * 0.6)

    }

    if (permil < 0) {
      permil = 0
    }

    setResult(permil)

  }

  return (
 <div id="container">
<h3>Alcometer</h3>
<div>
  <label>Weight</label>
  <input type="number" value={weight} onChange={e => setWeight(e.target.value)}/>
</div>
<div>
  <label>Bottles</label>
  <select value={bottle} onChange={e => setBottle(e.target.value)}>
    {
    bottles.map(bottle => (
      <option>{bottle}</option>
    ))
}
  </select>
</div>
<div>
  <label>Time</label>
  <select value={hour} onChange={e => setHour(e.target.value)}>
    {
    time.map(hour => (
      <option>{hour}</option>
    ))
}
  </select>
</div>
<div>
  <label>Gender</label>
  <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}/><label>Male</label>
  <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}/><label>Female</label>
</div>
<div>
  <output>{result.toFixed(2)}</output>
</div>
<div>
  <button type="button" onClick={permil}>Calculate</button>
</div>
 </div>
  );
}

export default App;
