import axios from 'axios'
import { useState, useEffect } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const LIMIT = 60
  const [visible, setVisible] = useState(true)

  // 依存配列自体を渡していないので、コンポーネントがレンダリングごとに実行する
  useEffect(() => {
    console.log(document.getElementById('effectHook').innerText)
  }, [count])

  // 依存配列に指定がない＝コンポーエントがレンダリングされた時の一回だけ実行
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const result = await axios(
        'https://hn.algolia.com/api/v1/search?query=react',
      )

      setItems(result.data.hits)
      setIsLoading(false)
    }

    fetchData()
  }, [])

  const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(LIMIT)

    // Timerをリセットする(60秒に戻す)
    const reset = () => {
      setTimeLeft(LIMIT)
    }
    const tick = () => {
      console.log('tick')
      setTimeLeft((prevTime) => (prevTime === 0 ? LIMIT : prevTime - 1))
    }

    useEffect(() => {
      console.log('createTimer')
      // 毎秒tick関数を呼び出す設定
      const timerId = setInterval(tick, 1000)

      return () => {
        console.log('cleanup Timer')
        clearInterval(timerId)
      }
    }, [])

    return (
      <>
        <p>time: {timeLeft}</p>
        <button onClick={reset}>reset</button>
      </>
    )
  }

  return (
    <>
      <div id="count">
        <p id="effectHook">You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>

      <div id="fetchData">
        {isLoading ? (
          <p>Loading</p>
        ) : (
          <ul>
            {items.map((item) => (
              <li key={item.objectId}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <button onClick={() => setVisible(!visible)}>toggle Timer</button>
        {visible ? <Timer /> : ''}
      </div>
    </>
  )
}
