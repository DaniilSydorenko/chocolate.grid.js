import { Observable } from 'rxjs/Rx'
import Grid from '../grid/Grid'
import Helper from '../helper/Helper'

// TODO new properties: animationSpeed, (inline styles ???),
// TODO ensure if some param is empty
// TODO full size of container

class Main {
    runResize (items, container, options) {
        const setSize = () => {
            if (window.innerWidth <= options.containerMaxWidth) {
                new Grid(
                    Helper.incomingData(window.innerWidth - (options.columnWidth / 2), options, items),
                    items,
                    container
                )
            } else {
                new Grid(
                    Helper.incomingData(options.containerMaxWidth - (options.columnWidth / 2), options, items),
                    items,
                    container
                )
            }

            // for (let ai = 0; ai < items.length; ai++) {
            //     items[ai].style.opacity = 1 // fade in effect
            // }
        }

        // Event Observer
        Observable.fromEvent(window, 'resize')
            .map(window => window.target.innerWidth)
            .startWith(window.innerWidth)
            .do(() => { setSize(); })
            .subscribe();
    }

}

export default new Main()
