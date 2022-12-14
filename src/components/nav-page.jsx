function NavPage(props){
    return (
        <header className="barra_fija">
            <p>Page {props.page}</p>
            <button className="boton_page" onClick={()=>{
                if(props.page == 1){
                    props.setPage(props.page)
                }
                else{
                    props.setPage(props.page -1)
                }
            }}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALdJREFUSEvtlMENwjAQBGc7oBMoAUqgElogHdEBlEA6oYMgS0GyjJNbgvNLno41c7f2Waz8aWU+myBM2I5oGIYdcJHUhdRsgyUY4XfgAHSSrq4kFBTwHjhKejUR/AtPRUx20AI+KWgFrwoKuBs1kqppfC2Oggewt+kpa1eQoIXkCZx+uTl5YdEhfzpZLJmdgxaduIO2uJNQUDmTs6SbewEsQSZJz4QNn51kt8Jon91BBJr6vwnC5N7IPEoZlO97kgAAAABJRU5ErkJggg=="/>
            </button>
            <button className="boton_page" onClick={()=>{
                props.setPage(props.page + 1)
            }}>
                Page {props.page + 1}
            </button>
            
            <button className="boton_page" onClick={()=>{
                props.setPage(props.page + 2)
            }}>
                Page {props.page + 2}
            </button>
            <button className="boton_page" onClick={()=>{
                props.setPage(props.page + 3)
            }}>
                Page {props.page + 3}
            </button>
            <button className="boton_page" onClick={()=>{
                props.setPage(props.page + 1)
            }}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKpJREFUSEvt1MERgjAUhOH/dUAnWgJ0YEdSgp1YgpQAndjBOnE4MAyabJQbnDP7zdu8EOz8xc75HEC2YbsiST1wi4hnNh28O5jDr8AIdCWINYGkBhiAUyliAakSF7EBF6kCHOQjIEklW7I4s3nx/wQmoF1v1q8VPYAzsBmepqsC5k3KhlcBTrgNuOE1wAW4f+t8vXn2HUhKyFDyH7InMN/F+7g9gYscQLaxF0YRUhkf9XfKAAAAAElFTkSuQmCC"/>
            </button>
        </header>
    )
}
export default NavPage;