import React, { useEffect, useState } from 'react'
import styles from './Globe.module.scss'
import Head from 'next/head'
import useAppContext from '../../../context/AppContext'
import dynamic from 'next/dynamic'
import countriesData from '../../../public/data/countries.json'
import * as THREE from 'three'

const GlobeGl = dynamic(() => import('react-globe.gl'), { ssr: false })

function Globe() {
  const { setCurrentExample } = useAppContext()
  const [countries, setCountries] = useState({ features: [] })

  useEffect(() => {
    setCurrentExample({
      title: 'Globe',
      url: 'https://github.com/andreuscafe/shitty-examples/blob/main/pages/examples/globe/index.jsx',
    })
  }, [setCurrentExample])

  useEffect(() => {
    document.body.style.backgroundColor = '#000000'
    document.body.style.color = '#ffffff'

    setCountries(countriesData)
  }, [])

  return (
    <>
      <Head>
        <title>Globe | Shitty examples by @andreuscafe</title>
      </Head>
      <div className={styles.wrapper}>
        <GlobeGl
          // height={600}
          // width={600}
          backgroundColor="rgba(0, 0, 0, 0)"
          globeMaterial={
            new THREE.MeshStandardMaterial({
              color: '#FBAB7E',
              transparent: true,
              opacity: 0.8,
            })
          }
          atmosphereColor="#ffffff"
          atmosphereAltitude={0.2}
          hexPolygonsData={countries.features}
          hexPolygonResolution={3}
          hexPolygonMargin={0.1}
          hexPolygonColor={() => `#ffffff`}
          hexPolygonAltitude={() => 0.03}
        />
      </div>
    </>
  )
}

export default Globe
