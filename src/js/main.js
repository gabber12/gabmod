class Modal {
    constructor(options) {
        this.options = options;
        this.root = document.getElementById(this.options['id']);
        this.visible = true;
        this.close();
        Utils.addOverlayDiv(this);
        this.addCloseListener();
		window.modal = this;
    }

    isVisible() {
        return this.visible;
    }

    toggle() {
		if (this.visible) this.close();
		else this.show();
    }

    addCloseListener() {
        var that = this;
        console.log("Added Event Listener");
        document.addEventListener("keydown", (evt) => {
            evt = evt || window.event;
            if (evt.keyCode == 27) {
                that.close();
                console.log(that.close);
            }
        });
    }

    addBodyShadow() {
        Utils.addClass(document.body, 'model-open');
    }

    removeBodyShadow() {
        Utils.removeClass(document.body, 'model-open');
    }

    close() {
        console.log(this.visible);
        if (!this.visible) return;
        this.visible = false;
        this.root.style.visibility = 'hidden';
        Utils.removeClass(this.root, 'md-show');
        this.addBodyShadow();
    }
    show() {
        if (this.visible) return;
        this.visible = true;
        this.root.style.visibility = 'visible';
        Utils.addClass(this.root, 'md-show');
        this.removeBodyShadow();
    }
}
