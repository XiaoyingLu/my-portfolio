import Layout from '../components/layout'
import About from '../components/about'
import Home from '../components/home'
import Skills from '../components/skills'

const Index = () => {
  return (
    <Layout>
      <div className='container text-gray-600 body-font'>
        <Home />
        <About />
        <Skills />
      </div>
    </Layout>
  )
}

export default Index
