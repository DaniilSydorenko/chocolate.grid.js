class Styles {

	/**
	 * Good way to set styles on items before grid is ready
	 * @param items
	 * @param itemWidth
	 * @param container
	 * @param containerMaxWidth
	 */
	setItemStylesBeforeGridCreated(items, itemWidth, container, containerMaxWidth) {
		container.style.maxWidth = containerMaxWidth + "px";
		for (let e = 0; e < items.length; e++) {
			items[e].style.width = itemWidth + "px"; // item width
			items[e].style.position = "absolute"; // item position
            items[e].style.transition = "all ease .5s"; // animation
        }
	}

    /**
	 * Set width, height and margin of container
     * @param container
     * @param height
     * @param width
     */
    setContainerStyles(container, height, width) {
        container.style.position = 'relative';
        container.style.marginLeft = 'auto'; // depends of size, if not 100%
        container.style.marginRight = 'auto'; // depends of size, if not 100%
        container.style.height = `${height}px`;
        container.style.width = `${width}px`;
    }

    /**
	 * Set item of grid styles
     * @param item
     * @param top
     * @param left
     */
    setItemStyles(item, top, left) {
        item.style.top = `${top}px`;
        item.style.left = `${left}px`;
	}
}

export default new Styles();
