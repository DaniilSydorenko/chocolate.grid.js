import Grid from '../grid/Grid'
import Utils from '../utils/Utils'
import Styles from '../styles/Styles'

// TODO new properties: animationSpeed, fullSizeOfContainer, innerLeftRightMargin, innerBottomMargin
// TODO: TESTS

class Main {
	constructor(params) {
		const options = Utils.guard(params);
		const items = document.querySelectorAll(".js-item");
		const gridContainer = document.querySelector('.js-chocolate');
		
		Styles.setItemStylesBeforeGridCreated(items, options.columnWidth, gridContainer, options.containerMaxWidth);
		this.execGridBuilder(items, gridContainer, options);
	}
	
	execGridBuilder (items, container, options) {
		function setSize () {
			const containerWidth = window.innerWidth <= options.containerMaxWidth
				? window.innerWidth
				: options.containerMaxWidth
			
			new Grid(
				Utils.formatData(containerWidth - (options.columnWidth / 2), options, items),
				items,
				container
			)
		}
		
		setSize()
		
		window.addEventListener('resize', setSize)
	}
}

export default Main
