import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Canva from '../components/canvas'
import Color from '../components/Color'
import { useState } from 'react'
import { Provider } from 'react-redux'
import store from '../store/index'


export default function Home() {
  let [color,setColor]= useState("yellow")
  
  return (
    <Provider store={store}>
    <div className={styles.container}>
      
      <Color setColor={setColor}/>
      <Canva color={color}  />
    </div>
    </Provider>
  )
}
