import Head from 'next/head'
import { useEffect, useState } from 'react'

let tabs = [
  {
    name: 'Animals',
    items: [
      {
        name: 'Dog',
        sound: './sounds/animals/1.mp3',
      },
      {
        name: 'Cat',
        sound: './sounds/animals/2.wav',
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
        name: 'Laugh',
        sound: './sounds/people/1.wav',
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
          document.getElementById('key_1')?.click()
          return
        case '2':
          document.getElementById('key_2')?.click()
          return
        case '3':
          document.getElementById('key_3')?.click()
          return
        case '4':
          document.getElementById('key_4')?.click()
          return
        case '5':
          document.getElementById('key_5')?.click()
          return
        case '6':
          document.getElementById('key_6')?.click()
          return
        case '7':
          document.getElementById('key_7')?.click()
          return
        case '8':
          document.getElementById('key_8')?.click()
          return
        case '9':
          document.getElementById('key_9')?.click()
          return
        case '0':
          document.getElementById('key_10')?.click()
          return
        default:
          return
      }
    })
  }, [activeItems, activeTab])

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
            key={tab.name}
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
            id={`key_${index + 1}`}
            key={item.name + item.sound}
            className="cursor-pointer rounded-lg border p-10"
            onClick={() => {
              new Audio(item.sound).play()
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
