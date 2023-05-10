import React, { useEffect, useState } from "react"
import Highlight from "../../components/Highlight"
import { Section } from "../../components/Section"
import styles from "./styles.module.css"
import TypeIt from "typeit-react"

// Leave text content as constant string for demo puroise
// The input text can be query from the DB or a json file for production use

const text = `This is the most granular and most dynamic of the Calendar views that defines each Date on the calendar. 

For nearly any possible query requiring or including a date, this should be the primary view referenced. 

It includes a wealth of attributes about a given Date including corresponding time frames from the prior year for quick year over year analysis.`

const createReactPage = (text) => {
  return <Highlight code={text} language="txt" />
}

const LiveDemo = () => {

  // useEffect(() => {
  //   const isClient = typeof window !== "undefined"
  // }, [])

  return (
    <Section fullWidth odd center>
      <div className={styles.preview}>
        <div className={styles.editor}>
          <div className={styles.code}>
            <TypeIt
              options={{
                startDelay: 1000,
                speed: 2,
                waitUntilVisible: true,
                cursor: false,
              }}
            >
              {createReactPage(text)}
            </TypeIt>
          </div>
        </div>
      </div>
    </Section >
  )
}

export default LiveDemo
