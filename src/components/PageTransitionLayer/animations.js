import { TimelineLite, Quart } from "gsap";

export default {
  /**
   * Make Layer appear
   * @param {*} target
   * @param {*} cb
   */
  show(target, cb = () => {}) {
    let tl = new TimelineLite();

    // Original state
    tl.to(target, 0, {
      transformOrigin: 'left',
      scaleX: 0,
    });

    // Transition
    tl.to(target, 0.7, {
      scaleX: 1,
      ease: Quart.easeOut,
      onComplete() {
        cb();
      }
    });
  },
  /**
   * Make Layer disappear
   * @param {*} target
   * @param {*} cb
   */
  hide(target, cb) {
    let tl = new TimelineLite();

    // Original state
    tl.to(target, 0, {
      transformOrigin: 'right',
      scaleX: 1,
    });

    // Transition
    tl.to(target, 0.7, {
      scaleX: 0,
      ease: Quart.easeOut,
      onComplete()  {
        cb();
      }
    });
  }
};