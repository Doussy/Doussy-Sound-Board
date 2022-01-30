import Head from 'next/head'
import { useEffect, useState } from 'react'

let tabs = [
  {
    name: 'Animals',
    items: [
      {
        name: 'Dog',
        sound: './sounds/animals/dog.mp3',
      },
      {
        name: 'Cat',
        sound: './sounds/animals/cat.wav',
      },
      {
        name: 'Cow',
        sound: 'cow.mp3',
      },
      {
        name: 'Chicken',
        sound: 'chicken.mp3',
      },
      {
        name: 'Pig',
        sound: 'pig.mp3',
      },
      {
        name: 'Sheep',
        sound: 'sheep.mp3',
      },
      {
        name: 'Horse',
        sound: 'horse.mp3',
      },
      {
        name: 'Goat',
        sound: 'goat.mp3',
      },
      {
        name: 'Pigeon',
        sound: 'pigeon.mp3',
      },
      {
        name: 'Duck',
        sound: 'duck.mp3',
      },
      {
        name: 'Dolphin',
        sound: 'dolphin.mp3',
      },
      {
        name: 'Elephant',
        sound: 'elephant.mp3',
      },
      {
        name: 'Giraffe',
        sound: 'giraffe.mp3',
      },
      {
        name: 'Hippo',
        sound: 'hippo.mp3',
      },
    ],
  },
  {
    name: 'People',
    items: [
      {
        name: 'Jan',
        sound: 'dog.mp3',
      },
      {
        name: 'Kobus',
        sound: 'cat.mp3',
      },
    ],
  },
  {
    name: 'Funny',
    items: [
      {
        name: 'Fart',
        sound: 'dog.mp3',
      },
      {
        name: 'Fart2',
        sound: 'cat.mp3',
      },
    ],
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('Animals')
  const [activeItems, setActiveItems] = useState(tabs[0].items)

  useEffect(() => {
    window.addEventListener('keypress', (e) => {
      switch (e.key) {
        case '1':
          let sound1 = new Audio(activeItems[0].sound)
          sound1.play()
          return
        case '2':
          let sound2 = new Audio(activeItems[1].sound)
          sound2.play()
          return
        case '3':
          let sound3 = new Audio(activeItems[2].sound)
          sound3.play()
          return
        case '4':
          let sound4 = new Audio(activeItems[3].sound)
          sound4.play()
          return
        case '5':
          let sound5 = new Audio(activeItems[4].sound)
          sound5.play()
          return
        case '6':
          let sound6 = new Audio(activeItems[5].sound)
          sound6.play()
          return
        case '7':
          let sound7 = new Audio(activeItems[6].sound)
          sound7.play()
          return
        case '8':
          let sound8 = new Audio(activeItems[7].sound)
          sound8.play()
          return
        case '9':
          let sound9 = new Audio(activeItems[8].sound)
          sound9.play()
          return
        case '0':
          let sound0 = new Audio(activeItems[9].sound)
          sound0.play()
          return
        default:
          return
      }
    })
  }, [activeItems])

  return (
    <div className="text-center">
      <Head>
        <title>Doussy Sound Board</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-300 p-3 font-bold">
        <div>Doussy Sound Board</div>
        <div>Active Tab: {activeTab}</div>
      </div>

      <div className="flex justify-between">
        {tabs.map((tab) => (
          <div
            className="cursor-pointer bg-amber-500 p-2 text-xl font-bold"
            onClick={() => {
              setActiveTab(tab.name)
              setActiveItems(tab.items)
            }}
          >
            {tab.name}
          </div>
        ))}
      </div>

      <div className="flex justify-center p-10">
        {activeItems.slice(0, 10).map((item, index) => (
          <div
            className="cursor-pointer rounded-lg border p-10"
            onClick={() => {
              let song = new Audio(item.sound)
              song.play()
            }}
          >
            <div>{item.name}</div>
            {index === 9 ? <div>0</div> : <div>{index + 1}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}
