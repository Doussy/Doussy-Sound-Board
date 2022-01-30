import Head from 'next/head'
import { useEffect, useState } from 'react'

let tabs = [
  {
    name: 'Funny',
    items: [
      {
        name: 'Wet Fart',
        sound: './sounds/funny/1.mp3',
      },
      {
        name: 'Badum TSS',
        sound: './sounds/funny/2.mp3',
      },
      {
        name: 'Fuckoff',
        sound: './sounds/funny/3.mp3',
      },
      {
        name: 'This is Sparta',
        sound: './sounds/funny/4.mp3',
      },
      {
        name: 'Trumpet',
        sound: './sounds/funny/5.mp3',
      },
      {
        name: 'Ka Ching',
        sound: './sounds/funny/6.mp3',
      },
      {
        name: 'Fart',
        sound: './sounds/funny/7.mp3',
      },
      {
        name: 'Sad Trombone',
        sound: './sounds/funny/8.mp3',
      },
      {
        name: 'Borat - Great Success',
        sound: './sounds/funny/9.mp3',
      },
      {
        name: 'Borat - A Very Nice',
        sound: './sounds/funny/10.mp3',
      },
    ],
  },
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
]

export default function Home() {
  const [activeTab, setActiveTab] = useState(tabs[0].name)
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

      <div className="bg-gray-300 p-3 font-bold mb-3">
        <div>Doussy Sound Board</div>
      </div>

      <div className="flex justify-between mb-3">
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

      <div className="flex justify-center">
        {activeItems.slice(0, 10).map((item, index) => (
          <div
            id={`key_${index + 1}`}
            key={item.name + item.sound}
            className="m-1 flex cursor-pointer flex-col rounded-lg border"
            onClick={() => {
              new Audio(item.sound).play()
            }}
          >
            <div className="p-4 font-bold">{item.name}</div>
            <div className="bg-gray-200">{index === 9 ? 0 : index + 1}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
