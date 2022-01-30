import Head from 'next/head'
import { useState } from 'react'

let tabs = [
  {
    name: 'Animals',
    items: [
      {
        name: 'Dog',
        image: 'dog.jpg',
        sound: 'dog.mp3',
      },
      {
        name: 'Cat',
        image: 'cat.jpg',
        sound: 'cat.mp3',
      },
    ],
  },
  {
    name: 'People',
    items: [
      {
        name: 'Jan',
        image: 'dog.jpg',
        sound: 'dog.mp3',
      },
      {
        name: 'Kobus',
        image: 'cat.jpg',
        sound: 'cat.mp3',
      },
    ],
  },
  {
    name: 'Funny',
    items: [
      {
        name: 'Fart',
        image: 'dog.jpg',
        sound: 'dog.mp3',
      },
      {
        name: 'Fart2',
        image: 'cat.jpg',
        sound: 'cat.mp3',
      },
    ],
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('Animals')

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
            }}
          >
            {tab.name}
          </div>
        ))}
      </div>

      <div>
        {tabs
          .filter(item => item.name === activeTab)[0]
          .items.map((item) => (
            <div>{item.name}</div>
          ))}
      </div>
    </div>
  )
}
