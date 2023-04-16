import React from 'react'
import styles from "../../styles/Message.module.css"

export default function Message() {
    const dataArray = [
        {
            from: "0xad4954F40Dfaa0857095ec503f1Fd9C0DbE0B2aB", 
            to: "0xad4954F40Dfaa0857095ec503f1Fd9C0DbE0B2aB",
            timestamp: "09:30:45 12/05/2022",
            input: "0x5468697320697320616e206578616d706c65206d65737361676520746f2074657374696e67"
        },
        {
            from: "0xad4954F40Dfaa0857095ec503f1Fd9C0DbE0B2aB", 
            to: "0xad4954F40Dfaa0857095ec503f1Fd9C0DbE0B2aB",
            timestamp: "09:30:45 12/05/2022",
            input: "0x5468697320697320616e206578616d706c65206d65737361676520746f2074657374696e67"
        },
        {
            from: "0xad4954F40Dfaa0857095ec503f1Fd9C0DbE0B2aB", 
            to: "0xad4954F40Dfaa0857095ec503f1Fd9C0DbE0B2aB",
            timestamp: "09:30:45 12/05/2022",
            input: "0x5468697320697320616e206578616d706c65206d65737361676520746f2074657374696e67"
        },
        {
            from: "0xad4954F40Dfaa0857095ec503f1Fd9C0DbE0B2aB", 
            to: "0xad4954F40Dfaa0857095ec503f1Fd9C0DbE0B2aB",
            timestamp: "09:30:45 12/05/2022",
            input: "0x5468697320697320616e206578616d706c65206d65737361676520746f2074657374696e67"
        },
        {
            from: "0xad4954F40Dfaa0857095ec503f1Fd9C0DbE0B2aB", 
            to: "0xad4954F40Dfaa0857095ec503f1Fd9C0DbE0B2aB",
            timestamp: "09:30:45 12/05/2022",
            input: "0x5468697320697320616e206578616d706c65206d65737361676520746f2074657374696e67"
        }
    ]
  return (
    <div className={styles.messagebody}>
        {
            dataArray.map((data, index)=>(
              <div className={styles.message}>
                   <div className={styles.metadata} key = {index}>
                        <div>{data.from}</div>
                        <div>{data.timestamp}</div>
                    </div>
                   <div>{data.input}</div>
              </div>
            ))            
        }
    </div>
  )
}
