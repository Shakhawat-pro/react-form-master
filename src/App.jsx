import './App.css'
import HookForm from './components/HookForm'
import RefForm from './components/RefForm'
import SimpleForm from './components/SimpleForm'
import StateFullForm from './components/StateFullForm'

function App() {

  return (
    <>
      <div className='flex justify-center gap-10'>
        <div>
          <h2 className='text-2xl font-bold'>Simple Form</h2>
          <SimpleForm></SimpleForm>
        </div>
        <div>
          <h2 className='text-2xl font-bold'>State Full Form</h2>
          <StateFullForm></StateFullForm>
        </div>
      </div>
      <div className='flex justify-center gap-10 mt-10'>
        <div>
          <h2>Ref Form</h2>
          <RefForm></RefForm>
        </div>
        <div>
          <h2>Hook Form</h2>
          <HookForm></HookForm>
        </div>
      </div>
    </>
  )
}

export default App
