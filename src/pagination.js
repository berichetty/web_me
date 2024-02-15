

function Pagination({total,recor,update,next,prev}){
    let n= Math.ceil (total/recor)
    let page=[]
    for(let i=1;i<=n; i++){
        console.log(i)
        page.push(i)
    }
    console.log(page)
    return(
        <div className="page">
               <ul className="pagination">

               <li className="page-item">
                        <a href="#"  className="page-link" onClick={prev}>prev</a>
                    </li>

                {page.map((item)=>(
                    <li className="page-item">
                        <a href="#" onClick={()=>{update(item)}} className="page-link">{item}</a>
                    </li>
                ))}

                <li className="page-item">
                        <a href="#"  className="page-link" onClick={next}>next</a>
                    </li>

               </ul>
        </div>
    )
}
export default Pagination;