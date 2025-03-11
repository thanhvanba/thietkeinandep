import MainRouter from "./routes"
import ResponsiveMenu from "./components/ResponsiveMenu"
import Admin from "./page/Admin"
import News from "./page/News"
import DetailNews from "./page/DetailNews"
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