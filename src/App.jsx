import MainRouter from "./routes"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div>
      <Header/>
      <MainRouter />
      <Footer/>
    </div>
  )
}