import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard.jsx'
const users = [
    {
        userName: 'midudev',
        name:'Miguel Duran',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name:'Miguel Duran',
        isFollowing: false
    },
    {
        userName: 'unknow',
        name:'idk',
        isFollowing: true
    },  
    {
        userName: 'juanitojuan',
        name:'Amigo de las gallinas',
        isFollowing: false
    },
]
export function App (){
    return(
        <section className="App">
            {
            users.map(({userName,name,isFollowing}) => (
                <TwitterFollowCard
                key={userName}
                userName={userName}
                isFollowing={isFollowing}>
                    {name}
                </TwitterFollowCard>
            )
            )
            }
        </section>
    )
}