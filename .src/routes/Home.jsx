import React from 'react'
import {getChars} from '../Redux/actions'
import * as ReactRedux from 'react-redux';
// import { useDispatch } from 'react-redux'

export default function Home() {
  
// funcial selector
  const char = ReactRedux.useSelector((state) =>  state.chars);

  // si fuera de clase
  // const mapStateToProps = (state) => {
  //   return {
  //     char : state.chars
  //   }}

const dispatch = ReactRedux.useDispatch();
React.useEffect(()=> {
  dispatch(getChars())
},[dispatch])
// console.log(char)
// export const mapDispatchToProps = (dispatch) => {
//   return {
//     getChars: char => dispatch(getChars(char))
//   }

// };

const test = () => {
  return ({char.map((c)=>{  // aqui me quede en esta paguina hay un bug
    return (
      <div key={c.id}>
          <h4>{c.name}</h4>
          <ul>
            <li>id: {c.id}</li>
            <li>name: {c.name}</li>
            <li>status: {c.status}</li>
            <li>specie: {c.species}</li>
            <li>Origin: {c.origin.name}</li>
          </ul>
          <img src={c.image}alt='x'/>
      </div>)
  })})
}

  return (
    <div>
      <h1>WALCOME :3</h1>
      <button onClick={}>test</button>
      <ul>

      </ul>
    </div>
  )
}

// import style from './Home.module.css'
// import {getChars} from '../Redux/actions'
// import { useDispatch, useSelector } from 'react-redux'
// import * as ReactRedux from 'react-redux';

// export default function Home() {

//   // function getChar (){
//   //   fetch("https://rickandmortyapi.com/api/character")
//   // .then(response => response.json())
//   // .then(data => console.log(data.results));}

//   // const char = useSelector((state) => state.chars);

//   // const dispatch = useDispatch();

//   React

//   dispatch(getChars());

//   return (

//     <div className={style.container}>
//       <div>Wellcome</div>
//       <button onClick={getChars}>test</button>
//       <div>
//         <ul>
//           <li>id: {results[0].id}</li>
//           <li>name: {results[0].name}</li>
//           <li>status: {results[0].status}</li>
//           <li>specie: {results[0].species}</li>
//           <li>Origin: {results[0].origin.name}</li>
//         </ul>
//       </div>
      
//     </div>
    
//   )
// }
