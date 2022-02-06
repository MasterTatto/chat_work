import './App.css';
import Chats from "./components/chats";
import ChatMessage from "./components/chatMessages";
import Routers from "./routes/routes";
import Header from "./components/header";

function App() {


    return (

        <>
            <Header/>
            <Routers/>
        </>

    );
}

export default App;
