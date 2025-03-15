

function PopUserSet({setIsOpenPopUser,setIsOpenPopExit,isOpenPopUser}) {


    return (
        <div
              className="header__pop-user-set pop-user-set"
              id="user-set-target"
              style={{ display: isOpenPopUser ? "block" : "none" }}
            >
     <div>
        <p className="pop-user-set__name">Ivan Ivanov</p>
                        <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                        <div className="pop-user-set__theme">
                            <p>Темная тема</p>
                            <input type="checkbox" className="checkbox" name="checkbox"/>
                        </div>
                        <button
                type="button"
                onClick={() => {
                  setIsOpenPopUser(false);
                  setIsOpenPopExit(true);
                }}
                className="_hover03"
              >Выйти
                            </button>
     </div>
     </div>
    );
    
  }
  
  export default PopUserSet;