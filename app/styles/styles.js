class Styles {
	constructor() {

	}

	setStyleToItems(grid, elements, container, containerFullWidth) {

		for (var col in grid) {

			if (grid.hasOwnProperty(col)) {

				let column = grid[col];
				var sum = 0;

				for (let e = 0; e < column.length; e++) {
					var element = column[e];

					for (let index in element) {

						if (element.hasOwnProperty(index)) {
							//console.log("Column: " + col + " Index: " + index + " and value: " + element[index] + " SUM: " + sum);

							//let gridColumn = parseInt(col) + 1;
							//let sumWithMargin = sum + (10 * e);

							//elements[index].style.left = (270 * col) + "px";
							//elements[index].style.top = (sum + (20 * e)) + "px";
							elements[index].style.transform = "matrix(1, 0, 0, 1, " + (270 * col) + ", " + (sum + (20 * e)) + ")"; // transform: matrix(1, 0, 0, 1, 540, 0);
							elements[index].classList.add("col-" + col);
							//elements[index].innerHTML = "<p>Height: " + element[index] + "<br>" + " Sum: " + sum + "</p>";
							//elements[index].style.transform = "translate(" + (100 * col) + "%" + "," + (sum + (10*e))+ "px)";

							sum += element[index];
						}
					}
				}
			}
		}

		container.style.height = sum + 'px';
		container.style.width = containerFullWidth + 'px';
	}
}

module.exports = new Styles();
