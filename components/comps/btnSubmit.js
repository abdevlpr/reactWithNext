export const BtnSubmit = ({btnTxt}) => {
    return(
        <div>
        {/* TODO: changing the log-submit for name as it cause problem when multiple forms are present */}
        <label htmlFor="log-submit" className="btn-next btn-interact">
                    <span>{btnTxt}</span>
                    <div className="icon flex j-c">
                        <img src="/icons/arrow-right.svg" alt=""/>
                    </div>
                </label>
                <input type="submit" id="log-submit" />
        </div>
    )
}

export default BtnSubmit