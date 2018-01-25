import { TweenLite, Quart } from "gsap";

export default {
  /**
   * Make Layer appear
   * @param {*} target
   * @param {*} cb
   */
  show(target, cb = () => {}) {
    TweenLite.fromTo(target, 0.5, {
      transformOrigin: 'left',
      scaleX: 0,
    }, {
      scaleX: 1,
      ease: Quart.easeInOut,
      onComplete() {
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
    TweenLite.fromTo(target, 0.5, {
      transformOrigin: 'right',
      scaleX: 1,
    }, {
      scaleX: 0,
      ease: Quart.easeInOut,
      onComplete() {
        cb();
      }
    });
  }
};