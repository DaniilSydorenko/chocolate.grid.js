import Grid from '../grid/Grid'
import Helper from '../helper/Helper'

// TODO new properties: animationSpeed, full size of container

class Main {
    runResize (items, container, options) {
        function setSize() {
            const containerWidth = window.innerWidth <= options.containerMaxWidth
                ? window.innerWidth
                : options.containerMaxWidth;

            new Grid(
                Helper.incomingData(containerWidth - (options.columnWidth / 2), options, items),
                items,
                container
            )
        }

        setSize();

        // Event Observer
        window.addEventListener('resize', setSize);
    }

}

export default new Main()
