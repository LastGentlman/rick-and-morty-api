import React from 'react'
import {getChars} from '../redux/actions/index'
import * as ReactRedux from 'react-redux';
// import { useDispatch } from 'react-redux'

export const Home = () => {
  
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

  return (
    <div>
      <h1>WALCOME :3</h1>

      <p>Si me tocas te lo doy</p>
      <ul>
        {char.map((c)=>{
          return (
            
               <li key={c.id}
               name={c.name}
               status={c.status}
               species={c.species}>
                 <h4>{c.name}</h4>
                 <img src={c.image}alt='x'/>
             </li>
            )
        })}
      </ul>
    </div>
  )
}

