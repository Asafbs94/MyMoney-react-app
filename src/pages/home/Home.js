import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'
import {Container ,Col , Row} from 'react-bootstrap';

import { useState,useEffect } from 'react'

// styles
import styles from './Home.module.css'

// components
import TransactionForm from './TransactionForm'
import TransactionList from './TransactionList'

export default function Home() {
  let [total,setTotal] = useState()

  const { user } = useAuthContext()
  const { documents, error } = useCollection(
    'transactions', ["uid", "==", user.uid], ['createdAt', 'desc']
  )
const fetchSome =()=>{
  let sum = 0
  if(documents){
    documents.forEach(element => {
      sum += parseInt(element.amount)
    });
    setTotal(sum)
  }
}

useEffect(() => {
  fetchSome()
  //eslint-disable-next-line
})
const divStyle = {
  padding : '0 0 0 4.5%',
 };
  return (
    
    <Container>
    
    <div className={styles.container}>
    <Col>  
    <Row>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} transactions={documents} initialTotal={total} />
      </div>
      <label style={divStyle}>Current expanses {total} $</label>
      </Row>
      <Row>
      <div className={styles.content} style={divStyle}>
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions={documents} />}
      </div>
      </Row>
    </Col>
    </div>
 
 
    </Container>
    
  )
}
