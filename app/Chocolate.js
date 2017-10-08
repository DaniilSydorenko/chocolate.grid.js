import Styles from './styles/Styles';
import Main from './main/Main';
import Helper from './helper/Helper';

class Chocolate {
	constructor(params) {
		const options = Helper.parametersChecker(params);
		const items = document.querySelectorAll(".js-item");
		const gridContainer = document.querySelector('.js-chocolate');

        // *********** Set styles *********** //
        Styles.setItemStylesBeforeGridCreated(items, options.columnWidth, gridContainer, options.containerMaxWidth);

		// *********** Resize *********** //
		Main.runResize(items, gridContainer, options);
	}
}

export default Chocolate;
