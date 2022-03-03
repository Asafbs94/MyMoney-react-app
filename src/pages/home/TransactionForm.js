import { useState, useEffect } from 'react'
import { useFirestore } from '../../hooks/useFirestore'

export default function TransactionForm({ uid, transactions,initialTotal}) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const { addDocument, response } = useFirestore('transactions')
  //eslint-disable-next-line
  let [total,setTotal] = useState(initialTotal)
  //eslint-disable-next-line

  const calcSum = ()=>{
    let sum = 0
    if(transactions){
      transactions.forEach(element => {
        sum += parseInt(element.amount)
      });
      setTotal(sum)
    }}
  // reset

  const handleSubmit = (e) => {
    e.preventDefault()
    addDocument({
      uid, 
      name, 
      amount,
    })
  }

  useEffect(() => {
    calcSum()

    if (response.success) {
      setName('')
      setAmount('')
    }
    calcSum()
    //eslint-disable-next-line
  }, [response.success])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction name:</span>
          <input 
            placeholder='enroll payout name'
            type="text"
            required
            onChange={(e) => setName(e.target.value)} 
            value={name} 
          />
        </label>
        <label>
          <span>Amount ($):</span>
          <input
            type="number"
            placeholder='amount in USD'
            required
            onChange={(e) => setAmount(e.target.value)} 
            value={amount} 
            />
        </label>
        <button >Add Transaction</button>
      </form>
    </>
  )
}