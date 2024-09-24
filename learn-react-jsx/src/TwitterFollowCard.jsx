export function TwitterFollowCard (userName, name, isFollowing){
    const imgSrc = `https://unavatar.io/${userName}`
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar' 
                src={imgSrc} 
                alt="Oso" />
                <div className='tw-followCard-div'>
                    <strong className='tw-followCard-info'>{name}</strong>
                    <span className='tw-followCard-infoUserName'> @{}</span>
                </div>
            </header>

            <aside >
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
    )
}