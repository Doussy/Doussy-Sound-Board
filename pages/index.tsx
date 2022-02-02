import Head from 'next/head'
import { useEffect, useState } from 'react'

let keyboardRow1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
let keyboardRow2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
let keyboardRow3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm']

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
      {
        name: 'Have you tried...',
        sound: './sounds/funny/q.mp3',
      },
      {
        name: 'Test W',
        sound: './sounds/funny/1.mp3',
      },
      {
        name: 'Test E',
        sound: './sounds/funny/1.mp3',
      },
      {
        name: 'Test R',
        sound: './sounds/funny/1.mp3',
      },
      {
        name: 'Test T',
        sound: './sounds/funny/1.mp3',
      },
      {
        name: 'Test Y',
        sound: './sounds/funny/1.mp3',
      },
      {
        name: 'Test U',
        sound: './sounds/funny/1.mp3',
      },
      {
        name: 'Test I',
        sound: './sounds/funny/1.mp3',
      },
      {
        name: 'Test O',
        sound: './sounds/funny/1.mp3',
      },
      {
        name: 'Test P',
        sound: './sounds/funny/1.mp3',
      },
      {
        name: 'Test A',
        sound: './sounds/funny/1.mp3',
      },
      {
        name: 'Test S',
        sound: './sounds/funny/1.mp3',
      },
      {
        name: 'Test D',
        sound: './sounds/funny/1.mp3',
      },
      {
        name: 'Test F',
        sound: './sounds/funny/1.mp3',
      },
      {
        name: 'Test G',
        sound: './sounds/funny/1.mp3',
      },
      {
        name: 'Test H',
        sound: './sounds/funny/1.mp3',
      },
      {
        name: 'Test J',
        sound: './sounds/funny/1.mp3',
      },
      {
        name: 'Test K',
        sound: './sounds/funny/1.mp3',
      },
      {
        name: 'Test L',
        sound: './sounds/funny/1.mp3',
      },
      {
        name: 'Test Z',
        sound: './sounds/funny/1.mp3',
      },
      {
        name: 'Test X',
        sound: './sounds/funny/1.mp3',
      },
      {
        name: 'Test C',
        sound: './sounds/funny/1.mp3',
      },
      {
        name: 'Test V',
        sound: './sounds/funny/1.mp3',
      },
      {
        name: 'Test B',
        sound: './sounds/funny/1.mp3',
      },
      {
        name: 'Test N',
        sound: './sounds/funny/1.mp3',
      },
      {
        name: 'Test M',
        sound: './sounds/funny/1.mp3',
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
        case 'q':
          document.getElementById('key_q')?.click()
          return
        case 'w':
          document.getElementById('key_w')?.click()
          return
        case 'e':
          document.getElementById('key_e')?.click()
          return
        case 'r':
          document.getElementById('key_r')?.click()
          return
        case 't':
          document.getElementById('key_t')?.click()
          return
        case 'y':
          document.getElementById('key_y')?.click()
          return
        case 'u':
          document.getElementById('key_u')?.click()
          return
        case 'i':
          document.getElementById('key_i')?.click()
          return
        case 'o':
          document.getElementById('key_o')?.click()
          return
        case 'p':
          document.getElementById('key_p')?.click()
          return
        case 'a':
          document.getElementById('key_a')?.click()
          return
        case 's':
          document.getElementById('key_s')?.click()
          return
        case 'd':
          document.getElementById('key_d')?.click()
          return
        case 'f':
          document.getElementById('key_f')?.click()
          return
        case 'g':
          document.getElementById('key_g')?.click()
          return
        case 'h':
          document.getElementById('key_h')?.click()
          return
        case 'j':
          document.getElementById('key_j')?.click()
          return
        case 'k':
          document.getElementById('key_k')?.click()
          return
        case 'l':
          document.getElementById('key_l')?.click()
          return
        case 'z':
          document.getElementById('key_z')?.click()
          return
        case 'x':
          document.getElementById('key_x')?.click()
          return
        case 'c':
          document.getElementById('key_c')?.click()
          return
        case 'v':
          document.getElementById('key_v')?.click()
          return
        case 'b':
          document.getElementById('key_b')?.click()
          return
        case 'n':
          document.getElementById('key_n')?.click()
          return
        case 'm':
          document.getElementById('key_m')?.click()
          return
        default:
          return
      }
    })
  }, [activeItems, activeTab])

  return (
    <div className="min-h-screen text-center bg-black">
      <Head>
        <title>Doussy Sound Board</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-3 mb-3 font-bold bg-green-500">
        <div>Doussy Sound Board</div>
      </div>

      <div className="flex justify-between mb-3">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className="p-2 text-xl font-bold cursor-pointer bg-amber-500"
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
            className="flex flex-col m-1 border rounded-lg cursor-pointer bg-cyan-500"
            onClick={() => {
              new Audio(item.sound).play()
            }}
          >
            <div className="p-4 font-bold">{item.name}</div>
            <div className="bg-gray-200">{index === 9 ? 0 : index + 1}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        {activeItems.slice(10, 20).map((item, index) => (
          <div
            id={`key_${keyboardRow1[index]}`}
            key={item.name + item.sound}
            className="flex flex-col m-1 border rounded-lg cursor-pointer bg-cyan-500"
            onClick={() => {
              new Audio(item.sound).play()
            }}
          >
            <div className="p-4 font-bold">{item.name}</div>
            <div className="capitalize bg-gray-200">{keyboardRow1[index]}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        {activeItems.slice(20, 29).map((item, index) => (
          <div
            id={`key_${keyboardRow2[index]}`}
            key={item.name + item.sound}
            className="flex flex-col m-1 border rounded-lg cursor-pointer bg-cyan-500"
            onClick={() => {
              new Audio(item.sound).play()
            }}
          >
            <div className="p-4 font-bold">{item.name}</div>
            <div className="capitalize bg-gray-200">{keyboardRow2[index]}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        {activeItems.slice(29, 36).map((item, index) => (
          <div
            id={`key_${keyboardRow3[index]}`}
            key={item.name + item.sound}
            className="flex flex-col m-1 border rounded-lg cursor-pointer bg-cyan-500"
            onClick={() => {
              new Audio(item.sound).play()
            }}
          >
            <div className="p-4 font-bold">{item.name}</div>
            <div className="capitalize bg-gray-200">{keyboardRow3[index]}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
