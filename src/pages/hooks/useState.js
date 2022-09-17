import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  const [vote, setVote] = useState({ kinoko: 0, takenoko: 0 })
  const [items, setItems] = useState([{ name: 'きのこ' }])

  const increment = () => {
    setCount(count + 1)
    console.log('increment')

    // 引数に関数を渡すやり方
    // stateを更新するロジックを切り出して使用することができる
    // setCount((currentCount) => currentCount + 1);
  }

  const decrement = () => {
    setCount(count - 1)
    console.log('decrement')
  }

  // setState関数に直接{ kinoko: vote.kinoko + 1 }のような記述をすると、stateが更新されていないとみなされる。
  const voteKinoko = () => {
    const newVote = { ...vote, kinoko: vote.kinoko + 1 }
    console.log('voteKinoko')

    setVote(newVote)
  }

  const voteTakenoko = () => {
    const newVote = { ...vote, takenoko: vote.takenoko + 1 }
    console.log('voteTakenoko')

    setVote(newVote)
  }

  const addItem = () => {
    const newItem = {
      name: Math.random() > 0.5 ? 'きのこ' : 'たけのこ',
    }
    setItems([...items, newItem])
    console.log('addItem')
    // 以下のような更新ではコンポーネントは再レンダリングされません。
    // items.push(newItem);
    // setItems(items);
  }

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index))
    console.log('deleteItem')

    // 以下のような更新ではコンポーネントは再レンダリングされません。
    // items.splice(index, 1);
    // setItems(items);
  }

  return (
    <>
      <div id="count-container">
        <p>Count: {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>

      <div id="vote-container">
        <p>きのこ: {vote.kinoko}</p>
        <p>たけのこ: {vote.takenoko}</p>
        <button onClick={voteKinoko}>+きのこ</button>
        <button onClick={voteTakenoko}>+たけのこ</button>
      </div>

      <div id="array-container">
        <button onClick={addItem}>「きのこ」か「たけのこ」を追加</button>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <p>{item.name}</p>
              <button onClick={() => deleteItem(index)}>削除</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
