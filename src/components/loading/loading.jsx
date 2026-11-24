
export default function Loading({text = "Loading..."}){

    return(
        <div className="laoding-container">
            <div>
                <div className="spinner">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )

}