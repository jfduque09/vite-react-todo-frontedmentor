
import CrossIcon from './components/icons/CrossIcon';
import MoonIcon from './components/icons/MoonIcon';

const App = () => { 
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')]
     bg-no-repeat bg-contain bg-gray-300 min-h-screen">
      {/* Header */}
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl 
          font-semibold tracking-[0.3em]">
            Todo
          </h1>
          <button>
            <MoonIcon className="fill-red-400"/>
          </button>
        </div>       
      </header>    

      <main className="container mx-auto px-4 mt-8">

        {/*TodoCreate*/}

        <form action="" className="flex gap-4 items-center 
        bg-white rounded-md 
        overflow-hidden 
        py-4 px-4">
          <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
          <input 
          className="w-full outline-none text-gray-400"
          type="text" placeholder="Create a new todo..."/>
        </form>
        
        {/*TodoList (TodoItem) TodoUpdate & TodoDelete*/}

        <div className="bg-white rounded-t-md [&>article]:px-4 mt-8">
          <article className="flex gap-4 py-4 border-b border-b-gray-400">
            <button className="rounded-full border-2 flex-none 
            w-5 h-5 inline-block"></button>
            <p className="grow text-gray-600">
              Complete online JavaScript course in bluuweb
            </p>
            <button className='flex-none'>
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 py-4 flex-none
          border-b border-b-gray-400">
            <button className="rounded-full border-2 w-5 h-5 inline-block"></button>
            <p className="grow text-gray-600">Complete online JavaScript course in bluuweb</p>
            <button className="flex-none"><CrossIcon /></button>
          </article>
          <article className="flex gap-4 py-4 
          border-b border-b-gray-400 flex-none">
            <button className="rounded-full border-2 w-5 h-5 inline-block"></button>
            <p className="grow text-gray-600">Complete online JavaScript course in bluuweb</p>
            <button className="flex-none"><CrossIcon /></button>
          </article>         
        </div> 
        
        {/* TodoComputed */}
        
        <section className='flex py-4 px-4 bg-white rounded-b-md
         justify-between'>
          <span className=' text-gray-400 '>5 item left</span>
          <button className=' text-gray-400 '>Clear Completed</button>
        </section>  
        
        {/* TodoFilter */}
        <section className="container mx-auto mt-8 ">
        <div className='flex gap-4 justify-center rounded-md bg-white p-4'>
          <button className='hover:text-blue-600'>All</button>
          <button className='hover:text-blue-600'>Active</button>
          <button className='hover:text-blue-600'>Completed</button>
        </div>        
      </section>      
      </main>

      <footer className="container mt-8 text-center">Drag and Drop</footer>
    </div>
  );  
 }

export default App;