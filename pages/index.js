import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from 'antd';

export default function Home() {
  return (
    <div className={styles.container}>
       <Button type="primary">Primary Button</Button>
    </div>
  )
}
