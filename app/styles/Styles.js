class Styles {
	setItemStylesBeforeGridCreated(items, width, container, containerMaxWidth, transitionDuration = 0.5, transitionTimingFunction = 'ease') {
		container.style.maxWidth = `${containerMaxWidth}px`;
		items.forEach((item, i) => {
			item.style.width = `${width}px`;
			item.style.position = "absolute";
			item.style.transition = `all ${transitionTimingFunction} ${transitionDuration}s`;
			item.querySelector('.text').textContent = `${i}`; // TEMPORARY
		});
	}
	
    setContainerStyles(container, height, width) {
        container.style.position = 'relative';
        container.style.marginLeft = 'auto'; // depends of size, if not 100%
        container.style.marginRight = 'auto'; // depends of size, if not 100%
        container.style.height = `${height}px`;
        container.style.width = `${width}px`;
    }
	
    setItemStyles(item, top, left) {
        item.style.top = `${top}px`;
        item.style.left = `${left}px`;
	}
}

export default new Styles();
