import Maindish from "../MainDish/Maindish";
import Sidebar from "../Sidebar/Sidebar";

function MainPage() {
    return ( 

        <div className="relative" >
        <Sidebar/>
        <Maindish/>
        </div>
     );
}

export default MainPage;