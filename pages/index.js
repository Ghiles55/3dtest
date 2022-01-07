import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Canva from '../components/canvas'
import Color from '../components/Color'
import { useState } from 'react'
import { Provider } from 'react-redux'
import store from '../store/index'
import Customizer from '../components/ControlPanel'


export default function Home() {
  
  
  return (
    <Provider store={store}>
    <div className={styles.container} style={{padding:0, display:"flex"}}>
      <Canva />
      <Customizer/>
    </div>
    </Provider>
  )
}
