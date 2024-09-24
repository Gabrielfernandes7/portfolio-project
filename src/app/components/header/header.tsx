import Image from 'next/image'

import "./header.scss"

export function Header(){
    return(
        <div className="header">
          <div>
            <h1>My name is Gabriel Fernandes!</h1>
            <h2>Software Developer</h2>
          </div>
          <Image
            src="/me.jpeg"
            alt="Vercel Logo"
            width={325}
            height={310}
            priority
          />
        </div>
    )
}