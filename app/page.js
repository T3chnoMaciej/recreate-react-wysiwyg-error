import Image from 'next/image'
import NotesComponent from './components/NotesComponent'

export default function Home() {
  return (
    <main>
      <div className='w-full flex flex-col items-center justify-center'>
        <h1 className='mt-4'>An example project</h1>
        <p>Demonstrating a bug descripted in <a href="https://github.com/megahertz/react-simple-wysiwyg/issues/31" className='underline' target='_blank'>issue #31</a></p>
        <p className='mt-2'>As you can see, typing works fine, so do the styles of text. However, the numbered and bullet lists don't work. </p>
        <p className='mb-2'>Tested on macOS 12.6.8, on browsers:</p>
        <ul className='text-center'>
          <li>Google Chrome	119.0.6045.199</li>
          <li>Firefox 120.0</li>
          <li>Safari 15.6.1</li>
        </ul>
        <div className='w-1/2 my-4'>
          <NotesComponent />
        </div>
        <p>
          Let me know how things look on Windows or maybe pure React, wihtout Next.js
          <br></br>
          Cheers,
          M
        </p>
      </div>
    </main>
  )
}
