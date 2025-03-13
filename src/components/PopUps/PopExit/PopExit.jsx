function PopExit({ isOpen, onClose }) {
  return (
    <div
      className="pop-exit"
      id="popExit"
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              <button className="pop-exit__exit-yes _hover01" id="exitYes">
                Да, выйти
              </button>
              <button
                className="pop-exit__exit-no _hover03"
                type="button"
                onClick={onClose}
              >
                Нет, остаться
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopExit;
