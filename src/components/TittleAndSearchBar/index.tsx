import { TittleSearchBar } from "./style";
import { BiSearchAlt } from 'react-icons/bi';

function TittleAndSearchBar() {
    return(
        <TittleSearchBar>
            <div className="innerDiv">
                <div>
                    <h1>Contatos Vinculados:</h1>
                </div>
                <div className="searchBar">
                    <div>
                        <input className="search" type="text" placeholder="Pesquisar Contato..."/>
                        <BiSearchAlt className="icon"/>
                    </div>
                </div>
            </div>
        </TittleSearchBar>
    )
}

export default TittleAndSearchBar; 