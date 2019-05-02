import { IndexHeightItem, Params, GridType } from '../types'
import Grid from '../grid/Grid'
import Utils from '../utils/Utils'
import Styles from '../styles/Styles'

// TODO: Horizontal grid
// TODO: new properties: fullSizeOfContainer, sideMargin, bottomMargin
// TODO: TESTS

// TODO FLOW CONVERT CODE INTO TYPESCRIPT

class Main {
	constructor (params: Params) {
		const items = document.querySelectorAll('.chocolate-item');
		const gridContainer = document.querySelector('.chocolate-container');
		const {
			columnWidth,
			columnMargin,
			containerMaxWidth,
			transitionDuration,
			transitionTimingFunction
		} = params;
		
		Styles.setItemStylesBeforeGridCreated(
			items,
			columnWidth,
			gridContainer,
			containerMaxWidth,
			transitionDuration,
			transitionTimingFunction
		);
		
		const runSetSize = this.setSize(
			containerMaxWidth,
			columnWidth,
			columnMargin,
			items,
			gridContainer
		);
		
		runSetSize();
		
		window.addEventListener('resize', runSetSize);
	}
	
	setSize (containerMaxWidth: number,
			 columnWidth: number,
			 columnMargin: number,
			 items: Array<HTMLElement>,
			 gridContainer: HTMLElement) {
		return function () {
			const containerWidth = window.innerWidth <= containerMaxWidth
				? window.innerWidth
				: containerMaxWidth;
			
			const params = Utils.formatData(
				containerWidth,
				columnWidth,
				columnMargin,
				items
			);
			
			new Grid(
				params,
				items,
				gridContainer
			);
		}
	}
}

export default Main;
