import { TimelineLite, Quart } from "gsap";

export default {
  show(target, cb = () => {}) {
    let tl = new TimelineLite();

    // Original state
    tl.to(target, 0, {
      transformOrigin: 'left',
      scaleX: 0,
    });

    tl.to(target, 1, {
      scaleX: 1,
      ease: Quart.easeOut,
      onComplete() {
        cb();
      }
    });
  },
  hide(target) {
    let tl = new TimelineLite();

    // Original state
    tl.to(target, 0, {
      transformOrigin: 'right',
      scaleX: 0,
    });

    tl.to(target, 1, {
      scaleX: 0,
      ease: Quart.easeOut
    });
  }
};