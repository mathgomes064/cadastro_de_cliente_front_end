import TittleAndSearchBar from "../../components/TittleAndSearchBar"
import UserInfo from "../../components/UserInfo"
import Header from "../../components/Header"
import Cards from "../../components/Cards"


function Dashboard() {
    return(
      <>
        <Header/>
        <UserInfo/>
        <TittleAndSearchBar/>
        <Cards/>
      </>
    )
}

export default Dashboard