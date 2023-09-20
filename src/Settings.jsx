
const Settings = ( { showSettings } ) => {

    return(
<div className={`${!showSettings && 'hidden'} w-[300px] h-screen bg-neutral-300 absolute top-20 right-0 drop-shadow-md`}>
        <h2 className="text-center p-4">Settings</h2>
</div>
    )
}

export default Settings;