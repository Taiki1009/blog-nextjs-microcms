import React from 'react'

// propsは読み取り専用。
interface NoteProps {
  word: string
}
// 内部で変更可能
interface NoteStatus {
  counter: number
  isLoaded: boolean
}

// 指定された回数だけ文字列を繰り返す
const repeatWord = (counter: number, word: string) => {
  const seq = [...Array(counter)].map((_, i) => i) // [0, 1, 2, ...]
  return seq.map((i) => word + '!'.repeat(i + 1)).join(' ')
}

const simulateLoading = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })
}

export default class Note extends React.Component<NoteProps, NoteStatus> {
  // Stateの初期化（construct時）
  state = {
    counter: 1,
    isLoaded: false,
  }

  // ブラウザに描画後に走る処理
  componentDidMount = () => {
    simulateLoading().then(() => {
      this.setState({
        isLoaded: true,
      })
    })
  }

  onClickHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  render() {
    return this.state.isLoaded ? (
      <>
        <button onClick={this.onClickHandler}>Click me!</button>
        <p>{repeatWord(this.state.counter, this.props.word)}</p>
      </>
    ) : (
      <p>Loading...</p>
    )
  }
}
