class Styles {
	// TODO container style set in twi func - fix this !!
	
	setItemStylesBeforeGridCreated(items, width, container, containerMaxWidth) {
		container.style.maxWidth = containerMaxWidth + "px";
		for (let e = 0; e < items.length; e++) {
			items[e].style.width = width + "px"; // item width
			items[e].style.position = "absolute"; // item position
            items[e].style.transition = "all ease .5s"; // animation
        }
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
