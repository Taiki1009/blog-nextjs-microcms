import { useEffect, useState } from 'react'

interface NoteProps {
  word: string
}
type NoteData = {
  word: string
}

const noteData: NoteData[] = [
  { word: 'Component' },
  { word: 'Hoge' },
  { word: 'Fuga' },
]

const fetchNoteData = (): Promise<NoteData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(noteData)
    }, 2000)
  })
}

const repeatWord = (counter: number, word: string) => {
  const seq = [...Array(counter)].map((_, i) => i)
  return seq.map((i) => word + '!'.repeat(i + 1)).join(' ')
}

// stateを更新する処置として切り出すことで、他の処理で使用しないsetIsLoadedを隠蔽できる
const useLoadedState = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  // useEffect(task) -> componentDidMount + componentDidUpdateのタイミング
  // useEffect(task, []) -> componentDidMountのタイミング
  useEffect(() => {
    fetchNoteData().then((data: NoteData[]) => {
      console.log(data)
      setIsLoaded(true)
    })
  }, [])

  // 配列ごと返してもいいが、必要なisLoadedだけにする。
  return isLoaded
}

export default function Note({ word }: NoteProps) {
  const [counter, setCounter] = useState<number>(1)

  const isLoaded = useLoadedState()

  const onClickHandler = () => {
    setCounter(counter + 1)
  }

  return isLoaded ? (
    <>
      <button onClick={onClickHandler}>Click me!!</button>
      <p>{repeatWord(counter, word)}</p>
    </>
  ) : (
    <p>...Loading</p>
  )
}
