class Utils {
    static addClass(el, className) {
        if (el.classList)
            el.classList.add(className);
        else
            el.className += ' ' + className;
    }
    static removeClass(el, className) {
        if (el.classList)
            el.classList.remove(className);
        else
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');

    }
	static addOverlayDiv(modal) {
		let overlay = document.createElement("DIV");
		overlay.setAttribute('id', 'md-overlay');
		Utils.addClass(overlay, 'md-overlay');
		document.body.appendChild(overlay);
        overlay.addEventListener("click", () => {
            modal.close();
        });
	}
}
