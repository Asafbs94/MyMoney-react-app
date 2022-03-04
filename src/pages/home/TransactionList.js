import { useFirestore } from '../../hooks/useFirestore'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
// styles
import styles from './Home.module.css'

export default function TransactionList({ transactions }) {
  const { deleteDocument } = useFirestore('transactions')
  


  return (
    <>
    <ul className={styles.transactions}>
      {transactions.map((transaction) => (
       
        <li key={transaction.id}>   
          <p className={styles.name}>{transaction.name}</p>
          <p className={styles.time}>{formatDistanceToNow(transaction.createdAt.toDate(), {addSuffix: false})}</p>
          <p className={styles.amount}>${transaction.amount}</p>
          <button onClick={() => deleteDocument(transaction.id)}>x</button>
          
        </li>
        
      ))}
    </ul>
    </>
  )
}
