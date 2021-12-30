import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Canva from '../components/canvas'
import Color from '../components/Color'
import { useState } from 'react'


export default function Home() {
  let [color,setColor]= useState("yellow")
  let [model,setModel]= useState(false)
  return (
    <div className={styles.container}>
      <Color setColor={setColor}/>
      <Canva color={color} setModel={setModel} model={model} />
    </div>
  )
}
