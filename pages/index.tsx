import Head from 'next/head'
import { useEffect, useState } from 'react'

let keyboardRow1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
let keyboardRow2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
let keyboardRow3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm']

let tabs = [
  {
    name: 'Driaan',
    items: [
      {
        name: 'Mense soos jy',
        sound: './sounds/driaan/1.mp3',
      },
      {
        name: 'Pateties',
        sound: './sounds/driaan/2.mp3',
      },
      {
        name: 'Hoe de fok',
        sound: './sounds/driaan/3.mp3',
      },
      {
        name: 'In watter wereld lewe jy',
        sound: './sounds/driaan/4.mp3',
      },
      {
        name: 'Geld',
        sound: './sounds/driaan/5.mp3',
      },
      {
        name: 'Raakgery!',
        sound: './sounds/driaan/6.mp3',
      },
      {
        name: 'Verbaas my',
        sound: './sounds/driaan/7.mp3',
      },
      {
        name: 'Ook al raakgery',
        sound: './sounds/driaan/8.mp3',
      },
      {
        name: 'Fok!',
        sound: './sounds/driaan/9.mp3',
      },
      {
        name: 'Kak en drama',
        sound: './sounds/driaan/10.mp3',
      },
      {
        name: 'My inkomste',
        sound: './sounds/driaan/11.mp3',
      },
      {
        name: 'Toelaat',
        sound: './sounds/driaan/12.mp3',
      },
      {
        name: 'Befok gemaak',
        sound: './sounds/driaan/13.mp3',
      },
      {
        name: 'dag opfok - lank',
        sound: './sounds/driaan/14.mp3',
      },
      {
        name: 'dag opfok',
        sound: './sounds/driaan/15.mp3',
      },
      {
        name: 'pateties 2',
        sound: './sounds/driaan/16.mp3',
      },
      {
        name: 'Fok weet',
        sound: './sounds/driaan/17.mp3',
      },
      {
        name: 'Regte police clearance',
        sound: './sounds/driaan/18.mp3',
      },
      {
        name: 'Selfde storie',
        sound: './sounds/driaan/19.mp3',
      },
      {
        name: 'Nie n scammer nie',
        sound: './sounds/driaan/20.mp3',
      },
      {
        name: 'My fok weet',
        sound: './sounds/driaan/21.mp3',
      },
      {
        name: 'Het nie geld',
        sound: './sounds/driaan/22.mp3',
      },
      {
        name: 'My donner',
        sound: './sounds/driaan/23.mp3',
      },
      {
        name: 'Fok weet 2',
        sound: './sounds/driaan/24.mp3',
      },
      {
        name: 'Fokken betaal',
        sound: './sounds/driaan/25.mp3',
      },
      {
        name: 'Probleem',
        sound: './sounds/driaan/26.mp3',
      },
      {
        name: 'Lekker aand',
        sound: './sounds/driaan/27.mp3',
      },
    ],
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState(tabs[0].name)
  const [activeItems, setActiveItems] = useState(tabs[0].items)

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
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

      <div className="flex justify-center pt-10">
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
