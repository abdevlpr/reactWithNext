
const Overview = () =>{

    const deg = {
        lt:20,ltTitle:"Mathematics",
        rt:4,rtTitle:"Biology",
        lb:1,lbTitle:"Physics",
        rb:5,rbTitle:"Chemistry",
        cent:16,centTitle:"Avg Performance"
    }

    const overviewElemList = [
        {img:"/icons/overview/folder.svg",number:20,title:"Completed Courses"},
        {img:"/icons/overview/calendar.svg",number:12,title:"Upcoming Courses"},
        {img:"/icons/overview/badge.svg",number:8,title:"Certificated Earned"},
    ]

    return(
        <div>
            <OverviewCard title="Weekly Test Overview" List={deg} />
            <Attempts title="Total test attempted" moduleNbr={8} />
            <OverviewElements list={overviewElemList}/>
         </div>
    )

}
export const OverviewCard = ({title,List}) =>{
    return(
        <div class="overview card comp t-align-c">
        <h2>{title}</h2>
        <div class="overview-container">
            <div class="bx top-left">
                <span class="percentage">
                    {List.lt}%
                </span>
                <span class="ove-title">
                    {List.ltTitle}
                </span>
            </div>
            <div class="bx top-right">
                <span class="percentage">
                    {List.rt}%
                </span>
                <span class="ove-title">
                    {List.rtTitle}
                </span>
            </div>
            <div class="bx center">
                <div class="svg">
                    <svg width="254" height="259" viewBox="0 0 254 259" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                        <path d="M206 129.5C206 145.907 200.584 161.855 190.593 174.868C180.601 187.882 166.594 197.234 150.744 201.472L147.828 190.565C161.276 186.97 173.161 179.035 181.638 167.994C190.115 156.952 194.711 143.421 194.711 129.5H206Z" fill="#FFAC60"/>
                        </g>
                        <g filter="url(#filter1_d)">
                        <path d="M58.7578 113.412C56.0752 125.542 56.4683 138.149 59.9012 150.088C63.334 162.026 69.6978 172.917 78.4133 181.769C87.1288 190.621 97.9194 197.153 109.803 200.771C121.687 204.388 134.287 204.977 146.457 202.483L144.19 191.424C133.865 193.54 123.174 193.04 113.091 189.971C103.008 186.901 93.8526 181.359 86.4578 173.848C79.063 166.338 73.6636 157.098 70.7509 146.968C67.8383 136.838 67.5048 126.141 69.7808 115.85L58.7578 113.412Z" fill="#7B7EE2"/>
                        </g>
                        <g filter="url(#filter2_d)">
                        <path d="M59.7152 109.57C64.2552 93.2174 74.2427 78.9047 88.0248 69.0008C101.807 59.0968 118.557 54.1954 135.504 55.1077L134.898 66.3808C120.519 65.6068 106.306 69.7654 94.6129 78.1685C82.9192 86.5717 74.4452 98.7155 70.5931 112.59L59.7152 109.57Z" fill="#FC6745"/>
                        </g>
                        <g filter="url(#filter3_d)">
                        <path d="M205.879 125.248C204.876 107.703 197.703 91.0774 185.627 78.3094C173.552 65.5414 157.352 57.4531 139.89 55.474L138.619 66.6915C153.435 68.3708 167.18 75.2334 177.425 86.0666C187.671 96.8998 193.757 111.006 194.608 125.892L205.879 125.248Z" fill="#41C096"/>
                        </g>
                        <defs>
                        <filter id="filter0_d" x="113.828" y="111.5" width="126.172" height="139.972" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="16"/>
                        <feGaussianBlur stdDeviation="17"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.704193 0 0 0 0 0.433333 0 0 0 0.64 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                        <filter id="filter1_d" x="6" y="86.4122" width="171.457" height="172.588" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dx="-10" dy="14"/>
                        <feGaussianBlur stdDeviation="20.5"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.482353 0 0 0 0 0.494118 0 0 0 0 0.886275 0 0 0 0.58 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                        <filter id="filter2_d" x="0.715332" y="0" width="167.789" height="149.591" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dx="-13" dy="-9"/>
                        <feGaussianBlur stdDeviation="23"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.980392 0 0 0 0 0.407843 0 0 0 0 0.270588 0 0 0 0.69 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                        <filter id="filter3_d" x="110.619" y="9.474" width="143.26" height="146.418" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dx="10" dy="-8"/>
                        <feGaussianBlur stdDeviation="19"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.254902 0 0 0 0 0.752941 0 0 0 0 0.588235 0 0 0 0.42 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                        </defs>
                        </svg>
                </div>
                <span class="percentage">
                    {List.cent}%
                </span>
                <span class="ove-title">
                    {List.centTitle}
                </span>
            </div>
            <div class="bx bot-left">
                <span class="percentage">
                    {List.lb}%
                </span>
                <span class="ove-title">
                    {List.lbTitle}
                </span>
            </div>
            <div class="bx bot-right">
                <span class="percentage">
                    {List.rb}%
                </span>
                <span class="ove-title">
                    {List.rbTitle}
                </span>
            </div>
        </div>
    </div>
    )
}
export const Attempts = ({title,moduleNbr}) =>{
    return(
        <div class="attempts card comp">
        <h2>{title}</h2>
        <div class="bot flex j-sb">
            <span>{moduleNbr} test module</span>
            <div class="in t-blue flex">
                <span>Show Details</span>
                <img src="/icons/arrow-down.svg" alt=""/>
            </div>
        </div>
    </div>
    )
}
export const OverviewElements = ({list})=>{
    const Elements = list.map((e,ind)=>{
        return(
            <div class="overviwerItem card" key={ind}>
                <div class="icon">
                    <img src={e.img} alt=""/>
                </div>
                <h3>{e.number}</h3>
                <p>{e.title}</p>
            </div>
        )
    })

    return(
        <div class="overviewElements t-align-c comp flex j-sb">
            {Elements}
        </div>
    )
}



export default Overview